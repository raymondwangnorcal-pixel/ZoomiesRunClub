import { SUBSTACK_URL } from "@/lib/links";
import { ButtonLink } from "./ButtonLink";
import { PawPrint } from "./Decorative";

const dispatchItems = [
  "Behind-the-scenes notes",
  "Event announcements",
  "Collab news",
  "Merch drops",
  "Community spotlights",
];

export function Newsletter() {
  return (
    <section
      id="newsletter"
      className="bg-zoomies-charcoal text-white"
      aria-labelledby="newsletter-title"
    >
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-zoomies-gold/35" />
            <div className="relative rotate-[-1deg] rounded-[2rem] border border-zoomies-charcoal bg-white p-6 text-zoomies-charcoal shadow-sticker sm:p-8">
              <div className="flex items-start justify-between gap-5 border-b border-zoomies-gray/35 pb-5">
                <div>
                  <p className="text-sm font-black uppercase tracking-normal text-zoomies-gray">
                    Club dispatch
                  </p>
                  <p className="mt-2 font-black">From the Zoomies notebook</p>
                </div>
                <span className="rounded-full bg-zoomies-gold px-4 py-2 text-sm font-black">
                  Substack
                </span>
              </div>

              <p className="mt-7 text-2xl font-black leading-tight sm:text-3xl">
                A note from the club before it becomes a post, a meetup, a
                collab, or a hoodie sighting.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {dispatchItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-zoomies-gray/35 bg-zoomies-blue/55 px-4 py-3 text-sm font-extrabold"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <PawPrint className="absolute -bottom-7 -right-5 size-28 rotate-12 text-zoomies-gold/30" />
            </div>
          </div>

          <div className="lg:pl-8">
            <p className="mb-4 inline-flex rounded-full border border-white/20 px-4 py-2 text-sm font-black text-zoomies-gold">
              Stay in the loop
            </p>
            <h2
              id="newsletter-title"
              className="text-balance text-4xl font-black leading-[1.02] tracking-normal sm:text-5xl lg:text-6xl"
            >
              Get the first word on runs, collabs, merch drops, and community
              stories.
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-lg font-medium leading-8 text-white/75 sm:text-xl">
              Substack is where the warm-up starts: event announcements,
              behind-the-scenes notes, partner news, drop alerts, and little
              snapshots of the people who make Zoomies feel like Zoomies.
            </p>
            <div className="mt-8">
              <ButtonLink href={SUBSTACK_URL} variant="primary">
                Subscribe for updates
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
