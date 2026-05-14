import Image from "next/image";
import { PIE_URL, SUBSTACK_URL } from "@/lib/links";
import { ButtonLink } from "./ButtonLink";
import { PawPrint, RouteLine } from "./Decorative";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[calc(100vh-5rem)] overflow-hidden bg-gradient-to-b from-zoomies-blue via-white to-white"
      aria-labelledby="hero-title"
    >
      <RouteLine className="absolute left-1/2 top-24 -z-10 h-56 w-[42rem] -translate-x-1/2 text-zoomies-gold/45 sm:top-20 lg:left-[62%] lg:h-72 lg:w-[52rem]" />
      <PawPrint className="absolute -right-8 top-28 -z-10 size-40 rotate-12 text-white/70 sm:right-8 sm:size-52" />
      <PawPrint className="absolute -left-10 bottom-10 -z-10 size-40 -rotate-12 text-zoomies-gold/15 sm:left-10 sm:size-52" />

      <div className="section-shell grid items-center gap-12 pt-12 sm:pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:pt-20">
        <div className="max-w-3xl">
          <div className="sticker mb-7">All dogs welcome. Humans too.</div>
          <h1
            id="hero-title"
            className="text-balance text-6xl font-black leading-[0.92] tracking-normal text-zoomies-charcoal sm:text-7xl lg:text-8xl"
          >
            Presence &gt; pace.
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-xl font-semibold leading-9 text-zoomies-charcoal/78 sm:text-2xl">
            A dog-friendly NYC run club for runners, walkers, joggers, dog
            parents, and everyone in between.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={PIE_URL}>Join the next run</ButtonLink>
            <ButtonLink href={SUBSTACK_URL} variant="outline">
              Subscribe for updates
            </ButtonLink>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {["Walk", "Jog", "Run"].map((label) => (
              <div
                key={label}
                className="rounded-3xl border border-zoomies-gray/35 bg-white/78 p-4 shadow-sm backdrop-blur"
              >
                <p className="text-2xl font-black">{label}</p>
                <p className="mt-1 text-sm font-semibold text-zoomies-charcoal/60">
                  Counts here.
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -left-4 top-8 z-10 rotate-[-7deg] rounded-full border border-zoomies-charcoal bg-white px-4 py-2 text-sm font-black shadow-sticker">
            NYC, easy pace
          </div>
          <div className="absolute -right-1 bottom-10 z-10 rotate-6 rounded-full bg-zoomies-gold px-5 py-3 text-sm font-black shadow-sticker">
            Stay for the hang
          </div>

          <div className="zoomies-card relative overflow-hidden p-5 sm:p-7">
            <div className="rounded-[1.5rem] bg-zoomies-blue p-5 sm:p-7">
              <div className="relative min-h-[23rem] overflow-hidden rounded-[1.25rem] bg-white sm:min-h-[26rem]">
                <Image
                  src="/images/zoomies-community-group.png"
                  alt="A large Zoomies Run Club community group smiling together after a run."
                  fill
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zoomies-charcoal/35 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
