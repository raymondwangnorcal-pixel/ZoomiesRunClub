import { SUBSTACK_URL } from "@/lib/links";
import { ButtonLink } from "./ButtonLink";
import { PawPrint } from "./Decorative";

export function Newsletter() {
  return (
    <section
      id="newsletter"
      className="bg-zoomies-charcoal text-white"
      aria-labelledby="newsletter-title"
    >
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-gradient-to-br from-white/12 via-white/[0.04] to-zoomies-gold/20 p-6 shadow-soft sm:p-10 lg:p-14">
          <PawPrint className="absolute -right-8 -top-8 size-44 rotate-12 text-zoomies-gold/20" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-extrabold uppercase tracking-normal text-zoomies-gold">
                Newsletter
              </p>
              <h2
                id="newsletter-title"
                className="text-balance text-4xl font-black leading-[1.02] tracking-normal sm:text-5xl lg:text-6xl"
              >
                Be first to know.
              </h2>
              <p className="mt-6 text-pretty text-lg font-medium leading-8 text-white/78 sm:text-xl">
                Upcoming runs, themed meetups, collabs, merch drops, pop-ups,
                and community updates land on Substack first.
              </p>
            </div>
            <ButtonLink href={SUBSTACK_URL} variant="primary">
              Subscribe on Substack
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
