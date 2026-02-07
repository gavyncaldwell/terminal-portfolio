# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm run dev              # Start dev server (http://localhost:5173)
pnpm run build            # TypeScript check + Vite build
pnpm run build:prerender  # Build + static prerendering with Puppeteer
pnpm run lint             # Run ESLint
pnpm run format           # Format code with Prettier
pnpm run format:check     # Check if code needs formatting
```

## Architecture

**Terminal Portfolio** is a developer portfolio with a terminal aesthetic, built with React 18, TypeScript, Vite, and React Router v7. Deployed to Cloudflare Workers.

### Key Patterns

- **Feature-folder pages**: Each page has its own folder (`pages/About/About.tsx`, `About.css`, `index.ts`)
- **MDX blog posts**: Posts in `src/content/posts/` with frontmatter, manually imported in `src/utils/posts.ts`
- **Zustand state**: Terminal UI state only (history, open/close) in `src/store/terminalStore.ts`
- **CSS design tokens**: Variables defined in `src/styles/global.css` (colors, spacing, typography)
- **SEO-first**: Helmet for meta tags, JSON-LD schemas in `src/components/seo/`

### Terminal Navigation

The interactive terminal (`src/components/terminal/InteractiveTerminal.tsx`) is a core feature supporting commands: `help`, `ls`, `cd <page>`, `pwd`, `whoami`, `cat`, `clear`. Terminal is desktop-only; disabled on mobile (768px breakpoint).

### Routes

```
/           → Home
/about      → About
/work       → Work
/gear       → Gear
/gallery    → Gallery
/contact    → Contact
/writing    → Blog list
/writing/:slug → Blog post
```

## Code Style

- **No semicolons**, single quotes, 2-space indent, 100 char line width
- **Path alias**: `@/*` → `./src/*`
- Run `pnpm run format` before committing
