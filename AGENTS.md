# RabbitHQ

A monorepo full-stack React + Express application. Client and server are fully standalone — each has its own `package.json`, `tsconfig.json`, and tooling configs.

Only create server endpoints when strictly necessary (e.g. private key handling, DB operations).

## Tech Stack

- **NPM**: Prefer npm
- **Frontend**: React 18 + React Router 6 (spa) + TypeScript + Vite + TailwindCSS 3
- **Backend**: Express server + TypeScript
- **Testing**: Vitest (client)
- **UI**: Radix UI + TailwindCSS 3 + Lucide React icons

## Project Structure

```
client/                     # Standalone React SPA
├── package.json            # Client dependencies & scripts
├── tsconfig.json           # Client TypeScript config
├── vite.config.ts          # Vite config (proxies /api to server)
├── tailwind.config.ts      # TailwindCSS config
├── postcss.config.js       # PostCSS config
├── components.json         # shadcn/ui config
├── index.html              # Vite HTML entry
├── main.tsx                # React DOM entry
├── App.tsx                 # SPA routing setup
├── global.css              # TailwindCSS theming & global styles
├── public/                 # Static assets (images, favicon)
├── pages/                  # Route page components
├── components/ui/          # Pre-built UI component library
├── hooks/                  # Custom React hooks
└── lib/                    # Utilities (cn, etc.)

server/                     # Standalone Express API
├── package.json            # Server dependencies & scripts
├── tsconfig.json           # Server TypeScript config
├── vite.config.ts          # Production build config
├── app.ts                  # Express app factory (createServer)
├── index.ts                # Dev entry point (listens on port)
├── node-build.ts           # Production entry (serves SPA + API)
├── routes/                 # API route handlers
├── shared/                 # Shared types (API interfaces)
│   └── api.ts
└── netlify/                # Netlify serverless functions
    └── functions/
        └── api.ts
```

Root files: `package.json` (orchestration scripts), `.gitignore`, `.prettierrc`, `.npmrc`, `netlify.toml`, `AGENTS.md`

## SPA Routing

Routes are defined in `client/App.tsx` using React Router 6:

```typescript
import { BrowserRouter, Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Index />} />
  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
  <Route path="*" element={<NotFound />} />
</Routes>;
```

Page components live in `client/pages/`.

### Styling System

- **Primary**: TailwindCSS 3 utility classes
- **Theme and design tokens**: `client/global.css`
- **UI components**: `client/components/ui/`
- **Utility**: `cn()` function in `client/lib/utils.ts`

### Express Server

- **Dev**: Server runs on port 3001, client proxies `/api/*` to it
- **Production**: Server serves the built SPA and handles API routes
- **API endpoints**: Prefixed with `/api/`

#### Example API Routes

- `GET /api/ping` - Simple ping
- `GET /api/demo` - Demo endpoint

### Shared Types

Server owns shared types in `server/shared/api.ts`. Server imports use relative paths:

```typescript
import { DemoResponse } from "../shared/api";
```

Path aliases:

- `@/*` — resolves to `client/*` (client-side only)

## Development Commands

From the **root**:

```bash
npm run dev           # Start both client + server
npm run dev:client    # Start client only (port 3000)
npm run dev:server    # Start server only (port 3001)
npm run build         # Build both
npm run start         # Start production server
npm run typecheck     # Typecheck both
npm run test          # Run client tests
npm run install:all   # Install deps in both client/ and server/
```

From **client/** or **server/** directly:

```bash
npm run dev           # Start that service
npm run build         # Build that service
npm run typecheck     # Typecheck that service
```

## Adding Features

### New API Route

1. Optionally define a type in `server/shared/api.ts`
2. Create handler in `server/routes/my-route.ts`
3. Register in `server/app.ts`

### New Page Route

1. Create `client/pages/MyPage.tsx`
2. Add `<Route path="/my-page" element={<MyPage />} />` in `client/App.tsx`

### New Theme Colors

Edit `client/global.css` and `client/tailwind.config.ts`.

## Production Deployment

- **Standard**: `npm run build` from root
- **Netlify**: Configured via `netlify.toml`
- **Manual**: `cd server && npm start` (serves built SPA + API)
