import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Calculator, ArrowUpRight, MessageCircle } from "lucide-react";
import { Reveal, MaskedLinesInView, Magnetic, scrollToSection } from "@/components/motion";
import { CALCONIC_CALCULATOR_ID } from "@/config";

export default function Estimator() {
  const mounted = useRef(false);
  useEffect(() => {
    if (!CALCONIC_CALCULATOR_ID || mounted.current) return;
    mounted.current = true;
    const s = document.createElement("script");
    s.src = "https://app.calconic.com/api/embed/calculator/v1";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <section id="estimator" data-testid="estimator-section" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="flex items-center gap-3 text-[12px] font-bold tracking-[0.26em] uppercase text-sky mb-6">
                <span className="h-[3px] w-10 rounded-full bg-amber" /> Savings Estimator
              </p>
            </Reveal>
            <h2 className="font-display text-navy text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight">
              <MaskedLinesInView lines={["Estimate Your", <em className="italic text-sky">Savings</em>]} />
            </h2>
          </div>
          <Reveal delay={0.15} className="lg:col-span-5">
            <p className="text-lg text-ink font-light leading-relaxed">
              Run a first-pass estimate of what your voluntary benefits could return — before anyone asks you for a
              meeting.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          {CALCONIC_CALCULATOR_ID ? (
            <div
              data-calconic-calculator-id={CALCONIC_CALCULATOR_ID}
              data-calconic-scale="1"
              data-testid="calconic-embed"
              className="mt-12 min-h-[560px]"
            />
          ) : (
            <div
              data-testid="estimator-placeholder"
              className="mt-12 rounded-2xl border-2 border-dashed border-amber/70 bg-paper p-10 lg:p-14 text-center"
            >
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber/15 text-amber">
                <Calculator className="h-7 w-7" />
              </span>
              <h3 className="mt-6 font-display text-3xl text-navy">Your savings estimator loads here</h3>
              <p className="mx-auto mt-3 max-w-xl text-ink leading-relaxed">
                We're connecting our existing calculator. Meanwhile, get a first-pass estimate in a short
                conversation — or see how the funding models compare.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Magnetic
                  as="button"
                  testid="estimator-talk-to-us-button"
                  onClick={() => scrollToSection("#contact")}
                  className="group inline-flex items-center gap-2 rounded-full bg-amber px-8 py-4 text-[15px] font-bold text-navy shadow-[0_14px_30px_-12px_rgba(255,158,27,0.65)] transition-colors duration-300 hover:bg-navy hover:text-white"
                >
                  Talk to us
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Magnetic>
                <Link
                  to="/compare"
                  data-testid="estimator-compare-link"
                  className="group inline-flex items-center gap-2 rounded-full border border-navy/25 px-8 py-4 text-[15px] font-semibold text-navy transition-colors duration-300 hover:border-sky hover:text-sky"
                >
                  <MessageCircle className="h-4 w-4 text-sky" />
                  Compare your options
                </Link>
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
