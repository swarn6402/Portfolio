# Swarnjeet Nath Tiwary — Portfolio

A personal portfolio site built with TanStack Start (React 19) and Tailwind CSS v4. Editorial design language, light/dark theming, and motion-driven interactions throughout.

## Tech Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router) (file-based routing, SSR)
- **UI:** React 19, [Tailwind CSS v4](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)
- **Animation:** [Motion](https://motion.dev/) (Framer Motion)
- **Auth & storage:** [Appwrite](https://appwrite.io/)
- **Deployment:** Vercel (via Nitro)

## Getting Started

```bash
bun install
bun run dev
```

The dev server runs at `http://localhost:3000`.

## Environment Variables

Copy `.env.example` to `.env` and provide the Appwrite credentials (required for the authentication routes):

| Variable | Description |
| --- | --- |
| `APPWRITE_ENDPOINT` | Base URL of your Appwrite instance |
| `APPWRITE_API_KEY` | API key with permissions for the project |
| `APPWRITE_PROJECT_ID` | Appwrite project ID |
| `APPWRITE_BUCKET_ID` | Storage bucket identifier |
| `VITE_INSTRUMENTATION_SCRIPT_SRC` | Optional analytics/instrumentation script URL |

## Project Structure

```
src/
├── routes/
│   ├── __root.tsx          # Root layout: fonts, theme bootstrap, global UI
│   └── _public/index.tsx   # Portfolio page (section composition)
├── components/
│   ├── portfolio/          # Page sections (Header, About, NowPlaying,
│   │                       #   Experience, Skills, Projects, Education,
│   │                       #   Certifications, Footer, ThemeToggle)
│   └── ui/                 # shadcn primitives + ScrollProgress, CustomCursor
├── styles.css              # Tailwind entry + font/color theme
└── components/portfolio/portfolio.css  # Portfolio CSS variables & dark mode
```

## Features

- **Editorial sections** — hero, about, listening, experience, skills, projects, education, certifications.
- **Light/dark theme** — driven by CSS variables with a no-flash inline bootstrap and persisted preference.
- **Motion** — staggered hero reveal, scroll-triggered fade-ups, animated section dividers, and a subtle 3D tilt on project cards. All animations respect `prefers-reduced-motion`.
- **Global UI details** — a scroll progress bar and a custom trailing cursor (desktop only, motion-aware).
- **Typography** — Geist (body/UI) and Geist Mono (code/tech chips) throughout, with Playfair Display reserved as the display face for the hero name. Loaded via Google Fonts.

> **Fonts note:** Font families are defined in the `@theme` block of `src/styles.css` — the file that imports Tailwind. `portfolio.css` is loaded as a standalone stylesheet and its `@theme` is **not** compiled, so font/theme tokens must live in `styles.css` to take effect.

## Scripts

```bash
bun run dev            # Start the dev server
bun run build          # Production build
bun run start          # Run the production server
bun run test           # Run Vitest
bun run lint           # ESLint
bun run format         # Prettier (use format:check to verify only)
```

## Authentication

Appwrite-backed auth routes are included: sign up (`/sign-up`), sign in (`/sign-in`), sign out (`/sign-out`), and password recovery (`/forgot-password` → `/reset-password`). The recovery flow derives the app URL from request headers, so it works across environments with no extra configuration.
