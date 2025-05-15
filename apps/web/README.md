# Web Application (`apps/web`)

This directory contains the Vite-powered React and TypeScript web application for the monorepo.

## Overview

- Framework: React with TypeScript
- Bundler: Vite
- UI Components: Consumes shared components from the `@workspace/ui` package.
- Styling: Tailwind CSS (configured to use styles from `packages/ui`).

## Development & Building

All development, building, and linting commands should typically be run from the **root of the monorepo**. Please refer to the [main project README.md](../../README.md) for these instructions (e.g., `pnpm dev`, `pnpm build`, `pnpm lint`).

## ESLint Configuration

ESLint is configured centrally within the monorepo. Please see the `packages/eslint-config` directory for the shared ESLint setup.

## Project Structure

apps/web/
├── public/ # Static assets (e.g., favicons, images)
├── src/ # Application source code
│ ├── App.tsx # Main application component
│ ├── main.tsx # Main entry point for the React application
│ └── vite-env.d.ts # Vite environment type declarations
├── .gitignore # Specifies intentionally untracked files by Git
├── components.json # shadcn/ui configuration for this app
├── eslint.config.js # ESLint configuration
├── tsconfig.json # Main TypeScript config for the app (references app and node configs)
└── vite.config.ts # Vite build tool configuration
