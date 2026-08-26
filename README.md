# Zohran Ahmad Khan — Portfolio

A React + Tailwind CSS portfolio site. Dark hero styled after the reference
design, with smooth-scrolling sections for education, skills, projects,
certifications, and contact.

## Before you deploy — fill in your real details

Open `src/data.js`. Everything on the page is driven from that one file:

- `profile.socials` — replace the GitHub / LinkedIn / LeetCode / email placeholder URLs
- `profile.resumeUrl` — link to your hosted resume PDF (or drop a `resume.pdf` in `public/` and point to `/resume.pdf`)
- `certifications` — replace the two placeholder cards with your real certifications (or delete them if you have none yet)
- `contact.email` / `contact.location` — your real contact details
- `projects[].links.code` / `.demo` — link each project to its GitHub repo and, if it's live, its demo URL

Everything else (education, skills, project descriptions) is already filled in
from what you've told me about your background — check it over and adjust
anything that's changed.

## Run it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
```

Outputs static files to `dist/`.

## Deploy

**Vercel (recommended, free)**
1. Push this folder to a GitHub repo.
2. Go to vercel.com -> New Project -> import the repo.
3. Framework preset: Vite. It auto-detects the build command (`npm run build`) and output dir (`dist`). Click Deploy.

**Netlify**
1. `npm run build` locally.
2. Go to netlify.com -> Sites -> drag and drop the `dist/` folder.
   (Or connect the GitHub repo with build command `npm run build` and publish directory `dist`.)

**GitHub Pages**
1. `npm install -D gh-pages`
2. Add `"homepage": "https://<you>.github.io/<repo>"` to `package.json` and a
   `"deploy": "gh-pages -d dist"` script.
3. `npm run build && npm run deploy`

## Tech

Vite, React, Tailwind CSS v4, lucide-react icons. No backend — the contact
form opens a pre-filled `mailto:` link, so it works with zero configuration.
