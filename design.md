# Design — Maximilian Coghlan Portfolio (v4, studied-DNA)

A locked design system for this app. Every page redesign reads this file before
emitting code. Extend or amend this file when the system needs to grow; do not
regenerate per page.

**This build starts fresh from `master`, not from prior `redesign` /
`redesign-v2` / `redesign-v3` branches.** Those are separate, unreviewed
experimental tranches — explicitly not the baseline for this work.

## Brief

The site was built to land junior/mid-level developer roles. The owner has
since worked as a Dev Lead / senior engineer and wants the site repositioned
for Engineering Manager, Head of Engineering, or CTO roles. The Projects page
(screenshots of personal coding projects) reads as IC-portfolio content and is
removed. The dev.to-backed Blog is replaced with a self-hosted Blog/Articles
section — real content isn't written yet, so it ships with clearly-scoped
dummy posts rather than a live API dependency.

## Provenance

Studied from `https://johnkavanagh.co.uk/` — a public reference the owner
named directly as an example of a portfolio for a technical lead / senior
software engineer, for his own brand's inspiration (not his own site).

**Source mode: hybrid.** WebFetch's markdown-conversion pipeline returned
structure only (DOM, nav, headings, footer) with no CSS signal — a known
gap for this tool against Next.js sites (styles arrive via hashed CSS
modules the markdown converter drops). Rather than proceed half-blind or
guess, the page was opened in a real browser (Chrome via `claude-in-chrome`)
and read with `getComputedStyle` — exact `rgb()` values for paper/ink/accent,
exact `font-family` stacks, exact weights and `text-transform`, plus a full
scroll-through screenshot pass for rhythm. This is stronger evidence than
either study.md mode alone: exact colour and type (URL-mode-grade) *and* a
real rhythm pass (image-mode-grade, normally URL mode's blind spot).

## The honest adaptation

johnkavanagh.co.uk is a **freelance contractor's** page — branded client
case-study bands (John Lewis, Virgin Atlantic, LEGO), testimonials, and an
availability calendar all exist because he takes bookable contract work. Max
is a full-time Dev Lead — those assets don't exist for him and inventing them
would violate the no-fabricated-content rule. This build takes the **DNA** —
the split-diptych rhythm, the navy-and-white surface with one confident blue
accent, the single-family grotesque with uppercase display treatment, the
flood-accent services grid, the statement-CTA-band-over-index footer — and
applies it to the four honest pages Max actually has content for, plus a
genuinely self-hosted Articles section (the one thing the source's "Articles"
page pointed at that Max can legitimately have too, just with placeholder
posts until he writes real ones).

Client case-study bands and testimonials are **not** carried over — there is
no honest content to put in them. The visual pattern behind the case-study
band (full-bleed alternating diptych, dark surface, one qualifying paragraph)
is instead reused on the Home page for three real, unembellished facts about
how Max works — no invented metrics, no fabricated logos.

## Genre

**Editorial** (personal leadership brand, not a SaaS product). Built as
**studied-DNA**, not a catalog theme — catalog rotation is suspended for this
build per Hallmark's `study` protocol.

## Macrostructure

**Split Studio** (15) — diptych, alternating sides down the page. Matches the
source directly: hero splits text/proof, the pitch section splits bio/
highlights, and the (honestly-adapted) proof bands alternate left/right.

- **Home** — H2 Split Diptych hero (dark navy band, text left / illustration
  right) → pitch split (bio + honest highlights, illustration-backed, not
  photo-backed) → three alternating dark-surface bands, each one real fact
  about how Max works, paired with an existing illustration frame set instead
  of a fabricated client screenshot → footer.
- **About** — fuller narrative, same Split Studio rhythm, illustration on the
  opposite side from the source's case-study proof column.
- **Skills** — adapts the source's flood-accent "How I Usually Help" grid
  directly and honestly: real categories (Leadership & Delivery, Front End,
  Back End, Tools & Workflow, Testing & Design), real stack icons.
- **Articles** — adapts the source's Articles index: one featured row
  (eyebrow date + heading + excerpt + illustration-block "proof" side) then a
  3-up card grid. Detail page carries the same masthead treatment.
- **Contact** — short honest status line, bordered form.

## Theme — studied-DNA

Extracted via live `getComputedStyle` (exact `rgb()`) then converted to OKLCH
and lightly tinted per Hallmark's ban on pure white/black. Confidence: high
(exact source values, not a visual estimate).

| Token | OKLCH | Source rgb() | Role |
|---|---|---|---|
| `--color-paper` | `oklch(98% 0.005 240)` | `rgb(255,255,255)` tinted | Page background |
| `--color-paper-2` | `oklch(96% 0.006 240)` | derived | Card / raised surface |
| `--color-rule` | `oklch(88% 0.008 240)` | derived | Hairline borders |
| `--color-ink-2` | `oklch(46% 0.02 255)` | derived | Secondary text |
| `--color-ink` | `oklch(26% 0.02 258)` | `rgb(47,53,66)` | Primary text, headings |
| `--color-ink-band` | `oklch(22% 0.08 258)` | `rgb(17,44,82)` | Dark hero / CTA band surface |
| `--color-ink-band-2` | `oklch(30% 0.07 258)` | derived | Elevated surface on ink-band |
| `--color-accent` | `oklch(53% 0.15 250)` | `rgb(42,109,200)` | Links, active state, flood-accent tiles |
| `--color-accent-hover` | `oklch(45% 0.15 250)` | derived | Hover/pressed |
| `--color-focus` | `oklch(62% 0.16 250)` | derived | Focus ring |

Accent footprint is **not** the usual ≤5% restraint — the source's own
signature move is a confident flood-blue services grid and a full navy hero/
CTA band. That's carried over deliberately as the system's one bold gesture,
scoped to exactly those two structural moments (Skills tiles, hero/CTA
bands) — not sprinkled elsewhere. Body copy, nav, and footer stay neutral
paper/ink.

## Typography

Source loads `"Open Sans Variable"` (banned — on Hallmark's default-sans
blocklist) for both display and body, uppercase-transform on `h1`
(`letter-spacing: 1.86px`), weight 400 display / 700 subheads / 300 large
section heads / 600 nav links — a genuine single-family weight-contrast
system. `Inconsolata` is also loaded (role: mono, low usage).

Swapped to the nearest canonical Hallmark equivalents that keep the same
roles:

- Display + body: **Geist**, single family. `text-transform: uppercase` on
  `h1` only (not every heading — source doesn't uppercase its H2/H3 either).
  Weights: 300 (large section heads), 400 (body), 600 (nav / eyebrows), 700
  (h1, in-content subheads).
- Outlier: **Geist Mono**, one role only — eyebrow/date labels (e.g. article
  dates). Two slots max per the 2+1 rule; this system uses one.
- Tracking: `0.03em`–`0.06em` on the uppercase h1 (source measured ~1.86px on
  a 62px face ≈ 0.03em), `0.08em`–`0.12em` on mono eyebrows, none on body.

## Spacing / rhythm

Confirmed generous from the live scroll-through: full-bleed sections run
tall, hero fold is a full viewport height, pitch/case-study bands run
`6–10rem` block padding. Reusing this system's existing `--space-*` 4pt
scale (see `_tokens.scss`), sections default to `--space-3xl`–`--space-4xl`
between major blocks.

## Motion

Source has no motion library and no visible reveal on a static capture. This
build keeps the existing hand-illustration 5-frame crossfade technique
already in the codebase (`src/util/animations/`), re-timed to Hallmark's
`--ease-out` / duration tokens, plus one quiet fade-up page-load stagger per
section and a frost transition on the nav (transparent-over-hero → solid
paper) on scroll past the hero. No parallax, no scroll-jacking.
`prefers-reduced-motion: reduce` collapses everything to an instant/150ms
crossfade.

## CTA voice

Two registers, both present on the source:

- **Nav** — plain uppercase text links, no button, no fill. The content
  carries the asks.
- **In-content primary** — filled `--color-ink` button (source's dark "More
  about me" / footer "Get in touch" pattern).
- **In-content secondary** — outlined chip, `--color-ink` border, transparent
  fill (source's "Enquire" pattern, minus the transparency-as-token — solid
  `--color-paper-2` background instead, per the no-alpha-as-palette rule).

## Nav / Footer

- **Nav** — dense inline-link row (wordmark left, six-ish uppercase text
  links right, no CTA), closest catalog cousin N1b minus the CTA slot.
  **Frost-on-scroll**: transparent over the dark hero, solid `--color-paper`
  with a hairline bottom rule once scrolled past the fold — matches the
  source's own observed behaviour exactly.
- **Footer** — Ft5 Statement (dark `--color-ink-band` band, one large
  sentence + outlined "Get in touch" button) fused directly above Ft3 Index
  columns (nav links + contact info, social icon grid, wordmark monogram,
  legal row). Matches the source's own two-part footer.

## What pages MUST share

- Geist single-family, weight-contrast only; Geist Mono confined to
  eyebrow/date labels.
- Navy/white surface, one confident blue accent scoped to hero/CTA bands and
  the Skills tile grid.
- Filled-ink primary / outlined-chip secondary / plain-text nav CTA voice.
- N1b-minus-CTA nav with frost-on-scroll + Ft5-over-Ft3 footer on every
  route.
- No fabricated metrics, client names, or testimonials anywhere.

## What pages MAY differ on

- Section composition per page (hero shape on Home vs. tile grid on Skills
  vs. article index on Articles vs. form on Contact).
- Illustration frame set used and its side of the diptych.
