# AGENTS.md - Project Source of Truth

**Project:** Kartpetania Modern Website
**Protocol:** WaaS Standard Delivery Blueprint
**Last Updated:** 2025-12-04

---

## 1. Project Profile & Tech Stack

This project adheres to the **WaaS High-Ticket Protocol**. All contributions must strictly follow this stack.

-   **Framework:** Next.js 15+ (App Router)
-   **Language:** TypeScript (Strict Mode enabled)
-   **Styling:** Tailwind CSS + shadcn/ui
    -   *Constraint:* No hard-coded hex values in components. Use semantic tokens (e.g., `bg-primary`, `text-muted-foreground`).
-   **CMS:** Sanity (Content Management)
-   **Backend/Auth:** Supabase (User Data/Auth - *Optional/As Needed*)
-   **Internationalization:** `next-intl` (Middleware-based routing: `/en`, `/es`)
-   **Forms & Validation:** React Hook Form + Zod
-   **Package Manager:** npm
-   **Import Alias:** `@/*` maps to `./src/*`

---

## 2. Directory Structure & Ownership

Maintain a strict separation of concerns.

```text
src/
├── app/
│   ├── [locale]/           # Localized routes (e.g., /en/about, /es/contacto)
│   │   ├── layout.tsx      # Root layout with i18n provider
│   │   └── page.tsx        # Route page components
│   ├── api/                # Route Handlers (Server-side API)
│   └── globals.css         # Global styles & Tailwind directives
├── components/
│   ├── ui/                 # shadcn/ui primitives. DO NOT EDIT DIRECTLY.
│   ├── [feature]/          # Feature-specific components (e.g., Hero, BookingForm)
│   └── ...
├── lib/
│   ├── utils.ts            # CN/Clsx helpers
│   ├── actions/            # Server Actions
│   └── validations/        # Zod schemas
├── sanity/                 # Sanity Studio configuration & schemas
│   ├── schemas/            # Content type definitions
│   └── lib/                # Sanity client & image helpers
├── messages/               # Translation JSON files (en.json, es.json)
└── public/                 # Static assets (images, fonts)
```

## 3. Coding Style & Conventions

### TypeScript
-   **Strict Mode:** Enabled.
-   **No `any`:** Usage of `any` is strictly forbidden unless accompanied by a comment explaining the specific, unavoidable technical limitation.
-   **Interfaces:** Use `interface` for object definitions, `type` for unions/intersections.

### Tailwind CSS
-   **Utility First:** Use utility classes for layout and spacing.
-   **Semantic Colors:** Use `shadcn/ui` variable-based colors (e.g., `bg-background`, `text-foreground`) to ensure Dark Mode compatibility.
-   **Sorting:** Class names should be logically ordered (layout -> box model -> typography -> visual). *Recommended: prettier-plugin-tailwindcss*.

### Component Architecture
-   **Naming:** PascalCase for components (`HeroSection.tsx`), camelCase for hooks/utils (`useScroll.ts`).
-   **Composition:** Prefer smaller, composed components over monolithic files.
-   **Images:** ALWAYS use `next/image`.
    -   Must define `width/height` or `fill`.
    -   Must include descriptive `alt` text.
    -   Target LCP < 2.5s.

### Accessibility (a11y)
-   **Semantic HTML:** Use `<main>`, `<section>`, `<nav>`, `<header>`, `<footer>`.
-   **Interactive Elements:** Buttons must be `<button>`, links must be `<Link>`.
-   **ARIA:** Use `aria-label` where text is not visible. Ensure focus states are visible (`focus-visible:ring`).

---

## 4. Data & Validation

-   **Boundaries:** All data entering the application (API responses, Form inputs, URL params) MUST be validated.
-   **Tooling:** Use **Zod** for schema definition.
-   **Forms:** Use **React Hook Form** integrated with Zod resolvers.
    -   Do not rely on default HTML5 validation alone.

## 5. Migration & I18n Strategy

-   **Routing:** All public pages reside under `src/app/[locale]/`.
-   **Middleware:** `src/middleware.ts` handles locale detection and redirection.
-   **Content:** Static UI text uses `messages/*.json`. Dynamic content (blog, products) is fetched from Sanity and localized via the CMS structure.

## 6. Quality Gates & Workflow

### Commit Protocol
-   **Format:** Conventional Commits.
    -   `feat(scope): description`
    -   `fix(scope): description`
    -   `chore(scope): description`
    -   `docs(scope): description`
-   **Example:** `feat(booking): add date picker to reservation form`

### Preflight Checklist
Before opening a PR or pushing to main, run:

1.  **Type Check:** `npm run typecheck` (Ensure no TS errors)
2.  **Lint:** `npm run lint` (Ensure no ESLint warnings)
3.  **Build:** `npm run build` (Ensure production build succeeds)

---

**Note:** This document is the authoritative reference for the project's architecture. Deviations require explicit approval and documentation updates.
