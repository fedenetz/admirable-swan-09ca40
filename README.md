# KULLINKO Landing Page

KULLINKO is a production-ready landing page for a premium mountain refuge brand in Malalcahuello, Chile. The site presents the refuge concept, project status, experience pillars, cinematic image direction, location context, and a functional waitlist form for early demand capture.

## Key Technologies

- React 19
- TanStack Start and TanStack Router
- Vite 7
- Tailwind CSS 4
- Lucide React icons
- Netlify Forms for waitlist submissions

## Local Development

Install dependencies, then run the development server:

```bash
npm install
npm run dev
```

The Netlify configuration uses `dist/client` as the publish directory and is ready for Netlify deployment. For local Netlify feature emulation, run Netlify Dev from the project root:

```bash
netlify dev
```

## Waitlist Form

The waitlist form posts to Netlify Forms through the static detection file at `public/__forms.html`. If the form endpoint is unavailable during local development, the submission is stored in `localStorage` under `kullinko-waitlist` so the visual flow remains functional.
