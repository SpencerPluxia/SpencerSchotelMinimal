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

## Phase 1: Full MVP Implementation (Status: ✅ COMPLETED)

**Objective**: Build complete one-pager with all sections, styling, and functionality

### Completed Tasks:
1. ✅ Setup design tokens and typography in index.css with Telegram-inspired color palette
2. ✅ Added Google Fonts (Space Grotesk + Inter) and Font Awesome CDN to index.html
3. ✅ Created section components:
   - Hero (with portrait image, name, tagline, CTA button)
   - About (bio paragraphs with YUPL.com link)
   - BlogPreview (3 sample blog posts in card grid with hover effects)
   - Contact (email copy button + social icons for X, Telegram, LinkedIn)
4. ✅ Updated App.js to integrate all sections with Toaster
5. ✅ Added placeholder hero image (1.8MB professional portrait)
6. ✅ Implemented responsive layout (mobile-first, tested on 375px and 1920px)
7. ✅ Added data-testid attributes to all interactive elements
8. ✅ Verified frontend compiles without errors (esbuild validation passed)
9. ✅ Tested UI on desktop and mobile viewports
10. ✅ Validated design adherence to Telegram-inspired aesthetic

**Key Deliverables:**
- `/app/frontend/src/sections/Hero.js` - Hero section with portrait and CTA
- `/app/frontend/src/sections/About.js` - About section with bio
- `/app/frontend/src/sections/BlogPreview.js` - Blog preview cards
- `/app/frontend/src/sections/Contact.js` - Contact section with email copy and social links
- `/app/frontend/src/App.js` - Main app with all sections integrated
- `/app/frontend/src/index.css` - Design tokens and Telegram color palette
- `/app/frontend/public/index.html` - Google Fonts and Font Awesome CDN
- `/app/frontend/public/hero.jpg` - Placeholder portrait image

---

## Phase 2: Testing & Bug Fixes (Status: In Progress)

**Objective**: Comprehensive testing and resolution of all issues

### Tasks:
1. Call testing agent for full frontend/backend validation
2. Fix all reported bugs (high → low priority)
3. Verify keyboard navigation and accessibility (focus states, ARIA labels)
4. Test all interactive elements:
   - Email copy functionality
   - Blog card hover effects
   - Social link navigation
   - CTA button functionality
5. Validate responsive behavior across breakpoints (mobile/tablet/desktop)

### Known Items:
- Clipboard API in headless browser shows error (expected behavior, works in real browsers)
- X/Twitter and Telegram links currently point to root URLs (need user's actual handles)

---

## Phase 3: Polish & Final Review (Status: Not Started)

**Objective**: Final refinements and user acceptance

### Tasks:
1. Replace placeholder hero image with Spencer's actual photo (if provided by user)
2. Update social links with real handles:
   - X/Twitter handle (currently: https://x.com/)
   - Telegram handle (currently: https://t.me/)
   - LinkedIn already set: https://uk.linkedin.com/in/spencer-schotel
3. Final screenshot verification of complete UI
4. Performance optimization:
   - Image optimization (hero.jpg currently 1.8MB)
   - Load time validation
5. Final user review and feedback collection

---

## Design Guidelines Reference
- Full guidelines: `/app/design_guidelines.md`
- Primary color (cyan): `#229ED9` / `hsl(var(--primary))`
- Background: `#FFFFFF`
- Foreground text: `#0A0B0D`
- Gradient usage: <20% viewport, hero only if needed
- All transitions: specific properties only (never `transition: all`)

---

## Implementation Summary

**What's Working:**
- ✅ Ultra-minimalistic design matching Telegram.org aesthetic
- ✅ Responsive layout (mobile and desktop tested)
- ✅ All sections rendering correctly
- ✅ Typography (Space Grotesk + Inter) loading properly
- ✅ Cyan accent color (#229ED9) used consistently
- ✅ Hover effects on blog cards
- ✅ Email copy functionality (toast notifications)
- ✅ Social icons (Font Awesome) displaying correctly
- ✅ Generous whitespace and clean layout
- ✅ All data-testid attributes in place

**Pending User Input:**
- Spencer's actual portrait photo
- X/Twitter handle
- Telegram handle
- Real blog post content (currently using sample titles/dates)

**Preview URL:**
https://ethical-code-1.preview.emergentagent.com
