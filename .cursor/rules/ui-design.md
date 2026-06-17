# UI Design Rules

## Layout & Spacing
- Use an 8pt spacing system (4, 8, 16, 24, 32, 48, 64). Avoid arbitrary values.
- Establish clear hierarchy with whitespace before reaching for borders/dividers.
- Limit content width for readability (45–75ch for body text).
- Use a consistent grid (12-col on desktop). Align everything to it.

## Visual Hierarchy
- One primary action per view. Secondary/tertiary actions get less visual weight.
- Hierarchy comes from size, weight, color, and spacing — in that order.
- Group related elements with proximity; separate unrelated ones with space.

## Depth & Backgrounds
- Use elevation (subtle shadows, layered surfaces) instead of heavy borders.
- Prefer 2–4 surface levels (background → card → raised → overlay).
- Soft, low-spread shadows read as premium; harsh black shadows read as cheap.
- Consider subtle gradients, noise, or mesh backgrounds over flat fills for hero areas.

## Consistency
- Define design tokens (spacing, color, radius, shadow) and reuse them.
- Reuse components; don't reinvent buttons/inputs per screen.
- Pick ONE border-radius scale and stick to it.