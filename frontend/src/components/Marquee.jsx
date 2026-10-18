const WORDS = ["Transparency", "Visibility", "Control", "Employees First"];

const Row = ({ ariaHidden = false }) => (
  <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
    {WORDS.map((w, i) => (
      <span key={w} className="flex items-center">
        <span
          className={`font-display text-3xl sm:text-4xl lg:text-5xl px-8 ${
            i === WORDS.length - 1 ? "italic text-amber" : "text-white/85"
          }`}
        >
          {w}
        </span>
        <span className="h-2 w-2 rounded-full bg-sky" />
      </span>
    ))}
  </div>
);

export default function Marquee() {
  return (
    <section
      data-testid="marquee-band"
      className="relative overflow-hidden border-y border-white/10 bg-deep py-10"
    >
      <div className="marquee-track">
        <Row />
        <Row ariaHidden />
      </div>
    </section>
  );
}
