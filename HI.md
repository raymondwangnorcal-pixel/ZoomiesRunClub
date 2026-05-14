# Zoomies Run Club NYC Human Interface Guide

This file guides Codex when designing or changing the Zoomies Run Club NYC website. It translates the club's identity into practical interface rules for a polished, public-facing site.

## Product Posture

Zoomies should feel warm, social, active, and low-pressure. The website is not a race-results platform, marathon training plan, or generic fitness landing page. It is a community front door for people who want to move through NYC with friends, dogs, and zero pace anxiety.

The interface should quickly answer:

- What is Zoomies?
- How do I join the next run?
- Where do I get updates?
- Where do I buy merch?

The core message is:

> Presence > pace.

## Core Principles

### 1. Community Before Performance

The site should lead with belonging, not speed.

- Use inclusive copy for runners, walkers, joggers, dog parents, people without dogs, first-timers, and friends who just want to show up.
- Avoid race-day language, elite training cues, mileage obsession, or leaderboard energy.
- Make the next step feel easy and social.
- Reinforce that walking, jogging, cheering, hanging, and bringing a dog all count.

### 2. Clear External Destinations

Zoomies uses external services for the key actions.

- Pie is for event RSVP and live upcoming runs.
- Substack is for announcements, updates, story, and newsletter.
- Shopify is for merch.

Do not blur these jobs. The site should route people confidently to the right place.

### 3. Mobile First, Instagram Ready

Many visitors will arrive from Instagram.

- The first mobile viewport must establish the brand, the vibe, and the primary action.
- Buttons must be large, obvious, and comfortable to tap.
- Sections should scan easily in short bursts.
- Avoid dense paragraphs, tiny navigation, and desktop-only composition.
- Keep vertical rhythm generous without making users scroll through fluff.

### 4. Playful, Not Childish

Zoomies can use dog-park joy and sticker energy without feeling unserious.

- Use paw prints, route lines, sticker badges, soft shadows, and rounded cards as accents.
- Keep typography crisp and readable.
- Use restrained decorative details so content stays clear.
- Prefer warm microcopy over gimmicks.

### 5. Presence Over Pace

Every page section should support the idea that showing up matters more than speed.

- Hero and community sections should repeat the low-pressure posture.
- About and FAQ copy should remove intimidation.
- Upcoming runs should point to Pie without inventing live schedule details.
- Newsletter copy should make Substack feel like the best way to stay close to the community.

### 6. Accessible by Default

The website must be usable by a broad audience.

- Use semantic HTML landmarks and headings.
- Use real links for external CTAs.
- Ensure external links have clear labels.
- Maintain strong contrast with the approved palette.
- Do not rely on color alone to communicate meaning.
- Use focus-visible states.
- Keep touch targets at least 44px high.
- Ensure text wraps cleanly on small screens.

### 7. Polished Restraint

The site should feel production-ready, not templated.

- Reuse components and spacing patterns.
- Avoid random one-off colors outside the palette.
- Keep shadows soft.
- Keep gradients subtle and palette-based.
- Use cards for repeated content, not for every page section.
- Do not nest UI cards inside other UI cards.

## Brand Palette

Use these colors as the dominant palette:

- Warm gold accent: `#e3be6b`
- Cool gray support: `#a7adaf`
- Pale blue background: `#e0edf5`
- Clean white base: `#ffffff`
- Charcoal text and anchors: `#232122`

Recommended roles:

- Page backgrounds: `#ffffff`, `#e0edf5`
- Main text: `#232122`
- Primary button background: `#e3be6b`
- Primary button text: `#232122`
- Secondary dark button background: `#232122`
- Secondary dark button text: `#ffffff`
- Borders/dividers/muted text: `#a7adaf`
- Cards: `#ffffff` with soft borders and shadows
- Decorative details: `#e3be6b`

Gradients may be used only when subtle and based on the palette, such as pale blue to white or white to a soft gold-tinted mix.

## Navigation

Primary nav labels:

- Home
- About
- Runs
- Newsletter
- Merch
- FAQ

Primary nav CTA:

- `Join next run`

The CTA should link to Pie.

## Section Guidance

### Hero

The hero must make Zoomies immediately recognizable.

Required content:

- Badge: `All dogs welcome. Humans too.`
- Headline: `Presence > pace.`
- Subheadline: `A dog-friendly NYC run club for runners, walkers, joggers, dog parents, and everyone in between.`
- Primary CTA: `Join the next run`
- Secondary CTA: `Subscribe for updates`

The hero should feel energetic and community-first, with visual cues like route lines, stickers, or paw-print details. Do not hide the main message inside a card.

### About

Explain the story plainly:

- Zoomies started with sisters, friends, and dogs lacing up together.
- It grew into a real community.
- The mission is to make running feel fun again.
- No pace pressure.
- No gatekeeping.
- No leaving anyone behind.
- Walk, jog, run, cheer, or just show up.

### How It Works

Use five simple steps:

1. Check Pie for the next run.
2. Subscribe on Substack for first access to announcements.
3. Bring yourself, a friend, or your dog.
4. Move at your own pace.
5. Hang after the run.

### Upcoming Runs

Do not fake live event listings.

If event cards are needed for layout, clearly label them as `Sample event format` or use copy such as `Upcoming events are announced on Pie and Substack.`

Required CTA:

- `View live events on Pie`

Required helper text:

- `For the most accurate schedule, check Pie and subscribe to Substack.`

### Newsletter

Make this section prominent.

Required content:

- Title: `Be first to know.`
- Copy: `Upcoming runs, themed meetups, collabs, merch drops, pop-ups, and community updates land on Substack first.`
- CTA: `Subscribe on Substack`

### Merch

Merch should preview the brand without becoming ecommerce.

Required content:

- Title: `Zoomies gear.`
- Explain that merch drops live on the Shopify store.
- CTA: `Shop merch`

A tasteful product preview card for `Zoomies Hoodie` may show `$30` only as a current store preview. Do not build cart or checkout flows.

### Community

Use cards for:

- Every pace welcome
- Dogs encouraged
- No pressure
- No gatekeeping
- No one left behind
- Stay for the hang

### FAQ

Include the required beginner-friendly questions from `AGENTS.md`.

Answers should be short, clear, warm, and low-pressure.

## Visual Checklist

Before finishing a UI change, verify:

- The first viewport communicates Zoomies, `Presence > pace.`, and the next action.
- Pie, Substack, and Shopify have distinct jobs.
- No section claims live event data unless it comes from a maintained source.
- The palette is dominated by the five approved colors.
- Mobile layout feels intentional, not just stacked desktop.
- Text does not overlap or overflow.
- Buttons and links have visible focus and hover states.
- Decorative details support the brand without blocking readability.
- Components are reusable and named clearly.
- The page feels like a real NYC community brand, not a generic running template.

## Implementation Defaults

When building the site:

- Use Next.js App Router conventions.
- Use TypeScript for components and data helpers.
- Use Tailwind CSS for styling.
- Keep external URLs in `lib/links.ts`.
- Keep sample event data, if any, in `lib/events.ts`.
- Use semantic sections with clear IDs for navigation.
- Prefer small, composable components.
- Keep copy human and concrete.
- Add basic SEO metadata in `app/layout.tsx`.
- Verify with `npm run build` before considering implementation complete.
