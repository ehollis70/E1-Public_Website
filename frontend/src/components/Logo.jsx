export const LogoMark = ({ className = "h-9 w-9" }) => (
  <svg viewBox="0 0 44 44" fill="none" className={className} aria-hidden="true">
    <circle cx="22" cy="22" r="20.5" stroke="#009ADE" strokeWidth="1.6" opacity="0.85" />
    <circle cx="22" cy="22" r="13" stroke="#009ADE" strokeWidth="1.2" opacity="0.45" />
    <circle cx="22" cy="22" r="6" fill="#FF9E1B" />
    <circle cx="22" cy="22" r="2.4" fill="#04182E" />
    <path d="M22 1.5v7M22 35.5v7M1.5 22h7M35.5 22h7" stroke="#FF9E1B" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const Logo = ({ dark = true, className = "" }) => (
  <a
    href="#top"
    data-testid="logo-link"
    className={`flex items-center gap-3 group ${className}`}
    onClick={(e) => {
      e.preventDefault();
      const lenis = window.__lenis;
      if (lenis) lenis.scrollTo(0, { duration: 1.4 });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    }}
  >
    <LogoMark className="h-9 w-9 transition-transform duration-500 group-hover:rotate-90" />
    <span
      className={`font-display leading-none ${
        dark ? "text-white" : "text-navy"
      }`}
    >
      <span className="block text-[19px] tracking-wide">Employees</span>
      <span className="block text-[19px] italic text-amber tracking-wide -mt-0.5">First</span>
    </span>
  </a>
);

export default Logo;
