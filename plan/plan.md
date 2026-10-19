# Employees First — Native Savings Estimator (rebuilding the Calconic calculator in-app, math from your workbook)

The landing page's estimator section gets a working calculator built natively in the site's own design and motion — a faithful self-hosted rebuild of your "Experience Rated Refunds" Calconic calculator, using the exact math from the Calculator_Calcs.xlsx workbook you supplied, including the second version's claims-integration toggle.

## Who it's for
- CFO, HR, and Total Rewards leaders who want a first-pass estimate of what an experience-rated voluntary benefits program could return, before any meeting.
- Brokers and consultants sanity-checking the model for a client.

## Core features and experience
1. **Native calculator replaces the placeholder** — the "Estimate Your Savings" section (#estimator) hosts the working calculator, styled in the brand: bright white ground, navy serif headline, orange arrow accents, live recompute on every keystroke.
2. **Inputs, mirroring the workbook rows:**
   - Plans in force? — Yes / No (default Yes)
   - Premium — $ (default $2,000,000)
   - Benefit-Eligible Employees — count (default 20,000)
   - Claims Loss Ratio — % (default 35%)
   - Standard Plan Fees Percentage (sPFP) — % (default 0%)
   - Estimated Tech Credits — $ (default $0) with a Tech Credits Percentage helper (% of premium)
   - **Include claims integration? — Yes / No (default No)** — the second version's toggle; when No, the calculator behaves exactly like the current single version
3. **The workbook's exact math (defaults reproduce your $700,000 worked example):**
   - Estimated Claims = Premium × Claims Loss Ratio (2M × 35% = $700,000)
   - Estimated Plan Expenses = Premium × (30% + sPFP) (2M × 30% = $600,000)
   - **Experience Rated Refunds = Premium − Estimated Claims − Estimated Plan Expenses + Estimated Tech Credits** (2M − 700k − 600k + 0 = **$700,000**)
   - With claims integration ON, the workbook's constants apply: Claims Loss Ratio Increase (34%) raises the effective loss ratio, and the Enhanced Plan Fees Percentage (12%) raises plan fees. Both constants sit in small, editable "advanced" fields so your team can correct them on the page.
   - "Plans in force? No" → refund shows $0 with a plain-English note.
4. **Result moment** — a navy result panel with the refund as a large animated dollar counter (the page's existing count-up motion), a full breakdown beneath it (claims, expenses, tech credits), refund per eligible employee, and the effective loss ratio.
5. **Honest framing** — the widget's trust line as a static note: "All carrier and program expenses are capped and fully transparent." Plus "Estimate only — historical, company-reported results; not guaranteed" disclaimer wording.
6. **Fully wired** — currency/count formatting, every input and result carries a data-testid, two-column layout on desktop, single column on mobile, no overflow.

## User flow
Visitor lands → any "Get Started" scrolls to the estimator → the defaults already show a live $700,000 example (matching your workbook) → they type their own premium, loss ratio, and employees → the refund, breakdown, and per-employee figures animate live → optionally flips the claims-integration toggle → "Talk to us" leads to the contact section.

## UI/UX feel
Same "Forward, First" direction — bright paper ground, navy serif headlines, orange arrow motif. The calculator is a clean white card with generous fields; the navy result panel's amber animated figure is the hero of the section. Purposeful motion only: live count-up on result changes, gentle section reveal.

## Implementation phases
- **Phase 1 — MVP (built now):** native calculator replacing the placeholder in #estimator — all inputs, the workbook math including the claims-integration toggle and editable constants, animated result, breakdown, disclaimers, testids; verified on desktop and mobile against the workbook's worked example.
- **Phase 2:** you confirm the two integration constants (34% CLRI, 12% ePFP) and the Tech Credits Percentage behavior (workbook shows 20, the old widget defaulted 0 — it ships 0 for neutrality); optionally save submitted estimates to the database.
- **Phase 3:** estimator methodology section on the page; analytics goal on completed estimates.

## Assumptions
- The workbook's two integration constants (34% Claims Loss Ratio Increase, 12% Enhanced Plan Fees) are applied when the toggle is Yes, and are exposed as editable advanced fields so nothing is locked to my reading of them; the worked example ($700,000 refund) locks in the version-1 math exactly.
- Tech Credits default to $0 (both sources agree the worked example carries no credits); the Tech Credits Percentage input auto-fills the dollar amount as a convenience and stays editable.
- The result is labeled an estimate — the calculator is visual only; nothing is saved to the database in Phase 1.
- Everything else on the page stays exactly as approved.
