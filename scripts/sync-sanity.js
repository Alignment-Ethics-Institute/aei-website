/**
 * Sync content from Sanity to Hugo
 *
 * Run with: node scripts/sync-sanity.js
 */

const {createClient} = require('@sanity/client')
const {toHTML} = require('@portabletext/to-html')
const fs = require('fs')
const path = require('path')

// Sanity client
const client = createClient({
  projectId: 'lwa6k4tu',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

// Convert Sanity image reference to URL
function imageUrl(ref) {
  if (!ref || !ref.asset || !ref.asset._ref) return ''
  // Parse the asset reference: image-{id}-{dimensions}-{format}
  const [, id, dimensions, format] = ref.asset._ref.split('-')
  return `https://cdn.sanity.io/images/lwa6k4tu/production/${id}-${dimensions}.${format}`
}

// Convert Portable Text to HTML
function portableTextToHtml(blocks) {
  if (!blocks || !Array.isArray(blocks)) return ''

  return toHTML(blocks, {
    components: {
      types: {
        image: ({value}) => {
          const url = imageUrl(value)
          if (!url) return '' // Skip images without assets
          const alt = value.alt || ''
          const caption = value.caption || ''
          return `
            <figure class="my-8">
              <img src="${url}" alt="${alt}" class="rounded-lg shadow-md w-full" loading="lazy">
              ${caption ? `<figcaption class="text-center text-sm text-gray-500 mt-2">${caption}</figcaption>` : ''}
            </figure>
          `
        },
      },
      marks: {
        link: ({children, value}) => {
          return `<a href="${value.href}" class="text-blue-light hover:text-blue-deep">${children}</a>`
        },
      },
      block: {
        blockquote: ({children}) => {
          return `<blockquote class="border-l-4 border-gold pl-4 my-6 italic text-gray-700">${children}</blockquote>`
        },
        h2: ({children}) => `<h2 class="text-2xl font-bold text-blue-deep mt-8 mb-4">${children}</h2>`,
        h3: ({children}) => `<h3 class="text-xl font-semibold text-blue-deep mt-6 mb-3">${children}</h3>`,
        h4: ({children}) => `<h4 class="text-lg font-semibold text-blue-deep mt-4 mb-2">${children}</h4>`,
        normal: ({children}) => `<p class="mb-4">${children}</p>`,
      },
    },
  })
}

// Create URL-friendly slug from title
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

async function syncPublications() {
  console.log('Fetching publications from Sanity...')

  const publications = await client.fetch(`
    *[_type == "publication"] | order(date desc) {
      _id,
      title,
      date,
      description,
      content,
      "link": link,
      status,
      featured
    }
  `)

  // Create publications directory for individual pages
  const pubDir = path.join(__dirname, '..', 'content', 'publications')
  if (!fs.existsSync(pubDir)) {
    fs.mkdirSync(pubDir, {recursive: true})
  }

  // Create _index.md for the publications list page
  const indexContent = `---
title: "Research & Publications"
description: "Research and publications from the Alignment Ethics Institute"
---

Explore our research on substrate-neutral ethics, alignment through reciprocity, and the governance of intelligent systems.
`
  fs.writeFileSync(path.join(pubDir, '_index.md'), indexContent)

  // Create individual publication pages
  for (const pub of publications) {
    if (pub.status === 'draft') continue // Skip drafts

    const slug = slugify(pub.title)
    const htmlContent = portableTextToHtml(pub.content)

    const frontMatter = `---
title: "${pub.title.replace(/"/g, '\\"')}"
date: ${pub.date}
description: "${(pub.description || '').replace(/"/g, '\\"')}"
status: "${pub.status || 'published'}"
featured: ${pub.featured || false}
${pub.link ? `externalLink: "${pub.link}"` : ''}
---

`

    const fileContent = frontMatter + htmlContent
    fs.writeFileSync(path.join(pubDir, `${slug}.html`), fileContent)
    console.log(`  Created: content/publications/${slug}.html`)
  }

  // Also update the data file for the list view
  const yamlContent = `# Auto-generated from Sanity CMS
# Do not edit directly - changes will be overwritten

publications:
${publications.filter(p => p.status !== 'draft').map(pub => `  - title: "${pub.title || ''}"
    date: "${pub.date || ''}"
    description: "${(pub.description || '').replace(/"/g, '\\"')}"
    link: "/publications/${slugify(pub.title)}/"
    status: "${pub.status || 'published'}"
    featured: ${pub.featured || false}`).join('\n')}
`

  fs.writeFileSync(path.join(__dirname, '..', 'data', 'publications.yaml'), yamlContent)
  console.log(`  Updated data/publications.yaml with ${publications.length} publications`)
}

async function syncTeamMembers() {
  console.log('Fetching team members from Sanity...')

  const members = await client.fetch(`
    *[_type == "teamMember"] | order(order asc) {
      name,
      role,
      boardType,
      bio,
      initials,
      "photo": photo.asset->url
    }
  `)

  const board = members.filter(m => m.boardType === 'board')
  const advisory = members.filter(m => m.boardType === 'advisory')

  const yamlContent = `# Auto-generated from Sanity CMS
# Do not edit directly - changes will be overwritten

board:
${board.length > 0 ? board.map(m => `  - name: "${m.name || ''}"
    role: "${m.role || ''}"
    initials: "${m.initials || ''}"
    bio: "${(m.bio || '').replace(/"/g, '\\"').replace(/\n/g, ' ')}"
    photo: "${m.photo || ''}"`).join('\n') : '  []'}

advisory:
${advisory.length > 0 ? advisory.map(m => `  - name: "${m.name || ''}"
    role: "${m.role || ''}"
    initials: "${m.initials || ''}"
    bio: "${(m.bio || '').replace(/"/g, '\\"').replace(/\n/g, ' ')}"
    photo: "${m.photo || ''}"`).join('\n') : '  []'}
`

  fs.writeFileSync(path.join(__dirname, '..', 'data', 'team.yaml'), yamlContent)
  console.log(`  Wrote ${members.length} team members to data/team.yaml`)
}

async function main() {
  console.log('Syncing content from Sanity to Hugo...\n')

  try {
    await syncPublications()
    await syncTeamMembers()
    console.log('\nSync complete!')
  } catch (error) {
    console.error('Sync failed:', error.message)
    console.error(error.stack)
    process.exit(1)
  }
}

main()
