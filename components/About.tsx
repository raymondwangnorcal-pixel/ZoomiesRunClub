import { PawPrint } from "./Decorative";
import { SectionHeading } from "./SectionHeading";

const principles = [
  "No pace pressure",
  "No gatekeeping",
  "No leaving anyone behind",
  "Walk, jog, run, cheer, or just show up",
];

export function About() {
  return (
    <section id="about" className="bg-white" aria-labelledby="about-title">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          id="about-title"
          kicker="The Zoomies story"
          title="A little run club that became a real community."
        >
          <p>
            Zoomies started with sisters, friends, and dogs lacing up together.
            It grew into a community for anyone who wants movement to feel fun,
            social, and possible again.
          </p>
        </SectionHeading>

        <div className="zoomies-card relative overflow-hidden p-6 sm:p-8">
          <PawPrint className="absolute -right-7 -top-7 size-32 rotate-12 text-zoomies-gold/25" />
          <p className="max-w-2xl text-2xl font-black leading-tight sm:text-3xl">
            The whole point is to move your body, meet human and four-legged
            friends, and remember that running is supposed to feel good.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle}
                className="rounded-3xl border border-zoomies-gray/30 bg-zoomies-blue/55 p-5"
              >
                <p className="font-extrabold">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
