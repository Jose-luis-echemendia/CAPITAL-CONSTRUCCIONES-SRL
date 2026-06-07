# AGENTS.md

## Project

Single-page static landing site for Capital Construcciones SRL (construction company, Cuba). No build tools, no package manager, no framework.

## Preview

```bash
# Any static server, e.g.:
python3 -m http.server 8000
# Then open http://localhost:8000
```

## Key facts

- `index.html` is the only file that matters — all CSS and JS are **inline** in `<style>` and `<script>` blocks.
- `css/styles.css` and `js/main.js` exist but are **not referenced** by `index.html`. If editing styles or scripts, edit the inline blocks in `index.html`.
- External deps via CDN: Google Fonts (Inter), Font Awesome 6. No local dependencies.
- Content is in Spanish (Cuba). Contact form is a front-end simulation only (no backend).
- Brand color: `#b45f2b` (warm brown). Dark text: `#1f3e3f`. Background: `#fefcf7`.
