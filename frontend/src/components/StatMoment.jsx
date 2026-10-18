import { Counter } from "./motion";

const GhostArrow = () => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    aria-hidden="true"
    className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 h-[130%] w-auto opacity-[0.09]"
  >
    <path d="M28 72 L72 28" stroke="#FF9E1B" strokeWidth="9" strokeLinecap="round" />
    <path d="M40 26 H74 V60" stroke="#FF9E1B" strokeWidth="9" strokeLinecap="round" strokeLinejoin="miter" />
  </svg>
);

export default function StatMoment() {
  return (
    <section data-testid="stat-moment" className="stat-band grain relative overflow-hidden">
      <GhostArrow />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-28 lg:py-40">
        <p className="text-[12px] font-bold tracking-[0.3em] uppercase text-pale mb-8">
          First-Year Savings
        </p>
        <h2 className="font-display text-white leading-[0.95] tracking-tight">
          <span className="block text-2xl sm:text-3xl lg:text-4xl text-pale italic">Most employers see</span>
          <span className="block mt-3 text-[22vw] sm:text-[16vw] lg:text-[11rem]">
            <span className="text-amber italic">over </span>
            <Counter end={25} suffix="%" testid="stat-25-counter" />
          </span>
          <span className="block mt-4 text-2xl sm:text-3xl lg:text-4xl text-pale">
            savings in the first year.
          </span>
        </h2>
        <p className="mt-10 max-w-xl text-white/70 text-lg font-light leading-relaxed">
          Premium dollars that remain after claims and capped fees flow back to your benefits program —
          with complete transparency and total employer discretion.
        </p>
      </div>
    </section>
  );
}
