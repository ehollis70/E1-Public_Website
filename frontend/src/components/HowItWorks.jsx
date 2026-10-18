import { Play, ArrowRight, Check, ArrowDown } from "lucide-react";
import { Reveal, MaskedLinesInView, Magnetic, scrollToSection } from "./motion";

const STEPS = [
  {
    n: "01",
    title: "Analyze your claims experience",
    desc: "We start by analyzing your current program, which reveals the full picture: exact claims paid, reserves & admin costs, all compensation, and carrier charges.",
  },
  {
    n: "02",
    title: "Identify the hidden dollars",
    desc: "We apply our ERISA-compliant financial model to identify premium dollars that remain after claims and capped fees. We don't sell insurance or administer services.",
  },
  {
    n: "03",
    title: "Capture the excess",
    desc: "Our financial model captures these excess dollars — money that would otherwise stay locked inside the carrier.",
  },
  {
    n: "04",
    title: "Return the value",
    desc: "Once captured, the dollars flow back to your benefits program with complete transparency and total employer discretion.",
  },
];

const OPTIONS = [
  "Lower employee costs (medical contributions, Rx costs, etc.)",
  "Increase benefits for more coverage",
  "Add supplemental programs or perks",
  "Fund plan expenses without cutting benefit quality",
  "Advance your enrollment platform support",
  "Enhance recruitment, retention, and employee well-being",
];

const POSTER =
  "https://images.pexels.com/photos/8068807/pexels-photo-8068807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

export default function HowItWorks() {
  return (
    <section id="how-it-works" data-testid="how-it-works-section" className="relative bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="flex items-center gap-3 text-[12px] font-medium tracking-[0.28em] uppercase text-sky mb-6">
            <span className="h-px w-10 bg-sky/70" /> How It Works
          </p>
        </Reveal>
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <h2 className="lg:col-span-7 font-display text-navy text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight">
            <MaskedLinesInView lines={["We Make the Invisible,", <>Visible</>]} />
          </h2>
          <Reveal delay={0.15} className="lg:col-span-5">
            <p className="text-lg text-ink/70 leading-relaxed font-light">
              In most fully-insured voluntary benefit plans, employers are kept in the dark. Premium dollars flow
              in, claim dollars flow out, and everything in between is obscured.{" "}
              <span className="text-navy font-medium">
                Carriers hold all the information and all the control. We change that.
              </span>
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="space-y-0">
              {STEPS.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.06}>
                  <div className="group flex gap-6 lg:gap-10 py-8 border-t border-navy/10 last:border-b" data-testid={`how-step-${i}`}>
                    <span className="font-display text-3xl lg:text-4xl text-sky/50 group-hover:text-amber transition-colors duration-300">
                      {s.n}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl lg:text-3xl text-navy">{s.title}</h3>
                      <p className="mt-2 max-w-xl text-[15px] lg:text-base text-ink/65 leading-relaxed">{s.desc}</p>
                    </div>
                    <ArrowDown className="hidden lg:block ml-auto h-5 w-5 text-navy/20 self-center transition-transform duration-500 group-hover:translate-y-1 group-hover:text-sky" />
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-10 rounded-2xl bg-navy p-8 lg:p-10" data-testid="how-guarantee">
                <p className="font-display text-2xl lg:text-3xl text-white leading-snug">
                  Most employers see over <span className="text-amber">25% savings</span> in the first year. We
                  return the dollars to improve employee value.{" "}
                  <span className="italic text-amber">Guaranteed.</span>
                </p>
                <p className="mt-4 text-white/60 text-[15px] leading-relaxed">
                  Our program mirrors the control of a self-funded plan, but without the risk, and without pooling
                  claims experience with other employers.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-navy/10 bg-white p-8 lg:p-10" data-testid="reinvestment-card">
                <h3 className="font-display text-3xl text-navy">
                  You choose how to reinvest the value:
                </h3>
                <ul className="mt-6 space-y-4">
                  {OPTIONS.map((o) => (
                    <li key={o} className="flex items-start gap-3 text-[15px] text-ink/75 leading-snug">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky/10 text-sky">
                        <Check className="h-3 w-3" />
                      </span>
                      {o}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 border-t border-navy/10 pt-6 text-[15px] text-navy font-medium italic">
                  No matter what you choose, the dollars always go back to benefit the employees.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div
                className="photo-frame group relative mt-6 overflow-hidden rounded-2xl aspect-video cursor-pointer"
                data-testid="video-poster-card"
                onClick={() => scrollToSection("#contact")}
              >
                <img
                  src={POSTER}
                  alt="60 Second Overview — team discussing the program"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-amber text-deeper transition-transform duration-500 group-hover:scale-110">
                    <Play className="h-6 w-6 fill-deeper" />
                  </span>
                  <p className="text-white font-medium tracking-wide">See How Our Program Works</p>
                  <p className="text-white/60 text-xs tracking-[0.2em] uppercase">
                    60 Second Overview (no audio/sound)
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-8 flex items-center justify-between gap-4" data-testid="how-cta-row">
                <p className="text-navy/70 text-[15px]">Ready to tune up your voluntary benefits?</p>
                <Magnetic
                  as="button"
                  testid="how-get-started-button"
                  onClick={() => scrollToSection("#contact")}
                  className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-sky"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Magnetic>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
