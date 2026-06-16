# Color Rules

## Palette Construction
- Build from a small set: 1 primary, 1–2 accents, a neutral ramp, semantic colors (success/warn/error/info).
- Generate a full neutral scale (50→950). Most of the UI lives in neutrals, not brand color.
- Use HSL/OKLCH so you can adjust lightness/saturation systematically.

## Application
- 60/30/10 rule: 60% dominant (neutral), 30% secondary, 10% accent.
- Reserve the most saturated color for the single most important action.
- Don't use pure black (#000) or pure white (#fff) for large surfaces — soften slightly.

## Contrast & Accessibility
- Body text: 4.5:1 minimum. Large text/UI: 3:1 minimum (WCAG AA).
- Never rely on color alone to convey meaning (add icons/text).
- Test palettes in both light and dark mode from the start.

## Dark Mode
- Dark mode is not inverted light mode. Use dark grays, not pure black.
- Reduce saturation slightly in dark mode; bright colors vibrate on dark backgrounds.
- Elevation in dark mode = lighter surface, not bigger shadow.