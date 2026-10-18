import { Counter } from "./motion";

export default function StatMoment() {
  return (
    <section
      data-testid="stat-moment"
      className="relative overflow-hidden bg-deeper grain"
    >
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1679256462959-7873b4b9f97a?crop=entropy&cs=srgb&fm=jpg&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-deeper via-deeper/85 to-deeper/40" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-28 lg:py-40">
        <p className="text-[12px] font-medium tracking-[0.3em] uppercase text-sky mb-8">
          First-Year Savings
        </p>
        <h2 className="font-display text-white leading-[0.95] tracking-tight">
          <span className="block text-2xl sm:text-3xl lg:text-4xl text-white/80 italic">Most employers see</span>
          <span className="block mt-3 text-[22vw] sm:text-[16vw] lg:text-[11rem]">
            <span className="text-amber italic">over </span>
            <Counter end={25} suffix="%" testid="stat-25-counter" />
          </span>
          <span className="block mt-4 text-2xl sm:text-3xl lg:text-4xl text-white/80">
            savings in the first year.
          </span>
        </h2>
        <p className="mt-10 max-w-xl text-white/55 text-lg font-light leading-relaxed">
          Premium dollars that remain after claims and capped fees flow back to your benefits program —
          with complete transparency and total employer discretion.
        </p>
      </div>
    </section>
  );
}
