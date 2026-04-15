# Bugarttia AI — Developer Context

> **Current source:** `github_repo/`  
> **Stack:** Vite + React + TypeScript + Tailwind CSS v4 + GSAP  
> **Live:** https://bugarttia.ai  

---

## Project Structure

```
github_repo/
├── src/
│   ├── sections/          # Page section components
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AgentSystemSection.tsx
│   │   ├── DataIntelligenceSection.tsx
│   │   ├── ImplementationSection.tsx
│   │   ├── SystemFlowSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   └── SystemPage.tsx      # /system route (React)
│   ├── App.tsx                  # Home route composition
│   ├── main.tsx                 # Entry point
│   └── index.css                # Tailwind v4 + theme
├── public/images/               # Static images (served at /images/)
├── dist/                        # Build output (Vercel)
├── index.html                   # Production landing page
├── system.html                  # Standalone /system page
├── navbar-fix.css               # Mobile navbar override
├── vercel.json                  # SPA routing + /system rewrite
└── package.json
```

---

## Design System

### Colors
```css
--color-bugarttia-neon: #a3e635
--color-bugarttia-charcoal: #0a0a0a
--color-bugarttia-gray: #9ca3af
--color-bugarttia-white: #ffffff
```

### Utilities
- `glass-card` — `bg-white/5 backdrop-blur border border-white/10 rounded-2xl`
- `text-gradient` — neon green gradient text

---

## Development Rules

1. **Mobile-first** — Base styles are mobile; desktop overrides use `lg:` (1024px+)
2. **Desktop-only changes** — Never break existing mobile/tablet layouts
3. **Images** — Place static assets in `public/images/` (referenced as `/images/...`)
4. **Routing** — Internal nav uses `<Link>` from `react-router-dom`
5. **Animations** — GSAP ScrollTrigger only; register plugin once per file
6. **Build** — `npm run build` outputs to `dist/`
7. **Deploy** — Vercel manual deploy (`vercel --prod --yes`)

---

## Images Used

| Image | Section |
|---|---|
| `hero_city_night.jpg` | Hero background |
| `city_angle_02.jpg` | AgentSystem card |
| `city_street_03.jpg` | AgentSystem card |
| `enrichment_office.jpg` | AgentSystem card |
| `city_rooftop_04.jpg` | DataIntelligence grid |
| `city_bridge_05.jpg` | DataIntelligence grid |
| `city_aerial_06.jpg` | DataIntelligence grid |

---

## Routing

- `/` → `index.html` (React app home)
- `/system` → `system.html` (standalone 9-card page)
- Other routes → handled by React Router SPA (`vercel.json`)

---

## Last Updated
April 2026
