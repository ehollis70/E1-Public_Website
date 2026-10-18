import { Linkedin } from "lucide-react";
import { Reveal, MaskedLinesInView } from "./motion";

const TEAM = [
  { name: "Amy Hollis", role: "Founder & Chief Executive Officer", img: "https://static.wixstatic.com/media/27e6ac_d4fa99db6afa4cf19f5aa53759a78e04~mv2.png", url: "https://www.linkedin.com/in/amy-hollis-c317/" },
  { name: "Kristy Arciszewski, CEBS", role: "Chief of Staff", img: "https://static.wixstatic.com/media/27e6ac_64e2f6712565471eaec21e6e2b8df93d~mv2.jpg", url: "https://www.linkedin.com/in/kristyarciszewski/" },
  { name: "Aaron Austin", role: "Chief Operating Officer", img: "https://static.wixstatic.com/media/dbceb2_4f93ec5539b5480aad79da9d420402a9~mv2.jpg", url: "https://www.linkedin.com/in/aaronwaustin/" },
  { name: "Eric C. P. Hollis", role: "Chief Technology Officer", img: "https://static.wixstatic.com/media/27e6ac_f8760a26064f4b2886fe8783a90b232b~mv2.jpg", url: "https://www.linkedin.com/in/holliseric/" },
  { name: "Kai Hand", role: "Senior Vice President, Sales", img: "https://static.wixstatic.com/media/dbceb2_b7e154b44a96423f830b99f6cdc346ad~mv2.jpg", url: "https://www.linkedin.com/in/kaihand/" },
  { name: "Lori Black", role: "Vice President, Strategic Development", img: "https://static.wixstatic.com/media/dbceb2_87c74cd4d8a344ed9555c4beb7ef75bf~mv2.jpg", url: "https://www.linkedin.com/in/lori-black/" },
  { name: "Megan Leal", role: "Director, Program Management", img: "https://static.wixstatic.com/media/dbceb2_326e8b9f25424154b2f2c35e7b8cdd10~mv2.jpg", url: "https://www.linkedin.com/in/meganleal/" },
  { name: "Nicole Lorenzo, MPH", role: "Sr. Consultant, Voluntary Benefits", img: "https://static.wixstatic.com/media/dbceb2_329c0a4d13c047499258aa13c96a3e07~mv2.jpg", url: "https://www.linkedin.com/in/nicolelorenzo/" },
  { name: "Jenna Olberding", role: "Sales Project Manager", img: "https://static.wixstatic.com/media/dbceb2_1a41cd3f6ff245c5959f22c6446c1f24~mv2.jpg", url: "https://www.linkedin.com/in/jenna-olberding-b228a62/" },
  { name: "Bobbie Clark", role: "Executive Assistant", img: "https://static.wixstatic.com/media/dbceb2_14953d255c7b45d5b57b1d20bff48a27~mv2.jpg", url: "https://www.linkedin.com/in/bobbielueclark/" },
];

const ADVISORY = [
  { name: "Heather Christie, JD, CSP", role: "Advisory Board", img: "https://static.wixstatic.com/media/dbceb2_580bb01e897e4670a38942b0da9cbb06~mv2.jpg", url: "https://www.linkedin.com/in/heatherchristie/" },
  { name: "Steve Cyboran, ASA, MAAA", role: "Consulting Actuary", img: "https://static.wixstatic.com/media/dbceb2_5285b80195e34845b02b10768236afe4~mv2.jpg", url: "https://www.linkedin.com/in/stevecyboran/" },
  { name: "Erik Sossa", role: "Advisory Board", img: "https://static.wixstatic.com/media/dbceb2_521083b209304882a366ee2c13e164eb~mv2.jpg", url: "https://www.linkedin.com/in/erik-sossa-he-him-250809b/" },
  { name: "Bill Weyers, CEBS", role: "Advisory Board", img: "https://static.wixstatic.com/media/dbceb2_acc7329824df4b3db584178476c19651~mv2.jpg", url: "https://www.linkedin.com/in/billweyers/" },
  { name: "Debra Walker", role: "Insurance Advisor/Consultant", img: "https://static.wixstatic.com/media/27e6ac_1959cbcae916428aab63e4a000249470~mv2.jpg", url: "https://www.linkedin.com/in/debra-walker-cpa-9bb3b727/" },
  { name: "Mimi Leonard", role: "Advisory Board", img: "https://static.wixstatic.com/media/27e6ac_82fccca6cec84e019503da8e0920518a~mv2.jpg", url: "https://www.linkedin.com/in/mimi-leonard-a3299211/" },
  { name: "Keith Morrison, CEBS", role: "Advisory Board", img: "https://static.wixstatic.com/media/dbceb2_50d1dfcf9f8d47d9a1073f10d0134e74~mv2.jpg", url: "https://www.linkedin.com/in/keith-morrison-cebs-b72a014/" },
  { name: "Sanjiv Anand", role: "Advisory Board", img: "https://static.wixstatic.com/media/dbceb2_cdd54c00c6924207b481ff20f28b70e6~mv2.jpg", url: "https://www.linkedin.com/in/sanjivkanand/" },
  { name: "Anne Marie Towle, CPA", role: "Captive Strategy Consultant", img: "https://static.wixstatic.com/media/dbceb2_78e986d3c95a4df198294cb7ba40124e~mv2.jpg", url: "https://www.linkedin.com/in/anne-marie-towle-a8788613/" },
  { name: "Caroline Cyboran, ASA, MAAA", role: "Consulting Actuary", img: "https://static.wixstatic.com/media/dbceb2_2cf36447241047e6992e8caa3fdf50b5~mv2.jpg", url: "https://www.linkedin.com/in/caroline-cyboran/" },
];

export default function Team() {
  return (
    <section id="our-team" data-testid="team-section" className="relative bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="flex items-center gap-3 text-[12px] font-medium tracking-[0.28em] uppercase text-sky mb-6">
                <span className="h-px w-10 bg-sky/70" /> Our Team
              </p>
            </Reveal>
            <h2 className="font-display text-navy text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight">
              <MaskedLinesInView lines={["Led by experience.", <>Driven by integrity</>]} />
            </h2>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <p className="text-lg text-ink/70 leading-relaxed font-light">
                Led by Amy Hollis, who spent 20 years creating and leading national consulting practices in Voluntary
                Benefits, the Employees First team has deep leadership experience in Supplemental Health Benefits.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5" data-testid="team-grid">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={(i % 5) * 0.06} className="h-full">
              <div className="group h-full flex flex-col overflow-hidden rounded-2xl bg-white border border-navy/10 transition-all duration-500 hover:shadow-[0_24px_50px_-24px_rgba(0,58,112,0.35)] hover:-translate-y-1">
                <div className="relative aspect-[4/5] overflow-hidden bg-navy/5">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-testid={`team-photo-${m.name.split(" ")[0].toLowerCase()}`}
                  />
                  <a
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`team-linkedin-${m.name.split(" ")[0].toLowerCase()}`}
                    aria-label={`${m.name} on LinkedIn`}
                    className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-navy opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 hover:bg-amber"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-[15px] font-semibold text-navy leading-tight">{m.name}</h3>
                  <p className="mt-1 text-[12.5px] text-ink/55 leading-snug">{m.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-20 border-t border-navy/10 pt-12" data-testid="advisory-strip">
            <p className="text-[12px] font-semibold tracking-[0.28em] uppercase text-navy/50 mb-8">
              Advisory Board & Consultants
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8">
              {ADVISORY.map((m) => (
                <a
                  key={m.name}
                  href={m.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`advisory-link-${m.name.split(" ")[0].toLowerCase()}`}
                  className="group flex items-center gap-3"
                >
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className="h-12 w-12 rounded-full object-cover border border-navy/15 group-hover:border-amber transition-colors duration-300"
                  />
                  <span>
                    <span className="block text-[14px] font-semibold text-navy leading-tight group-hover:text-sky transition-colors duration-300">
                      {m.name}
                    </span>
                    <span className="block text-[12px] text-ink/50">{m.role}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
