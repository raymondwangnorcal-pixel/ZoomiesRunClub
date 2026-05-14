# Zoomies Run Club NYC Handoff

Last updated: 2026-05-14

## Current Task Goal

Build a polished, production-ready website for Zoomies Run Club NYC, designed to deploy on Vercel.

The initial implementation is complete: the repository now contains a Next.js App Router site with TypeScript, Tailwind CSS, reusable components, SEO metadata, centralized external links, sample event-format data, and the requested homepage sections.

## Product Summary

Zoomies Run Club NYC is a dog-friendly, community-first run club built around:

> Presence > pace.

The site presents Zoomies as playful, inclusive, social, beginner-friendly, warm, energetic, and polished. It welcomes runners, walkers, joggers, dog parents, people without dogs, first-timers, and anyone who wants movement without pace pressure.

The desired feel is:

- NYC run club
- Dog park energy
- Stylish community brand
- Fun without feeling childish
- Active without feeling competitive

## Source Links

External links are stored in `lib/links.ts`:

- `SHOPIFY_URL`: Zoomies Run Club Shopify merch store
- `SUBSTACK_URL`: Substack announcement/newsletter post titled "Oh hi Zoomies Run Club!"
- `PIE_URL`: Pie event / RSVP hub
- `INSTAGRAM_URL`: placeholder URL until the real Instagram URL is provided

Use these roles consistently:

- Pie = live events, RSVP, upcoming runs
- Substack = announcements, story, newsletter, updates
- Shopify = merch

The app does not scrape Instagram, Shopify, Substack, or Pie. It only links out to the external destinations.

## User Requirements And Constraints

Technical:

- Use Next.js with the App Router.
- Use TypeScript.
- Use Tailwind CSS.
- Make the site deployable on Vercel with no custom server.
- Use clean, reusable components.
- Use semantic HTML and accessible links/buttons.
- Use responsive design for mobile, tablet, and desktop.
- Add basic SEO metadata.
- `npm run dev` must work.
- `npm run build` must succeed.
- No TypeScript errors.
- No broken imports.

Content:

- Do not create fake claims about exact upcoming dates.
- Do not fake live event listings.
- Sample event cards are allowed only if clearly labeled as sample content or sample event format.
- External CTAs should open the real Shopify, Substack, and Pie links.
- The homepage should clearly establish the distinction between events, updates, and merch.

## Implemented File Structure

Core app:

- `app/page.tsx`
- `app/layout.tsx`
- `app/globals.css`
- `next.config.ts`
- `package.json`
- `package-lock.json`
- `postcss.config.js`
- `tailwind.config.ts`
- `tsconfig.json`

Components:

- `components/Navbar.tsx`
- `components/Hero.tsx`
- `components/About.tsx`
- `components/HowItWorks.tsx`
- `components/UpcomingRuns.tsx`
- `components/Newsletter.tsx`
- `components/Merch.tsx`
- `components/Community.tsx`
- `components/FAQ.tsx`
- `components/Footer.tsx`
- `components/ButtonLink.tsx`
- `components/Decorative.tsx`
- `components/SectionHeading.tsx`

Data/constants:

- `lib/links.ts`
- `lib/events.ts`

Project guidance:

- `AGENTS.md`
- `HI.md`
- `handoff.md`

## Homepage Implementation

The homepage includes:

- Sticky responsive navigation with Home, About, Runs, Newsletter, Merch, FAQ, and `Join next run`.
- Hero with `Presence > pace.`, required subheadline, required badge, Pie CTA, and Substack CTA.
- Decorative code-native route line, paw motifs, runner/dog illustration, and sticker-style details.
- About section covering sisters, friends, dogs, community, fun running, no pace pressure, no gatekeeping, no one left behind, and show-up-as-you-are movement.
- How it works section with the required five steps.
- Upcoming runs section that clearly says live events are announced on Pie and Substack.
- Three clearly labeled `Sample event format` cards in `lib/events.ts`.
- Prominent Substack newsletter section titled `Be first to know.`
- Merch preview section titled `Zoomies gear.`
- Shopify CTA and a `Zoomies Hoodie` preview with `$30` shown as a current store preview.
- Community cards for the six required values.
- FAQ with all required questions and answers.
- Footer with `Get your zoomies on.`, Pie/Substack/Shopify/Instagram links, and a contact placeholder.

## Brand And Design Direction

Implemented palette:

- `#e3be6b`: warm gold accent
- `#a7adaf`: cool gray support color
- `#e0edf5`: pale blue background color
- `#ffffff`: clean white base
- `#232122`: charcoal text / dark anchor color

Implementation notes:

- Backgrounds primarily use white and pale blue.
- Main text uses charcoal.
- Primary CTAs use gold with charcoal text.
- Secondary CTAs use charcoal or outlined white/transparent treatments.
- Cards use white with soft borders and shadows.
- Decorative route lines, paw motifs, stickers, and accents use gold.
- Letter-spacing utilities were normalized to avoid nonzero tracking.
- Mobile hero illustration sizes were tightened to reduce clipping risk on narrow screens.

## Files Inspected

- `AGENTS.md`
- `HI.md`
- `handoff.md`
- `package.json`
- `package-lock.json`
- `tsconfig.json`
- `app/layout.tsx`
- `app/page.tsx`
- `app/globals.css`
- `components/*`
- `lib/*`

## Files Modified

- `AGENTS.md`
- `HI.md`
- `handoff.md`
- `.gitignore`
- `package.json`
- `package-lock.json`
- `tsconfig.json`
- `next.config.ts`
- `postcss.config.js`
- `tailwind.config.ts`
- `app/layout.tsx`
- `app/page.tsx`
- `app/globals.css`
- `components/Navbar.tsx`
- `components/Hero.tsx`
- `components/About.tsx`
- `components/HowItWorks.tsx`
- `components/UpcomingRuns.tsx`
- `components/Newsletter.tsx`
- `components/Merch.tsx`
- `components/Community.tsx`
- `components/FAQ.tsx`
- `components/Footer.tsx`
- `components/ButtonLink.tsx`
- `components/Decorative.tsx`
- `components/SectionHeading.tsx`
- `lib/links.ts`
- `lib/events.ts`

## Important Implementation Decisions

- Built the site manually instead of using `create-next-app` so the final structure matches the requested `app/`, `components/`, and `lib/` layout.
- Used `next@16.2.6`, `react@19.2.6`, `react-dom@19.2.6`, TypeScript, and Tailwind CSS v3.
- Stored all external destinations in `lib/links.ts`.
- Kept sample events in `lib/events.ts` and clearly labeled each card `Sample event format`.
- Did not implement ecommerce or checkout; merch links out to Shopify.
- Did not implement live event fetching; events link out to Pie.
- Did not implement newsletter capture; newsletter CTA links out to Substack.
- Used code-native SVG/CSS visuals for route lines, paw prints, runner/dog illustration, and merch preview.
- Opened external CTAs in a new tab with `target="_blank"` and `rel="noreferrer"`.

## Current State Of The Code

The Next.js app is implemented and buildable. The homepage is a static, Vercel-ready App Router page with no custom server.

Current dev server status during this session:

- `npm run dev` was started successfully at `http://localhost:3000`.
- The dev server returned `GET / 200`.

## Tests Run And Results

Commands run:

- `npm install` succeeded.
- `npm run typecheck` succeeded.
- `npm run build` succeeded.
- `npm run dev` succeeded after being allowed to bind to port 3000.
- `curl -I http://localhost:3000` returned `HTTP/1.1 200 OK` after being allowed outside the sandbox.
- `curl http://localhost:3000` returned the rendered homepage HTML.

Notes:

- The first `npm run build` failed only because the sandbox blocked Turbopack from creating a local process/port during CSS processing. Rerunning with approved build permission succeeded.
- The first `npm run dev` failed only because the sandbox blocked binding to `0.0.0.0:3000`. Rerunning with approved dev permission succeeded.
- `npm install` reported two moderate severity npm audit findings. No `npm audit fix --force` was run because it may introduce breaking dependency changes.

## Known Bugs, Gaps, Or Risks

- The real Instagram URL has not been provided; `INSTAGRAM_URL` is currently a placeholder.
- The footer contact is a placeholder.
- Browser UI verification through Chrome was attempted, but Chrome was noisy with many existing user tabs; verification was completed through build/typecheck and direct local HTTP checks instead.
- No deployment has been created yet.
- No real image assets from Zoomies have been added; the current visual system uses code-native illustration and decorative assets.

## Exact Next Steps

1. Replace `INSTAGRAM_URL` with the official Zoomies Instagram URL when provided.
2. Replace the footer contact placeholder with the official contact channel when provided.
3. Optionally add real brand/photo assets if the user provides them.
4. Deploy to Vercel when ready.
5. If requested, connect a custom domain and add final production Open Graph image assets.
