# Tupach Time Monorepo 👑

![License](https://img.shields.io/badge/license-ISC-green)
![Node.js](https://img.shields.io/badge/node->=20.0.0-blue)
![pnpm](https://img.shields.io/badge/pnpm-strict-orange)

Welcome to the `tupach-time` monorepo. This repository contains the source code for the fundamental epoch-shifting algorithm npm package, alongside the premium marketing website engineered for Cloudflare Workers.

## Repository Structure

We use a **pnpm workspace** to natively link dependencies and streamline the build process across the separated concerns.

- **`/packages/tupach-time`**: The core, dependency-free TypeScript library mapping moments in time to the Makaveli Cipher and mitigating the Year 2038 overflow bug.
- **`/apps/web`**: The premium presentation website built with Vue 3, Tailwind V4, and Vite-SSG natively running the workspace library.

## Getting Started

### Prerequisites
You must have [Node.js](https://nodejs.org/) installed along with the **pnpm** package manager. Do not use npm or yarn.

```bash
# If you don't have pnpm installed globally:
npm install -g pnpm
```

### Setup
1. Clone the repository.
2. Install all dependencies across the entire workspace from the root directory:
```bash
pnpm install
```

## Development Commands

All standard commands can be run seamlessly from the root directory. pnpm will automatically execute them recursively across both the library and the website.

- **Start Development Mode:**
  Runs the `tupach-time` package in watch mode and boots up the Vite HMR server for the frontend.
  ```bash
  pnpm dev
  ```

- **Run Tests:**
  Executes the Vitest algorithmic test suite aggressively asserting cipher mathematics.
  ```bash
  pnpm test
  ```

- **Production Build:**
  Compiles the strict ESM/CJS outputs for the library, and pre-renders the SSG HTML output for the website.
  ```bash
  pnpm build
  ```

## Deployment Workflows

Since the repository is split, deploying relies on targeting the specific package or app.

### Deploying the `tupach-time` npm package
1. Navigate to the library package.
2. Ensure you are completely built and tests pass.
3. Publish to the npm registry.
```bash
cd packages/tupach-time
pnpm run build
npm publish
```

### Deploying the Marketing Website to Cloudflare ☁️
The website is explicitly designed for the new **Workers Static Assets** binding which leverages free Cloudflare edge deployments without running any JavaScript isolate logic on the server.

1. Navigate to the web app.
2. Run the deployment script. Your local Wrangler CLI will bundle the `vite-ssg` static HTML out of `/dist` and sync it universally.
```bash
cd apps/web
pnpm run deploy
```

## Contributing Constraints 📜
When contributing to `tupach-time`, please adhere closely to these rules:
- **Strict TypeScript:** No `any`. Explicitly type all cipher logic perfectly.
- **Semicolon Free:** Format code without trailing semicolons.
- **Vite & Tailwind:** Only modify frontend styles via standard Tailwind V4 class tokens; do not bloat CSS.

### License
This repository is openly dedicated to the public under the **ISC License**.
