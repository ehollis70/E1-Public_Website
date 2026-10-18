import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal, MaskedLinesInView } from "./motion";

const FAQS = [
  {
    q: "What is Employees First?",
    a: "Employees First is an ERISA-compliant financial model that creates full transparency, giving employers visibility and control of Accident, Hospital Indemnity, and Critical Illness policies. We make the invisible, visible.",
  },
  {
    q: "How does the program work?",
    a: "We start by analyzing your current program, which reveals the full picture: exact claims paid, reserves and admin costs, all compensation, and carrier charges. We then identify premium dollars that remain after claims and capped fees, apply our financial model to capture these excess dollars, and they flow back to your benefits program with complete transparency and total employer discretion.",
  },
  {
    q: "How much can employers save?",
    a: "Most employers see over 25% savings in the first year. We return the dollars to improve employee value. Guaranteed.",
  },
  {
    q: "Do you sell insurance or administer benefits?",
    a: "No. We don't sell insurance or administer services. Our financial model identifies and captures premium dollars that remain after claims and capped fees — money that would otherwise stay locked inside the carrier.",
  },
  {
    q: "What can we do with the returned dollars?",
    a: "You choose. Lower employee costs (medical contributions, Rx costs, etc.), increase benefits for more coverage, add supplemental programs or perks, fund plan expenses without cutting benefit quality, advance your enrollment platform support, or enhance recruitment, retention, and employee well-being. No matter what you choose, the dollars always go back to benefit the employees.",
  },
  {
    q: "Is there risk to our plan?",
    a: "Our program mirrors the control of a self-funded plan, but without the risk, and without pooling claims experience with other employers.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" data-testid="faq-section" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <Reveal>
          <p className="flex items-center gap-3 text-[12px] font-bold tracking-[0.26em] uppercase text-sky mb-6">
            <span className="h-[3px] w-10 rounded-full bg-amber" /> FAQ
          </p>
        </Reveal>
        <h2 className="font-display text-navy text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight">
          <MaskedLinesInView lines={["Frequently Asked", <em className="italic text-sky">Questions</em>]} />
        </h2>
        <Reveal delay={0.15}>
          <p className="mt-6 text-lg text-ink font-light leading-relaxed max-w-2xl">
            The short answers — drawn straight from how the program works.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <Accordion type="single" collapsible className="mt-12" data-testid="faq-accordion">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-navy/10">
                <AccordionTrigger
                  data-testid={`faq-trigger-${i}`}
                  className="py-6 text-left font-display text-xl sm:text-2xl text-navy hover:text-sky hover:no-underline [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-amber"
                >
                  {f.q}
                </AccordionTrigger>
                <AccordionContent
                  data-testid={`faq-content-${i}`}
                  className="text-[15px] lg:text-base text-ink leading-relaxed pb-6"
                >
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
