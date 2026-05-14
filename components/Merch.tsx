import Image from "next/image";
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

        <div className="zoomies-card relative overflow-hidden bg-zoomies-blue p-5 sm:p-8">
          <PawPrint className="absolute -right-8 top-10 size-36 rotate-12 text-white/70" />
          <div className="relative grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="relative aspect-[1.45/1] overflow-hidden rounded-[1.65rem] border border-white/80 bg-white shadow-soft sm:aspect-[1.7/1]">
              <Image
                src="/images/zoomies-hoodies.png"
                alt="Three Zoomies Run Club members wearing light blue Zoomies hoodies."
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
