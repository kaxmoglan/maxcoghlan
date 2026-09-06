# Content

Stack-agnostic source content for the maxcoghlan.com rebuild. Plain Markdown +
YAML — no framework, no imports. Whatever we build the new site on reads from
here.

## Files

| File | What it holds |
|---|---|
| `site.yaml` | Global metadata — name, roles, company, location, email, SEO |
| `home.md` | Hero lines + the home-page about blurb |
| `about.md` | The about paragraph (same copy; home = about in this design) |
| `evdigital.md` | EVDigital detail — backing reference, not currently surfaced |
| `contact.md` | Contact section copy |

## Design direction

**Locked: "branding" (the SVZ mockup).**
Live reference: https://claude.ai/code/artifact/889c8a19-e2db-4da6-b930-1105506987a2
High-fashion editorial — void-black canvas, giant caps + italic serif hero,
one arterial-red accent. We iterate on that artifact; it becomes the spec for
the rebuild.

### Hero (locked layout)

- Line 1, italic serif: **Hi, I'm**
- Line 2, large caps: **Maximilian** — red accent dot after the name
- Sub-line (small tracked uppercase label): **Technical leader, engineering
  strategist, speaker and mentor.**

## Decisions locked

- Roles line: **technical leader, engineering strategist, speaker and mentor**.
- Company: **EV**. Title (short form): **Technical Lead**.
- Career note now in the About paragraph: **co-founded and exited a media
  production & agency business** earlier in his career.
- Recent work spans **fintech and health tech**; **multi-award winning apps**;
  **in partnership with major high street banks**.
- 10 years experience (not currently stated in copy, but the framing assumes
  it — fine to leave implicit).
- Services line dropped; external social links removed (email only).
- `approach.md` deleted — the Understand/Align/Ship/Grow framing was Claude's
  placeholder. Recoverable at commit 6e64f77.

## Still open

- **`about.md` personal line** (music, football, dog) — keep a trimmed version
  after the paragraph, or not?
- **`site.yaml` SEO description** — confirm the line.
- **EVDigital on the page** — the home blurb no longer names it. Keep
  `evdigital.md` purely as reference, or does a design section surface it?
- **Page is now very short** — hero + about paragraph + footer only. On-brand
  for the SVZ aesthetic, but flag if it needs another section.

## Resolved

- "STILL SHIPPING." transition band and the "move faster next quarter"
  pull-quote — **both cut** (2026-09-06). Read too IC-delivery against the
  strategist / systems / culture / speaker positioning. `#approach` section
  gone; nav trimmed to About / Contact.

## Not included

- **Writing / articles.** No blog assumed.
- **Projects / skills pages.** Deliberately absent. Old skills list preserved
  as a comment in `about.md`.
