import { HeartPulse, ArrowRight } from "lucide-react";
import { Reveal, scrollToSection, Magnetic } from "./motion";

export default function Checkup() {
  return (
    <section data-testid="checkup-banner" className="relative overflow-hidden bg-sky">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 30%, rgba(255,255,255,0.9) 0, transparent 40%), radial-gradient(circle at 10% 90%, rgba(255,255,255,0.6) 0, transparent 35%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20 flex flex-col lg:flex-row items-start lg:items-center gap-8 justify-between">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
              <HeartPulse className="h-5 w-5" />
            </span>
            <p className="text-[12px] font-semibold tracking-[0.28em] uppercase text-white/85">
              A Check-Up For Your Benefits
            </p>
          </div>
          <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-white leading-snug">
            This year, as you check your medical benefits, don't forget to run a comprehensive check-up on your
            voluntary benefits, too.{" "}
            <span className="italic text-deep">But let us do the heavy lifting.</span>
          </p>
        </Reveal>
        <Reveal delay={0.15} className="shrink-0">
          <Magnetic
            as="button"
            testid="checkup-learn-more-button"
            onClick={() => scrollToSection("#how-it-works")}
            className="group inline-flex items-center gap-2 rounded-full bg-deep px-8 py-4 text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-deeper"
          >
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
