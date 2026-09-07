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
- Background: `.hero__bg` > `<canvas class="hero__pattern">`, behind the text
  (z-index 0). An **80s / Memphis scatter** — triangles, rotated squares,
  circles, small dots, single diagonal strokes, groups of parallel "speed
  lines", and the "shape with a dot on it" motif. Procedural + seeded
  (`mulberry32`, so positions are stable), rebuilt on resize. All in
  low-contrast greys (`GREYS` `#151515`–`#353535`) on the void, sized biased
  small with the occasional large one; `count = (W·H)/9000` (~130 on desktop).
  - Positions are fixed. A few of the **angular** shapes (squares, triangles,
    strokes, speed-lines — never circles/dots, where a spin is invisible)
    rotate on the spot: `rotV` 0.22–0.50 rad/s, ≈ one turn per 13–29s,
    ~2/3 of the eligible shapes. The rest are static. The rAF loop only
    runs if any shape is spinning and `prefers-reduced-motion` is not set
    (then it's one static frame); it pauses when the tab is hidden.
  - `<script>` at end of `<body>`. No cursor interaction.
  - Modelled on an 80s Memphis wallpaper Max supplied, in grey rather than the
    reference's bold colours.
  - **Tried and set aside** (all in `rebuild` history): a cursor-reactive node
    field (up to 34a13ce, now parked on `hero-fx`); drifting charcoal
    shapes / cogs / cursor-parallax (to 8b91ca6); and a falling-shapes variant
    of this Memphis pattern (in the diff before this was committed static).

## Parked (branch `hero-fx`, commit 34a13ce)

The hero **background node field** and the **hand-drawn flipbook animation**
are removed from the working design for now so the rest can move on. Both are
intact on branch `hero-fx`. To bring them back: check the two files
(`design/svz-reference.src.html`, `design/build-anim.py`) out of `hero-fx`
and rerun `python3 design/build-anim.py` — or `git revert` the removal
commit. `build-anim.py` is a no-op passthrough while the `<!--ANIM_FRAMES-->`
placeholder is absent from the template.

The two sections below describe them as they were.

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

**Loop mechanism** (this took a few tries — final approach):

- `build-anim.py` nests the 5 frames as `500×356` cells at `y = 0, 356, …`
  inside one `500×1780` `<svg class="anim__strip">`.
- CSS: `.hero__anim` is an `overflow:hidden` window; the strip is `height:500%`
  and animated `transform: translateY(0 → -100%)` with
  `animation: flipbook 1s steps(5) infinite`.
- One element, one paint, discrete jumps. Nothing is ever hidden/shown or
  repainted, so there's no loop-seam frame-drop — and unlike the earlier
  `visibility` / `opacity` toggle attempts it behaves identically in Firefox
  (which is unreliable at layerising many large SVGs).
- Frozen on frame 1 under `prefers-reduced-motion` (`animation:none`).
