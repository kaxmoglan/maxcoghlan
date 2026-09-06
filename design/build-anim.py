#!/usr/bin/env python3
"""
Build design/svz-reference.html from design/svz-reference.src.html by injecting
the hero flipbook animation.

The 5 source frames live in src/util/animations/home-page/home-page-{1..5}.tsx
(the current site's illustration, React wrapper stripped). Per frame we:
  - convert the JSX attr spellings back to SVG/HTML
  - namespace every internal id (Gradient_1, Layer1_*) as f1__… / f2__… …
    because the 5 frames share id names and would collide in one document
  - remap the teal monitor-glow gradient to a near-black -> arterial-red ramp
  - dim the line art (#DDDBDB -> #b5b2b2)

Run from the repo root:  python3 design/build-anim.py
"""
import re
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "src/util/animations/home-page"
TPL = ROOT / "design/svz-reference.src.html"
OUT = ROOT / "design/svz-reference.html"

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
for n in (1, 2, 3, 4, 5):
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

    frames.append(svg)

html = TPL.read_text()
assert "<!--ANIM_FRAMES-->" in html, "placeholder missing from template"
html = html.replace("<!--ANIM_FRAMES-->", "\n".join(frames))
OUT.write_text(html)
print(f"built {OUT.relative_to(ROOT)}: {OUT.stat().st_size} bytes")
