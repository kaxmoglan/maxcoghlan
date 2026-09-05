# Content

Stack-agnostic source content for the maxcoghlan.com rebuild. Plain Markdown +
YAML — no framework, no imports. Whatever we build the new site on reads from
here.

## Files

| File | What it holds |
|---|---|
| `site.yaml` | Global metadata — name, title, company, location, email, SEO |
| `home.md` | Hero: the positioning line (+ alternates to choose from) |
| `about.md` | The leadership narrative / bio (+ shorter version, pull-quote) |
| `evdigital.md` | The one flagship story, framed around leadership scope |
| `contact.md` | Contact section copy |

## Conventions

- First person, plain voice — the emphasis moved from "developer" to "leader".
- No fabricated metrics, no client names beyond what the current site already
  publishes, no testimonials. Remaining uncertainties marked `<!-- CONFIRM -->`.
- Frontmatter (between `---`) is structured data the build can read directly;
  the body is prose.
- Where a design needs a shorter version of something, the file carries it
  rather than us rewriting from scratch each time.

## Decisions locked (2026-09-06)

- **10 years** experience — About heading commits to it.
- Title: **Technical Lead**, current. Company: **EV**, named.
- **"Award-winning"** stays (no specific award named).
- Role dates: not tracked.
- **Services line dropped** (freelance / tutoring / mock interviews / CV
  reviews) — doesn't fit the leadership framing.
- **External social links removed** for now (LinkedIn, GitHub). Email only.
- **`approach.md` dropped.** The Understand/Align/Ship/Grow framing was
  Claude's placeholder, not Max's. Recoverable from git history (commit 6e64f77)
  if a "how I lead" section is wanted later — but it would need to be rewritten
  in his own words. The one pull-quote line worth keeping was moved to
  `about.md`.

## Still open

- `home.md` — pick a headline (or write a new one). Deferred to the design pass
  on purpose.
- `about.md` — keep / cut / reword the personal line (music, football, dog).
- `about.md` — is the pull-quote line true to how Max thinks? Keep or drop.
- `site.yaml` — confirm the SEO description line.

## Not included

- **Writing / articles.** No blog assumed. If wanted, it's a new content type
  (one file per post).
- **Projects / skills pages.** Deliberately absent — technical range is a
  given, not a showcase. Old skills list preserved as a comment in `about.md`.
