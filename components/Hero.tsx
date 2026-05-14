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
                <RouteLine className="absolute left-1/2 top-16 h-44 w-[34rem] -translate-x-1/2 text-zoomies-gold" />
                <div className="absolute left-6 top-6 rounded-full bg-zoomies-charcoal px-4 py-2 text-sm font-black text-white">
                  Next move: show up
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zoomies-blue to-transparent" />

                <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 items-end gap-2 sm:gap-5">
                  <RunnerFigure />
                  <DogFigure />
                </div>

                <div className="absolute right-7 top-24 grid gap-3">
                  <MiniSticker text="No pressure" />
                  <MiniSticker text="No gatekeeping" rotate="rotate-3" />
                  <MiniSticker text="No one left behind" rotate="-rotate-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniSticker({
  text,
  rotate = "-rotate-3",
}: {
  text: string;
  rotate?: string;
}) {
  return (
    <div
      className={`${rotate} rounded-full border border-zoomies-charcoal bg-white px-3 py-2 text-xs font-black shadow-sm`}
    >
      {text}
    </div>
  );
}

function RunnerFigure() {
  return (
    <svg
      aria-label="Illustration of a runner"
      role="img"
      viewBox="0 0 130 220"
      className="h-52 w-28 sm:h-64 sm:w-36"
    >
      <circle cx="65" cy="35" r="24" fill="#e3be6b" />
      <path
        d="M41 77c19-18 52-16 67 4l-12 58H46L34 97c-3-9 0-15 7-20Z"
        fill="#232122"
      />
      <path
        d="M47 137 28 198M89 137l21 61M49 91 16 128M90 92l30 22"
        stroke="#232122"
        strokeWidth="15"
        strokeLinecap="round"
      />
      <path
        d="M38 205h35M94 205h31"
        stroke="#e3be6b"
        strokeWidth="12"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DogFigure() {
  return (
    <svg
      aria-label="Illustration of a dog"
      role="img"
      viewBox="0 0 180 150"
      className="h-36 w-40 sm:h-44 sm:w-52"
    >
      <path
        d="M37 75c10-27 52-39 85-22 25 13 37 35 31 59H38c-9-10-11-23-1-37Z"
        fill="#e3be6b"
      />
      <circle cx="56" cy="64" r="23" fill="#232122" />
      <path d="M40 46 18 21c-6 23-1 39 16 49Z" fill="#232122" />
      <path d="M73 46 93 20c8 22 3 40-13 50Z" fill="#232122" />
      <circle cx="48" cy="62" r="4" fill="#ffffff" />
      <path
        d="M83 101v34M125 101v34M34 106l-19 20M151 72l21-20"
        stroke="#232122"
        strokeWidth="11"
        strokeLinecap="round"
      />
      <path
        d="M79 139h24M121 139h24"
        stroke="#232122"
        strokeWidth="9"
        strokeLinecap="round"
      />
    </svg>
  );
}
