import { Link } from "react-router-dom";
import { ArrowUpRight, Scale } from "lucide-react";
import { Reveal, MaskedLinesInView } from "./motion";

export default function CompareInvite() {
  return (
    <section data-testid="compare-invite" className="relative bg-white pb-4 lg:pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 rounded-2xl bg-sand border border-navy/10 px-8 py-10 lg:px-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-white">
                  <Scale className="h-5 w-5" />
                </span>
                <p className="text-[12px] font-bold tracking-[0.24em] uppercase text-navy/70">
                  Still Comparing?
                </p>
              </div>
              <h2 className="font-display text-3xl lg:text-4xl text-navy leading-snug">
                See the three ways to fund Accident, Hospital Indemnity and Critical Illness — side by side.
              </h2>
            </div>
            <Link
              to="/compare"
              data-testid="compare-invite-button"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-navy px-8 py-4 text-[15px] font-bold text-white transition-colors duration-300 hover:bg-sky"
            >
              Compare the Options
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
