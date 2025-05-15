# shadcn/ui Vite Monorepo Template

This template provides a starting point for creating a monorepo with [shadcn/ui](https://ui.shadcn.com/), using Vite.js for the web application. It's inspired by the [official shadcn/ui monorepo documentation](https://ui.shadcn.com/docs/monorepo) but adapted for a Vite + React frontend environment.

## Features

- **Monorepo Setup**: Uses pnpm workspaces and Turborepo for efficient management of multiple packages.
- **Web Application (`apps/web`)**: A Vite-powered React application with TypeScript.
  - Configured with Tailwind CSS.
  - Uses shadcn/ui components from the shared `ui` package.
- **Shared UI Package (`packages/ui`)**: Contains shadcn/ui components, styles, and utilities shared across the monorepo.
- **Shared Configurations**:
  - `packages/eslint-config`: Centralized ESLint configuration.
  - `packages/typescript-config`: Centralized TypeScript configuration.
- **Vite Integration**: The `web` app uses Vite for fast development and optimized builds.

## Getting Started

### Prerequisites

- Node.js (version specified in `package.json`'s `engines` field, e.g., `>=20`)
- pnpm (version specified in `package.json`'s `packageManager` field, e.g., `pnpm@10.4.1`)

### Installation

1.  Clone this repository or use it as a template for your new project.
2.  Install dependencies from the root of the monorepo:
    ```bash
    pnpm install
    ```

### Initialize shadcn/ui (for the project)

If you are starting a new project based on this template's structure and shadcn/ui hasn't been initialized for the `web` app context yet, or if you need to reconfigure, you can run:

```bash
pnpm dlx shadcn@latest init -c apps/web
```

This command will guide you through setting up `components.json` for the `apps/web` project, which should be configured to use `packages/ui` for components and styles. This template comes with a pre-configured [`apps/web/components.json`](apps/web/components.json).

## Development

To start the development server for the `web` application:

```bash
pnpm dev
```

This command uses Turborepo to run the `dev` script defined in [`apps/web/package.json`](apps/web/package.json) (which is `vite`). The web application will typically be available at `http://localhost:5173`.

## Adding shadcn/ui Components

To add new shadcn/ui components:

1.  Run the `add` command from the **root of the monorepo**:
    ```bash
    pnpm dlx shadcn@latest add <component-name> -c apps/web
    ```
    For example, to add the `button` component:
    ```bash
    pnpm dlx shadcn@latest add button -c apps/web
    ```
2.  This command uses the configuration in [`apps/web/components.json`](apps/web/components.json).
3.  The component source code will be added to the `packages/ui/src/components` directory.
4.  The necessary dependencies will be added to [`packages/ui/package.json`](packages/ui/package.json).

The `apps/web/components.json` is configured with aliases like `"ui": "@workspace/ui/components"` and `"utils": "@workspace/ui/lib/utils"`, ensuring components are placed in and resolved from the shared `packages/ui` directory.

## Using Components in `apps/web`

Import components into your React files within the `apps/web` application from the `@workspace/ui` package:

```tsx
// Example: apps/web/src/App.tsx
import { Button } from "@workspace/ui/components/button"; // Or your specific alias

function App() {
  return (
    <div>
      <h1>My Vite + React App</h1>
      <Button>Click Me</Button>
    </div>
  );
}

export default App;
```

## Building for Production

To build all packages in the monorepo for production:

```bash
pnpm build
```

This command uses Turborepo to execute the `build` script for each package, including building the `web` app using Vite.

## Linting

To lint all packages in the monorepo:

```bash
pnpm lint
```

This uses Turborepo to run the `lint` script defined in the respective `package.json` files (e.g., [`apps/web/package.json`](apps/web/package.json), [`packages/ui/package.json`](packages/ui/package.json)).

## Folder Structure Overview

```
├── apps/
│   └── web/                # Vite + React application
│       ├── public/
│       ├── src/
│       ├── components.json # shadcn/ui config for the web app
│       ├── package.json
│       └── vite.config.ts
├── packages/
│   ├── ui/                 # Shared shadcn/ui components
│   │   ├── src/
│   │   │   ├── components/ # Actual shadcn/ui components
│   │   │   ├── lib/        # Utilities (e.g., cn)
│   │   │   └── styles/     # Global styles (globals.css)
│   │   ├── components.json # shadcn/ui config for the ui package
│   │   └── package.json
│   ├── eslint-config/      # Shared ESLint configuration
│   └── typescript-config/  # Shared TypeScript configuration
├── .eslintrc.js
├── package.json            # Root package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── tsconfig.json
└── turbo.json
```

## Project Customization Checklist

As you adapt this template for your specific project, consider the following customization steps:

- **[ ] Project Naming & Identity:**

  - [ ] Update `name` and `description` in the root `package.json`.
  - [ ] Update `name` in `apps/web/package.json` and `packages/ui/package.json`.
  - [ ] Change the browser tab title in `apps/web/index.html`.
  - [ ] Replace placeholder logos/favicons in `apps/web/public/`.

- **[ ] Branding & Styling:**

  - [ ] Define your project's color palette in `packages/ui/tailwind.config.mjs`.
  - [ ] Customize fonts and base styles in `packages/ui/src/styles/globals.css`.
  - [ ] Adapt or extend shadcn/ui components in `packages/ui/src/components` to match your brand.

- **[ ] Documentation (`README.md` and others):**

  - [ ] **Update this `README.md`**:
    - [ ] Reflect your project's specific purpose and features.
    - [ ] Add or remove sections relevant to your project.
    - [ ] Update setup instructions if you've made significant changes.
    - [ ] Include information on how to contribute (if applicable).
  - [ ] Add any necessary architectural decision records or further documentation.

- **[ ] Clean Up:**
  - [ ] Remove any example code or components from the template that are not needed for your project (e.g., the default `App.tsx` content).
