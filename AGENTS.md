# Agent Context — Bugarttia AI Website

## Quick Facts

- **Source lives in:** `github_repo/`
- **Never edit:** mobile/tablet styles directly (mobile-first)
- **Desktop changes only:** use `lg:` (1024px+) or `min-width: 1024px` media queries
- **Images:** `public/images/` → referenced as `/images/filename.jpg`
- **Build:** `npm run build` → `dist/`
- **Deploy:** `vercel --prod --yes`

## Folder Rules

```
src/sections/     # Page sections (Hero, Contact, etc.)
src/pages/        # Route-level pages
public/images/    # Static assets
```

## Common Tasks

### Add a photo to a section
1. Put image in `public/images/`
2. Use `<img src="/images/filename.jpg" className="hidden lg:block" />`
3. Run `npm run build`

### Fix desktop layout
- Add `lg:` utilities only
- Do not change base/mobile classes
- Test build after change

### Add a new route
1. Create component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update `vercel.json` if needed

## Cleanup Rules
- Delete old builds in `assets/` root
- Delete unused `src/assets/` files
- Keep comments minimal
- Update `.md` docs when architecture changes
