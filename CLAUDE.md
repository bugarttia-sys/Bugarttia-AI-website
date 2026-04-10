# Bugarttia AI website — context for AI tools (Kimi Code, Claude Code, etc.)

This file documents the manual fixes that have been applied **on top of**
the Kimi Code static export. Read this before regenerating, re-exporting,
or reverting anything.

> **TL;DR:** This repo contains a built Vite/React static export from Kimi
> Code (no `src/`, no `package.json`, no build step). All hand-edits live
> in `navbar-fix.css` (CSS override layer loaded after the bundled CSS) and
> in `assets/index-CwhN0kOb.js` (two Dutch → English string replacements).
> Vercel auto-deploy is broken — every push must be followed by a manual
> `vercel deploy --prod` to the `bugarttia-ai` project.

---

## 1. Project status

| Property | Value |
|---|---|
| Source repo | https://github.com/bugarttia-sys/Bugarttia-AI-website |
| Production domain | https://bugarttia.ai |
| Built by | Kimi Code (AI site builder) |
| Source code in repo | **None** — only the static export |
| Build step | **None** — Vercel serves files as-is |
| Bundled JS | `assets/index-CwhN0kOb.js` (~454 KB minified) |
| Bundled CSS | `assets/index-DM7aWlwh.css` (~97 KB) |
| Hand-written override CSS | `navbar-fix.css` (~13 KB, loaded after bundled CSS) |
| HTML shell | `index.html` (loads bundle + override in this order) |

The first commit `c220899 "Initial website import from Kimi link"` is the
raw Kimi export. Every commit since has been hand-edits to fix mobile UX
bugs, layout issues, and copy.

The original React source files (referenced via `code-path` data attributes
in the bundled JS) live somewhere outside this repo — probably in the user's
Kimi Code workspace. Component file paths visible in the bundle:

- `src/sections/HeroSection.tsx`
- `src/sections/Navigation.tsx`
- `src/sections/AgentSystemSection.tsx`
- `src/sections/DataIntelligenceSection.tsx`
- `src/sections/SystemFlowSection.tsx`
- `src/sections/PremiumPositioningSection.tsx`
- `src/sections/SalesSystemSection.tsx`
- `src/sections/RevenueModelSection.tsx`
- `src/sections/ImplementationSection.tsx`
- `src/sections/ContactSection.tsx`
- `src/pages/PrivacyPolicy.tsx`

---

## 2. Discovered source bugs in the Kimi export

These are real bugs in the exported React code. They should ideally be
fixed at the source in Kimi (and re-exported), but until then they are
worked around via `navbar-fix.css`.

### 2.1 HeroSection.tsx — H1 invisible on mobile
The first `useEffect` runs on all viewports and animates label / paragraph
/ CTAs / background via `gsap.fromTo(ref, {opacity:0}, {opacity:1})`. For
the H1 ref `n`, however, it animates only the `.word` `<span>` children:

```js
if (n.current) {
  const v = n.current.querySelectorAll(".word");
  y.fromTo(v, {y:40, opacity:0}, {y:0, opacity:1, duration:.7, stagger:.04}, .3);
}
```

The parent `<h1>` keeps its React-rendered inline `style={{opacity:0}}`
forever. CSS opacity creates a stacking context that clamps children, so
the entire H1 stays invisible.

On desktop the second `useLayoutEffect` (scroll-pin scrub) accidentally
fixes it: its `gsap.fromTo([n.current, ...], {x:0, opacity:1}, ...)`
applies the from-state immediately, setting H1 opacity to 1 as a side
effect. On mobile that hook returns early (`if (window.innerWidth < 1024) return`),
so the H1 stays invisible.

**Fix at source**: in HeroSection's first `useEffect`, also animate
`n.current` directly:
```js
y.fromTo(n.current, {opacity:0}, {opacity:1, duration:.7}, .3);
```

### 2.2 HeroSection.tsx — content layer is flex-row
The hero's content layer is `<div className="relative z-10 ... flex items-center py-20 lg:py-0">`.
Default flex direction is row. On desktop the "How It Works" side card has
`lg:absolute` so it's removed from flow and the text wrapper takes the
full row. On mobile, with the card unhidden and `position: static`, the
card becomes a flex sibling next to the text wrapper, splitting the
horizontal space ~50/50.

**Fix at source**: add `flex-col lg:flex-row` to the content layer's
className.

### 2.3 ImplementationSection.tsx — broken horizontal slider on mobile
The 7 step cards are forced into a horizontally-scrolling row of 80px
columns with `text-[8px]` / `text-[9px]` step descriptions — illegible
on any phone.

**Fix at source**: convert the `.timeline-step` row to a vertical roadmap
on mobile. CSS grid: `44px 1fr` columns, circle in column 1, title+desc
in column 2 with proper readable sizes.

### 2.4 SystemFlowSection.tsx — same broken pattern as ImplementationSection
Same horizontal-scroll-row pattern with `whitespace-nowrap` on the
`.flow-step` name spans, causing text overflow into adjacent columns
("Contextual Outreach" → "tual Outreach" visible).

**Fix at source**: same vertical roadmap as ImplementationSection,
remove `whitespace-nowrap`.

### 2.5 SystemFlowSection.tsx — Dutch strings
Two Dutch strings remain in this component:
- `"Volledig Autonome Executie."` (h2 headline part 2)
- `"Vraag een Live Demo aan"` (CTA button)

The rest of the site is English. These have been replaced in the bundle
in-place but **will revert if the site is re-exported from Kimi unless
the source is updated**.

**Fix at source**: change to "Fully Autonomous Execution." and
"Request a Live Demo" respectively.

---

## 3. Override layer — `navbar-fix.css`

All CSS overrides live here. Loaded by `index.html` AFTER the bundled
Tailwind CSS, so `!important` rules can defeat utility classes.

The file is structured into logical blocks. **Each block has detailed
inline comments explaining what it fixes and why** — read the file
itself for the authoritative source. High-level inventory:

| Block | Lines (approx) | Purpose |
|---|---|---|
| Navbar fix | 1–32 | Logo left, menu right on mobile |
| 7-Day Deployment Slider | 34–165 | Vertical roadmap on mobile (`#implementation .timeline-step`) |
| Hero visibility & layout fix | 167–230 | H1 visible + How It Works card surfaced |
| System Flow vertical roadmap | 232–340 | Same pattern as slider (`#system-flow .flow-step`) |
| Hero polish | 342–end | Gradient overlay, text-shadow, stacked CTAs, banner spacing |

### Key rules and what they do

**H1 visibility hack** (workaround for §2.1):
```css
section h1[style*="opacity"] { opacity: 1 !important; }
section h1[style*="opacity"] .word { opacity: 1 !important; transform: none !important; }
```

**Surface the "How It Works" card** (workaround for hidden lg:block):
```css
.min-h-\[400px\] {
  display: block !important;
  position: static !important;
  width: 100% !important;
  /* ...generous mobile padding/margin... */
  opacity: 1 !important;
}
```

**Stack hero content vertically** (workaround for §2.2):
```css
section:has(h1) > div.relative.z-10 {
  flex-direction: column !important;
  align-items: stretch !important;
}
```

**Vertical roadmap for slider and system-flow** (workarounds for §2.3 and §2.4):
```css
#implementation .timeline-step,
#system-flow .flow-step {
  display: grid !important;
  grid-template-columns: 44px 1fr !important;
  /* ...full pattern in file... */
}
```

**Subtle text-shadow on hero text** for WCAG-safe legibility over the
city image without darkening the whole gradient:
```css
section:has(h1) span[style*="opacity"],
section:has(h1) h1[style*="opacity"],
section:has(h1) p[style*="opacity"] {
  text-shadow: 0 0 8px rgba(0,0,0,0.55) !important;
}
```

### Bundle-verified stable selectors

These selectors are unique in the bundled JS (verified via grep) and
safe to keep targeting:

| Selector | What it matches | Occurrences in bundle |
|---|---|---|
| `#implementation` | the slider section | 1 (section id) |
| `#implementation .timeline-step` | each of 7 step cards | 7 instances at runtime |
| `#system-flow` | the system flow section | 1 (section id) |
| `#system-flow .flow-step` | each of 7 step cards | 7 instances at runtime |
| `section:has(h1)` | the HeroSection only | 1 (only HeroSection has an h1; PrivacyPolicy.tsx h1 is on a different route) |
| `.min-h-[400px]` | the hero "How It Works" card | 1 (verified unique in bundle) |
| `[class*="from-bugarttia-black"]` | the hero gradient overlay | 1 (verified unique) |
| `button.border.border-white\/20` | the "See the System" button | 1 (only one such button on the page) |

### Selectors that DO NOT work (don't use)

The first three failed slider attempts (now deleted) used selectors like:
- `[class*="slider"]` — class is `glass-card`, not `slider`
- `[class*="deployment"]` — uses `bugarttia-` prefix, not `deployment`
- `[class*="number"]`, `[class*="circle"]`, `[class*="active"]` — no such classes exist
- `.bg-lime-400` — color class is `bg-bugarttia-neon`
- `h3`, `p` for step text — they're rendered as `<span>`

Don't reintroduce these patterns — they don't match anything in the
real DOM.

---

## 4. Bundle string replacements

Two Dutch strings have been replaced in `assets/index-CwhN0kOb.js`
via in-place find-and-replace (verified unique in the bundle):

| Was | Is |
|---|---|
| `Volledig Autonome Executie.` | `Fully Autonomous Execution.` |
| `Vraag een Live Demo aan` | `Request a Live Demo` |

Both originate from `src/sections/SystemFlowSection.tsx`.

**WARNING:** If the site is re-exported from Kimi, these replacements
will be lost. The Kimi source must be updated to use the English
strings, otherwise this manual replacement step has to be re-applied
after every export.

---

## 5. Deployment workflow

**Vercel auto-deploy from git is broken** for this repo. There are two
related Vercel projects in the `bugarttia-4465s-projects` team:

| Vercel project | Production URL | Git integration |
|---|---|---|
| `bugarttia-ai` | https://bugarttia.ai | **Not connected to GitHub** |
| `bugarttia_website` (underscore) | https://bugarttiawebsite.vercel.app | Connected, but the project itself is broken/empty (404s) |

GitHub webhook events from this repo flow to `bugarttia_website` (which
does nothing useful). The production domain `bugarttia.ai` is on
`bugarttia-ai`, which has no working git integration.

### Manual deploy workflow

After every push to `main`, run:

```bash
cd Bugarttia-AI-website-source     # the cloned repo
git push origin main               # push to GitHub (record-keeping)
CI=1 vercel deploy --prod --yes    # actually update the live site
```

The Vercel CLI is authenticated as `bugarttia-4465` (verified with
`vercel whoami`). The repo is linked to project `bugarttia-ai` via
`.vercel/project.json` (already in `.gitignore`).

### To fix this permanently

In the Vercel dashboard for the `bugarttia-ai` project, go to
**Settings → Git → Connect Git Repository → bugarttia-sys/Bugarttia-AI-website**,
branch `main`. After that, every push to main auto-deploys to
production. The dead `bugarttia_website` project can be deleted.

---

## 6. DO NOT revert this list

These overrides exist for real reasons; reverting them re-introduces
bugs. If you're tempted to "clean up" navbar-fix.css, leave these alone:

- **Hero H1 visibility hack** — undoes §2.1, H1 becomes invisible on mobile
- **Hero content layer flex-col** — undoes §2.2, banner overlaps the text
- **`.min-h-[400px]` display:block + position:static + opacity:1** —
  the "How It Works" card disappears on mobile
- **`#implementation .timeline-step` grid layout** — slider goes back
  to the broken horizontal scroll with 8-9px text
- **`#system-flow .flow-step` grid layout** — same regression for the
  System Flow section
- **`whitespace: normal` on `#system-flow .flow-step > span:nth-of-type(1)`** —
  step names overflow into adjacent columns again
- **`flex-shrink: 1` on `#system-flow .flow-step`** — the JSX has
  `flex-shrink-0` which forces fixed widths; we need shrink to be allowed

---

## 7. Workflow for future changes

**Layout / styling fixes**:
1. Edit `navbar-fix.css` (find the appropriate section block).
2. Use bundle-verified stable selectors only — see §3.
3. Scope under `@media (max-width: 1023px)` for mobile-only changes
   (matches the `lg:` Tailwind breakpoint and the GSAP scroll-pin
   gates inside the bundled components).
4. Keep `!important` because we're overriding compiled Tailwind
   utilities.
5. Sync, commit, push, deploy:
   ```bash
   git add navbar-fix.css
   git commit -m "..."
   git push origin main
   CI=1 vercel deploy --prod --yes
   ```

**Content / copy changes**:
1. Find the literal string in `assets/index-CwhN0kOb.js` (e.g. with
   Node `data.indexOf(...)`).
2. Verify it's unique in the bundle (no false positives elsewhere).
3. Replace in-place. Length doesn't matter — the bundle is already
   minified, no positional dependencies.
4. Sync, commit, push, deploy as above.
5. **Update Kimi source too**, otherwise the next re-export wipes
   the change.

**Adding new sections / major features**:
You cannot add React components from this repo (no source). You must:
1. Add them in Kimi Code's source.
2. Re-export the static site.
3. Re-apply all the manual fixes from this file's §3 and §4 on top
   of the new export.

This is fragile. The long-term solution is to migrate the project
out of Kimi into a real Vite/React repo so that source-level edits
become possible.

---

## 8. Image and asset notes

The hero background `images/hero_city_night.jpg` has these measured
luminance stats (used for WCAG contrast calculations):

- Full image: mean=0.21, max=1.0, std=0.16
- Top 40% (where H1 sits): mean=0.16, max=0.99
- Center 35% (where paragraph sits): mean=0.27, max=1.0
- ~2% of pixels above 0.7 luminance (the bright building lights that
  threaten white-text legibility)

These numbers informed the hero overlay gradient values and the
text-shadow choice in `navbar-fix.css`.

---

## 9. Recent commit history (most relevant)

| Commit | Summary |
|---|---|
| `5bceb59` | Premium breathing room in hero banner on mobile |
| `8dc6763` | Translate remaining Dutch strings to English in bundle |
| `a657579` | Mobile hero: faithful stacked adaptation of desktop |
| `974a59f` | Revert hero banner transparency to 0.55 alpha / blur 18px |
| `8b679c2` | Fix hero layout bug + (later reverted) banner near-transparent |
| `1ba1dba` | Hero overlay light gradient + text-shadow halo |
| `5c04a6e` | Polish hero mobile to match Senior Designer mockup |
| `445e19d` | Fix #system-flow mobile: vertical roadmap pattern |
| `6dd5d6e` | Fix hero mobile: H1 visibility + surface How It Works card |
| `a247b8c` | Fix 7-Day Deployment slider mobile: real DOM selectors |
