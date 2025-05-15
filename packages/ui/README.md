# Shared UI Package (`packages/ui`)

This package contains the shared UI components, styles, and utilities for the monorepo, primarily based on [shadcn/ui](https://ui.shadcn.com/).

## Overview

- **Purpose**: To provide a centralized library of reusable UI elements and styling configurations that can be consumed by applications within the monorepo (e.g., `apps/web`).
- **Components**: Actual shadcn/ui components are located in [`src/components/`](src/components/).
- **Styles**: Global styles, including Tailwind CSS base and shadcn/ui themes, are managed in [`src/styles/globals.css`](src/styles/globals.css).
- **Utilities**: Shared utility functions, such as `cn` for class name merging, are typically found in `src/lib/`.

## Adding Components

New shadcn/ui components are added to this package via commands run from the **root of the monorepo**. The `shadcn-cli` is configured (via [`apps/web/components.json`](../../apps/web/components.json)) to place new components directly into `packages/ui/src/components/`.

Refer to the [main project README.md](../../README.md#adding-shadcnui-components) for detailed instructions on adding components.

## Consuming Components

Components, styles, and utilities from this package are exported via the [`package.json`](package.json) `exports` field. Other packages in the monorepo, like `apps/web`, can import them using the `@workspace/ui` alias.

Example:

```tsx
import { Button } from "@workspace/ui/components/button";
import "@workspace/ui/globals.css"; // If direct import of global styles is needed
```

## Key Files

- **[`src/components/`](src/components/)**: Directory containing the source code for individual UI components (e.g., [`button.tsx`](src/components/button.tsx)).
- **[`src/lib/`](src/lib/)**: Directory for utility functions.
- **[`src/styles/globals.css`](src/styles/globals.css)**: Main CSS file that includes Tailwind CSS directives and shadcn/ui CSS variables.
- **[`components.json`](components.json)**: shadcn/ui configuration specific to this `ui` package. It defines how `shadcn-cli` interacts with this package if commands were targeted directly at it, and specifies the location of `globals.css`.
- **[`package.json`](package.json)**: Defines package metadata, dependencies, and the `exports` map that makes components and utilities available to other workspace packages.
- **[`tsconfig.json`](tsconfig.json)**: TypeScript configuration for this package, extending the shared [`@workspace/typescript-config/react-library.json`](../typescript-config/react-library.json).
- **[`eslint.config.js`](eslint.config.js)**: ESLint configuration, extending the shared [`@workspace/eslint-config/react-internal`](../eslint-config/react-internal.js).
- **`postcss.config.mjs`**: PostCSS configuration, typically used for processing Tailwind CSS. (Note: Link to this file if it exists, e.g., `postcss.config.mjs`)

## Local Development & Linting

While most build and development commands are run from the monorepo root, this package has its own `lint` script defined in its [`package.json`](package.json), which can be run via `pnpm lint` from within this directory or orchestrated by Turborepo from the root.

## Folder Structure

```
packages/ui/
├── src/
│   ├── components/         # Actual shadcn/ui components (e.g., button.tsx)
│   │   └── button.tsx      # Example component
│   ├── lib/                # Utilities (e.g., utils.ts for cn function)
│   │   └── utils.ts        # Example utility file
│   └── styles/
│       └── globals.css     # Global styles and Tailwind CSS directives
├── .gitignore              # Specifies intentionally untracked files by Git
├── components.json         # shadcn/ui configuration for this package
├── eslint.config.js        # ESLint configuration for this package
├── package.json            # Package metadata, dependencies, and exports
├── postcss.config.mjs      # PostCSS configuration
├── README.md               # This README file
├── tsconfig.json           # TypeScript configuration for this package
└── tsconfig.lint.json      # TypeScript configuration for linting
```

## Local Development & Linting

While most build and development commands are run from the monorepo root, this package has its own `lint` script defined in its [`package.json`](package.json), which can be run via `pnpm lint` from within this directory or orchestrated by Turborepo from the root.
