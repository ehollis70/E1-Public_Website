import { useMemo, useState } from "react";
import CountUp from "react-countup";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Reveal, MaskedLinesInView, Magnetic, scrollToSection } from "@/components/motion";

const usd = (n) =>
  (n < 0 ? "-$" : "$") +
  new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(Math.abs(Math.round(n)));

const num = (n) => new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(Math.round(n));

const BASE_FEE_PCT = 30; // workbook: plan expenses = premium x (30% + sPFP)

function Segmented({ label, value, onChange, yesId, noId, groupTestid }) {
  return (
    <div>
      <label className="block text-[12px] font-bold tracking-[0.16em] uppercase text-navy mb-2">{label}</label>
      <div className="inline-flex rounded-full border border-navy/20 bg-white p-1" data-testid={groupTestid}>
        {[
          { v: true, l: "Yes", t: yesId },
          { v: false, l: "No", t: noId },
        ].map((o) => (
          <button
            key={o.l}
            type="button"
            data-testid={o.t}
            onClick={() => onChange(o.v)}
            className={`px-6 py-2 rounded-full text-[14px] font-bold transition-colors duration-300 ${
              value === o.v ? "bg-navy text-white" : "text-navy/60 hover:text-navy"
            }`}
          >
            {o.l}
          </button>
        ))}
      </div>
    </div>
  );
}

function Field({ label, testid, value, onChange, prefix, suffix, min = 0, step = "any" }) {
  return (
    <div>
      <label className="block text-[12px] font-bold tracking-[0.16em] uppercase text-navy mb-2">{label}</label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy/50 font-semibold pointer-events-none" aria-hidden="true">
            {prefix}
          </span>
        )}
        <input
          type="number"
          min={min}
          step={step}
          data-testid={testid}
          value={value}
          onChange={(e) => onChange(e.target.value === "" ? 0 : Number(e.target.value))}
          className={`field ${prefix ? "pl-9" : ""} ${suffix ? "pr-11" : ""}`}
        />
        {suffix && (
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-navy/50 font-semibold pointer-events-none" aria-hidden="true">
            %
          </span>
        )}
      </div>
    </div>
  );
}

export default function Estimator() {
  const [plansInForce, setPlansInForce] = useState(true);
  const [premium, setPremium] = useState(2000000);
  const [employees, setEmployees] = useState(20000);
  const [lossRatio, setLossRatio] = useState(35);
  const [spfp, setSpfp] = useState(0);
  const [techCreditsPct, setTechCreditsPct] = useState(0);
  const [techCredits, setTechCredits] = useState(0);
  const [integration, setIntegration] = useState(false);
  const [clrIncrease, setClrIncrease] = useState(34);
  const [epfp, setEpfp] = useState(12);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const r = useMemo(() => {
    const effLossRatio = integration ? lossRatio + clrIncrease : lossRatio;
    const feePct = BASE_FEE_PCT + spfp + (integration ? epfp : 0);
    const claims = premium * (effLossRatio / 100);
    const expenses = premium * (feePct / 100);
    const refund = plansInForce ? premium - claims - expenses + techCredits : 0;
    return {
      effLossRatio,
      feePct,
      claims,
      expenses,
      refund,
      perEmployee: employees > 0 ? refund / employees : null,
    };
  }, [premium, lossRatio, spfp, techCredits, integration, clrIncrease, epfp, plansInForce, employees]);

  const setTechPct = (v) => {
    setTechCreditsPct(v);
    setTechCredits(Math.round(premium * (v / 100)));
  };

  return (
    <section id="estimator" data-testid="estimator-section" className="relative bg-paper py-24 lg:py-32">
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
              Run a first-pass estimate of what an experience-rated voluntary benefits program could return —
              before anyone asks you for a meeting.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6 items-start">
          {/* Inputs */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-2xl bg-white border border-navy/10 p-8 lg:p-10 shadow-[0_30px_60px_-45px_rgba(0,58,112,0.45)]">
              <div className="grid sm:grid-cols-2 gap-6">
                <Segmented
                  label="Plans in force?"
                  value={plansInForce}
                  onChange={setPlansInForce}
                  yesId="estimator-plans-in-force-yes"
                  noId="estimator-plans-in-force-no"
                  groupTestid="estimator-plans-in-force"
                />
                <Segmented
                  label="Include claims integration?"
                  value={integration}
                  onChange={setIntegration}
                  yesId="estimator-integration-yes"
                  noId="estimator-integration-no"
                  groupTestid="estimator-integration"
                />
                <Field
                  label="Premium"
                  testid="estimator-premium-input"
                  value={premium}
                  onChange={setPremium}
                  prefix="$"
                />
                <Field
                  label="Benefit-eligible employees"
                  testid="estimator-employees-input"
                  value={employees}
                  onChange={setEmployees}
                />
                <Field
                  label="Claims loss ratio"
                  testid="estimator-loss-ratio-input"
                  value={lossRatio}
                  onChange={setLossRatio}
                  suffix="%"
                />
                <Field
                  label="Standard plan fees (sPFP)"
                  testid="estimator-spfp-input"
                  value={spfp}
                  onChange={setSpfp}
                  suffix="%"
                />
                <Field
                  label="Tech credits (% of premium)"
                  testid="estimator-tech-credits-pct"
                  value={techCreditsPct}
                  onChange={setTechPct}
                  suffix="%"
                />
                <Field
                  label="Estimated tech credits"
                  testid="estimator-tech-credits-input"
                  value={techCredits}
                  onChange={setTechCredits}
                  prefix="$"
                />
              </div>

              {integration && (
                <div className="mt-6 rounded-xl bg-paper border border-navy/10 p-6" data-testid="estimator-advanced">
                  <button
                    type="button"
                    data-testid="estimator-advanced-toggle"
                    className="flex w-full items-center justify-between text-left"
                    onClick={() => setShowAdvanced(!showAdvanced)}
                  >
                    <span className="text-[12px] font-bold tracking-[0.16em] uppercase text-navy">
                      Advanced — integration constants
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-amber transition-transform duration-300 ${showAdvanced ? "rotate-180" : ""}`}
                    />
                  </button>
                  {showAdvanced && (
                    <div className="mt-5 grid sm:grid-cols-2 gap-6">
                      <Field
                        label="Claims loss ratio increase"
                        testid="estimator-advanced-clri"
                        value={clrIncrease}
                        onChange={setClrIncrease}
                        suffix="%"
                      />
                      <Field
                        label="Enhanced plan fees percentage"
                        testid="estimator-advanced-epfp"
                        value={epfp}
                        onChange={setEpfp}
                        suffix="%"
                      />
                    </div>
                  )}
                </div>
              )}

              <p className="mt-8 flex items-start gap-2 text-[13px] text-ink/60 leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                All carrier and program expenses are capped and fully transparent.
              </p>
            </div>
          </Reveal>

          {/* Result */}
          <Reveal delay={0.2} className="lg:col-span-5">
            <div className="rounded-2xl bg-navy grain relative overflow-hidden p-8 lg:p-10" data-testid="estimator-result-panel">
              <p className="text-[12px] font-bold tracking-[0.24em] uppercase text-pale">
                Experience Rated Refunds
              </p>
              <p className="mt-6 font-display text-5xl lg:text-6xl text-amber leading-none" data-testid="estimator-refund-value">
                {plansInForce ? (
                  <CountUp
                    end={r.refund}
                    preserveValue
                    duration={0.7}
                    separator=","
                    formattingFn={(v) => usd(v)}
                  />
                ) : (
                  <span>{usd(0)}</span>
                )}
              </p>
              {!plansInForce && (
                <p className="mt-4 text-[14px] text-pale leading-relaxed" data-testid="estimator-plans-note">
                  With no plans in force, there's no premium flowing — and nothing to refund.
                </p>
              )}
              {plansInForce && r.refund <= 0 && (
                <p className="mt-4 text-[14px] text-pale leading-relaxed" data-testid="estimator-negative-note">
                  At these inputs the model doesn't produce a refund — claims and fees cover the premium.
                </p>
              )}

              <dl className="mt-8 space-y-3 border-t border-white/15 pt-6 text-[14px]">
                {[
                  { l: "Estimated claims", v: r.claims, t: "estimator-claims-value" },
                  { l: "Estimated plan expenses", v: r.expenses, t: "estimator-expenses-value" },
                  { l: "Tech credits", v: plansInForce ? techCredits : 0, t: "estimator-tech-credits-value" },
                ].map((row) => (
                  <div key={row.l} className="flex items-center justify-between gap-4" data-testid={row.t}>
                    <dt className="text-white/70">{row.l}</dt>
                    <dd className="font-semibold text-white">{usd(row.v)}</dd>
                  </div>
                ))}
                <div className="flex items-center justify-between gap-4 border-t border-white/15 pt-3">
                  <dt className="text-white/70">Refund per eligible employee</dt>
                  <dd className="font-semibold text-amber" data-testid="estimator-per-employee">
                    {r.perEmployee === null ? "—" : usd(r.perEmployee)}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-white/70">Effective loss ratio</dt>
                  <dd className="font-semibold text-white" data-testid="estimator-effective-loss-ratio">
                    {r.effLossRatio}%
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-white/70">Total plan expenses rate</dt>
                  <dd className="font-semibold text-white" data-testid="estimator-fee-rate">
                    {r.feePct}%
                  </dd>
                </div>
              </dl>

              <p className="mt-8 text-[12px] text-pale/70 leading-relaxed" data-testid="estimator-disclaimer">
                Estimate only — historical, company-reported results; not guaranteed.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center gap-4 justify-center">
            <Magnetic
              as="button"
              testid="estimator-talk-to-us-button"
              onClick={() => scrollToSection("#contact")}
              className="group inline-flex items-center gap-2 rounded-full bg-amber px-8 py-4 text-[15px] font-bold text-navy shadow-[0_14px_30px_-12px_rgba(255,158,27,0.65)] transition-colors duration-300 hover:bg-navy hover:text-white"
            >
              Talk to us
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
