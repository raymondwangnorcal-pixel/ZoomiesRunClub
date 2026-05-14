import { PawPrint } from "./Decorative";
import { SectionHeading } from "./SectionHeading";

const communityCards = [
  {
    title: "Every pace welcome",
    copy: "Walkers, joggers, runners, and first-timers all belong here.",
  },
  {
    title: "Dogs encouraged",
    copy: "Bring the four-legged energy if your dog is comfortable joining.",
  },
  {
    title: "No pressure",
    copy: "The goal is showing up, moving, and enjoying the people around you.",
  },
  {
    title: "No gatekeeping",
    copy: "You do not need to prove you are a runner to run with Zoomies.",
  },
  {
    title: "No one left behind",
    copy: "Community pace means the group matters more than the stopwatch.",
  },
  {
    title: "Stay for the hang",
    copy: "The run is the start. The friendships usually happen after.",
  },
];

export function Community() {
  return (
    <section
      id="community"
      className="bg-zoomies-blue"
      aria-labelledby="community-title"
    >
      <div className="section-shell">
        <SectionHeading
          id="community-title"
          kicker="Community"
          title="The Zoomies energy, in six simple rules."
          align="center"
        >
          <p>
            A little dog park joy, a little NYC momentum, and a whole lot of
            showing up as you are.
          </p>
        </SectionHeading>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {communityCards.map((card, index) => (
            <article
              key={card.title}
              className="zoomies-card group relative min-h-56 overflow-hidden p-6 transition duration-200 hover:-translate-y-1"
            >
              <PawPrint className="absolute -right-4 -top-4 size-24 rotate-12 text-zoomies-gold/20 transition duration-200 group-hover:text-zoomies-gold/35" />
              <div className="relative">
                <span className="grid size-11 place-items-center rounded-full bg-zoomies-gold text-sm font-black">
                  {index + 1}
                </span>
                <h3 className="mt-6 text-2xl font-black">{card.title}</h3>
                <p className="mt-4 text-sm font-medium leading-6 text-zoomies-charcoal/68">
                  {card.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
