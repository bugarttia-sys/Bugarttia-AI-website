# Bugarttia AI website — context for AI tools (Kimi Code, Claude Code, etc.)

> **⚠️ UPDATE APRIL 2026:** Deze repo bevat nu VOLLEDIGE SOURCE CODE (Vite + React + TypeScript), niet alleen de static export. Alle fixes zijn toegepast op source-level.

---

## 1. Project Status

| Property | Value |
|---|---|
| **Source repo** | https://github.com/bugarttia-sys/Bugarttia-AI-website |
| **Production** | https://bugarttia.ai |
| **Framework** | Vite + React + TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Animations** | GSAP + ScrollTrigger |
| **Routing** | React Router DOM (SPA) |
| **Build** | `npm run build` → `dist/` |
| **Deploy** | Vercel (`vercel --prod --yes`) |

---

## 2. Repository Structure

```
Bugarttia-AI-website/
├── src/                          # ← REACT SOURCE CODE
│   ├── sections/
│   │   ├── Navigation.tsx        # Navbar met router links
│   │   ├── HeroSection.tsx       # Hero + 5 fixes toegepast
│   │   ├── AgentSystemSection.tsx # 3 agents + SVG icons + foto's
│   │   ├── DataIntelligenceSection.tsx # Nieuwe sectie met foto's
│   │   ├── ImplementationSection.tsx # 7-day timeline (vertical)
│   │   ├── SystemFlowSection.tsx # 4-step flow + CTA
│   │   ├── ContactSection.tsx    # Contact form
│   │   └── Footer.tsx            # Footer met links
│   ├── pages/                    # Multi-page routing
│   │   ├── HomePage.tsx          # Homepage layout
│   │   ├── SystemPage.tsx        # /system - 6 agents
│   │   ├── FlowPage.tsx          # /flow - pipeline steps
│   │   ├── PricingPage.tsx       # /pricing - 3 plans
│   │   ├── ImplementationPage.tsx # /implementation
│   │   └── ContactPage.tsx       # /contact - full page
│   ├── App.tsx                   # Router config
│   ├── main.tsx                  # Entry point
│   └── index.css                 # Tailwind + custom styles
├── images/                       # 7 city foto's
│   ├── hero_city_night.jpg
│   ├── city_angle_02.jpg
│   ├── city_street_03.jpg
│   ├── enrichment_office.jpg
│   ├── city_rooftop_04.jpg
│   ├── city_bridge_05.jpg
│   └── city_aerial_06.jpg
├── package.json                  # Dependencies
├── vite.config.ts               # Vite config
├── vercel.json                  # SPA routing (BELANGRIJK!)
└── dist/                        # Build output (git ignored)
```

---

## 3. Alle 5 Fixes Toegepast (Source-Level)

### Fix 1: Hero H1 Opacity
**Bestand:** `src/sections/HeroSection.tsx` (regel ~52)
```tsx
y.fromTo(h1Ref.current, {opacity: 0}, {opacity: 1, duration: 0.7}, 0.3);
```

### Fix 2: Hero Layout Flex Direction
**Bestand:** `src/sections/HeroSection.tsx` (regel ~142)
```tsx
className="... flex flex-col lg:flex-row items-stretch lg:items-center ..."
```

### Fix 3: Implementation Vertical Roadmap
**Bestand:** `src/sections/ImplementationSection.tsx`
- Grid layout: `grid-cols-[44px_1fr]`
- Mobile: verticale stack
- Desktop: horizontale timeline

### Fix 4: SystemFlow Whitespace + Layout
**Bestand:** `src/sections/SystemFlowSection.tsx`
- Zelfde vertical grid
- Whitespace-nowrap verwijderd

### Fix 5: Dutch → English
**Bestanden:** `src/sections/SystemFlowSection.tsx`
- "Volledig Autonome Executie." → "Fully Autonomous Execution."
- "Vraag een Live Demo aan" → "Request a Live Demo"

---

## 4. Multi-Page Routing

| Route | Component | Beschrijving |
|-------|-----------|--------------|
| `/` | HomePage | Hero + AgentSystem + DataIntelligence + Implementation + SystemFlow + Contact |
| `/system` | SystemPage | 6 agents grid met SVG icons |
| `/flow` | FlowPage | 6-stappen pipeline flow |
| `/pricing` | PricingPage | 3 pricing plans + FAQs |
| `/implementation` | ImplementationPage | 7-dagen deployment timeline |
| `/contact` | ContactPage | Contact formulier + bedrijfsinfo |

**Router:** `BrowserRouter` met `Routes` in `App.tsx`

---

## 5. Design System

### Kleuren
```css
--color-bugarttia-neon: #a3e635      /* Lime groen */
--color-bugarttia-charcoal: #0a0a0a  /* Achtergrond */
--color-bugarttia-gray: #9ca3af      /* Secundaire tekst */
--color-bugarttia-white: #ffffff     /* Primaire tekst */
```

### SVG Icons (6 stuks)
Alle iconen zijn custom SVG componenten in neon groen:
1. **SignalDetectionIcon** - Radar/target met cirkels
2. **DataEnrichmentIcon** - Verbonden nodes
3. **QualificationIcon** - Star met checkmark
4. **PersonalizationIcon** - Profiel met verbindingen
5. **OutreachIcon** - Email met checkmark
6. **MeetingIcon** - Kalender met checks

### Components
- `glass-card` - `bg-white/5 backdrop-blur border border-white/10 rounded-2xl`
- `text-gradient` - Neon groen gradient text

---

## 6. Foto's Gebruikt

| Foto | Locatie | Gebruik |
|------|---------|---------|
| `hero_city_night.jpg` | HeroSection | Achtergrond hero |
| `city_angle_02.jpg` | AgentSystemSection | Signal Detection card |
| `city_street_03.jpg` | AgentSystemSection | Data Enrichment card |
| `enrichment_office.jpg` | AgentSystemSection | Qualification card |
| `city_rooftop_04.jpg` | DataIntelligenceSection | Feature image |
| `city_bridge_05.jpg` | DataIntelligenceSection | Feature image |
| `city_aerial_06.jpg` | DataIntelligenceSection | Feature image |

---

## 7. Deployment Workflow

```bash
# 1. Wijzigingen maken in src/
# 2. Build
npm run build

# 3. Copy dist/ naar repo root
cp -r dist/* .

# 4. Commit & push
git add -A
git commit -m "Beschrijving van wijzigingen"
git push origin main

# 5. Deploy naar Vercel
vercel --prod --yes
```

⚠️ **Vercel auto-deploy is UITGESCHAKELD** - Gebruik altijd `vercel --prod --yes`

---

## 8. Mobile Responsive

### Breakpoints
- `sm:` 640px - Kleine tablets
- `md:` 768px - Tablets
- `lg:` 1024px - Desktop

### Key Mobile Patterns
- **Navbar:** Logo links, hamburger menu rechts
- **Hero:** Stacked layout (`flex-col`), side card onder tekst
- **7-Day Timeline:** Verticale stack met grid-cols-[44px_1fr]
- **System Page:** 6 agents → 1 kolom op mobile
- **Footer:** Stacked, gecentreerd

---

## 9. Links & Routing

### ALLE interne links gebruiken `<Link>` component:
```tsx
import { Link } from 'react-router-dom';

<Link to="/contact">Contact</Link>        ✅ Correct
<a href="/contact">Contact</a>            ❌ Fout (page reload)
```

### Huidige Link Status
| Locatie | Element | Link Naar | Status |
|---------|---------|-----------|--------|
| Navbar | Logo | `/` | ✅ Link |
| Navbar | Nav items | `/system`, `/flow`, etc. | ✅ Link |
| Navbar | CTA | `/contact` | ✅ Link |
| Hero | "Book a Strategy Call" | `/contact` | ✅ Link |
| Hero | "See the System" | `/system` | ✅ Link |
| Hero | "Explore the 9 agents" | `/system` | ✅ Link |
| SystemFlow | "Request a Live Demo" | `/contact` | ✅ Link |
| Footer | Logo | `/` | ✅ Link |
| Footer | Privacy/Terms | `/privacy`, `/terms` | ✅ Link (pagina's bestaan nog niet) |

---

## 10. Belangrijke Configuratie

### vercel.json (SPA Routing)
```json
{
  "rewrites": [
    { "source": "/((?!api/).*)", "destination": "/index.html" }
  ]
}
```
Dit zorgt ervoor dat directe links (`/contact`, `/system`) werken zonder 404.

### Tailwind Config
- **Geen** `tailwind.config.js` meer (Tailwind v4)
- Kleuren gedefinieerd in `src/index.css` via `@theme`

---

## 11. Troubleshooting

### 404 op /contact of andere pagina's
→ Controleer of `vercel.json` in repo root staat

### Foto's niet zichtbaar
→ Controleer of `images/` folder in repo root staat
→ Foto's moeten in `/images/` (niet `public/images/`)

### Build errors
```bash
# Tailwind v4 syntax
@import "tailwindcss";  # Niet @tailwind directives

# GSAP imports
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
```

---

## 12. TODO / Toekomst

- [ ] Privacy Policy pagina toevoegen
- [ ] Terms of Service pagina toevoegen
- [ ] Form backend (Formspree/Netlify Forms)
- [ ] Analytics (Plausible of Google Analytics)
- [ ] Vercel Git auto-deploy inschakelen in dashboard

---

**Laatst bijgewerkt:** 10 April 2026  
**Status:** ✅ Live op https://bugarttia.ai  
**Source:** Volledige Vite/React codebase in repo
