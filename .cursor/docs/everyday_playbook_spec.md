## Everyday Playbook (v0) — Technical spec

### Goal
Ship a public “Everyday Design System” playbook site that mirrors the **information architecture** and **core UX patterns** of the eBay Playbook as a baseline (structure first, content placeholder to start).

Reference baseline: `https://playbook.ebay.com/get-started`

### Non-goals (v0)
- No authentication / role-based access control.
- No CMS integration (content will live as MDX/TS for now).
- No exhaustive component library docs on day 1 (just scaffolding + a few example pages).

---

### Information architecture (v0)
Top-level nav (mirror):
- `/get-started`
- `/brand-strategy`
- `/foundations`
- `/design-system`
- `/expressions`
- `/tools-and-resources`
- `/articles`

Additional pages:
- `/privacy-policy` (footer link)

Get started subnav:
- `/get-started` (Overview)
- `/get-started/faq`
- `/get-started/system-definitions`

Foundations initial subpages (public placeholders):
- `/foundations/logo`
- `/foundations/color`
- `/foundations/typography`
- `/foundations/photography`
- `/foundations/iconography`
- `/foundations/illustration`
- `/foundations/motion`
- `/foundations/accessibility`
- `/foundations/composition`
- `/foundations/interaction`
- `/foundations/object-styles`

Design system initial subpages:
- `/design-system/tokens`
- `/design-system/components`
- `/design-system/patterns`
- `/design-system/processes`

Expressions initial subpages:
- `/expressions/marketing-ui-graphics`
- `/expressions/email-design-system`

---

### Page templates / UX patterns

#### Global layout
- Header with:
	- Brand lockup (Everyday Design System)
	- Primary nav (items above)
	- Utilities: theme toggle (light/dark), search button (stub)
- Footer with:
	- “Things.People.Love.” equivalent (Everyday tagline placeholder)
	- Site nav repeat
	- “Careers / Press / Privacy policy” links (placeholders except privacy policy)

#### Section landing pages (Foundations / Design system / Expressions)
Pattern:
- Title (H1)
- Short description paragraph
- “Views” toggle: Grid / List (query param persisted: `?view=grid|list`)
- Curated list of child pages

#### Tools & resources
Pattern:
- Title (H1)
- Filter pills (query param: `?filter=color|content|figma|...`)
- Views toggle (Grid/List)
- Resource list tiles/rows

#### Articles
Pattern:
- Title (H1)
- “Featured” section list
- “News” section list

#### Get started subpages
Pattern:
- Left sidebar subnav for Get started section
- Main content:
	- H1 + description
	- Page-specific blocks
	- Pagination component (previous/next within section)

---

### Tech choices
- Next.js (App Router) + TypeScript
- MDX for content pages
- Tailwind for styling
- Fonts:
	- Work Sans (primary)
	- Geist Mono (mono)
- Icons: component-based (no emojis)

---

### Deployment
- Target Vercel
- Domain: `everyday.co` (final mapping done in Vercel project settings)


