import Image from "next/image";
import { SUBSTACK_URL } from "@/lib/links";
import { ButtonLink } from "./ButtonLink";

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
            <div className="relative aspect-[1.22/1] overflow-hidden rounded-[2rem] border border-zoomies-charcoal bg-white shadow-sticker">
              <Image
                src="/images/substack-dispatch.webp"
                alt="Zoomies Run Club members wearing light blue hoodies outside a cafe."
                fill
                sizes="(min-width: 1024px) 43vw, 100vw"
                className="object-cover"
              />
              <div className="absolute left-5 top-5 rounded-full bg-zoomies-gold px-4 py-2 text-sm font-black text-zoomies-charcoal shadow-sticker">
                Club dispatch
              </div>
              <div className="absolute bottom-5 right-5 rounded-full bg-white px-4 py-2 text-sm font-black text-zoomies-charcoal shadow-sticker">
                Substack first
              </div>
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
