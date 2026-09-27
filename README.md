# Independent Software Development Website

A production-ready, single-page services website built with React, TypeScript, and Vite. It is designed for an independent developer offering websites, mobile apps, automation, and MVP development.

## Run locally

Requirements: Node.js 22.12 or newer and npm.

```bash
npm install
npm run dev
```

Vite will print the local address. To verify the production build:

```bash
npm run typecheck
npm run build
npm run preview
```

## Edit the site

Start with [`src/config/site.ts`](src/config/site.ts). It centralizes:

- developer name and role
- contact email
- GitHub and optional LinkedIn URLs
- services and deliverables
- packages and pricing copy
- maintenance offerings
- portfolio projects
- process steps and FAQs

The developer name, phone number, GitHub profile, and custom domain are configured for Luis Molina. Email is intentionally blank, so contact buttons use the phone number until a real email address is added. Replace all three portfolio placeholders with real projects. Package pricing is intentionally stored as editable text.

## Deploy to GitHub Pages

The included workflow deploys automatically whenever `main` is pushed.

1. Push this project to GitHub.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open the **Actions** tab and confirm the **Deploy to GitHub Pages** workflow finishes successfully.
5. The site will be available at `https://luismolina.net/`.

The Vite base path is `/` because the site uses the custom domain `luismolina.net`.

### Free hosting and repository visibility

GitHub Pages availability for private repositories depends on your GitHub plan. If your account does not include private-repository Pages, make the repository public to use GitHub Pages for free. Do not do this if the repository contains anything you do not want to publish.

## Custom domain

`luismolina.net` is configured in `public/CNAME`, and the Vite production base is `/`. The Namecheap DNS records point the apex domain and `www` subdomain to GitHub Pages. After GitHub validates the domain and provisions its certificate, enable **Enforce HTTPS** in **Settings → Pages**.

## Project structure

```text
src/
  components/   Reusable cards and section headings
  config/       Site identity and editable content
  styles/       Global responsive design system
  App.tsx       Page sections and navigation
public/         Static assets, including the favicon
.github/        GitHub Pages deployment workflow
```

## Notes

- The contact button opens the visitor's email app with a structured project-inquiry draft.
- Third-party costs and app-store approval are not represented as included or guaranteed.
- There are no testimonials, client logos, outcome claims, or invented statistics.
- Add a privacy page when you introduce analytics, form services, or other data collection that requires one.
