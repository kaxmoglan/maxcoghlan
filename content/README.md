# Content

Stack-agnostic source content for the maxcoghlan.com rebuild. Plain Markdown +
YAML — no framework, no imports. Whatever we build the new site on reads from
here.

## Files

| File | What it holds |
|---|---|
| `site.yaml` | Global metadata — name, title, location, links, SEO defaults |
| `home.md` | Hero: the positioning line and its supporting sentence |
| `about.md` | The leadership narrative / bio |
| `approach.md` | How I lead — the recurring "how I work" material |
| `evdigital.md` | The one flagship story, framed around leadership scope |
| `contact.md` | Contact section copy — what I'm open to |

## Conventions

- First person, plain voice — the way the old About page read, with the
  emphasis moved from "developer" to "leader".
- No fabricated metrics, no client names beyond what the current site already
  publishes, no testimonials. Anything uncertain is marked `<!-- CONFIRM: … -->`.
- Frontmatter (between `---`) is structured data the build can read directly;
  the body is prose.
- Where a design needs a shorter version of something, the file carries a
  "shorter versions" section rather than us rewriting from scratch each time.

## Not included (yet)

- **Writing / articles.** An earlier redesign attempt wanted a blog section.
  Nothing here assumes one. If you want it, it's a new content type (one file
  per post) — say the word.
- **Projects / skills pages.** Deliberately absent. Per the positioning
  decision, technical range is a given, not a showcase. The full skills list
  from the old site is preserved as a comment at the bottom of `about.md` in
  case it's ever wanted for a CV.

## Open questions (need Max's input)

Search all files for `<!-- CONFIRM` — collected here:

- **Years of experience** — the About heading needs a real figure or a
  different framing. What year did you start?
- **Current job title** — using "Technical Lead". Right? Still current?
- **Employer name** — the old site never names it, only the product
  ("EVDigital"). Name the company, or keep it product-only?
- **"Award-winning"** — carried over from the old site's wording. Name the
  award(s), or drop the phrase?
- **Role dates** — `evdigital.md` has an empty `period`.
- **Services line** (freelance / tutoring / mock interviews / CV reviews) —
  keep, soften, or drop for the leadership framing?
- **Personal note** (music, football, the dog) — keep a light line or omit?
- **GitHub link** — include it? The account is mostly older practice projects.
