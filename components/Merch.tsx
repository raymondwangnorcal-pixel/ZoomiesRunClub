import Image from "next/image";
import { SHOPIFY_URL } from "@/lib/links";
import { ButtonLink } from "./ButtonLink";
import { PawPrint } from "./Decorative";

const dropNotes = ["Hoodies", "Club layers", "Future drops"];

export function Merch() {
  return (
    <section id="merch" className="bg-white" aria-labelledby="merch-title">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-zoomies-charcoal text-white shadow-soft">
          <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_20%_18%,rgba(227,190,107,0.28),transparent_22rem)]" />
          <PawPrint className="absolute -right-10 -top-8 size-44 rotate-12 text-zoomies-gold/20" />

          <div className="relative grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative min-h-[24rem] overflow-hidden lg:min-h-[34rem]">
              <Image
                src="/images/zoomies-hoodies.png"
                alt="Three Zoomies Run Club members wearing light blue Zoomies hoodies."
                fill
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover"
                priority={false}
              />
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-zoomies-charcoal to-transparent lg:inset-y-0 lg:right-0 lg:left-auto lg:h-auto lg:w-44 lg:bg-gradient-to-l" />
              <div className="absolute left-5 top-5 rotate-[-3deg] rounded-full bg-zoomies-gold px-5 py-3 text-sm font-black text-zoomies-charcoal shadow-sticker">
                Product drop
              </div>
            </div>

            <div className="relative flex flex-col justify-center p-6 sm:p-10 lg:p-12">
              <p className="mb-5 inline-flex w-fit rounded-full border border-white/20 px-4 py-2 text-sm font-black text-zoomies-gold">
                Shopify merch store
              </p>
              <h2
                id="merch-title"
                className="text-balance text-5xl font-black leading-[0.98] tracking-normal sm:text-6xl"
              >
                Wear the zoomies.
              </h2>
              <p className="mt-6 text-pretty text-lg font-medium leading-8 text-white/74">
                Gear for showing up in uniform, spotting the crew at check-in,
                and making the post-run sidewalk hang feel official. Drops live
                on Shopify when they are ready.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {dropNotes.map((note) => (
                  <div
                    key={note}
                    className="rounded-3xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-extrabold text-white/85"
                  >
                    {note}
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <ButtonLink href={SHOPIFY_URL}>Shop merch</ButtonLink>
                <div>
                  <p className="text-sm font-black text-white">Zoomies Hoodie</p>
                  <p className="mt-1 text-sm font-semibold text-white/58">
                    Current store preview: $30
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
