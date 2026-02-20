# AEI Website Redesign & CSS Fix

## Problem

The AEI website at alignmentethics.org is completely unstyled in production. The root cause: the GitHub Actions deploy workflow uses `actions/configure-pages` which outputs `http://` (not `https://`) as the base URL. Hugo then generates all absolute URLs (including the CSS `<link>` tag) with `http://`. Since the site is served over HTTPS, the browser blocks the HTTP stylesheet as mixed content. Result: zero CSS loads, site is broken.

Beyond the CSS bug, the site design needs a significant overhaul. The target design reference is Redwood Research (redwoodresearch.org) — a clean, minimal, academic/institutional aesthetic with generous whitespace, polished typography, and professional credibility.

## Root Cause Analysis

In `.github/workflows/deploy.yml` line 71:
```yaml
--baseURL "${{ steps.pages.outputs.base_url }}/"
```

The `actions/configure-pages@v4` step outputs `http://alignmentethics.org` (no S). Hugo uses this as the base for `$css.Permalink`, generating:
```html
<link rel="stylesheet" href="http://alignmentethics.org/css/compiled.css">
```

Browser serves page over HTTPS, blocks HTTP stylesheet = completely unstyled site.

## Solution

1. Fix the HTTPS/baseURL bug so CSS loads
2. Redesign all layouts to match Redwood Research's clean, institutional aesthetic
3. Optimize for mobile across all pages
4. Fix minor asset issues (missing hero-fallback.jpg, missing hero.webm)

## Design Reference: Redwood Research

Key characteristics:
- **Nav**: Sticky top bar, logo left, clean text links right, minimal
- **Hero**: Large bold headline (left-aligned), single CTA button, subtle visual/animation on right
- **Sections**: Full-width alternating white/light-gray backgrounds, generous padding (py-20+)
- **Content layout**: Side-by-side image+text blocks that alternate direction
- **Research cards**: White cards with rounded corners, gradient accent headers, hover shadows
- **Typography**: Large headings (text-5xl), generous line-height, readable body text
- **Footer**: 3-column (Contact, Social, About), clean and minimal
- **Team page**: Grid of photos/names/roles organized by section (Executive, Staff, Board)
- **Colors**: Dark primary + one brand accent color (for AEI: keep blue-deep + gold)
- **Whitespace**: Very generous — sections breathe, nothing feels cramped

## Scope

### In Scope
- Fix HTTPS baseURL in hugo.toml and deploy.yml
- Fix dev server pipeline (build CSS before starting)
- Redesign header (sticky nav, proper logo sizing)
- Redesign hero (remove video complexity, clean text-focused hero)
- Redesign homepage sections (mission, differentiators, CTAs)
- Redesign footer (Redwood-style 3-column)
- Improve inner page and team page layouts
- Mobile optimization across all viewports
- Rebuild compiled CSS

### Out of Scope
- Sanity CMS content sync (publications still empty — that's fine)
- New pages or content
- JavaScript/animations (keep it CSS-only for now)
- Team headshot photos (still using initials placeholders)
- DNS or domain configuration changes

## Architecture

### Files to Modify
```
hugo.toml                         # Fix baseURL to force https
.github/workflows/deploy.yml     # Ensure HTTPS in Hugo build
package.json                      # Fix dev script
layouts/partials/head.html        # Use relURL instead of Permalink
layouts/partials/header.html      # Sticky nav redesign
layouts/partials/hero.html        # Clean text-focused hero
layouts/partials/footer.html      # Redwood-style 3-column footer
layouts/index.html                # Homepage section redesign
layouts/_default/baseof.html      # (minor) body class adjustments
layouts/_default/single.html      # Better whitespace/typography
layouts/team/single.html          # Clean team grid
assets/css/main.css               # New component styles, mobile fixes
tailwind.config.js                # (if needed) extend theme
```

### Patterns to Follow
- Keep existing AEI color palette (blue-deep, blue-light, gold, gold-light)
- Use Tailwind utility classes — no custom JavaScript
- Mobile-first responsive design (sm:, md:, lg: breakpoints)
- Semantic HTML with ARIA labels for accessibility
- Use `relURL` for asset paths to avoid baseURL protocol issues

### Do NOT Create
- No new layout files
- No JavaScript files
- No new content pages
- No new CSS files (modify existing main.css)
