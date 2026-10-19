import { Link } from "react-router-dom";
import { ArrowUpRight, AlertCircle } from "lucide-react";
import { Reveal, MaskedLinesInView, Magnetic } from "@/components/motion";
import { useGoTo, usePageMeta } from "@/utils/navigation";
import { SITE_DESCRIPTION } from "@/config";

const ConfirmChip = ({ label = "Confirm" }) => (
  <span
    title="Pending confirmation — this detail is not yet published."
    className="inline-flex items-center gap-1.5 rounded-full border-2 border-dashed border-amber bg-amber/10 px-3 py-1 text-[11px] font-bold tracking-[0.14em] uppercase text-navy"
    data-testid="confirm-chip"
  >
    <AlertCircle className="h-3 w-3 text-amber" />
    {label}
  </span>
);

const MODELS = ["Traditional carrier", "Group captive", "Employees First"];

const ROWS = [
  {
    label: "How the plan is funded",
    cells: [
      "Fixed premiums paid to a carrier, fully insured",
      "Premiums pooled with other employers through a group captive",
      "Premium dollars that remain after claims and capped fees flow back to your program",
    ],
  },
  {
    label: "Financial visibility",
    cells: [
      "Reporting determined by the carrier",
      "Financials shared among member employers",
      "Exact claims paid, reserves and admin costs, all compensation, and carrier charges",
    ],
  },
  {
    label: "Savings profile",
    cells: [
      "No model to return premium dollars",
      "Distribution potential tied to the captive's loss ratio",
      "Most employers see over 25% savings in the first year — historical, company-reported; not guaranteed",
    ],
  },
  {
    label: "Works with your current carrier?",
    cells: ["confirm", "confirm", "confirm"],
  },
  {
    label: "Minimum employer size",
    cells: ["confirm", "confirm", "confirm"],
  },
  {
    label: "Employee impact",
    cells: ["confirm", "confirm", "Dollars always go back to benefit the employees"],
  },
];

const FAQS = [
  {
    q: "What is Employees First?",
    a: "Employees First uses a financial model built to support a documented, prudent fiduciary process. It creates full transparency, giving employers visibility and control of Accident, Hospital Indemnity, and Critical Illness policies. We make the invisible, visible.",
  },
  {
    q: "How much can employers save?",
    a: "Most employers see over 25% savings in the first year. We return the dollars to improve employee value. Guaranteed.",
  },
  {
    q: "Do I have to leave my current carrier?",
    a: "confirm",
  },
  {
    q: "What does it cost?",
    a: "confirm",
  },
  {
    q: "How long does implementation take?",
    a: "confirm",
  },
  {
    q: "What happens to employees' coverage?",
    a: "confirm",
  },
];

const FAQPageJsonLd = () => {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.filter((f) => f.a !== "confirm").map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return <script type="application/ld+json">{JSON.stringify(json)}</script>;
};

export default function Compare() {
  const goTo = useGoTo();
  usePageMeta(
    "Voluntary Benefits: Carrier vs Captive vs Employees First",
    "Compare three ways to fund voluntary benefits — traditional carrier, group captive, and Employees First — and see where the excess premium dollars go."
  );

  return (
    <div className="bg-white">
      <FAQPageJsonLd />
      {/* Hero */}
      <section data-testid="compare-hero" className="hero-light relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-14 lg:pt-40 lg:pb-20">
            <Reveal>
              <p className="flex items-center gap-3 text-[12px] font-bold tracking-[0.26em] uppercase text-sky mb-6">
                <span className="h-[3px] w-10 rounded-full bg-amber" /> Compare
              </p>
            </Reveal>
          <h1 className="font-display text-navy text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight max-w-4xl">
            <MaskedLinesInView
              lines={[
                "Three ways to fund Accident, Hospital",
                <>
                  Indemnity and Critical Illness.{" "}
                  <em className="italic text-amber">Only one shows you every dollar.</em>
                </>,
              ]}
            />
          </h1>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-ink font-light leading-relaxed">
              Traditional carrier, voluntary benefits group captive, or Employees First: the models differ in who
              holds the information, where the loss ratio leaves its mark, and who the excess premium dollars
              belong to.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Comparison table */}
      <section data-testid="compare-table-section" className="relative bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="hidden md:grid grid-cols-4 rounded-2xl border border-navy/10 overflow-hidden shadow-[0_30px_70px_-50px_rgba(0,58,112,0.5)]" data-testid="compare-table">
              <div className="bg-paper p-6" />
              {MODELS.map((m, i) => (
                <div
                  key={m}
                  className={`p-6 text-center ${
                    i === 2 ? "bg-navy border-b-4 border-amber" : "bg-paper border-l border-navy/10"
                  }`}
                >
                  <p className={`font-display text-2xl leading-tight ${i === 2 ? "text-white" : "text-navy"}`}>
                    {m}
                  </p>
                  {i === 2 && <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber mt-1">Full transparency</p>}
                </div>
              ))}
              {ROWS.map((r, ri) => (
                <div key={r.label} className="contents">
                  <div className="p-6 bg-paper border-t border-navy/10 flex items-center">
                    <p className="text-[14px] font-bold text-navy">{r.label}</p>
                  </div>
                  {r.cells.map((c, ci) => (
                    <div
                      key={ci}
                      className={`p-6 border-t border-navy/10 ${ci > 0 ? "border-l" : ""} ${
                        ci === 2 ? "bg-sky/5" : ""
                      }`}
                    >
                      {c === "confirm" ? (
                        <ConfirmChip />
                      ) : (
                        <p className="text-[14px] text-ink leading-relaxed">{c}</p>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Mobile stacked */}
          <div className="md:hidden space-y-6" data-testid="compare-table-mobile">
            {MODELS.map((m, mi) => (
              <Reveal key={m} delay={mi * 0.06}>
                <div
                  className={`rounded-2xl border p-6 ${
                    mi === 2 ? "bg-navy border-amber border-b-4" : "border-navy/10 bg-white"
                  }`}
                >
                  <p className={`font-display text-2xl ${mi === 2 ? "text-white" : "text-navy"}`}>{m}</p>
                  {mi === 2 && <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber mt-1">Full transparency</p>}
                  <dl className="mt-4 space-y-3">
                    {ROWS.map((r) => (
                      <div key={r.label} className="border-t border-navy/10 pt-3">
                        <dt className={`text-[12px] font-bold uppercase tracking-wide ${mi === 2 ? "text-pale" : "text-navy/60"}`}>
                          {r.label}
                        </dt>
                        <dd className={`mt-1 text-[14px] leading-relaxed ${mi === 2 ? "text-white/85" : "text-ink"}`}>
                          {r.cells[mi] === "confirm" ? <ConfirmChip /> : r.cells[mi]}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-8 flex items-start gap-2 max-w-3xl text-[13px] text-ink/60 leading-relaxed">
              <AlertCircle className="h-4 w-4 text-amber shrink-0 mt-0.5" />
              "Confirm" marks facts we're still verifying — they are not published claims. Savings figures are
              historical, company-reported results and are not guaranteed.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why employers choose */}
      <section data-testid="compare-why" className="relative bg-paper py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-display text-navy text-4xl sm:text-5xl leading-tight tracking-tight">
            <MaskedLinesInView lines={["Why employers choose", <em className="italic text-sky">Employees First</em>]} />
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              {
                title: "Visibility & control",
                desc: "Exact claims paid, reserves and admin costs, all compensation, and carrier charges — the full picture, in your hands.",
              },
              {
                title: "Dollars back to employees",
                desc: "Excess premium dollars flow back to your benefits program. No matter what you choose, the dollars always go back to benefit the employees.",
              },
              {
                title: "A prudent fiduciary process",
                desc: "A financial model built to support a documented, prudent fiduciary process — the standard your plan deserves.",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08} className="h-full">
                <div className="h-full rounded-2xl border border-navy/10 bg-white p-8">
                  <h3 className="font-display text-2xl text-navy">{c.title}</h3>
                  <p className="mt-3 text-[15px] text-ink leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Group captive section */}
      <section data-testid="compare-captive" className="relative bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <h2 className="font-display text-navy text-4xl sm:text-5xl leading-tight tracking-tight">
            <MaskedLinesInView lines={["Is a group captive", <em className="italic text-sky">still right for you?</em>]} />
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-8 text-lg text-ink font-light leading-relaxed">
              A voluntary benefits group captive pools premiums and loss-ratio experience across member employers,
              and for some employers it remains a legitimate way to fund supplemental benefits. Whether one is
              still right for your program depends on specifics we're confirming — minimum employer size, captive
              costs, and how distributions actually reach your plan.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              <ConfirmChip label="Minimum size: Confirm" />
              <ConfirmChip label="Captive costs: Confirm" />
              <ConfirmChip label="Distribution path: Confirm" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section data-testid="compare-faq" className="relative bg-paper py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <h2 className="font-display text-navy text-4xl sm:text-5xl leading-tight tracking-tight">
            <MaskedLinesInView lines={["Questions, answered", <em className="italic text-sky">honestly</em>]} />
          </h2>
          <div className="mt-12 space-y-5">
            {FAQS.map((f, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="rounded-2xl border border-navy/10 bg-white p-7" data-testid={`compare-faq-${i}`}>
                  <h3 className="font-display text-2xl text-navy">{f.q}</h3>
                  {f.a === "confirm" ? (
                    <p className="mt-3">
                      <ConfirmChip />
                      <span className="ml-3 text-[14px] text-ink/70 align-middle">
                        This answer is being verified before we publish it.
                      </span>
                    </p>
                  ) : (
                    <p className="mt-3 text-[15px] text-ink leading-relaxed">{f.a}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section data-testid="compare-cta" className="relative bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <h2 className="font-display text-navy text-4xl sm:text-5xl leading-tight tracking-tight">
            <MaskedLinesInView lines={["Run the numbers", <em className="italic text-amber">first</em>]} />
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-6 text-lg text-ink font-light leading-relaxed">
              Estimate what your voluntary benefits could return — then decide which model deserves them.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Magnetic
                as="button"
                testid="compare-cta-estimator-button"
                onClick={() => goTo("#estimator")}
                className="group inline-flex items-center gap-2 rounded-full bg-amber px-8 py-4 text-[15px] font-bold text-navy shadow-[0_14px_30px_-12px_rgba(255,158,27,0.65)] transition-colors duration-300 hover:bg-navy hover:text-white"
              >
                Estimate Your Savings
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Magnetic>
              <Magnetic
                as="button"
                testid="compare-cta-talk-button"
                onClick={() => goTo("#contact")}
                className="group inline-flex items-center gap-2 rounded-full border border-navy/25 px-8 py-4 text-[15px] font-semibold text-navy transition-colors duration-300 hover:border-sky hover:text-sky"
              >
                Talk to us
              </Magnetic>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-10 text-[13px] text-ink/60">
              Back to the{" "}
              <Link to="/" className="underline underline-offset-2 text-navy hover:text-sky" data-testid="compare-home-link">
                home page
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
