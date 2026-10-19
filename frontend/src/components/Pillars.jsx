import { EyeOff, FileSearch, Coins, Receipt, ShieldCheck, ArrowUpRight, TrendingUp, Gift, Briefcase } from "lucide-react";
import { Reveal, MaskedLinesInView, scrollToSection, Magnetic } from "./motion";

const PILLARS = [
  {
    icon: FileSearch,
    title: "Exact Claims Paid",
    desc: "See every claim dollar, down to the last one.",
  },
  {
    icon: Coins,
    title: "Reserves & Admin Costs",
    desc: "Know what is held back and where it sits.",
  },
  {
    icon: Receipt,
    title: "All Compensation",
    desc: "Every commission and fee, fully surfaced.",
  },
  {
    icon: EyeOff,
    title: "Carrier Charges",
    desc: "No more invisible charges inside your premiums.",
  },
];

const HELPERS = [
  { icon: ShieldCheck, title: "Protect employees", desc: "With benefit costs outpacing raises, the Employees First model becomes a timely way to preserve, or even increase, total compensation value." },
  { icon: TrendingUp, title: "Elevate benefits, not costs", desc: "Rather than cutting benefits or raising premiums, Employees First lets you upgrade benefit value without burdening employees." },
  { icon: Briefcase, title: "Leverage industry expertise", desc: "Our team brings deep experience, market leadership, and fresh thinking to reshape how voluntary benefits work." },
];

export default function Pillars() {
  return (
    <section id="value" data-testid="pillars-section" className="relative bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="flex items-center gap-3 text-[12px] font-bold tracking-[0.26em] uppercase text-sky mb-6">
                <span className="h-[3px] w-10 rounded-full bg-amber" /> Transparency
              </p>
            </Reveal>
            <h2 className="font-display text-navy text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight">
              <MaskedLinesInView lines={["Bring More Value", <>to Your <em className="italic text-sky">People</em></>]} />
            </h2>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <p className="text-lg text-ink leading-relaxed font-light">
                The Employees First financial model — built to support a documented, prudent fiduciary process —
                creates full transparency to give employers visibility and control of Accident, Hospital
                Indemnity, and Critical Illness policies.
                <span className="text-navy font-bold"> What you'll see:</span>
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="h-full">
              <div
                data-testid={`pillar-card-${i}`}
                className="group h-full rounded-2xl border border-navy/10 bg-white p-7 shadow-[0_16px_40px_-30px_rgba(0,58,112,0.35)] transition-all duration-500 hover:border-sky hover:shadow-[0_20px_50px_-20px_rgba(0,58,112,0.3)] hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky/10 text-sky transition-colors duration-500 group-hover:bg-sky group-hover:text-white">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-2xl text-navy">{p.title}</h3>
                <p className="mt-2 text-[15px] text-ink leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-2xl bg-sand border border-navy/10 px-8 py-8 lg:px-12" data-testid="pillars-found-strip">
            <p className="font-display text-2xl lg:text-3xl text-navy italic">
              "If these dollars exist, you don't need to go searching for them.{" "}
              <span className="text-amber not-italic font-bold">We've already found them.</span>"
            </p>
            <Magnetic
              as="button"
              testid="pillars-get-started-button"
              onClick={() => scrollToSection("#estimator")}
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-bold text-navy transition-colors duration-300 hover:bg-navy hover:text-white"
            >
              Get Started
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Magnetic>
          </div>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-3 gap-8 border-t border-navy/10 pt-14" data-testid="pillars-help-row">
          {HELPERS.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.1}>
              <div>
                <div className="flex items-center gap-3">
                  <h.icon className="h-5 w-5 text-sky" />
                  <h3 className="font-display text-2xl text-navy">{h.title}</h3>
                </div>
                <p className="mt-3 text-[15px] text-ink leading-relaxed">{h.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
