import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ArrowRight, FileText } from "lucide-react";
import { Reveal, MaskedLinesInView } from "./motion";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function CaseStudyStrip() {
  const [cases, setCases] = useState(null);

  useEffect(() => {
    axios
      .get(`${API}/case-studies`)
      .then((r) => setCases(r.data))
      .catch(() => setCases([]));
  }, []);

  if (!cases || cases.length === 0) return null;

  return (
    <section data-testid="case-study-strip" className="relative bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="flex items-center gap-3 text-[12px] font-bold tracking-[0.26em] uppercase text-sky mb-6">
            <span className="h-[3px] w-10 rounded-full bg-amber" /> Case Studies
          </p>
        </Reveal>
        <h2 className="font-display text-navy text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight">
          <MaskedLinesInView lines={["The model, in the real", <em className="italic text-sky">world</em>]} />
        </h2>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.08} className="h-full">
              <Link
                to={`/case-studies/${c.slug}`}
                data-testid={`case-study-card-${c.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-7 shadow-[0_16px_40px_-30px_rgba(0,58,112,0.35)] transition-all duration-500 hover:-translate-y-1 hover:border-amber"
              >
                <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase text-sky">
                  <FileText className="h-3.5 w-3.5" />
                  {[c.industry, c.companySize].filter(Boolean).join(" · ") || "Client story"}
                </span>
                <h3 className="mt-4 font-display text-2xl text-navy leading-snug">{c.title}</h3>
                {c.metrics && c.metrics[0] && (
                  <p className="mt-4 font-display text-4xl text-amber">{c.metrics[0].value}</p>
                )}
                {c.metrics && c.metrics[0] && (
                  <p className="text-[13px] text-ink/70">{c.metrics[0].label}</p>
                )}
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[14px] font-bold text-navy group-hover:text-sky transition-colors">
                  Read the case study
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
