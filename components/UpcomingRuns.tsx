import { PIE_URL } from "@/lib/links";
import { ButtonLink } from "./ButtonLink";
import { PawPrint, RouteLine } from "./Decorative";

const runFlow = [
  {
    label: "Check-in",
    detail: "Say hi, meet the crew, and get the run vibe.",
  },
  {
    label: "Route",
    detail: "Run details live on Pie when the event is posted.",
  },
  {
    label: "Pace optional",
    detail: "Walk, jog, run, or cheer. No stopwatch energy.",
  },
  {
    label: "Post-run hang",
    detail: "Stay after and make the community part happen.",
  },
];

export function UpcomingRuns() {
  return (
    <section id="runs" className="bg-white" aria-labelledby="runs-title">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-zoomies-gray/35 bg-zoomies-blue p-5 shadow-soft sm:p-8 lg:p-10">
          <RouteLine className="absolute -right-28 top-3 h-48 w-[34rem] rotate-6 text-white/70" />
          <PawPrint className="absolute -bottom-12 -left-10 size-44 -rotate-12 text-zoomies-gold/25" />

          <div className="relative grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
            <div className="flex flex-col justify-between rounded-[2rem] bg-white p-6 shadow-soft sm:p-8">
              <div>
                <p className="mb-6 inline-flex rotate-[-2deg] rounded-full bg-zoomies-gold px-4 py-2 text-sm font-black text-zoomies-charcoal shadow-sticker">
                  Next run invite
                </p>
                <h2
                  id="runs-title"
                  className="text-balance text-4xl font-black leading-[1.02] tracking-normal text-zoomies-charcoal sm:text-5xl"
                >
                  Ready to show up? RSVP for the next Zoomies run.
                </h2>
                <p className="mt-6 text-pretty text-lg font-semibold leading-8 text-zoomies-charcoal/72">
                  Pie is the live RSVP hub. Check the next run, tap in, bring
                  yourself, and let the pace be whatever gets you there.
                </p>
              </div>

              <div className="mt-8">
                <ButtonLink href={PIE_URL}>Join the next run</ButtonLink>
                <p className="mt-4 text-sm font-bold leading-6 text-zoomies-charcoal/58">
                  No exact dates or locations are shown here. Pie has the most
                  accurate event details.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-zoomies-charcoal bg-zoomies-charcoal p-5 text-white shadow-sticker sm:p-7">
              <div className="absolute right-5 top-5 rounded-full bg-zoomies-gold px-4 py-2 text-sm font-black text-zoomies-charcoal">
                RSVP on Pie
              </div>
              <div className="absolute -right-20 bottom-0 h-40 w-40 rounded-full border-[24px] border-zoomies-gold/20" />
              <RouteLine className="absolute left-6 top-24 h-40 w-[27rem] text-zoomies-gold/70" />

              <div className="relative max-w-xl">
                <p className="text-sm font-black uppercase tracking-normal text-zoomies-gold">
                  Sample event flow
                </p>
                <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                  Check in, move together, stay for the hang.
                </h3>
              </div>

              <div className="relative mt-10 grid gap-3 sm:grid-cols-2">
                {runFlow.map((item, index) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid size-9 place-items-center rounded-full bg-zoomies-gold text-sm font-black text-zoomies-charcoal">
                        {index + 1}
                      </span>
                      <h4 className="text-lg font-black">{item.label}</h4>
                    </div>
                    <p className="mt-3 text-sm font-medium leading-6 text-white/70">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
