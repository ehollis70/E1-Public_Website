# Trust Badge Strip in the Footer

Recreate the certification-and-awards row from the footer of myemployeesfirst.com inside this app's navy footer: the three uploaded logos plus the company's existing HIPAA seal, each in a clean white chip with the original captions and links, with the same restrained motion craft as the rest of the page.

## Who it's for
- Employers, brokers, and consultants evaluating the company at the footer of the page — the moment where credentials close the deal.
- Anyone pasting or sharing the site who wants visible proof of certification (women-owned, award-winning, SOC-audited, HIPAA-trained).

## Core features and experience
1. **New "Certifications & Awards" strip** at the top of the navy footer, above the existing site-map columns: four badges in one row, exactly matching the original site's footer arrangement.
2. **The four badges:**
   - Women's Business Enterprise — the uploaded "WOB Certified WBENC" logo (color version)
   - "Top Voluntary Employees Benefit Service 2025" award — the uploaded HR Tech Outlook badge
   - AICPA SOC for Service Organizations — the uploaded SOC NonCPA badge
   - HIPAA — the same "HIPAA COMPLIANT — Training.com" seal the company's live site already displays (confirmed choice; no new compliance claim invented)
3. **White chips on navy** — each logo sits in a white, softly rounded card so the uploaded artwork (which has baked-in white/black backgrounds) renders cleanly without recoloring, cropping, or distorting it; clear space respected.
4. **Original captions, verbatim** under each badge: "certified by Women's Business Enterprise National Council", "award from HR Tech Outlook", "certified by AICPA SOC", "HIPAA compliance".
5. **Links as on the original site**, opening in a new tab safely: award badge → HR Tech Outlook magazine page; AICPA SOC → aicpa.org/soc4so; HIPAA seal → hipaatraining.com; the WBE badge stays unlinked exactly as on the original.
6. **Motion to match the page** — staggered scroll-reveal of the four chips, gentle lift with an amber ring on hover; logos lazy-loaded.
7. **Hygiene** — descriptive alt text on every badge, real anchor links, responsive: four across on desktop, two-by-two on tablet and mobile, no overflow.

## User flow
A visitor scrolls to the navy footer and sees the trust strip directly beneath the reverse logo and tagline → each badge lifts gently under the cursor with an amber ring → clicking the award, SOC, or HIPAA badge opens the certifier's page in a new tab. Nothing above the footer changes.

## UI/UX feel
Quiet confidence: a generous, evenly spaced row of white chips carrying real credentials on the deep navy ground — the same bright-on-navy restraint the page already uses, with one small hover flourish. No new art direction; the existing design stays untouched.

## Implementation phases
- **Phase 1 — MVP (built now):** prepare the three uploaded logos and fetch the company's HIPAA seal from its own live site; build the footer strip with chips, captions, links, alt text, and reveal/hover motion; verify on desktop and mobile.
- **Phase 2:** link the WBE badge to the company's WBENC certification page once its certifying details are confirmed; optionally echo a compact version of the strip beside the contact form or in Our Story.
- **Phase 3:** compress badges to lighter modern formats and add awards to structured data once confirmed.

## Assumptions
- The HIPAA badge is the company's existing "HIPAA COMPLIANT — Training.com" seal, taken verbatim from its live site footer and linked to hipaatraining.com there too — the user confirmed this choice; no official government HIPAA logo exists and none is implied beyond what the company already displays.
- The three uploaded files are the canonical artwork; the Wix-hosted copies on the original site are ignored.
- White chip cards are the display treatment chosen to keep uploaded white/black-background artwork intact on the navy footer; the brand rule "never recolor the logo" governs.
- Captions and destinations are copied verbatim from the original site's footer; the AICPA link is upgraded to https.
- The strip appears only in the footer; every other section of the page remains exactly as approved.
