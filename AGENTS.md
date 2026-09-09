# Repository Guidelines

## Project Structure & Module Organization

`client/` contains the React application: route pages in `pages/`, page sections in `components/sections/`, reusable UI in `components/ui/`, and global styles in `global.css`. Utilities and their colocated tests live in `client/lib/`. `server/index.ts` configures Express, with handlers in `server/routes/`. Shared API types belong in `shared/api.ts`; static images, icons, and other assets belong in `public/`.

## Build, Test, and Development Commands

- `pnpm dev`: Start Vite with Express middleware on configured port 8080.
- `pnpm build`: Build the client into `dist/spa/` and the server into `dist/server/`.
- `pnpm start`: Run the built production server; build first.
- `pnpm typecheck`: Run TypeScript checks without emitting files.
- `pnpm test`: Run the Vitest suite once.
- `pnpm format.fix`: Run Prettier with `--write .`, rewriting matching files throughout the repository. Review the resulting diff.

## Coding Style & Naming Conventions

Use TypeScript and TSX for application code. Follow `.prettierrc`: two-space indentation, spaces instead of tabs, and trailing commas wherever supported (`trailingComma: "all"`). Use PascalCase filenames for pages and section components, such as `Index.tsx` and `AboutHero.tsx`. Preserve existing lowercase, hyphenated UI filenames. Use `@/` for client imports and `@shared/` for shared imports.

## Testing Guidelines

Use Vitest and colocate `*.spec.ts` tests with the logic they exercise. Follow `client/lib/utils.spec.ts` for `describe`, `it`, and `expect` examples. Add meaningful behavioral tests for logic changes, including relevant edge cases and regressions. Run the affected tests and type checks before submitting changes.

## Commit & Pull Request Guidelines

Observed commits use `feat:` and `refactor:` prefixes with concise descriptions; follow that style where appropriate. As contributor guidance, PRs should summarize changes, report validation results, link applicable issues, and include screenshots for visual changes. These recommendations are not established enforcement requirements.

## Architecture & Configuration

Add client routes in `client/App.tsx` before the catch-all route. Register server routes before the production SPA catch-all in `server/node-build.ts`. Create server endpoints only when server-side logic is necessary. Keep secrets in server-side environment configuration, out of client code and commits.
