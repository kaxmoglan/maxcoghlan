# Design — Maximilian Coghlan Portfolio

A locked design system for this app. Every page redesign reads this file before
emitting code. Do not regenerate per page — extend or amend this file when the
system needs to grow.

## Genre
modern-minimal

## Macrostructure family
One base macrostructure for every page — this is a small four-route personal
site, not a multi-family app.

- All pages (Home / About / Skills / Contact): **Split Studio** — text on one
  half, the existing hand-built illustration on the other, alternating sides
  page to page. Outlined pill CTA sits below the text half. Clear gutter
  divider between halves, no rules.

## Theme — Coral (catalog)
Warm-grey paper, single warm coral accent, Geist-class sans throughout, soft
pill CTAs. Chosen over Cobalt (Coral's modern-minimal sibling) because Cobalt's
signature moves — live API/JSON hero, ⌘K palette, code-as-hero — belong to
developer-tool products, not a leadership portfolio. Coral reads confident and
human without forcing a dev-tool trope onto a bio site.

Project ships this as SCSS variables in `src/sass/_colors.scss` (this project's
existing token mechanism) rather than a parallel `tokens.css` — the site has no
CSS-custom-property consumption elsewhere, so a second unused token format
would be dead weight.

| Token | Value | Role |
|---|---|---|
| `$paper` | `#FAF6F2` | Page background |
| `$paper-2` | `#F1EAE3` | Card / raised-surface background |
| `$ink` | `#2A211C` | Primary text, headings |
| `$ink-2` | `#55483F` | Secondary text, illustration linework |
| `$rule` | `#E4DAD0` | Hairline borders / dividers |
| `$accent` | `#E5572E` | Coral accent — CTAs, active nav state, focus rings, mark |
| `$accent-ink` | `#FFF8F5` | Text on filled accent surfaces |

## Typography
- Display: **Inter**, weight 600–700 (Geist is not distributable via Google
  Fonts on a CRA app without bundling a font package; Inter is the practical
  same-lineage substitute the modern-minimal genre already treats as
  acceptable). Tight tracking (`-0.02em` to `-0.03em`) on headings.
- Body: **Inter**, weight 400. Single-family discipline — no serif pairing.
- Display tracking: `-0.025em` on h1/h2.
- Hero title: `clamp(2.75rem, 4vw + 1.5rem, 4.75rem)`.

## Spacing
Existing rem-based scale in `_responsive.scss` / `_main-page-template.scss` is
kept; no new spacing system introduced. Section gutters increased to read as
more generous / composed per modern-minimal.

## Motion
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out) for all reveals/hovers.
- Reveal: opposite Split Studio halves cross-fade in, slightly staggered.
- No bounce, no parallax, no autoplay.
- `prefers-reduced-motion: reduce` collapses all motion to instant/opacity-only.

## Microinteractions stance
- Silent success on the contact form (inline confirmation text, no toast).
- Hover states: coral underline-grow on nav/links, 1px border-colour shift to
  coral on focusable surfaces.
- Focus rings always visible instantly, never animated in.

## CTA voice
- Primary CTA: filled coral pill, white text — "Get in touch" (site-wide
  primary action, per brief).
- Secondary CTA: coral-outlined pill on paper.
- Nav CTA: same filled coral pill, smaller, right-aligned in the floating nav.

## Nav / Footer
- **Nav: N5 Floating pill** — detached top nav, blur backdrop, soft shadow,
  text links (not icon-only) + trailing "Get in touch" button. Carries the
  existing M-with-overline mark as the wordmark.
- **Footer: omitted.** Each route is a fixed, single-viewport page (`min-height:
  100vh` sections, no page scroll) behind the persistent floating nav —
  there's no scroll-to-the-bottom moment for a footer to close out, and
  forcing one in would either overflow the viewport or shrink content-column
  height. The floating nav (carrying the wordmark) is the site's only
  persistent chrome, by design.

## Per-page allowances
- All pages may use the existing hand-built SVG illustrations (already
  produced; recoloured to this palette, not redrawn).
- No enrichment beyond the existing illustrations — no stock imagery, no
  invented metrics/stats.

## What pages MUST share
- The M-with-overline wordmark mark, in `$accent`.
- Coral accent + its restrained placement (< 5% of any viewport).
- Inter as the only typeface family.
- Pill CTA voice (filled primary / outlined secondary), same radius + padding.
- Split Studio structure: text half + illustration half, alternating sides.

## What pages MAY differ on
- Which side the text/illustration sit on (alternates: Home text-left, About
  text-right, Skills text-left, Contact text-right).
- Section content shape within the text half (Home: hero + CTA; About: prose;
  Skills: accordion + icon cloud; Contact: copy + social + form).
