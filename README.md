# Aya Khaled — Data Analyst Portfolio

A frontend-only portfolio built with Next.js 14 (App Router), React 18,
TypeScript, and Tailwind CSS. No backend, API routes, database, or
environment variables.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Structure

```
app/
  layout.tsx, page.tsx         Layout, SEO metadata, home page
  opengraph-image.tsx          Social share image
  projects/page.tsx            All projects
  projects/[slug]/page.tsx     Project details (objective, process, metrics, insights, gallery)
  certifications/page.tsx      Certificate images
components/
  project/ProjectMedia.tsx     Screenshot gallery + enlarge viewer (Escape, arrows, focus trap)
  ui/                          Button, Badge, ProjectImage, ServiceCard, SocialLink
data/                          All content lives here
lib/utils.ts                   SITE constants (name, links, photo, URL)
public/                        projects/, certificates/, images/
```

## Updating content

Edit the files in `data/` and `lib/utils.ts`; components do not hold content.

- `data/projects.ts`: projects, metrics, process, insights, screenshots, links.
  The first project is the lead card on the home page and the first three are
  "featured". Link buttons only render for URLs that are filled in:
  `githubUrl`, `projectUrl` (Power BI report), `appUrl` (live app).
- `data/services.ts`, `data/skills.ts`, `data/certifications.ts`
- `lib/utils.ts`: name, email, social links, profile photo, site URL

### To finish the Diabetes project

Set `projectUrl` for `diabetes-analysis-prediction` in `data/projects.ts` to the
published Power BI report link. The "Power BI Report" button appears
automatically once it is set.

### Images

Diabetes screenshots are stored as lossless WebP (pixel-identical to the
originals, smaller files). The profile photo is `public/images/aya-photo.jpg`
(a 4:5 crop of the supplied portrait, no retouching).

## Deploying to Vercel

Push to the GitHub repository connected to the existing Vercel project. Vercel
detects Next.js and uses `npm run build`. No environment variables are needed.
