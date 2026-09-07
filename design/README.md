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
- Background: `.hero__bg` > `<canvas class="hero__nodes">`, behind the text
  (z-index 0). A whisper-faint jittered grid of ~50–80 dots (`REST` alpha
  0.05). While the pointer moves over the hero, nodes near it brighten, a
  faint line draws from each to the pointer, and neighbouring lit nodes link
  up — everything scaled by a global `strength`.
  - **Ease in / fade out**: `strength` eases toward 1 (`IN_TAU` 90ms) while
    the pointer is moving, then toward 0 (`OUT_TAU` 190ms) once it's been
    still for `HOLD` (450ms). Moves under 5px (`JITTER2`) don't count as
    movement — stops trackpad noise from holding the reveal open.
  - `<script>` at end of `<body>`. rAF loop runs only while `strength > 0`
    or the pointer is active. Reduced motion: static dots, no interaction.
  - The earlier passes — drifting charcoal shapes, then cogs, then a
    cursor-parallax — all read as clip-art / "creative-coding demo" and were
    dropped. This is the version Max kept. History for those is in commits up
    to 8b91ca6 if ever wanted.
  - Modelled loosely on the opening seconds of svz.agency (the actual site
    behind this design), but abstracted well away from its literal shapes.

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
