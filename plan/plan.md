# SEO Pack — Sitemap, Social Share Cards & Search Enhancements

Makes the Employees First landing page discoverable by search engines and AI answer engines, and gives it a proper card when the link is shared on LinkedIn, WhatsApp, Facebook, or iMessage. All tags are pointed at www.myemployeesfirst.com, the confirmed production domain.

**Production-site safety, answered directly: no. Nothing in this work touches your live website.** Every change is made inside this preview app's own code. Your current Wix site at myemployeesfirst.com is not logged into, not edited, and not affected in any way — it keeps running exactly as is. The new tags only matter if and when you choose to publish this app onto that domain; until then your production site is untouched.

## Who it's for
- Search engines (Google, Bing) and AI answer engines (ChatGPT, Claude, Perplexity, Apple Intelligence) that need complete content signals to index and cite the page.
- People sharing the link socially, who should see a polished preview card instead of a bare URL.

## Core features and experience
1. **Complete static head** — proper title (50–60 chars) and description (150–160 chars) written from the page's own copy, canonical link to https://www.myemployeesfirst.com/, index/follow robots directive, and the current stale defaults fully replaced.
2. **Social share cards** — Open Graph and Twitter card tags driven by the chosen share image: the hero employee photo, center-cropped to exactly 1200×630 and shipped as a real hosted asset, with correct dimensions and alt text.
3. **Structured data (JSON-LD)** — an Organization node (name, description, url, logo, image) plus a Person node for founder Amy Hollis using her verbatim title. Nothing invented: no ratings, reviews, addresses, phone numbers, or social profiles that aren't confirmed.
4. **No-JS content fallback** — a noscript block carrying the page's real h1 and opening paragraph, so non-JS crawlers and social scrapers index actual content instead of an empty shell.
5. **robots.txt** — allows all search and AI crawlers, names them in an explicit group (Googlebot, Bingbot, GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended, Applebot, Applebot-Extended, meta-externalagent, facebookexternalhit, Twitterbot, Amazonbot, CCBot), keeps every crawler off /api/, and points to the sitemap.
6. **sitemap.xml** — one clean entry for the homepage at the production domain with a real lastmod date.
7. **llms.txt** — a plain-text summary of what the company does, who it serves, and what's on the page, written only from verifiable page content (no prices, no contact details, no unconfirmed claims).
8. **On-page hygiene audit** — exactly one h1, alt text on every meaningful image, all navigation as real anchor links, key copy as selectable text; fix any gaps found.
9. **Icons** — favicon already ships as the real E icon; add the apple-touch-icon so iOS shares and bookmarks render the mark.

## User flow
A crawler or AI bot fetches the page → reads the static head, noscript fallback, and JSON-LD without running JavaScript → follows robots.txt to the sitemap → indexes one clean canonical URL. A person pastes the link into LinkedIn or WhatsApp → the scraper reads the OG tags → the hero photo renders as the link preview card. Human visitors see no change: the design, motion, and content stay exactly as approved.

## UI/UX feel
Zero visual change to the page itself — the award-level design stays untouched. The only new visible artifact is the 1200×630 share card (the bright hero photo), seen only inside social apps and chat clients.

## Implementation phases
- **Phase 1 — MVP (built now):** everything above, inside the preview app: head overhaul, share-card image, JSON-LD, noscript fallback, robots.txt, sitemap.xml, llms.txt, hygiene audit, and verification (real files served, valid JSON-LD, no placeholder or preview-host URLs anywhere, app still renders cleanly on desktop and mobile).
- **Phase 2 (after you deploy):** you press Deploy, turn on the platform's search-engine-crawling toggle, and the tags go live; then verify the live domain serves rendered content to Googlebot and AI crawlers, submit the sitemap in Google Search Console, and re-scrape the share card in Facebook/LinkedIn debuggers (those platforms cache aggressively).
- **Phase 3:** grow the sitemap and per-route tags if sub-pages are added; add an FAQ section with matching FAQ structured data for richer AI citations; analytics.

## Assumptions
- Domain: www.myemployeesfirst.com is used consistently in canonical, og:url, og:image, sitemap, robots, and JSON-LD. It only takes effect when this app is deployed to that domain — a step you control; nothing changes on the live Wix site now.
- Share image: the hero employee photo, cropped to 1200×630 with no added text.
- JSON-LD type is Organization (B2B benefits company) with the founder Person node; the company's own LinkedIn profile is not confirmed, so sameAs is omitted rather than guessed.
- No FAQPage structured data yet — the page has no FAQ section, and the skill's rule requires on-page content to match.
- The site is single-page, so no per-route meta library (react-helmet-async) is added — the static head covers every crawler.
- Indexing speed is not instant: days-to-weeks and requires Google Search Console submission, which is a Phase 2, post-deploy step.
