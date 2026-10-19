import { BarChart3, ClipboardList, ShieldCheck, LayoutDashboard, ArrowUpRight } from "lucide-react";
import { Reveal, MaskedLinesInView, scrollToSection } from "./motion";

const SERVICES = [
  {
    icon: BarChart3,
    tag: "SHOp",
    title: "Plan Analytics",
    desc: "Plan designs customized to your population supported by actuarial weighting and market data.",
  },
  {
    icon: ClipboardList,
    title: "Program Management",
    desc: "Comprehensive coordination and management to ensure program success.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Oversight",
    desc: "Extensive research for your consideration, and options to offload certain compliance related duties.",
  },
  {
    icon: LayoutDashboard,
    title: "Employer Dashboard",
    desc: "Programs status at your fingertips with projections vs. actual plan performance.",
  },
];

export default function Services() {
  return (
    <section id="program-services" data-testid="services-section" className="relative bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <Reveal>
          <p className="flex items-center gap-3 text-[12px] font-bold tracking-[0.26em] uppercase text-sky mb-6">
            <span className="h-[3px] w-10 rounded-full bg-amber" /> Program Services
          </p>
        </Reveal>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <h2 className="font-display text-navy text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight">
            <MaskedLinesInView lines={["Everything your program needs,", <>handled in the open</>]} />
          </h2>
          <Reveal delay={0.15}>
            <p className="max-w-md text-ink text-lg font-light leading-relaxed">
              Four services, one goal: keep every premium dollar working for your employees.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="h-full">
              <div
                data-testid={`service-card-${i}`}
                className="group relative h-full rounded-2xl border border-navy/10 bg-white p-7 shadow-[0_16px_40px_-28px_rgba(0,58,112,0.35)] transition-all duration-500 hover:border-amber hover:-translate-y-1.5"
              >
                <span className="absolute top-6 right-6 font-display text-4xl text-navy/10 group-hover:text-amber/50 transition-colors duration-500">
                  0{i + 1}
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky/10 text-sky transition-colors duration-500 group-hover:bg-amber group-hover:text-navy">
                  <s.icon className="h-5 w-5" />
                </div>
                {s.tag && (
                  <span className="mt-6 inline-block rounded-full bg-amber/15 border border-amber/50 px-3 py-0.5 text-[11px] font-bold tracking-[0.18em] uppercase text-navy">
                    {s.tag}
                  </span>
                )}
                <h3 className={`font-display text-2xl text-navy ${s.tag ? "mt-2" : "mt-6"}`}>{s.title}</h3>
                <p className="mt-3 text-[15px] text-ink leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex justify-center">
            <button
              data-testid="services-get-started-button"
              onClick={() => scrollToSection("#estimator")}
              className="group inline-flex items-center gap-2 rounded-full border border-navy/25 px-8 py-4 text-[15px] font-semibold text-navy transition-all duration-300 hover:bg-amber hover:border-amber"
            >
              Get Started
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
