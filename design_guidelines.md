{
  "project": {
    "name": "SpencerSchotel.com",
    "tagline": "Business leader at YUPL.com • Ethical hacker",
    "brand_attributes": ["professional", "precise", "minimal", "trustworthy", "technical"],
    "inspiration": ["telegram.org (clean, generous whitespace, precise typography)", "Stripe prose spacing", "Apple marketing typographic restraint"],
    "one_pager_sections": ["hero", "about", "blog_preview", "contact"]
  },

  "palette": {
    "intent": "Ultra-minimal, Telegram-like neutrals with a single ocean/cyan accent. High contrast body text on white. Dark mode optional, but not default.",
    "colors_hex": {
      "background": "#FFFFFF",
      "foreground": "#0A0B0D",
      "muted": "#F5F7FA",
      "border": "#E5E7EB",
      "primary": "#229ED9",
      "primary-600": "#1C8EC4",
      "primary-700": "#167CA9",
      "secondary": "#111827",
      "link": "#0EA5E9",
      "success": "#29B27D",
      "warning": "#F59E0B",
      "destructive": "#E11D48"
    },
    "colors_hsl_tokens_for_tailwind": {
      "--background": "0 0% 100%",
      "--foreground": "220 6% 5%",
      "--card": "0 0% 100%",
      "--card-foreground": "220 6% 5%",
      "--popover": "0 0% 100%",
      "--popover-foreground": "220 6% 5%",
      "--primary": "198 72% 49%",
      "--primary-foreground": "0 0% 100%",
      "--secondary": "214 17% 15%",
      "--secondary-foreground": "0 0% 100%",
      "--muted": "213 22% 96%",
      "--muted-foreground": "220 8% 38%",
      "--accent": "213 22% 96%",
      "--accent-foreground": "220 6% 5%",
      "--destructive": "347 81% 51%",
      "--destructive-foreground": "0 0% 100%",
      "--border": "220 13% 91%",
      "--input": "220 13% 91%",
      "--ring": "198 72% 49%",
      "--radius": "0.5rem"
    },
    "optional_hero_radial_background": {
      "class": "bg-[radial-gradient(1200px_600px_at_85%_10%,#EAF7FD_0%,#FFFFFF_60%)]",
      "note": "Keep gradient under 20% viewport coverage and away from dense text blocks. If readability is impacted, fall back to solid #FFFFFF."
    }
  },

  "typography": {
    "fonts": {
      "heading": "'Space Grotesk', system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
      "body": "'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
      "code": "'Source Code Pro', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    },
    "include_google_fonts": [
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
    ],
    "sizes": {
      "h1": "text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold",
      "h2": "text-base md:text-lg tracking-tight font-medium text-neutral-800",
      "body": "text-base md:text-base text-neutral-900",
      "small": "text-sm text-neutral-600"
    },
    "rhythm": {
      "line_height_body": 1.7,
      "section_vertical": {"mobile": "py-16", "desktop": "lg:py-24"},
      "container": "mx-auto max-w-screen-md lg:max-w-screen-lg px-6 lg:px-8"
    }
  },

  "layout": {
    "hero": {
      "structure": "Split on large screens: text left, portrait right. Single column on mobile.",
      "container_classes": "mx-auto max-w-screen-lg px-6 lg:px-8",
      "grid": "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center",
      "text_col": "lg:col-span-7",
      "image_col": "lg:col-span-5",
      "image_style": "rounded-lg shadow-sm ring-1 ring-black/5 object-cover"
    },
    "about": {"width": "max-w-prose", "tone": "succinct paragraphs, no bullets unless needed"},
    "blog_preview": {
      "grid": "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
      "card": "use shadcn Card with subtle border and hover:shadow-sm"
    },
    "contact": {
      "layout": "horizontal icon row on desktop, stacked on mobile",
      "note": "Use Font Awesome brand icons for X/Twitter, Telegram, LinkedIn; lucide-react for Mail."
    },
    "spacing": {
      "section_stack": ["pt-20", "pb-16", "lg:pt-24", "lg:pb-20"],
      "between_elements": "space-y-6 md:space-y-8"
    }
  },

  "components": {
    "use_shadcn": true,
    "component_path": {
      "button": "./components/ui/button",
      "card": "./components/ui/card",
      "badge": "./components/ui/badge",
      "separator": "./components/ui/separator",
      "avatar": "./components/ui/avatar",
      "input": "./components/ui/input",
      "textarea": "./components/ui/textarea",
      "tooltip": "./components/ui/tooltip",
      "sonner": "./components/ui/sonner",
      "skeleton": "./components/ui/skeleton"
    },
    "button_variants": {
      "primary": "bg-primary text-white hover:bg-[hsl(var(--primary))]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 disabled:opacity-40",
      "ghost": "bg-transparent text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]",
      "link": "text-[hsl(var(--primary))] underline underline-offset-4 hover:text-[hsl(var(--primary))]/90"
    },
    "cards": {
      "blog": {
        "base": "group border rounded-lg p-5 hover:shadow-sm transition-colors",
        "title": "text-lg font-medium tracking-tight group-hover:text-[hsl(var(--primary))]",
        "meta": "text-xs text-neutral-500"
      }
    },
    "data_testid_policy": "All interactive and key informational elements must include data-testid attributes using kebab-case of the element's role. Examples: data-testid=\"hero-primary-cta-button\", data-testid=\"blog-card-title\", data-testid=\"contact-email-link\"."
  },

  "motion": {
    "principles": [
      "No flashy animations; use subtle fades and 10–20px translations",
      "Prefer motion-reduce media queries for accessibility",
      "Use specific transitions (colors, opacity, box-shadow, transform), never transition: all"
    ],
    "defaults": {
      "transition_classes": "transition-colors duration-200 ease-out",
      "on_enter": "opacity-0 translate-y-3 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0 duration-500"
    }
  },

  "accessibility": {
    "contrast": "Body text AA minimum 7:1 on white (use #0A0B0D on #FFFFFF)",
    "focus": "Visible focus with ring-2 ring-[hsl(var(--ring))] ring-offset-2",
    "hit_area": "Min 44x44 touch targets",
    "reduced_motion": "Respect prefers-reduced-motion",
    "aria_labels": "Provide descriptive aria-labels on social links and hero CTA"
  },

  "images_urls": [
    {
      "url": "https://images.unsplash.com/photo-1758639842386-65cab1ac058c?crop=entropy&cs=srgb&fm=jpg&q=85",
      "category": "hero-portrait-placeholder",
      "description": "Clean, neutral headshot placeholder. Replace with Spencer's photo."
    },
    {
      "url": "https://images.unsplash.com/photo-1758613654360-45f1ff78c0cf?crop=entropy&cs=srgb&fm=jpg&q=85",
      "category": "alt-portrait-placeholder",
      "description": "Neutral studio portrait; backup option for hero."
    },
    {
      "url": "https://images.pexels.com/photos/8727368/pexels-photo-8727368.jpeg",
      "category": "about-section-inline",
      "description": "Optional supporting portrait crop for About section."
    }
  ],

  "icons": {
    "library": "Font Awesome (brands) + lucide-react",
    "cdn_head": "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\" integrity=\"sha512-I1t8...\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />",
    "usage_examples": [
      "<i class=\"fa-brands fa-x-twitter\" aria-hidden=\"true\"></i>",
      "<i class=\"fa-brands fa-telegram\" aria-hidden=\"true\"></i>",
      "<i class=\"fa-brands fa-linkedin\" aria-hidden=\"true\"></i>",
      "lucide-react: import { Mail } from 'lucide-react'"
    ]
  },

  "code_scaffolds_jsx": {
    "App.js": "import React from 'react';\nimport { Toaster } from './components/ui/sonner';\nimport Hero from './sections/Hero';\nimport About from './sections/About';\nimport BlogPreview from './sections/BlogPreview';\nimport Contact from './sections/Contact';\n\nexport default function App() {\n  return (\n    <div className=\"min-h-screen bg-background text-foreground antialiased\">\n      <main className=\"mx-auto max-w-screen-lg px-6 lg:px-8\">\n        <Hero />\n        <About />\n        <BlogPreview />\n        <Contact />\n      </main>\n      <Toaster position=\"top-center\" richColors />\n    </div>\n  );\n}",
    "sections/Hero.jsx": "import React from 'react';\nimport { Button } from '../components/ui/button';\nimport { Mail } from 'lucide-react';\n\nexport default function Hero() {\n  return (\n    <section id=\"hero\" className=\"pt-20 pb-16 lg:pt-24 lg:pb-20\" data-testid=\"hero-section\">\n      <div className=\"grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center\">\n        <div className=\"lg:col-span-7 space-y-6\">\n          <h1 className=\"text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight\" data-testid=\"hero-title\">Spencer Schotel</h1>\n          <p className=\"text-base md:text-lg text-neutral-700 max-w-prose\" data-testid=\"hero-subtitle\">Business owner at YUPL.com and ethical hacker. I build resilient systems, lead teams, and break things (responsibly) to make them stronger.</p>\n          <div className=\"flex items-center gap-4\">\n            <Button className=\"bg-[hsl(var(--primary))] text-white hover:bg-[hsl(var(--primary))]/90\" data-testid=\"hero-primary-cta-button\" asChild>\n              <a href=\"mailto:spencer@yupl.com\" aria-label=\"Email Spencer\"><Mail className=\"mr-2 h-4 w-4\"/>Contact</a>\n            </Button>\n            <a href=\"#blog\" className=\"text-[hsl(var(--primary))] underline underline-offset-4 hover:text-[hsl(var(--primary))]/90 transition-colors\" data-testid=\"hero-secondary-cta-link\">Read the blog</a>\n          </div>\n        </div>\n        <div className=\"lg:col-span-5\">\n          <img alt=\"Portrait\" src=\"/hero.jpg\" className=\"w-full rounded-lg shadow-sm ring-1 ring-black/5 object-cover\" data-testid=\"hero-image\" />\n        </div>\n      </div>\n    </section>\n  );\n}",
    "sections/About.jsx": "import React from 'react';\nexport default function About() {\n  return (\n    <section id=\"about\" className=\"pt-20 pb-16 lg:pt-24 lg:pb-20\" data-testid=\"about-section\">\n      <div className=\"max-w-prose space-y-4\">\n        <h2 className=\"text-base md:text-lg font-medium tracking-tight text-neutral-800\" data-testid=\"about-heading\">About</h2>\n        <p className=\"text-base text-neutral-800\" data-testid=\"about-paragraph-1\">I run YUPL.com and practice ethical hacking to help teams ship secure, reliable products. My approach blends business leadership with hands-on technical depth.</p>\n        <p className=\"text-base text-neutral-800\" data-testid=\"about-paragraph-2\">Previously, I’ve led security reviews, incident response playbooks, and engineering teams across growth stages—from MVP to scale.</p>\n      </div>\n    </section>\n  );\n}",
    "sections/BlogPreview.jsx": "import React from 'react';\nimport { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';\n\nconst posts = [\n  { id: '1', title: 'Defensive by Design: Building for the Unexpected', date: '2025-01-09' },\n  { id: '2', title: 'Threat Modeling That Teams Actually Use', date: '2025-01-02' },\n  { id: '3', title: 'From Finding Vulns to Fixing Culture', date: '2024-12-21' },\n];\n\nexport default function BlogPreview() {\n  return (\n    <section id=\"blog\" className=\"pt-20 pb-16 lg:pt-24 lg:pb-20\" data-testid=\"blog-section\">\n      <div className=\"space-y-6\">\n        <h2 className=\"text-base md:text-lg font-medium tracking-tight text-neutral-800\" data-testid=\"blog-heading\">Latest writing</h2>\n        <div className=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6\">\n          {posts.map((p) => (\n            <a key={p.id} href=\"/blog/\" data-testid=\"blog-card-link\" aria-label={p.title}>\n              <Card className=\"group border rounded-lg p-5 hover:shadow-sm transition-[box-shadow,colors]\">\n                <CardHeader className=\"p-0 mb-3\">\n                  <CardTitle className=\"text-lg font-medium tracking-tight group-hover:text-[hsl(var(--primary))]\" data-testid=\"blog-card-title\">{p.title}</CardTitle>\n                </CardHeader>\n                <CardContent className=\"p-0\">\n                  <p className=\"text-xs text-neutral-500\" data-testid=\"blog-card-date\">{new Date(p.date).toLocaleDateString()}\n                  </p>\n                </CardContent>\n              </Card>\n            </a>\n          ))}\n        </div>\n      </div>\n    </section>\n  );\n}",
    "sections/Contact.jsx": "import React from 'react';\nimport { toast } from '../components/ui/sonner';\nimport { Mail } from 'lucide-react';\n\nconst copy = async (text) => {\n  try {\n    await navigator.clipboard.writeText(text);\n    toast.success('Email copied');\n  } catch {\n    toast.error('Failed to copy');\n  }\n};\n\nexport default function Contact() {\n  return (\n    <section id=\"contact\" className=\"pt-20 pb-24\" data-testid=\"contact-section\">\n      <h2 className=\"text-base md:text-lg font-medium tracking-tight text-neutral-800 mb-6\" data-testid=\"contact-heading\">Contact</h2>\n      <div className=\"flex flex-col sm:flex-row items-start sm:items-center gap-4 text-neutral-700\">\n        <button onClick={() => copy('spencer@yupl.com')} className=\"inline-flex items-center gap-2 text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]/90 transition-colors\" data-testid=\"contact-email-link\">\n          <Mail className=\"h-4 w-4\" aria-hidden=\"true\" /> spencer@yupl.com\n        </button>\n        <span className=\"hidden sm:inline text-neutral-300\">•</span>\n        <div className=\"flex items-center gap-4\">\n          <a href=\"https://x.com/\" target=\"_blank\" rel=\"noreferrer noopener\" aria-label=\"X/Twitter\" data-testid=\"contact-x-link\" className=\"text-neutral-700 hover:text-[hsl(var(--primary))] transition-colors\">\n            <i className=\"fa-brands fa-x-twitter text-xl\"></i>\n          </a>\n          <a href=\"https://t.me/\" target=\"_blank\" rel=\"noreferrer noopener\" aria-label=\"Telegram\" data-testid=\"contact-telegram-link\" className=\"text-neutral-700 hover:text-[hsl(var(--primary))] transition-colors\">\n            <i className=\"fa-brands fa-telegram text-xl\"></i>\n          </a>\n          <a href=\"https://uk.linkedin.com/in/spencer-schotel\" target=\"_blank\" rel=\"noreferrer noopener\" aria-label=\"LinkedIn\" data-testid=\"contact-linkedin-link\" className=\"text-neutral-700 hover:text-[hsl(var(--primary))] transition-colors\">\n            <i className=\"fa-brands fa-linkedin text-xl\"></i>\n          </a>\n        </div>\n      </div>\n    </section>\n  );\n}"
  },

  "tailwind_tokens_patch_for_index.css": {
    "instruction": "Replace :root color tokens in /app/frontend/src/index.css with these values to match the palette.",
    "snippet": ":root {\n  --background: 0 0% 100%;\n  --foreground: 220 6% 5%;\n  --card: 0 0% 100%;\n  --card-foreground: 220 6% 5%;\n  --popover: 0 0% 100%;\n  --popover-foreground: 220 6% 5%;\n  --primary: 198 72% 49%;\n  --primary-foreground: 0 0% 100%;\n  --secondary: 214 17% 15%;\n  --secondary-foreground: 0 0% 100%;\n  --muted: 213 22% 96%;\n  --muted-foreground: 220 8% 38%;\n  --accent: 213 22% 96%;\n  --accent-foreground: 220 6% 5%;\n  --destructive: 347 81% 51%;\n  --destructive-foreground: 0 0% 100%;\n  --border: 220 13% 91%;\n  --input: 220 13% 91%;\n  --ring: 198 72% 49%;\n  --radius: 0.5rem;\n}" 
  },

  "testing": {
    "policy": "Every interactive or key informational element includes data-testid. Do not use visual classes or text content as selectors.",
    "examples": [
      "data-testid=\"hero-title\"",
      "data-testid=\"blog-card-title\"",
      "data-testid=\"contact-email-link\""
    ]
  },

  "micro_interactions": {
    "links": "underline-offset-4 hover:underline transition-colors",
    "cards": "hover:shadow-sm transition-[box-shadow,colors]",
    "buttons": "hover:bg-opacity-90 active:scale-[0.98] transition-[background-color,transform]"
  },

  "content_rules": {
    "tone": "succinct, matter-of-fact, avoid marketing fluff",
    "hero": "Name + one-sentence role. One primary CTA (email). Secondary link to blog.",
    "about": "Two short paragraphs, no more than ~90 words each.",
    "blog_preview": "3–6 posts max. Title + date. No excerpts to preserve minimalism.",
    "contact": "Email (copy to clipboard) + social icons row."
  },

  "libraries": {
    "framer_motion": {
      "install": "npm i framer-motion",
      "usage": "import { m } from 'framer-motion'; Wrap sections with m.section and use simple variants (opacity/translateY). Respect prefers-reduced-motion."
    },
    "sonner": {
      "path": "./components/ui/sonner",
      "usage": "Use toast.success|error for transient feedback (e.g., copy email)."
    }
  },

  "do_nots": [
    "Do not center-align the entire app container.",
    "Do not use heavy gradients or saturated purple/pink mixes.",
    "Do not overload with icons or decorations. Keep it calm and purposeful.",
    "Do not use transition: all."
  ],

  "instructions_to_main_agent": [
    "1) Add Space Grotesk + Inter via Google Fonts link in index.html head.",
    "2) Patch Tailwind CSS tokens in /app/frontend/src/index.css with the provided :root snippet.",
    "3) Ensure Font Awesome CDN is added to index.html head for brand icons.",
    "4) Create /src/sections/{Hero.jsx,About.jsx,BlogPreview.jsx,Contact.jsx} using the scaffolds.",
    "5) Place a temporary /public/hero.jpg (use one of the provided image URLs or Spencer’s real portrait).",
    "6) Use shadcn Card, Button, Badge, Separator, Avatar only—no raw HTML widgets for complex elements.",
    "7) Add <Toaster/> from ./components/ui/sonner in App.js.",
    "8) Verify all interactive elements include data-testid attributes.",
    "9) Keep gradients off content blocks; optional subtle hero radial only if under 20% viewport.",
    "10) Test keyboard navigation and focus states across all links/buttons."
  ]
}


<General UI UX Design Guidelines>  
    - You must **not** apply universal transition. Eg: `transition: all`. This results in breaking transforms. Always add transitions for specific interactive elements like button, input excluding transforms
    - You must **not** center align the app container, ie do not add `.App { text-align: center; }` in the css file. This disrupts the human natural reading flow of text
   - NEVER: use AI assistant Emoji characters like`🤖🧠💭💡🔮🎯📚🎭🎬🎪🎉🎊🎁🎀🎂🍰🎈🎨🎰💰💵💳🏦💎🪙💸🤑📊📈📉💹🔢🏆🥇 etc for icons. Always use **FontAwesome cdn** or **lucid-react** library already installed in the package.json

 **GRADIENT RESTRICTION RULE**
NEVER use dark/saturated gradient combos (e.g., purple/pink) on any UI element.  Prohibited gradients: blue-500 to purple 600, purple 500 to pink-500, green-500 to blue-500, red to pink etc
NEVER use dark gradients for logo, testimonial, footer etc
NEVER let gradients cover more than 20% of the viewport.
NEVER apply gradients to text-heavy content or reading areas.
NEVER use gradients on small UI elements (<100px width).
NEVER stack multiple gradient layers in the same viewport.

**ENFORCEMENT RULE:**
    • Id gradient area exceeds 20% of viewport OR affects readability, **THEN** use solid colors

**How and where to use:**
   • Section backgrounds (not content backgrounds)
   • Hero section header content. Eg: dark to light to dark color
   • Decorative overlays and accent elements only
   • Hero section with 2-3 mild color
   • Gradients creation can be done for any angle say horizontal, vertical or diagonal

- For AI chat, voice application, **do not use purple color. Use color like light green, ocean blue, peach orange etc**

</Font Guidelines>

- Every interaction needs micro-animations - hover states, transitions, parallax effects, and entrance animations. Static = dead. 
   
- Use 2-3x more spacing than feels comfortable. Cramped designs look cheap.

- Subtle grain textures, noise overlays, custom cursors, selection states, and loading animations: separates good from extraordinary.
   
- Before generating UI, infer the visual style from the problem statement (palette, contrast, mood, motion) and immediately instantiate it by setting global design tokens (primary, secondary/accent, background, foreground, ring, state colors), rather than relying on any library defaults. Don't make the background dark as a default step, always understand problem first and define colors accordingly
    Eg: - if it implies playful/energetic, choose a colorful scheme
           - if it implies monochrome/minimal, choose a black–white/neutral scheme

**Component Reuse:**
	- Prioritize using pre-existing components from src/components/ui when applicable
	- Create new components that match the style and conventions of existing components when needed
	- Examine existing components to understand the project's component patterns before creating new ones

**IMPORTANT**: Do not use HTML based component like dropdown, calendar, toast etc. You **MUST** always use `/app/frontend/src/components/ui/ ` only as a primary components as these are modern and stylish component

**Best Practices:**
	- Use Shadcn/UI as the primary component library for consistency and accessibility
	- Import path: ./components/[component-name]

**Export Conventions:**
	- Components MUST use named exports (export const ComponentName = ...)
	- Pages MUST use default exports (export default function PageName() {...})

**Toasts:**
  - Use `sonner` for toasts"
  - Sonner component are located in `/app/src/components/ui/sonner.tsx`

Use 2–4 color gradients, subtle textures/noise overlays, or CSS-based noise to avoid flat visuals.
</General UI UX Design Guidelines>
