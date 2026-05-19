# AGENTS.md

This project is a production-ready landing page for **KULLINKO — Refugio · Ski · Malalcahuello**, a premium mountain refuge brand collecting early waitlist demand.

## Architecture

- `src/routes/__root.tsx` defines the document shell, Spanish language metadata, and SEO metadata.
- `src/routes/index.tsx` contains the full landing page route with reusable section components for hero, status, experience, gallery, location, waitlist, CTA, and footer.
- `src/styles.css` contains global Tailwind import, typography, base colors, smooth scrolling, and reduced-motion handling.
- `public/__forms.html` is the static Netlify Forms detection file required for TanStack Start deployments.
- `netlify.toml` configures the Vite build and Netlify dev target.

## Key Technologies

- React 19 with TypeScript
- TanStack Start and file-based TanStack Router
- Vite 7
- Tailwind CSS 4
- Lucide React icons
- Netlify Forms

## Coding Conventions

- Keep route files TypeScript-first and strict-mode compatible.
- Use `@/` path aliases for shared imports when adding new modules.
- Prefer small reusable React functions for page sections instead of large inline JSX blocks.
- Use Tailwind utilities and the established brand palette directly in the page unless a token is shared globally.
- Keep UI copy concise, specific, and aligned with the premium mountain refuge tone.

## Form Behavior

The waitlist form posts URL-encoded data to `/__forms.html` with `form-name=kullinko-waitlist`. This path is intentional: it lets Netlify Forms process submissions before TanStack Start SSR routing. During local development or if Netlify Forms is unavailable, the form stores submissions in `localStorage` under `kullinko-waitlist` so the user experience still completes.

## Non-Obvious Decisions

- Unsplash images are referenced remotely to avoid bundling large assets and to keep the visual direction cinematic without repository weight.
- The design uses square editorial panels and restrained motion to stay closer to hospitality/editorial references than a generic startup landing page.
- `public/__forms.html` must remain in place and must include every field submitted by the React form.
