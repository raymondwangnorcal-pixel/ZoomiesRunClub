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

        <ol className="mt-12 grid gap-4 md:grid-cols-5">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="zoomies-card relative min-h-56 overflow-hidden p-5"
            >
              <span className="absolute -right-2 -top-5 text-7xl font-black text-zoomies-gold/45">
                {index + 1}
              </span>
              <div className="relative">
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
