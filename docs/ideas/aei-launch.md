# AEI Website Launch

## Problem

The Alignment Ethics Institute website is fully built (Hugo + Tailwind, 8 pages, GitHub Actions pipeline) but sitting locally with no content, no logo, placeholder test data, and has never been deployed. The GitHub repo at `Alignment-Ethics-Institute/aei-website` exists but is empty. The site needs to go live at alignmentethics.org as soon as possible.

## Solution

Populate team member data, add logo and favicon, replace placeholder publications with a "Watch This Space" message, push the codebase to the org repo, configure GitHub Pages deployment, and add a CNAME file for the custom domain.

## User Stories

- As a visitor, I want to see the founding team with their names, roles, and bios so I understand who is behind AEI
- As a visitor, I want to see a professional logo in the header and browser tab so the site feels legitimate
- As a visitor, I want to see a clear message on the Research page that publications are coming soon, rather than test data or emptiness
- As the site owner, I want the site deployed to alignmentethics.org via GitHub Pages so it is publicly accessible

## Scope

### In Scope

- Populate `data/team.yaml` with 3 board members and 1 advisory board member (initials, no photos)
- Add logo image to `static/images/logo.png`
- Generate favicon from logo and add to `static/` with appropriate `<link>` tags in `head.html`
- Update header partial to display the logo
- Replace test publication data with empty list and update Research page/layout to show "Watch This Space" placeholder when no publications exist
- Add `static/CNAME` file with `alignmentethics.org`
- Update Decap CMS config to use correct repo casing (`Alignment-Ethics-Institute/aei-website`)
- Verify `npm run build` succeeds with all changes
- Push codebase to `Alignment-Ethics-Institute/aei-website` on the `main` branch
- Confirm GitHub Actions workflow triggers and deploys successfully

### Out of Scope

- DNS configuration (owner will handle separately)
- Formspree account verification / form testing
- Decap CMS OAuth setup
- Publication content (case study editing happening this weekend)
- Team member headshot photos (coming later, initials for now)
- Specific board titles beyond "Founding Director" (to be decided at first board meeting)

## Architecture

### Directory Structure

Files to create or modify (all within `aei-website/`):

```
data/team.yaml                    # MODIFY - populate with team members
data/publications.yaml            # MODIFY - clear test data
static/images/logo.png            # CREATE - logo image (from user-provided image 2)
static/images/favicon-32x32.png   # CREATE - generated from logo
static/images/favicon-16x16.png   # CREATE - generated from logo
static/images/apple-touch-icon.png # CREATE - generated from logo (180x180)
static/CNAME                      # CREATE - custom domain file
layouts/partials/head.html        # MODIFY - add favicon link tags
layouts/partials/header.html      # MODIFY - add logo image to nav
layouts/research/single.html      # MODIFY - add empty-state placeholder
static/admin/config.yml           # MODIFY - fix repo casing
```

### Patterns to Follow

- Team data uses YAML format matching existing `data/team.yaml` schema: `name`, `role`, `initials`, `bio`, `photo` (empty string for now)
- Favicon link tags go in `layouts/partials/head.html`
- Logo in header should be small (h-8 or h-10) and sit next to or replace the site title text
- Hugo conditionals: use `{{ if .Site.Data.publications.publications }}` pattern for empty-state check
- CNAME file goes in `static/` so Hugo copies it to `public/` root at build time

### Do NOT Create

- No new layout files — modify existing `research/single.html` for the placeholder
- No new CSS files — use existing Tailwind utility classes
- No JavaScript files
- No new content pages

## Team Member Data

### Board of Directors

**1. Deva Temple**
- Role: Founding Director
- Initials: DT
- Bio: Deva Temple is the Founding Director and Board President of the Alignment Ethics Institute, where she leads original research at the intersection of AI alignment, ethics, and long-term human flourishing. Drawing on two decades of work in sustainability, systems thinking, and organizational development, Deva designs frameworks for safe, value-aligned digital intelligence and practical pathways for integrating these systems into society. Her work combines grounded theory, qualitative and quantitative analysis, and hands-on prototyping of staged alignment processes. Before founding the Alignment Ethics Institute and NoeiX, Deva worked globally across climate adaptation, sustainable development, and global policy research, including roles with the Toda Institute, Mana Makai, and multiple nonprofits she helped launch and grow. She has co-edited and authored works on ethical transformation, peace movements, and the ecology of equality. She has a background in psychology and neuroscience, and holds an MA in global leadership and sustainable development, and an MIT certificate in AI product design.

**2. Oleksandra Sypiachova**
- Role: Founding Director
- Initials: OS
- Bio: She brings 17+ years of leadership experience spanning global technology companies — including 7 years at Johnson & Johnson managing supply chain operations across 14 countries, product leadership at Intel Labs, and work with Elementum's supply chain platform serving Tesla, HP, and Dyson. Oleksandra also leads the International University of Consciousness Physics, where she has trained over 1,000 practitioners. At AEI, she bridges operational rigor with consciousness-informed approaches to ethical AI development.

**3. River Langford**
- Role: Founding Director
- Initials: RL
- Bio: River Langford works at the intersection of systems thinking, ethical reasoning, and narrative design. His work focuses on helping organizations make sense of complex problems, translate ambiguity into usable structures, and support decision making under real-world constraints. He has worked across technology, nonprofit, and institutional contexts, all of which inform his understanding of how systems are experienced on the ground. He is typically brought in for roles like strategic consulting, research support, grant development, editorial work, and long-form writing when problems resist simple framing or when existing structures no longer scale. He specializes in clarifying goals, mapping tradeoffs, and designing processes that hold up under pressure. River's background spans writing, research, strategic analysis, public speaking, teambuilding, and creative practice; understood as tools for sense-making rather than identities. His approach treats ethics as an operational discipline rather than an abstract value set or rhetorical positioning, used to anticipate failure modes, misuse, and second-order effects before they become structural risks. Across disciplines, he treats narrative as functional infrastructure through which decisions are understood, coordinated, and sustained over time.

### Advisory Board

(Empty at launch — reserved for future advisory members)

### Staff

**4. Allie Jones**
- Role: Technical Advisor
- Initials: AJ
- Bio: Allie Jones serves as Technical Advisor to the Alignment Ethics Institute, where she shapes technical strategy, systems architecture, and operational infrastructure for ethical AI development. She brings over 15 years of engineering experience spanning enterprise web development, distributed systems, and API-driven architecture. As a Technical Leader and Certified Drupal Developer at Acquia, she led remote distributed teams and architected large-scale CMS implementations for enterprise clients. She is an experienced public speaker, having presented at over 10 conferences including DrupalCon and co-hosted Drupaldelphia. More recently, Allie has moved into applied AI and agentic systems. Based at All Thrive AI in Berkeley, she works with vector databases and autonomous AI agents. She is a three-time San Francisco AI hackathon winner, and her Storylane QA Editor AI Agent won Most Innovative Use Case out of 150 submissions at a recent competition. Allie holds a Master's in Information Technology from the University of Denver, a Bachelor's in Entrepreneurship, and an MIT certificate in Applied Agentic AI.

## Logo & Favicon

- Source image: user-provided image 2 (globe with deep blue background, gold heart center, crown ray at top, white background)
- File location: the user will place the source PNG at `static/images/logo.png`
- Favicon generation: use the logo to create 16x16, 32x32, and 180x180 (apple-touch-icon) variants
- The logo should appear in the site header alongside or replacing the text site title
- OG image: use the logo as `og:image` in `head.html` params

## Publications Placeholder

Replace the current test publication data and update the Research page layout:

- Clear `data/publications.yaml` to have an empty publications list
- In `layouts/research/single.html`, add an empty-state block that shows when no publications exist
- Placeholder text: "Research publications are on the way. Watch this space." (or similar — keep it warm and professional, matching AEI's voice)
- Style the placeholder with existing Tailwind classes (centered, muted text, maybe a subtle border or card)

## Deployment

### Push to GitHub

The local codebase at `aei-website/` needs to be pushed to `Alignment-Ethics-Institute/aei-website` (main branch). The remote repo is empty — this will be the initial push.

### GitHub Pages

- The GitHub Actions workflow at `.github/workflows/deploy.yml` is already configured
- Pushing to `main` will trigger the build and deploy automatically
- GitHub Pages needs to be enabled in the repo settings (Source: GitHub Actions)
- The `static/CNAME` file tells GitHub Pages to serve from `alignmentethics.org`

### DNS (User-Handled)

High-level instructions for the user:
1. Go to your domain registrar for alignmentethics.org
2. Add 4 A records pointing to GitHub Pages IPs: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
3. Add a CNAME record: `www` -> `alignment-ethics-institute.github.io`
4. In GitHub repo Settings > Pages, set custom domain to `alignmentethics.org` and check "Enforce HTTPS"
5. Wait for DNS propagation (can take up to 48 hours, usually faster)

## Phases & Verification

### Phase 1: Content & Assets
**What:** Populate team data, clear test publications, add placeholder messaging, add logo and favicon
**Exit Criteria:**
```bash
# Team data has 3 board members and 1 advisory member
grep -c "name:" aei-website/data/team.yaml | grep -q "4"
# Publications test data is cleared
grep -c "Test" aei-website/data/publications.yaml | grep -q "0"
# Logo file exists
test -f aei-website/static/images/logo.png
# Favicon files exist
test -f aei-website/static/images/favicon-32x32.png
test -f aei-website/static/images/favicon-16x16.png
# Build succeeds
cd aei-website && npm run build
# Research page has empty-state placeholder
grep -q "Watch" aei-website/layouts/research/single.html
```

### Phase 2: Deploy
**What:** Push codebase to org repo, verify GitHub Actions triggers, confirm site is accessible
**Exit Criteria:**
```bash
# Remote is set to org repo
cd aei-website && git remote -v | grep -q "Alignment-Ethics-Institute/aei-website"
# Code is pushed
cd aei-website && git log --oneline -1 origin/main
# CNAME file is in build output
test -f aei-website/public/CNAME
# GitHub Pages is accessible (after DNS)
curl -s -o /dev/null -w "%{http_code}" https://alignment-ethics-institute.github.io/aei-website/ | grep -q "200"
```

## Open Questions

- Formspree: Are the configured form endpoint IDs connected to a live account? (User to verify manually)
- Decap CMS: OAuth provider needs configuration for the admin login to work — not blocking launch but needed for CMS editing
- Advisory board member count: Currently 1 (Allie Jones). Any additional advisory members expected before launch?
- Logo image: User needs to provide the final PNG file for the build to use
