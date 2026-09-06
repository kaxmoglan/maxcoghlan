#!/usr/bin/env python3
"""
Build design/svz-reference.html from design/svz-reference.src.html by injecting
the hero flipbook animation.

The 5 source frames live in src/util/animations/home-page/home-page-{1..5}.tsx
(the current site's illustration, React wrapper stripped). Per frame we:
  - convert the JSX attr spellings back to SVG/HTML
  - namespace every internal id (Gradient_1, Layer1_*) as f1__… / f2__… …
    (all 5 frames end up in ONE document and share id names)
  - remap the teal monitor-glow gradient to a near-black -> arterial-red ramp
  - dim the line art (#DDDBDB -> #b5b2b2)
  - rewrite the opening <svg> tag so the frame nests as a 500x356 cell at
    y = (n-1)*356 inside a tall parent <svg>

The 5 cells are stacked into one 500x1780 <svg class="anim__strip">. The CSS
animates that single element with `transform: translateY` + `steps(5)` — a
real flipbook: one element, one paint, discrete jumps, identical in every
browser (the visibility / opacity toggle approaches dropped a frame at the
loop seam whenever the browser couldn't repaint the incoming frame in time).

Run from the repo root:  python3 design/build-anim.py
"""
import re
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "src/util/animations/home-page"
TPL = ROOT / "design/svz-reference.src.html"
OUT = ROOT / "design/svz-reference.html"

FRAME_W, FRAME_H, N_FRAMES = 500, 356, 5

# teal -> arterial-red ramp, keyed by the exact source stop colours (in offset
# order); dark end stays near-black, bright end is #FE1E34
RECOLOR = {
    "#0C0C0C": "#0C0C0C",
    "#0C0F0E": "#160909",
    "#0C1816": "#22090C",
    "#0D2824": "#360A11",
    "#0E3F37": "#500B16",
    "#125C50": "#75101E",
    "#17806E": "#9E1526",
    "#1EAA92": "#C7192D",
    "#27DABB": "#EA1C32",
    "#2DFCD8": "#FE1E34",
}

frames = []
for n in range(1, N_FRAMES + 1):
    txt = (SRC / f"home-page-{n}.tsx").read_text()
    svg = txt[txt.index("<svg"): txt.rindex("</svg>") + len("</svg>")]

    svg = svg.replace("xmlnsXlink=", "xmlns:xlink=")
    svg = svg.replace("xlinkHref=", "xlink:href=")
    svg = svg.replace("stopColor=", "stop-color=")

    ids = {m.group(1) for m in re.finditer(r'id="([^"]+)"', svg)} - {f"frame-{n}"}
    pfx = f"f{n}__"
    for v in sorted(ids, key=len, reverse=True):
        svg = svg.replace(f'id="{v}"', f'id="{pfx}{v}"')
        svg = svg.replace(f'(#{v})', f'(#{pfx}{v})')
        svg = svg.replace(f'"#{v}"', f'"#{pfx}{v}"')

    for a, b in RECOLOR.items():
        svg = svg.replace(a, b)

    svg = svg.replace('fill="#DDDBDB"', 'fill="#b5b2b2"')

    # nest as a positioned cell
    body = svg[svg.index(">") + 1:]
    open_tag = (
        f'<svg xmlns="http://www.w3.org/2000/svg" '
        f'xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" '
        f'x="0" y="{(n - 1) * FRAME_H}" width="{FRAME_W}" height="{FRAME_H}" '
        f'viewBox="0 0 {FRAME_W} {FRAME_H}" id="frame-{n}">'
    )
    frames.append(open_tag + body)

strip = (
    f'<svg class="anim__strip" xmlns="http://www.w3.org/2000/svg" '
    f'xmlns:xlink="http://www.w3.org/1999/xlink" '
    f'viewBox="0 0 {FRAME_W} {FRAME_H * N_FRAMES}" aria-hidden="true">\n'
    + "\n".join(frames)
    + "\n</svg>"
)

html = TPL.read_text()
assert "<!--ANIM_FRAMES-->" in html, "placeholder missing from template"
html = html.replace("<!--ANIM_FRAMES-->", strip)
OUT.write_text(html)
print(f"built {OUT.relative_to(ROOT)}: {OUT.stat().st_size} bytes")
