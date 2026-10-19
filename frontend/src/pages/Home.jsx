import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Pillars from "@/components/Pillars";
import StatMoment from "@/components/StatMoment";
import Checkup from "@/components/Checkup";
import HowItWorks from "@/components/HowItWorks";
import Estimator from "@/components/Estimator";
import Services from "@/components/Services";
import Story from "@/components/Story";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import CaseStudyStrip from "@/components/CaseStudyStrip";
import CompareInvite from "@/components/CompareInvite";
import Marquee from "@/components/Marquee";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { usePageMeta } from "@/utils/navigation";
import { SITE_TITLE, SITE_DESCRIPTION } from "@/config";

export default function Home() {
  usePageMeta(SITE_TITLE, SITE_DESCRIPTION);
  return (
    <div className="bg-deep">
      <Nav />
      <main>
        <Hero />
        <TrustBadges />
        <Pillars />
        <StatMoment />
        <Checkup />
        <HowItWorks />
        <Estimator />
        <Services />
        <Story />
        <Team />
        <FAQ />
        <CaseStudyStrip />
        <CompareInvite />
        <Marquee />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
