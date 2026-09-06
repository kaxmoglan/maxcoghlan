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
- Background: `.hero__bg` — charcoal geometric shapes (cross, plus with a
  punched-out centre, angled bar, disc) + the faint outline ring top-right.
  Modelled on the opening seconds of svz.agency (the actual site behind this
  design). Behind the text (z-index 0), frozen under `prefers-reduced-motion`,
  bar+disc hidden below 640px.
  - **Roam**: each shape runs its own slow looping path (`@keyframes roam-*`,
    64–130s, big translate + full rotate, returns to start).
  - **Cursor parallax**: the `<script>` at the end sets `--mx/--my` on
    `.hero__bg` (pointer offset from centre, −1..1, negated); each shape
    offsets by its own `--d` (10–44px) via the `translate` *property*, which
    composes with the animated `transform` instead of overriding it. Eased
    (`transition: translate`), rAF-throttled, disabled under reduced motion.
  - Deliberately NOT cursor-repulsion — too "creative-coding demo" for this
    design's register, and most shapes sit behind the headline/animation.

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
