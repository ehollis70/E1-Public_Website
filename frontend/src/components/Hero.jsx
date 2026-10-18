import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, ArrowUpRight } from "lucide-react";
import { MaskedLines, Magnetic, scrollToSection } from "./motion";

const HERO_IMG =
  "https://static.wixstatic.com/media/84770f_b6a52e9ac3ba4717ad8c8575375d0c12~mv2.jpg/v1/fill/w_1200,h_1400,al_c,q_85/hero_employee.jpg";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section id="top" ref={ref} data-testid="hero-section" className="hero-light relative overflow-hidden">
      <motion.div style={{ y: glowY }} className="pointer-events-none absolute -top-32 right-[-8%] h-[520px] w-[520px] rounded-full bg-pale/40 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-16 lg:pt-40 lg:pb-24 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-screen">
        <div className="lg:col-span-7 relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="flex items-center gap-3 text-[12px] font-bold tracking-[0.26em] uppercase text-sky mb-8"
          >
            <span className="h-[3px] w-10 rounded-full bg-amber" />
            Voluntary Benefits, Transparent
          </motion.p>
          <h1 className="font-display text-navy text-5xl sm:text-6xl lg:text-[5.4rem] leading-[0.98] tracking-tight">
            <MaskedLines
              lines={["A CFO For Your", <>Voluntary <em className="italic text-amber">Benefits</em></>]}
              delay={0.25}
              stagger={0.16}
            />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="mt-8 max-w-xl text-lg lg:text-xl text-ink font-light leading-relaxed"
          >
            Since 2023, we've unlocked over{" "}
            <span className="text-navy font-bold">$44,000,000</span> for employee benefit reinvestment.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic
              as="button"
              testid="hero-get-started-button"
              onClick={() => scrollToSection("#contact")}
              className="group inline-flex items-center gap-2 rounded-full bg-amber px-8 py-4 text-[15px] font-bold text-navy shadow-[0_14px_30px_-12px_rgba(255,158,27,0.65)] transition-colors duration-300 hover:bg-navy hover:text-white"
            >
              Get Started
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Magnetic>
            <Magnetic
              as="button"
              testid="hero-how-it-works-button"
              onClick={() => scrollToSection("#how-it-works")}
              className="group inline-flex items-center gap-3 rounded-full border border-navy/25 px-8 py-4 text-[15px] font-semibold text-navy transition-colors duration-300 hover:border-sky hover:text-sky"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky/15">
                <Play className="h-3 w-3 fill-sky text-sky" />
              </span>
              How It Works
            </Magnetic>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="photo-frame relative overflow-hidden rounded-t-[180px] rounded-b-2xl shadow-[0_40px_80px_-40px_rgba(0,58,112,0.4)] aspect-[5/6]">
              <motion.img
                style={{ y: imgY }}
                src={HERO_IMG}
                alt="Employee smiling, supported by an employer that puts employees first"
                className="absolute inset-0 h-[112%] w-full object-cover"
                data-testid="hero-photo"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/25 via-transparent to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 lg:-left-12 rounded-2xl bg-white px-6 py-5 shadow-[0_24px_60px_-24px_rgba(0,58,112,0.45)] border border-navy/10"
              data-testid="hero-stat-card"
            >
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-sky">Unlocked since 2023</p>
              <p className="font-display text-4xl lg:text-5xl text-navy mt-1">$44,000,000<span className="text-amber">+</span></p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="relative z-10 border-t border-navy/10 bg-white/60 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex flex-wrap items-center gap-x-10 gap-y-2 text-[12px] font-semibold tracking-[0.2em] uppercase text-navy/60">
          <span>Accident</span>
          <span className="h-1.5 w-1.5 rounded-full bg-amber" />
          <span>Hospital Indemnity</span>
          <span className="h-1.5 w-1.5 rounded-full bg-amber" />
          <span>Critical Illness</span>
          <span className="hidden sm:inline text-ink/50 normal-case tracking-normal font-normal ml-auto">
            The Employees First ERISA-compliant financial model
          </span>
        </div>
      </div>
    </section>
  );
}
