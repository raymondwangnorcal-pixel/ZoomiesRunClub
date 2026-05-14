# Project Instructions

## Project

This repository is for the public Zoomies Run Club NYC website.

Zoomies Run Club NYC is a dog-friendly, community-first run club built around the phrase:

> Presence > pace.

The site should feel playful, inclusive, social, beginner-friendly, polished, and production-ready. It should communicate that Zoomies welcomes runners, walkers, joggers, dog parents, people without dogs, first-timers, and anyone who wants movement without pace pressure.

## Handoff File

This repository uses `handoff.md` as the project-specific continuation file.

At the start of a new Codex session, read `handoff.md` from this repository root before making changes, if it exists.

Only use this repository's `handoff.md`. Do not use handoff files from sibling projects, parent folders, unrelated repositories, or global locations.

When context usage nears roughly 80%, update `handoff.md` with a compact but complete transfer summary.

## Required Design Guidance

Before making any UI, UX, navigation, styling, color, typography, animation, layout, or content-structure change, read and follow:

- `HI.md`

Treat `HI.md` as the source of truth for the Zoomies website interface principles.

## Technical Requirements

Build the website as:

- Next.js with the App Router
- TypeScript
- Tailwind CSS
- Deployable on Vercel with no custom server
- Clean, reusable components
- Semantic HTML and accessible links/buttons
- Responsive design for mobile, tablet, and desktop
- Basic SEO metadata

Do not scrape Instagram, Shopify, Substack, Pie, or any other external site.

## Required Links

Store external destinations in `lib/links.ts` and use them consistently:

- `SHOPIFY_URL`: `https://zoomiesrunclub.myshopify.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnT3Cdkemgd6zqKX4ZwTIdD5CYxUScoUxGZ8YBwhZY6LPtJF4sqWgUDHCfm_I_aem_F3PEOwwFEhO4sH28KZ5EqA`
- `SUBSTACK_URL`: `https://zoomiesrunclub.substack.com/p/oh-hi-zoomies-run-club?r=bcy9e&utm_campaign=post&utm_medium=web&utm_source=ig&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnJPtZt_ZTDLmrfSHsyJX_WIlHVPFIZ-IkfyiqSDURBL-4VN2vMzTv3y2ljbg_aem_rLwX8KtD2OBoUaNtTuqjwA&utm_id=97760_v0_s00_e0_tv3_a1dennhd4hwquc&triedRedirect=true`
- `PIE_URL`: `https://getpie.at/u/8052kk8z`
- `INSTAGRAM_URL`: placeholder until the real Instagram URL is provided

Use these distinctions throughout the site:

- Pie = event RSVP and upcoming runs
- Substack = newsletter, announcements, story, and updates
- Shopify = merch

## Content Requirements

The homepage should include:

- Hero
- About
- How it works
- Upcoming runs
- Newsletter
- Merch
- Community
- FAQ
- Footer

Suggested files:

- `app/page.tsx`
- `app/layout.tsx`
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
- `lib/links.ts`
- `lib/events.ts`

Do not create fake claims about exact upcoming dates. Sample event cards are allowed only if clearly labeled as sample format or paired with copy such as "Upcoming events are announced on Pie and Substack."

## Required Messaging

Hero:

- Headline: `Presence > pace.`
- Subheadline: `A dog-friendly NYC run club for runners, walkers, joggers, dog parents, and everyone in between.`
- Badge: `All dogs welcome. Humans too.`
- Primary CTA: `Join the next run` linking to `PIE_URL`
- Secondary CTA: `Subscribe for updates` linking to `SUBSTACK_URL`

About should explain:

- Zoomies started with sisters, friends, and dogs lacing up together.
- It grew into a real community.
- The mission is to make running feel fun again.
- No pace pressure.
- No gatekeeping.
- No leaving anyone behind.
- Walk, jog, run, cheer, or just show up.

Newsletter should be prominent:

- Title: `Be first to know.`
- Copy: `Upcoming runs, themed meetups, collabs, merch drops, pop-ups, and community updates land on Substack first.`
- CTA: `Subscribe on Substack` linking to `SUBSTACK_URL`

Merch:

- Title: `Zoomies gear.`
- Explain that merch drops live on the Shopify store.
- A tasteful product preview card for `Zoomies Hoodie` may show `$30` only as a current store preview.
- CTA: `Shop merch` linking to `SHOPIFY_URL`
- Do not build checkout.

FAQ must include:

- Do I need to be fast? No. Presence > pace.
- Can I bring my dog? Yes, dogs are part of the Zoomies energy.
- Can I come without a dog? Yes, humans without dogs are welcome too.
- Where are runs posted? Pie is the event RSVP hub, and Substack is the first place for announcements.
- Where can I buy merch? The Shopify store.
- Is this beginner-friendly? Yes. Walkers, joggers, runners, and first-timers are welcome.

## Brand Palette

Use these five colors as the primary brand palette:

- `#e3be6b`: warm gold accent
- `#a7adaf`: cool gray support color
- `#e0edf5`: pale blue background color
- `#ffffff`: clean white base
- `#232122`: charcoal text / dark anchor color

Backgrounds should primarily use `#ffffff` and `#e0edf5`.
Main text should use `#232122`.
Primary buttons should use `#e3be6b` with `#232122` text.
Secondary buttons should use `#232122` with `#ffffff` text or transparent backgrounds with `#232122` borders.
Cards should use `#ffffff` with soft borders and shadows.
Use `#a7adaf` for secondary text, borders, dividers, and muted UI elements.

## Design Priorities

The site should feel like NYC run club meets dog park meets stylish community brand.

Prioritize:

1. Mobile-first polish for Instagram traffic
2. Clear distinction between Pie, Substack, and Shopify
3. Warm community tone
4. Beginner-friendly copy
5. Accessible semantic structure
6. Reusable components
7. Production readiness

Use large rounded cards, playful sticker-style badges, curved route lines, paw-print motifs, soft shadows, generous spacing, and subtle palette-based gradients. Do not make the site look like a generic marathon website.

## Acceptance Criteria

- `npm run dev` works.
- `npm run build` succeeds.
- No TypeScript errors.
- No broken imports.
- No fake live data.
- All external links are stored in `lib/links.ts` and used consistently.
- The homepage feels like a real public-facing club website, not a template.
- The site clearly establishes: Pie = events, Substack = updates, Shopify = merch.

## If Instructions Conflict

If a user prompt conflicts with this file, follow the user prompt for the specific task while preserving the broader Zoomies product direction wherever possible.

If implementation details conflict with current code, inspect the current code first and adapt the design rules without breaking functionality.
