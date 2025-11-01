# SpencerSchotel.com - Development Plan

## Project Overview
Ultra-minimalistic personal website for Spencer Schotel (YUPL.com owner & ethical hacker), inspired by Telegram.org's clean design aesthetic.

**Key Requirements:**
- One-pager layout with Hero, About, Blog Preview, and Contact sections
- Email: spencer@yupl.com
- LinkedIn: https://uk.linkedin.com/in/spencer-schotel
- Social icons: X/Twitter, Telegram, LinkedIn
- Professional, simple, no complex designs

**Design System:**
- **Color Palette**: Telegram-inspired cyan accent (#229ED9 / hsl(198 72% 49%)) with clean neutrals
- **Typography**: Space Grotesk (headings), Inter (body), Source Code Pro (code)
- **Layout**: Generous whitespace, max-w-screen-lg container, mobile-first responsive
- **Components**: Shadcn/UI (Button, Card, Badge, Separator, Sonner)
- **Motion**: Subtle transitions only, no flashy animations

---

## Phase 1: Full MVP Implementation (Status: In Progress)

**Objective**: Build complete one-pager with all sections, styling, and functionality

### Tasks:
1. Setup design tokens and typography in index.css
2. Add Google Fonts (Space Grotesk + Inter) and Font Awesome CDN to index.html
3. Create section components:
   - Hero (with portrait image, name, tagline, CTA)
   - About (bio paragraphs)
   - BlogPreview (3 sample posts in card grid)
   - Contact (email + social icons)
4. Update App.js to use new sections
5. Add placeholder hero image
6. Implement responsive layout and micro-interactions
7. Ensure all interactive elements have data-testid attributes

---

## Phase 2: Testing & Bug Fixes (Status: Not Started)

**Objective**: Comprehensive testing and resolution of all issues

### Tasks:
1. Call testing agent for full frontend/backend validation
2. Fix all reported bugs (high → low priority)
3. Verify responsive behavior on mobile/tablet/desktop
4. Test keyboard navigation and accessibility
5. Validate all links and social icons

---

## Phase 3: Polish & Final Review (Status: Not Started)

**Objective**: Final refinements and user acceptance

### Tasks:
1. Replace placeholder hero image with Spencer's actual photo (if provided)
2. Add real X/Twitter and Telegram handles to contact links
3. Screenshot verification of final UI
4. Performance check (load times, image optimization)
5. Final user review and feedback

---

## Design Guidelines Reference
- Full guidelines: `/app/design_guidelines.md`
- Primary color (cyan): `#229ED9` / `hsl(var(--primary))`
- Background: `#FFFFFF`
- Foreground text: `#0A0B0D`
- Gradient usage: <20% viewport, hero only if needed
- All transitions: specific properties only (never `transition: all`)
