import { Award, Building2, Quote } from "lucide-react";
import { Reveal, MaskedLinesInView } from "./motion";

const FOUNDER_IMG =
  "https://static.wixstatic.com/media/27e6ac_d4fa99db6afa4cf19f5aa53759a78e04~mv2.png/v1/fill/w_800,h_1000,al_c,q_85/amy_hollis.png";

const FIRMS = ["Willis Towers Watson", "Buck", "Marsh McLennan (Mercer)"];

export default function Story() {
  return (
    <section id="our-story" data-testid="story-section" className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="flex items-center gap-3 text-[12px] font-bold tracking-[0.26em] uppercase text-sky mb-6">
            <span className="h-[3px] w-10 rounded-full bg-amber" /> Our Story
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-display text-navy text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight">
              <MaskedLinesInView lines={['"Do the right thing."', <em className="italic text-amber">Always.</em>]} />
            </h2>
            <Reveal delay={0.15}>
              <p className="mt-8 text-lg text-ink leading-relaxed font-light max-w-2xl">
                At Employees First, this idea drives us forward. That's why we've taken a fresh look at employer-paid
                and employee-paid benefits and are advancing new ways to help employers better support the well-being
                of their workforce. Our innovative model gives employers unprecedented access to funds that can be
                used to pay for benefits and services that strengthen employee health and satisfaction, without added
                expense. <span className="text-navy font-bold">It's the right idea for everyone.</span>
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-12 flex items-start gap-4 rounded-2xl bg-paper border border-navy/10 p-7" data-testid="story-quote-card">
                <Quote className="h-7 w-7 text-amber shrink-0" />
                <p className="font-display text-xl lg:text-2xl text-navy italic leading-snug">
                  Together, we can make sure you are always putting your Employees First.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="relative" data-testid="founder-spotlight">
                <div className="photo-frame relative overflow-hidden rounded-t-[160px] rounded-b-2xl border border-navy/10 aspect-[4/5]">
                  <img
                    src={FOUNDER_IMG}
                    alt="Amy Hollis, Founder & Chief Executive Officer"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    data-testid="founder-photo"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-white font-display text-3xl leading-none drop-shadow">Amy Hollis</p>
                    <p className="text-amber text-[12px] font-bold tracking-[0.2em] uppercase mt-2">
                      Founder & Chief Executive Officer
                    </p>
                  </div>
                </div>

                <div className="rounded-b-2xl border border-t-0 border-navy/10 bg-paper p-7">
                  <div className="flex flex-wrap gap-2">
                    {FIRMS.map((f) => (
                      <span
                        key={f}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white border border-navy/15 px-3 py-1 text-[12px] font-semibold text-navy"
                      >
                        <Building2 className="h-3 w-3 text-sky" /> {f}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 text-[15px] text-ink leading-relaxed">
                    With more than 20 years of benefits expertise, Hollis has created and led multiple highly
                    successful voluntary benefit practices for preeminent national consulting firms.
                  </p>
                  <div className="mt-5 flex items-center gap-3 border-t border-navy/10 pt-5">
                    <Award className="h-8 w-8 text-amber shrink-0" />
                    <p className="text-[15px] text-navy leading-snug">
                      Over the last decade, engaged with{" "}
                      <span className="font-bold">nearly half of the Fortune 500</span> as lead strategist in
                      voluntary benefit programs.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
