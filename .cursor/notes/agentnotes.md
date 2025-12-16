## Agent Notes — Everyday Design System

### Purpose
This repo is for building an **Everyday Design System Playbook site** that initially mirrors the eBay Playbook’s structure and page patterns.

### High-signal requirements
- **All public** (no “sign in to access” gating for now).
- **Typography**: Work Sans (primary), Geist Mono (monospace).
- **Deployment**: Vercel, domain `everyday.co`.
- **Icons**: prefer icon components over emojis.

### Brand assets
- Current assets are stored in `logo_files/` (SVGs + `Main.png`).
- When we build the website, assets should ultimately be served from `public/` (Next.js convention).

### Implementation approach
- Start with **structure-first** (navigation + layouts + content placeholders).
- Build content pages as MDX where possible to keep authoring simple.
- Keep files small and scoped; add shared layout components under `src/components/`.


