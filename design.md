# Design — Maximilian Coghlan Portfolio (v5, Ink & Paper)

A locked design system for this app. Every page redesign reads this file
before emitting code. Extend or amend this file when the system needs to
grow; do not regenerate per page.

## Provenance

Built on the `redesign` (v1) branch's copy and route shape, at the owner's
explicit direction, with the following deltas requested directly:

1. Serif typography (owner named liking v2's fonts, and Garamond specifically).
2. Drop v1's 50/50 Split Studio — the illustration should be a small, quietly
   placed accent in a consistent spot on every page, matching v2's subtlety,
   not a page-dominating half-viewport feature.
3. Drop the standalone Skills page — a tech-logo wall reads mid-level, not
   Engineering Manager.
4. Reintroduce a Blog/Articles section, editorial in tone, styled the way
   `redesign-v2` reads (simple, elegant, serif) — v2 itself never shipped a
   blog route, so this is a new build in that voice, not a port.
5. Paper should read close to white, not the warm cream of v1/v2.

## Genre

**Editorial.**

## Macrostructure family

Per-page shape, not one repeated split (this is what v2 got right over v1):

- **Home** → **Marquee** — one large statement, a short "currently" line,
  typographic CTA. No symmetric split.
- **About** → **Letter** — first-person continuous prose, ~60ch measure,
  salutation-style heading.
- **Contact** → **Letter, form-as-signoff** — same literary voice; the form is
  typeset minimally (underlined fields, no boxed card).
- **Articles** → **Index** — a plain chronological list (date + title +
  excerpt, hairline rules between entries), no cards, no illustration —
  content carries the page. **Article detail** → simple serif long-form page.

## Illustration placement — the one deliberate constraint this build adds

Every prior pass (v1's 50/50, v3/v4's full hero illustration) treated the
illustration as a structural half of the page. This build treats it as a
**signature mark**: one fixed-size rail (`.page-illustration`, ~13rem wide),
always upper-right of the main text column, on **Home, About, and Contact
only** — never on Articles (the index page and its posts are content-first;
adding an illustration there would be the fourth different treatment instead
of a consistent one). Same size, same position, same opacity treatment on
all three pages it appears on — a quiet recurring detail, not a rotating
hero.

## Theme — Ink & Paper (custom)

Near-white paper (this build's #1 correction from v1/v2's warm cream) with
the same ink-navy accent v2 used — navy is not a cream problem, it's the
part of v2 that already read considered rather than another rounded-pill
SaaS palette, so it stays. OKLCH is the source of truth.

| Token | OKLCH | Role |
|---|---|---|
| `--color-paper` | `oklch(99% 0.003 75)` | Page background — barely-there warmth, reads as white |
| `--color-paper-2` | `oklch(97% 0.004 75)` | Card / raised surface |
| `--color-rule` | `oklch(88% 0.006 75)` | Hairline borders / dividers |
| `--color-ink-2` | `oklch(42% 0.01 70)` | Secondary text, captions |
| `--color-ink` | `oklch(20% 0.012 60)` | Primary text, headings |
| `--color-accent` | `oklch(38% 0.10 258)` | Ink-navy — links, active states, rules |
| `--color-accent-hover` | `oklch(32% 0.095 258)` | Accent hover/pressed |
| `--color-focus` | `oklch(55% 0.14 258)` | Focus ring — brighter for visibility |

## Typography

- **Display**: Newsreader — roman serif, optical-size aware. The owner named
  liking this from v2 directly.
- **Body**: EB Garamond — the owner named liking Garamond specifically. This
  is the delta from v2 (which paired Newsreader with sans IBM Plex Sans body);
  v5 goes fully serif, display + body both classical, for a more consistently
  literary read.
- **Outlier** (≤ 2 slots): Geist Mono — masthead issue-line, article date
  labels. Never a third body face.
- Scale ratio 1.25, 16px body floor. Headings: tight tracking (`-0.01em`).
  Mono labels: loose tracking (`0.1em`), uppercase.

## Spacing

Standard 4pt scale (`--space-*`). Pages scroll normally — Marquee/Letter/
Index are not fixed single-viewport panels like v1's Split Studio pages.

## Motion

- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`.
- One quiet fade-up entrance per section on first paint. No bounce, no
  parallax, no autoplay.
- The existing hand-illustration frame crossfade is kept (retimed to this
  system's tokens) since the illustration itself is being asked to feature
  *less*, not be replaced.
- `prefers-reduced-motion: reduce` collapses everything to instant/150ms.

## CTA voice

Typographic only — ink-navy text link with an underline, "Get in touch →".
No filled pill (that was v1's Coral relic). Matches the Letter sign-off
register and keeps the accent's footprint restrained.

## Nav / Footer

- **Nav: N6 Newspaper masthead** — centred serif-italic wordmark, thin mono
  issue-line above ("Winchester, UK · Dev Lead" — accurate to the current
  title, not "Engineering Manager", which the owner doesn't hold yet; the
  aspiration lives in the prose, not a false label), inline link row
  (Home / About / Articles / Contact) beneath, hairline rule closing it off.
- **Footer: Ft6 Letter close** — sign-off line + LinkedIn link, present on
  every page now that pages actually scroll to a bottom.

## What pages MUST share

- Newsreader + EB Garamond, Geist Mono confined to the two label slots.
- Near-white paper, ink-navy accent, typographic (not pill) CTA voice.
- N6 masthead nav + Ft6 footer.
- `.page-illustration` — identical size/position — on Home, About, Contact
  only.
- No fabricated metrics, no client names, no testimonials.

## What pages MAY differ on

- Macrostructure per page (Marquee / Letter / Index).
- Prose measure and section composition within that macrostructure.
