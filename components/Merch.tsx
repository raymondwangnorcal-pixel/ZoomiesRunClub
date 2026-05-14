import { SHOPIFY_URL } from "@/lib/links";
import { ButtonLink } from "./ButtonLink";
import { PawPrint } from "./Decorative";
import { SectionHeading } from "./SectionHeading";

export function Merch() {
  return (
    <section id="merch" className="bg-white" aria-labelledby="merch-title">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading
            id="merch-title"
            kicker="Merch"
            title="Zoomies gear."
          >
            <p>
              Merch drops live on the Shopify store. This site gives you the
              preview; Shopify handles the shop, cart, and checkout.
            </p>
          </SectionHeading>
          <div className="mt-7">
            <ButtonLink href={SHOPIFY_URL}>Shop merch</ButtonLink>
          </div>
        </div>

        <div className="zoomies-card relative overflow-hidden bg-zoomies-blue p-6 sm:p-8">
          <PawPrint className="absolute -right-8 top-10 size-36 rotate-12 text-white/70" />
          <div className="relative grid gap-6 sm:grid-cols-[0.9fr_1.1fr] sm:items-center">
            <div className="rounded-[2rem] bg-white p-6 shadow-soft">
              <div className="relative mx-auto aspect-[4/5] max-w-64 rounded-[2rem] bg-zoomies-charcoal p-6 shadow-sticker">
                <div className="absolute left-1/2 top-10 h-10 w-24 -translate-x-1/2 rounded-b-full border-x-[18px] border-b-[18px] border-zoomies-blue bg-zoomies-charcoal" />
                <div className="absolute inset-x-8 top-20 bottom-8 rounded-[2rem] bg-zoomies-charcoal" />
                <div className="absolute left-8 top-24 h-32 w-10 -rotate-12 rounded-full bg-zoomies-charcoal" />
                <div className="absolute right-8 top-24 h-32 w-10 rotate-12 rounded-full bg-zoomies-charcoal" />
                <div className="absolute left-1/2 top-36 grid size-24 -translate-x-1/2 place-items-center rounded-full border-4 border-zoomies-gold text-center text-lg font-black leading-none text-zoomies-gold">
                  ZRC
                </div>
              </div>
            </div>

            <div>
              <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-zoomies-charcoal shadow-sm">
                Current store preview
              </p>
              <h3 className="mt-5 text-4xl font-black leading-tight">
                Zoomies Hoodie
              </h3>
              <p className="mt-2 text-3xl font-black text-zoomies-charcoal">
                $30
              </p>
              <p className="mt-5 text-base font-medium leading-7 text-zoomies-charcoal/68">
                A cozy layer for pre-run coffee, post-run hangs, and all the
                in-between miles.
              </p>
              <p className="mt-5 text-xs font-bold uppercase tracking-normal text-zoomies-charcoal/55">
                Checkout lives on Shopify
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
