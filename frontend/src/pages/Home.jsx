import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import StatMoment from "@/components/StatMoment";
import Checkup from "@/components/Checkup";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Story from "@/components/Story";
import Team from "@/components/Team";
import Marquee from "@/components/Marquee";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-deep">
      <Nav />
      <main>
        <Hero />
        <Pillars />
        <StatMoment />
        <Checkup />
        <HowItWorks />
        <Services />
        <Story />
        <Team />
        <Marquee />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
