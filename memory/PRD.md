# PRD — Employees First Landing Page Recreation

## Original Problem Statement
"Build a landing page: Can you scan my existing website and recreate it?" — a single-page, award-caliber recreation of myemployeesfirst.com keeping every message, claim, and section of the original site, with a bold editorial design, premium motion, a signature kinetic hero, and a working contact form.

## User Personas
- **Primary:** CFO, HR, and Total Rewards leaders at mid-to-large employers who buy or renew voluntary benefits (Accident, Hospital Indemnity, Critical Illness) and suspect hidden value is leaking to carriers.
- **Secondary:** Brokers and consultants evaluating the Employees First model for clients.

## Architecture
- React (CRA + CRACO) single-page frontend, Tailwind custom theme (navy #003A70 / deep #04182E / sky #009ADE / amber #FF9E1B / paper #F8F9FA), fonts: Cormorant Garamond (display) + Outfit (body).
- framer-motion (masked line reveals, scroll reveals, magnetic CTAs), lenis (momentum scrolling), react-countup ($44M, 25% counters).
- FastAPI backend: POST/GET /api/contact storing submissions in MongoDB (contact_submissions collection), PyObjectId/BaseDocument pattern.
- Logo redrawn as original SVG mark (LogoMark) + favicon.svg.

## Sections (all copy verbatim from live site, crawled 2026-10-18)
1. Sticky glass nav (How It Works, Program Services, Our Story, Our Team, Contact, Get Started) + mobile overlay menu
2. Kinetic hero: "A CFO For Your Voluntary Benefits", $44,000,000 stat card, arch photo (original brand photo), dual CTAs
3. Pillars: "Bring More Value to Your People" — Exact Claims Paid / Reserves & Admin Costs / All Compensation / Carrier Charges bento + "We've already found them" strip + Protect/Elevate/Leverage row
4. Stat moment: "Most employers see over 25% savings in the first year" with counter + money-light backdrop
5. Check-up banner (sky blue): "…let us do the heavy lifting" + Learn More
6. How It Works: "We Make the Invisible, Visible", 4-step model, guarantee card, 6 reinvestment options, 60-second overview poster card
7. Program Services: Plan Analytics (SHOp), Program Management, Compliance Oversight, Employer Dashboard
8. Our Story: "Do the right thing." / Always., mission, Amy Hollis founder spotlight (20+ yrs; WTW, Buck, Marsh McLennan; ~half of Fortune 500)
9. Our Team: 10 leadership cards with real headshots + LinkedIn; advisory strip of 10 (board, actuaries, consultants)
10. Marquee band: Transparency · Visibility · Control · Employees First
11. Contact: "Let's Start a Conversation" working form → MongoDB, success confirmation
12. Footer: site anchors + Blog/Podcast links to original site + copyright

## Implemented
- 2026-10-18: Full Phase 1 recreation. Backend contact API verified with curl (create + list). Form submit → success state verified in preview. Desktop and mobile screenshot passes clean.
- 2026-10-18: **Brand-faithful re-skin (approved plan):** real brand assets processed to transparent PNGs (primary wordmark on light surfaces, reverse light-blue/orange variant on navy bands, E-icon as favicon + small-format mark); fonts swapped to Source Sans 3 body + Cormorant Garamond display; body grey #54575A; hybrid theme — bright hero and light sections (white/paper/sand), deep navy reserved for the 25% stat band, marquee, and footer; orange arrow motif system (CTA arrows, list tick arrows, marquee separators, ghost arrow behind 25% stat); dark money-light photo retired; re-verified desktop + mobile (no overflow) and contact form submit end-to-end on mobile.

## Backlog
- **P1:** Embed the real 60-second program video when file/URL supplied (poster card is a placeholder).
- **P1:** Email/CRM forwarding of contact submissions (replaces original HubSpot form).
- **P2:** Blog feed and Benefits Companion Podcast sections; standalone sub-pages mirroring original URL structure.
- **P2:** SEO/sitemap/social-card polish, analytics.
  - SEO/sitemap/social-card polish: DONE 2026-10-18 (head overhaul, og-image 1200×630, JSON-LD Organization + founder Person, noscript fallback, robots.txt, sitemap.xml, llms.txt, apple-touch-icon, hygiene audit — all verified in preview; live effect requires redeploy + search-crawling toggle + GSC submission).
  - FAQ section with matching FAQPage structured data: DONE 2026-10-18 (6 Q&As composed only from existing on-page claims, accordion UI, FAQPage JSON-LD verified to match on-page text exactly; section placed between Our Team and the marquee; llms.txt updated).
- **P2:** Custom 404 + og-image assets.

## Notes
- Advisory strip intentionally includes all real advisors found on the live site (Heather Christie, Steve Cyboran, Erik Sossa, Bill Weyers, Debra Walker, Mimi Leonard, Keith Morrison, Sanjiv Anand, Anne Marie Towle, Caroline Cyboran) plus Jenna Olberding in the leadership grid — faithful to source.
- No credentials/auth in this app; test_credentials.md not applicable.
