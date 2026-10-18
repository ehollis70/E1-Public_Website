import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { scrollToSection, Magnetic } from "./motion";

const LINKS = [
  { label: "How It Works", target: "#how-it-works", testid: "nav-how-it-works" },
  { label: "Program Services", target: "#program-services", testid: "nav-program-services" },
  { label: "Our Story", target: "#our-story", testid: "nav-our-story" },
  { label: "Our Team", target: "#our-team", testid: "nav-our-team" },
  { label: "Contact", target: "#contact", testid: "nav-contact" },
];

export const goContact = () => scrollToSection("#contact");

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const jump = (target) => {
    setOpen(false);
    setTimeout(() => scrollToSection(target), open ? 250 : 0);
  };

  return (
    <>
      <header
        data-testid="site-nav"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-deep/85 backdrop-blur-xl border-b border-white/10 py-3"
            : "bg-deep/40 backdrop-blur-md py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between">
          <Logo />
          <nav className="hidden lg:flex items-center gap-8">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.target}
                data-testid={l.testid}
                onClick={(e) => {
                  e.preventDefault();
                  jump(l.target);
                }}
                className="link-draw text-[13.5px] font-medium tracking-[0.14em] uppercase text-white/75 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <Magnetic
              as="button"
              testid="nav-get-started-button"
              onClick={goContact}
              className="group inline-flex items-center gap-2 rounded-full bg-amber px-6 py-2.5 text-[13.5px] font-semibold tracking-wide text-deeper transition-colors duration-300 hover:bg-white"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Magnetic>
          </nav>
          <button
            data-testid="nav-mobile-toggle"
            className="lg:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-deep/97 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col justify-center gap-2 px-8">
          {LINKS.map((l, i) => (
            <a
              key={l.label}
              href={l.target}
              data-testid={`${l.testid}-mobile`}
              onClick={(e) => {
                e.preventDefault();
                jump(l.target);
              }}
              className={`font-display text-4xl text-white py-3 border-b border-white/10 transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {l.label}
            </a>
          ))}
          <button
            data-testid="nav-get-started-button-mobile"
            onClick={goContact}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-amber px-8 py-4 text-base font-semibold text-deeper"
          >
            Get Started <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </>
  );
}
