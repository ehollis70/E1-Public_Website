import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ArrowLeft, ArrowUpRight, Quote, AlertCircle } from "lucide-react";
import { Reveal, MaskedLinesInView, Magnetic, scrollToSection } from "@/components/motion";
import { usePageMeta } from "@/utils/navigation";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function CaseStudy() {
  const { slug } = useParams();
  const [cs, setCs] = useState(null);
  const [state, setState] = useState("loading");

  useEffect(() => {
    setState("loading");
    axios
      .get(`${API}/case-studies/${slug}`, { params: { preview: "true" } })
      .then((r) => {
        setCs(r.data);
        setState("ok");
      })
      .catch(() => setState("missing"));
  }, [slug]);

  usePageMeta(
    cs ? `${cs.title} | Employees First Case Study` : "Case Study | Employees First",
    "A client snapshot of the Employees First model at work on voluntary benefits — what we found, what changed, and what came back."
  );

  if (state === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <p className="text-navy/60 text-lg">Loading case study...</p>
      </div>
    );
  }

  if (state === "missing" || !cs) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-6 text-center">
        <AlertCircle className="h-12 w-12 text-amber" />
        <h1 className="mt-6 font-display text-4xl text-navy">Case study not found</h1>
        <p className="mt-3 text-ink">This study hasn't been published yet.</p>
        <Link
          to="/"
          data-testid="case-study-back-home"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 text-[15px] font-bold text-white hover:bg-sky transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to the home page
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white" data-testid="case-study-page">
      {/* Header */}
      <section className="hero-light">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 pt-32 pb-14 lg:pt-40">
          <Link
            to="/"
            data-testid="case-study-home-link"
            className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.16em] uppercase text-sky hover:text-navy transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Employees First
          </Link>
          <p className="mt-8 text-[12px] font-bold tracking-[0.26em] uppercase text-navy/50">
            {[cs.industry, cs.companySize].filter(Boolean).join(" · ") || "Client snapshot"}
          </p>
          <h1 className="mt-4 font-display text-navy text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight">
            <MaskedLinesInView lines={[cs.title]} />
          </h1>
        </div>
      </section>

      {/* Headline numbers */}
      {cs.metrics && cs.metrics.length > 0 && (
        <section className="relative bg-navy grain">
          <div className="mx-auto max-w-6xl px-6 lg:px-10 py-14 grid sm:grid-cols-3 gap-8">
            {cs.metrics.map((m, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="text-center" data-testid={`case-metric-${i}`}>
                  <p className="font-display text-5xl lg:text-6xl text-amber">{m.value}</p>
                  <p className="mt-2 text-white font-semibold">{m.label}</p>
                  {m.note && <p className="mt-1 text-[13px] text-pale/80">{m.note}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Narrative */}
      <section className="mx-auto max-w-4xl px-6 lg:px-10 py-16 lg:py-20 space-y-12">
        {[
          { label: "The challenge", body: cs.challenge, testid: "case-challenge" },
          { label: "What we found", body: cs.findings, testid: "case-found" },
          { label: "What changed", body: cs.changes, testid: "case-changed" },
        ].map((b, i) => (
          <Reveal key={b.label} delay={i * 0.05}>
            <div data-testid={b.testid}>
              <p className="flex items-center gap-3 text-[12px] font-bold tracking-[0.26em] uppercase text-sky mb-4">
                <span className="h-[3px] w-10 rounded-full bg-amber" /> {b.label}
              </p>
              <p className="text-lg text-ink font-light leading-relaxed whitespace-pre-line">{b.body}</p>
            </div>
          </Reveal>
        ))}

        {cs.quote && (
          <Reveal>
            <div className="rounded-2xl bg-paper border border-navy/10 p-8" data-testid="case-quote">
              <Quote className="h-7 w-7 text-amber" />
              <p className="mt-4 font-display text-2xl text-navy italic leading-snug">"{cs.quote}"</p>
              {cs.quoteAttribution && (
                <p className="mt-4 text-[14px] font-bold text-navy/60">— {cs.quoteAttribution}</p>
              )}
            </div>
          </Reveal>
        )}

        {cs.beforeAfter && cs.beforeAfter.length > 0 && (
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-navy/10" data-testid="case-before-after">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="p-4 text-[12px] font-bold tracking-[0.16em] uppercase">Metric</th>
                    <th className="p-4 text-[12px] font-bold tracking-[0.16em] uppercase">Before</th>
                    <th className="p-4 text-[12px] font-bold tracking-[0.16em] uppercase text-amber">After</th>
                  </tr>
                </thead>
                <tbody>
                  {cs.beforeAfter.map((r, i) => (
                    <tr key={i} className="border-t border-navy/10">
                      <td className="p-4 text-[14px] font-semibold text-navy">{r.metric}</td>
                      <td className="p-4 text-[14px] text-ink">{r.before}</td>
                      <td className="p-4 text-[14px] font-semibold text-navy bg-sky/5">{r.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        )}
      </section>

      {/* CTA */}
      <section className="bg-paper py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <h2 className="font-display text-3xl lg:text-4xl text-navy">See what your program could return</h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Magnetic
              as="button"
              testid="case-cta-estimator-button"
              onClick={() => scrollToSection("#estimator")}
              className="group inline-flex items-center gap-2 rounded-full bg-amber px-8 py-4 text-[15px] font-bold text-navy transition-colors duration-300 hover:bg-navy hover:text-white"
            >
              Estimate Your Savings
              <ArrowUpRight className="h-4 w-4" />
            </Magnetic>
            <Magnetic
              as="button"
              testid="case-cta-talk-button"
              onClick={() => scrollToSection("#contact")}
              className="inline-flex items-center gap-2 rounded-full border border-navy/25 px-8 py-4 text-[15px] font-semibold text-navy transition-colors duration-300 hover:border-sky hover:text-sky"
            >
              Talk to us
            </Magnetic>
          </div>
        </div>
      </section>
    </div>
  );
}
