# GitHub Pages Deployment Setup

This repository is configured to automatically deploy to GitHub Pages using GitHub Actions.

## Custom Domain

The site is configured to be served at: **thebuzz.gravitas.uno**

## Deployment Process

The deployment happens automatically when:
- Code is pushed to the `main` branch
- Manual workflow dispatch is triggered

## Workflow Details

The deployment workflow (`.github/workflows/deploy.yml`) performs the following steps:

1. **Build Job**:
   - Checks out the code
   - Sets up Node.js 20
   - Installs dependencies using `npm ci`
   - Builds the project using `npm run build`
   - Uploads the `dist` folder as an artifact

2. **Deploy Job**:
   - Deploys the build artifact to GitHub Pages

## DNS Configuration Required

To complete the custom domain setup, configure the following DNS records at your domain registrar:

### For root domain (gravitas.uno):
- Type: `A`
- Name: `@`
- Value: `185.199.108.153`
- Value: `185.199.109.153`
- Value: `185.199.110.153`
- Value: `185.199.111.153`

### For subdomain (thebuzz.gravitas.uno):
- Type: `CNAME`
- Name: `thebuzz`
- Value: `jobbyist.github.io`

## GitHub Repository Settings

Ensure the following settings are configured in the GitHub repository:

1. Go to **Settings** > **Pages**
2. Under **Source**, select "GitHub Actions"
3. The custom domain `thebuzz.gravitas.uno` should appear automatically from the CNAME file

## Build Configuration

- The build output is configured in `vite.config.ts` with `base: "/"` for custom domain hosting
- The `public/CNAME` file ensures the custom domain is preserved after deployment

## Local Development

To run locally:
```bash
npm install
npm run dev
```

To build locally:
```bash
npm run build
npm run preview
```
