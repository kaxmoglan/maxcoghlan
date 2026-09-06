# design/

Working design reference for the rebuild. The chosen direction is **SVZ**
(the "branding" style).

- `svz-reference.src.html` — the editable template (hero animation is a
  `<!--ANIM_FRAMES-->` placeholder)
- `build-anim.py` — injects the 5 animation frames; run from the repo root:
  `python3 design/build-anim.py`
- `svz-reference.html` — the built output; also live at
  https://claude.ai/code/artifact/889c8a19-e2db-4da6-b930-1105506987a2

## Hero

- Nav: floating frosted-glass pill, square-ish corners. Left mark is the
  million-mark logo — Inter-bold "M" with a vinculum bar (Roman numeral for
  1,000,000 → "Maximilian"). Links: About / Contact. No wordmark, no CTA.
- Headline: "Hi, I'm" (Playfair italic) / "MAXIMILIAN" (Inter 700 caps) with
  a red dot as the full stop. Roles sub-line under it.
- No "About" link in the hero.

## Hero animation

The hand-drawn flipbook (a figure hammering at a keyboard, monitor glow) is
carried over from the current site. Source frames:
`src/util/animations/home-page/home-page-{1..5}.tsx` (5 SVGs, `import React`
wrapper stripped). `build-anim.py`:

- **Recolours the glow** teal → arterial red — the 10 gradient stops
  (`#0C0C0C` … `#2DFCD8`) remapped to a near-black → `#FE1E34` ramp, so it
  fits SVZ's one-accent rule and rhymes with the red full stop.
- **Namespaces every id per frame** (`Gradient_1`, `Layer1_*` → `f1__…` …
  `f5__…`) — the 5 frames share id names and would collide in one document.
  `id="frame-N"` is kept; the loop CSS targets it.
- **Dims the line art** (`#DDDBDB` → `#b5b2b2`).

Placement: `.hero__anim`, absolute, bottom-right, ~370px max, behind the
headline, hidden below 760px.

**Loop mechanism** (this took a few tries):

- All 5 frames stay rendered permanently at `opacity:0`, each promoted to its
  own compositor layer (`transform:translateZ(0)`, `will-change:opacity`).
- `@keyframes flip` (1s, `infinite`, staggered 0.2s) toggles `opacity` 1↔0,
  `0–20%` visible.
- Why not `visibility` like the current site: in a fresh document the large
  SVGs aren't kept warm, so flipping `visibility:hidden→visible` forces a
  re-rasterise that drops a blank frame once per loop. `opacity` on an
  already-composited layer is compositor-only — no repaint, no flash.
- Frozen on frame 1 under `prefers-reduced-motion`.
