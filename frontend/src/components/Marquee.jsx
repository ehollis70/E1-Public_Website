import { ArrowUpRight } from "lucide-react";

const WORDS = ["Transparency", "Visibility", "Control", "Employees First"];

const Row = ({ ariaHidden = false }) => (
  <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
    {WORDS.map((w, i) => (
      <span key={w} className="flex items-center">
        <span
          className={`font-display text-3xl sm:text-4xl lg:text-5xl px-8 ${
            i === WORDS.length - 1 ? "italic text-amber" : "text-white"
          }`}
        >
          {w}
        </span>
        <ArrowUpRight className="h-5 w-5 text-amber" />
      </span>
    ))}
  </div>
);

export default function Marquee() {
  return (
    <section
      data-testid="marquee-band"
      className="relative overflow-hidden bg-navy border-y border-white/10 py-10"
    >
      <div className="marquee-track">
        <Row />
        <Row ariaHidden />
      </div>
    </section>
  );
}
