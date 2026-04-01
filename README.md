
  # Untitled

  This is a code bundle for Untitled. The original project is available at https://www.figma.com/design/53JN5yOnMlgoegxokpPq7o/Untitled.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

## Fullstack (Backend + DB + JWT)

This repo now also includes a Node/Express + Prisma + Postgres backend in `backend/`.

1. Start Postgres:
   - From the repo root, run `docker compose up -d`
2. Backend setup:
   - `cd backend`
   - `npm i`
   - `npm run prisma:generate`
   - `npm run prisma:migrate`
3. Start backend:
   - `npm run dev`
4. Start frontend (separate terminal):
   - From the repo root: `npm run dev`

Your frontend `Contact` page writes to `POST /api/contact`.

To test JWT-protected endpoints:
- Go to `/login`
- Register an account (any email + password >= 6)
- Login and open `/admin/leads` to view/delete stored messages.
  