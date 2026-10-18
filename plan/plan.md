# Employees First — Modernized Landing Page Recreation

A single-page, award-caliber recreation of myemployeesfirst.com that keeps every message, claim, and section of the original site but presents it with a bold editorial design, premium motion, and a signature kinetic hero. It ends with a working contact form that starts the conversation the original site asks for.

## Who it's for
- **Primary:** CFO, HR, and Total Rewards leaders at mid-to-large employers who buy or renew voluntary benefits (Accident, Hospital Indemnity, Critical Illness) and suspect hidden value is leaking to carriers.
- **Secondary:** Brokers and consultants evaluating the Employees First model on behalf of clients.

## Core features and experience
1. **Sticky nav + logo** — original "Employees First" brand wordmark, redrawn as a crisp original SVG mark (also used as favicon); anchors: How It Works, Program Services, Our Story, Our Team, Contact; prominent "Get Started" button.
2. **Kinetic hero** — "A CFO For Your Voluntary Benefits" with masked line-by-line on-load reveal; the "$44,000,000 unlocked since 2023" stat lands as the signature moment with a subtle parallax/3D treatment on the hero photo; dual CTAs (Get Started / How It Works), exactly as the original.
3. **"Bring More Value to Your People"** — the four transparency pillars (Exact Claims Paid, Reserves & Admin Costs, All Compensation, Carrier Charges) as an aligned bento; the "Most employers see OVER 25% savings in the first year" stat rendered as a large editorial moment.
4. **Blue check-up banner** — the original "run a comprehensive check-up on your voluntary benefits… let us do the heavy lifting" callout with Learn More.
5. **How It Works** — "We Make the Invisible, Visible" narrative condensed from the How It Works page: the problem (carriers hold all the information), the model (analyze claims → identify premium dollars after claims and capped fees → capture excess → return it), the guarantee ("Most employers see over 25% savings… Guaranteed."), and the six reinvestment options returned as a visual list. "See How Our Program Works" 60-second overview presented as a poster card (video itself stays out of scope).
6. **Program Services** — the four services from the original: Plan Analytics (SHOp), Program Management, Compliance Oversight, Employer Dashboard, each with its original description.
7. **Our Story** — "Do the right thing. Always.", the integrity/mission copy, and a Founder spotlight on Amy Hollis (20+ years; Willis Towers Watson, Buck, Marsh McLennan; Fortune 500 reach).
8. **Our Team** — leadership grid (Amy Hollis, Kristy Arciszewski, Aaron Austin, Eric C. P. Hollis, Kai Hand, Lori Black, Megan Leal, Nicole Lorenzo, Bobbie Clark) with real headshots and roles, plus the Advisory Board (Heather Christie, Steve Cyboran, Erik Sossa, Bill Weyers, Debra Walker) in a compact strip; LinkedIn links preserved.
9. **One slow editorial marquee** — a single marquee band carrying the core value words (Transparency · Visibility · Control · Employees First) between sections.
10. **Contact section** — "Let's Start a Conversation" with a working form (name, email, company, message) saved to the backend, with success confirmation — replacing the original's embedded HubSpot form.
11. **Footer** — original site map (Blog, Benefits Companion Podcast, etc.) linking to the live original site, plus copyright.

## User flow
Land → kinetic hero states the promise and the $44M proof → scroll through visibility pillars and the 25% stat → understand the model in How It Works → see the four Program Services → read the story and meet the team → click any "Get Started" to jump to the contact form → submit and see confirmation. Smooth momentum scrolling throughout; section reveals never hide nav or hero content.

## UI/UX feel
- **Art direction: "The Invisible, Made Visible"** — deep navy (#003A70) as the dominant ground, luminous light-blue (#009ADE) and the brand's amber (#FF9E1B) as sharp accents; money-light motif: dollars moving from darkness into visible light. Dark editorial sections alternate with light ones, mirroring "opaque vs. transparent."
- **Typography:** distinctive serif display face paired with a clean geometric sans (no Inter/Roboto) — echoing the original's Garamond + Avenir pairing, upgraded.
- **Real photography** (original site's people imagery plus equivalent premium stock) treated deliberately: clipped frames, spotlight treatment, subtle parallax.
- **Motion:** framer-motion scroll reveals with staggered masked text, magnetic hover on CTAs, counters for the 25% and $44M stats; lenis momentum scrolling; purposeful and consistent, never decorative noise. Fully responsive; mobile is a first-class layout.

## Implementation phases
- **Phase 1 — MVP (built now):** the complete single-page landing site above, including the redrawn SVG logo/favicon, all original copy and stats, team grid, marquee, full motion system, and the contact form storing submissions in the database.
- **Phase 2:** embed the actual 60-second program video once its file/URL is supplied; blog feed and podcast section; standalone sub-pages mirroring the original URL structure.
- **Phase 3:** SEO/sitemap/social-card polish pass, analytics, and wiring the contact form to the company's real inbox/CRM.

## Assumptions
- "Landing page" means one modernized single page condensing all five original pages (Home, How It Works, Program Services, Our Story, Our Team) plus a working contact form — not a multi-page 1:1 clone.
- All copy, names, numbers ($44,000,000 since 2023, 25% first-year savings, team roles, firm names) are taken verbatim from the live site; nothing is invented.
- The original's HubSpot form is replaced by an on-site form storing submissions in the app database (no HubSpot credentials available); forwarding them by email is a later phase.
- The 60-second overview video is not embeddable without its source file, so Phase 1 shows a poster card; Blog and Podcast become footer links to the original site rather than recreated pages.
- The original Wix-hosted brand photos and headshots are reused where quality allows; lower-quality images are replaced with equivalent premium stock.
- No third-party integrations (payments, auth, LLMs) are needed for this build.
