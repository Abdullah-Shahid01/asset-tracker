
# Asset Tracker Dashboard

A TypeScript + React (Vite) dashboard for tracking assets, liabilities, and balances. Styled with Tailwind and charted with Recharts. Validated with Zod. Ready for a 5-person team workflow.

## Tech
- React + TypeScript (Vite)
- Tailwind CSS
- Recharts
- Zod
- (Optional) @tanstack/react-query for data fetching & caching

## Getting Started
```bash
pnpm install
pnpm dev
```

## Scripts
- `pnpm dev` — run the app locally
- `pnpm build` — production build
- `pnpm preview` — preview production build
- `pnpm lint` — lint the codebase
- `pnpm format` — format with Prettier
- `pnpm typecheck` — TypeScript type checking
- `pnpm test` — placeholder for tests (add Vitest/Playwright when ready)

## Environment
Copy `.env.example` to `.env` and adjust values as needed.

## Contributing (Team of 5)
- Use **Conventional Commits** (e.g., `feat: add bank balances widget`).
- All changes via PR to `main` with passing CI (lint + build + typecheck).
- CODEOWNERS will auto-request reviews.

## Roadmap
- Option A: Connect Google Sheets API as data source (read-only).
- Option B: Migrate to Postgres + Prisma when schemas stabilize.
- Add Vitest + Playwright smoke tests.
- Add Vercel PR previews.
```