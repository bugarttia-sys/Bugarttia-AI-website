# Desktop-Only Styling Guide

## Rule

**Desktop is an enhancement, not the default.**  
All layout, spacing, and typography defaults are mobile-first. Desktop overrides are applied **only** at the `lg` breakpoint (`min-width: 1024px`).

## Pattern

### CSS / Tailwind
```tsx
// Mobile-first base
<div className="py-24 px-6">

// Desktop override
<div className="py-24 lg:py-32 px-6 lg:px-[7vw]">
```

### JS behavior
```tsx
if (window.innerWidth >= 1024) {
  // desktop-only logic
}
```

## Applied Desktop Enhancements

| Section | Desktop Change |
|---|---|
| **Hero** | Side card vertically centered (`lg:top-1/2 lg:-translate-y-1/2`), content width capped (`lg:max-w-2xl`) |
| **AgentSystem** | Larger cards (`lg:p-8`), taller images (`lg:h-56`), wider gaps (`lg:gap-8`), bigger heading (`lg:text-5xl`) |
| **DataIntelligence** | Wider gaps (`lg:gap-8`), cinematic aspect (`lg:aspect-[16/9]`), bigger heading (`lg:text-5xl`) |
| **Implementation** | Larger timeline circles (`lg:w-16`), readable text (`lg:text-base` / `lg:text-sm`), connector lines |
| **SystemFlow** | Same timeline upgrades as Implementation |
| **Contact** | More vertical padding (`lg:py-32`), centered auto-width submit button (`lg:w-auto`) |
| **Footer** | More vertical padding (`lg:py-16`) |

## What NOT to do

- Do not write global CSS outside media queries
- Do not reduce mobile spacing to make desktop look better
- Do not remove or alter mobile breakpoints
