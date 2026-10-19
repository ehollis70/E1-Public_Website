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
      <div className="flex h-20 items-center justify-center rounded-lg bg-white px-5 py-3 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:ring-2 group-hover:ring-amber group-hover:shadow-[0_14px_30px_-16px_rgba(255,158,27,0.5)]">
        <img
          src={b.img}
          alt={b.alt}
          loading="lazy"
          className="max-h-10 max-w-[62%] object-contain"
          data-testid={`trust-badge-img-${i}`}
        />
      </div>
      <p className="mt-2 text-[11.5px] leading-snug text-ink/60">{b.caption}</p>
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
    <section
      data-testid="trust-badge-strip"
      className="relative border-y border-navy/10 bg-paper py-10"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-[11px] font-bold tracking-[0.24em] uppercase text-navy/50 mb-6">
            Certifications &amp; Awards
          </p>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {BADGES.map((b, i) => (
            <Chip key={b.caption} b={b} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
