# Claude Connectors Blog

A technical blog documenting how Claude uses **GitHub** and **Vercel** connectors to go from a
conversation to a real, deployed development workflow \u2014 and this repository is itself the example:
every file in it was written, committed, and deployed by Claude through those same connectors.

**Live site:** https://claude-connectors-blog.vercel.app *(final URL confirmed after deployment)*

## Overview

The site walks through:

- What Claude connectors are and how OAuth read/write permissions work
- The GitHub connector: reading, writing, committing, branching, pull requests
- The Vercel connector: projects, deployments, previews, environment variables, logs
- How GitHub and Vercel complement each other in a continuous deployment loop
- A step-by-step tutorial that documents this exact site's build/commit/deploy lifecycle
- Security & permissions practices, and a troubleshooting guide for both services

## Features

- Fully responsive, mobile-first layout
- Hand-built SVG and flow diagrams (no external image dependencies)
- Syntax-styled code blocks
- Full SEO metadata: Open Graph, Twitter cards, sitemap, robots.txt
- Semantic HTML and accessible navigation

## Tech stack

- [Next.js](https://nextjs.org) (App Router)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel](https://vercel.com) for hosting and CI/CD

## Project structure

```
app/            routes: page.tsx per URL, layout.tsx, metadata, sitemap, robots
components/     shared UI: Nav, Footer, Card, CodeBlock, FlowDiagram, ArchitectureDiagram
public/         static assets
```

## Local setup

```bash
git clone https://github.com/vinith4/claude-connectors-blog.git
cd claude-connectors-blog
npm install
```

## Development

```bash
npm run dev
```

Visit `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Deployment

This project deploys to Vercel automatically on every push to `main`, via a Vercel project linked
directly to this GitHub repository. Pull requests and other branches get their own preview
deployments.

## The GitHub + Vercel workflow, in short

```
Claude
  \u2502
  \u251c\u2500\u2500 GitHub Connector \u2192 Repository \u2192 Source Code \u2192 Commit
  \u2502
  \u2514\u2500\u2500 Vercel Connector \u2192 Deployment \u2192 Production
```

GitHub is the source of truth for code; Vercel is the source of truth for what's live. See the
`/workflow` page on the live site for the full explanation.

## Notes

No secrets, API keys, or tokens are stored in this repository. Configuration lives in Vercel's
environment variable settings.
