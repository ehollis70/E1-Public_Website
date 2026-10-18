import { Reveal } from "./motion";

const BADGES = [
  {
    img: "/brand/wbe_wbenc.png",
    alt: "Women's Business Enterprise National Council certification logo",
    caption: "certified by Women's Business Enterprise National Council",
    url: null,
  },
  {
    img: "/brand/award_hrtechoutlook.png",
    alt: "Top Voluntary Employees Benefit Service 2025 award badge from HR Tech Outlook",
    caption: "award from HR Tech Outlook",
    url: "https://www.hrtechoutlook.com/",
  },
  {
    img: "/brand/soc_aicpa.jpg",
    alt: "AICPA SOC for Service Organizations badge",
    caption: "certified by AICPA SOC",
    url: "https://www.aicpa.org/soc4so",
  },
  {
    img: "/brand/hipaa_seal.png",
    alt: "HIPAA Compliant seal from HIPAA Training.com",
    caption: "HIPAA compliance",
    url: "https://www.hipaatraining.com/",
  },
];

const Chip = ({ b, i }) => {
  const inner = (
    <div className="group h-full">
      <div className="flex h-28 items-center justify-center rounded-xl bg-white p-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:ring-2 group-hover:ring-amber group-hover:shadow-[0_18px_40px_-18px_rgba(255,158,27,0.55)]">
        <img
          src={b.img}
          alt={b.alt}
          loading="lazy"
          className="max-h-full max-w-full object-contain"
          data-testid={`trust-badge-img-${i}`}
        />
      </div>
      <p className="mt-3 text-[12.5px] leading-snug text-pale/80">{b.caption}</p>
    </div>
  );
  return (
    <Reveal delay={i * 0.08} className="h-full">
      {b.url ? (
        <a
          href={b.url}
          target="_blank"
          rel="noopener noreferrer"
          data-testid={`trust-badge-link-${i}`}
          aria-label={b.alt}
          className="block h-full"
        >
          {inner}
        </a>
      ) : (
        <div data-testid={`trust-badge-${i}`} className="block h-full">
          {inner}
        </div>
      )}
    </Reveal>
  );
};

export default function TrustBadges() {
  return (
    <div data-testid="trust-badge-strip" className="mx-auto max-w-7xl px-6 lg:px-10 pt-14 pb-12">
      <Reveal>
        <p className="text-[12px] font-bold tracking-[0.24em] uppercase text-pale/70 mb-8">
          Certifications &amp; Awards
        </p>
      </Reveal>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {BADGES.map((b, i) => (
          <Chip key={b.caption} b={b} i={i} />
        ))}
      </div>
    </div>
  );
}
