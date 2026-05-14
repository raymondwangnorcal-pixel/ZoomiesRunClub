import { PIE_URL, SUBSTACK_URL } from "@/lib/links";
import { sampleEvents } from "@/lib/events";
import { ButtonLink } from "./ButtonLink";
import { RouteLine } from "./Decorative";
import { SectionHeading } from "./SectionHeading";

export function UpcomingRuns() {
  return (
    <section id="runs" className="bg-white" aria-labelledby="runs-title">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeading
              id="runs-title"
              kicker="Upcoming runs"
              title="Live events are announced on Pie and Substack."
            >
              <p>
                Pie is the RSVP hub for runs and meetups. Substack is where
                announcements land first, especially for limited spots, collabs,
                pop-ups, and merch news.
              </p>
            </SectionHeading>
            <p className="mt-6 rounded-3xl border border-zoomies-gray/35 bg-zoomies-blue/55 p-5 text-sm font-bold leading-6 text-zoomies-charcoal/72">
              For the most accurate schedule, check Pie and subscribe to
              Substack.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={PIE_URL}>View live events on Pie</ButtonLink>
              <ButtonLink href={SUBSTACK_URL} variant="outline">
                Subscribe to Substack
              </ButtonLink>
            </div>
          </div>

          <div className="relative">
            <RouteLine className="absolute -top-12 right-0 h-36 w-80 text-zoomies-gold/40" />
            <div className="grid gap-4">
              {sampleEvents.map((event) => (
                <article
                  key={event.title}
                  className="zoomies-card relative overflow-hidden p-5 sm:p-6"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="mb-3 inline-flex rounded-full bg-zoomies-gold px-3 py-1 text-xs font-black text-zoomies-charcoal">
                        {event.label}
                      </p>
                      <h3 className="text-2xl font-black">{event.title}</h3>
                      <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-zoomies-charcoal/68">
                        {event.detail}
                      </p>
                    </div>
                    <p className="rounded-full border border-zoomies-gray/40 px-4 py-2 text-sm font-extrabold text-zoomies-charcoal/70">
                      {event.pace}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
