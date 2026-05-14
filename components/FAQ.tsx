import { SectionHeading } from "./SectionHeading";

const faqs = [
  {
    question: "Do I need to be fast?",
    answer: "No. Presence > pace.",
  },
  {
    question: "Can I bring my dog?",
    answer: "Yes, dogs are part of the Zoomies energy.",
  },
  {
    question: "Can I come without a dog?",
    answer: "Yes, humans without dogs are welcome too.",
  },
  {
    question: "Where are runs posted?",
    answer:
      "Pie is the event RSVP hub, and Substack is the first place for announcements.",
  },
  {
    question: "Where can I buy merch?",
    answer: "The Shopify store.",
  },
  {
    question: "Is this beginner-friendly?",
    answer: "Yes. Walkers, joggers, runners, and first-timers are welcome.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-white" aria-labelledby="faq-title">
      <div className="section-shell">
        <SectionHeading
          id="faq-title"
          kicker="FAQ"
          title="Tiny answers for getting out the door."
          align="center"
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="zoomies-card p-6">
              <h3 className="text-xl font-black">{faq.question}</h3>
              <p className="mt-4 text-base font-medium leading-7 text-zoomies-charcoal/70">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
