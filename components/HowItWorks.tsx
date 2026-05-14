import { PIE_URL, SUBSTACK_URL } from "@/lib/links";
import { ButtonLink } from "./ButtonLink";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    title: "Check Pie",
    copy: "Find the next run and RSVP through the live event hub.",
  },
  {
    title: "Subscribe on Substack",
    copy: "Get first access to announcements, collabs, merch drops, and community updates.",
  },
  {
    title: "Bring yourself",
    copy: "A friend or dog is welcome too, but neither is required.",
  },
  {
    title: "Move at your pace",
    copy: "Walk, jog, run, or cheer. Presence is the whole assignment.",
  },
  {
    title: "Hang after",
    copy: "Stick around, say hi, and make the run feel like a community thing.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-zoomies-blue"
      aria-labelledby="how-title"
    >
      <div className="section-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="how-title"
            kicker="How it works"
            title="Five easy steps. Zero pace anxiety."
          >
            <p>
              Zoomies keeps the logistics simple so the hard part is just
              deciding to show up.
            </p>
          </SectionHeading>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-none">
            <ButtonLink href={PIE_URL}>Join the next run</ButtonLink>
            <ButtonLink href={SUBSTACK_URL} variant="dark">
              Get updates
            </ButtonLink>
          </div>
        </div>

        <ol className="mt-16 grid gap-x-4 gap-y-14 md:grid-cols-5">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="zoomies-card relative min-h-56 overflow-visible p-5"
            >
              <span className="pointer-events-none absolute -top-10 right-5 z-20 select-none text-7xl font-black leading-none text-zoomies-gold/75 drop-shadow-[0_3px_0_rgba(255,255,255,0.95)]">
                {index + 1}
              </span>
              <div className="relative z-10">
                <p className="text-xl font-black">{step.title}</p>
                <p className="mt-4 text-sm font-medium leading-6 text-zoomies-charcoal/68">
                  {step.copy}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
