import { ExternalLink } from "lucide-react";
import { LogoMark } from "./Logo";
import { scrollToSection } from "./motion";

const SITE_MAP = [
  { label: "How It Works", target: "#how-it-works" },
  { label: "Program Services", target: "#program-services" },
  { label: "Our Story", target: "#our-story" },
  { label: "Our Team", target: "#our-team" },
  { label: "Contact", target: "#contact" },
];

const ORIGINAL = [
  { label: "Blog", url: "https://www.myemployeesfirst.com/blog" },
  { label: "Benefits Companion Podcast", url: "https://www.myemployeesfirst.com" },
];

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="relative bg-deep border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <LogoMark className="h-10 w-10" />
            <span className="font-display text-white leading-none">
              <span className="block text-xl">Employees</span>
              <span className="block text-xl italic text-amber -mt-0.5">First</span>
            </span>
          </div>
          <p className="mt-6 max-w-sm text-white/50 text-[15px] leading-relaxed font-light">
            A CFO for your voluntary benefits. Transparency, visibility, and control over every premium dollar —
            returned to your employees.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-[12px] font-semibold tracking-[0.24em] uppercase text-white/40 mb-5">Site</p>
          <ul className="space-y-3">
            {SITE_MAP.map((l) => (
              <li key={l.label}>
                <a
                  href={l.target}
                  data-testid={`footer-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(l.target);
                  }}
                  className="link-draw text-[15px] text-white/70 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-[12px] font-semibold tracking-[0.24em] uppercase text-white/40 mb-5">Explore More</p>
          <ul className="space-y-3">
            {ORIGINAL.map((l) => (
              <li key={l.label}>
                <a
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`footer-original-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group inline-flex items-center gap-2 text-[15px] text-white/70 hover:text-white transition-colors"
                >
                  {l.label}
                  <ExternalLink className="h-3.5 w-3.5 text-white/40 group-hover:text-amber transition-colors" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-white/35 text-[13px] leading-relaxed">
            Recreation of{" "}
            <a
              href="https://www.myemployeesfirst.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white/60"
              data-testid="footer-original-site-link"
            >
              myemployeesfirst.com
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-[13px]" data-testid="footer-copyright">
            © {new Date().getFullYear()} Employees First. All rights reserved.
          </p>
          <p className="text-white/30 text-[12px] tracking-wide">Do the right thing. Always.</p>
        </div>
      </div>
    </footer>
  );
}
