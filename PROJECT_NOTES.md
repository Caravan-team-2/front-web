# PROJECT NOTES

## 2025-09-19 Login page (/auth/login)

- Implemented `/auth/login` route with Tailwind form.
- Assumptions due to limited Figma details (`https://www.figma.com/design/BSOvW8q2slPasl6PHKyh6n/Constat?node-id=108-3786&t=HBJ3rnvg8mH0RSOH-4`):
  - Basic form: email, password, submit, and links to forgot/register.
  - Neutral, minimal styling to match current app baseline.
- Wired a minimal submit handler that sets Jotai `authAtom` and redirects to `/` for now. Replace with real API call.
- Updated `utils/auth-guard.ts` to import `atoms/auth` and redirect to `/auth/login`.
- After adding more auth routes (forgot/register), remove temporary `@ts-expect-error` comments and regenerate TanStack route types (`routeTree.gen.ts`).
