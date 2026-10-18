export const LogoMark = ({ className = "h-9 w-9" }) => (
  <img src="/brand/icon.png" alt="Employees First icon" className={`${className} object-contain`} />
);

export const LogoPrimary = ({ className = "h-9 w-auto" }) => (
  <img src="/brand/logo_primary.png" alt="Employees First" className={`${className} object-contain`} />
);

export const LogoReverse = ({ className = "h-9 w-auto" }) => (
  <img src="/brand/logo_reverse.png" alt="Employees First" className={`${className} object-contain`} />
);

export const Logo = ({ onDark = false, className = "" }) => (
  <a
    href="#top"
    data-testid="logo-link"
    className={`inline-flex items-center transition-transform duration-300 hover:scale-[1.02] ${className}`}
    onClick={(e) => {
      e.preventDefault();
      const lenis = window.__lenis;
      if (lenis) lenis.scrollTo(0, { duration: 1.4 });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    }}
  >
    {onDark ? <LogoReverse className="h-10 w-auto" /> : <LogoPrimary className="h-9 w-auto" />}
  </a>
);

export default Logo;
