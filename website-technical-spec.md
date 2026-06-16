# Prompting with Intent — Technical Specification

> This document captures the complete technical implementation of the website. For all content (copy, messaging, examples), refer to `website-content.md`. Together, these two files provide every detail needed to recreate or modify the website.

---

## Tech Stack

- **Platform:** Static HTML site
- **Styling:** Single shared `styles.css` (4.1KB, 767 lines)
- **Scripting:** Single shared `script.js` (vanilla JavaScript, 228 lines)
- **Structure:** 1 home page (`index.html`) + 11 topic pages in `/topics/` directory
- **Assets:** `/assets/` directory containing favicon SVG + 16 PNG images

### File Structure

```
/
├── index.html
├── styles.css
├── script.js
├── website-content.md           (content reference)
├── website-technical-spec.md    (this file)
├── assets/
│   ├── favicon.svg
│   ├── chatgpt-wrong.png       (56.8 KB)
│   ├── chatgpt-right.png       (125.4 KB)
│   ├── claude-wrong.png        (95.1 KB)
│   ├── claude-right.png        (179.8 KB)
│   ├── gemini-wrong.png        (71.8 KB)
│   ├── gemini-right.png        (161.9 KB)
│   ├── prompt_structure_1.png  (73.0 KB)
│   ├── prompt_structure_2.png  (76.7 KB)
│   ├── prompt_structure_3.png  (159.7 KB)
│   ├── prompt_structure_4.png  (38.1 KB)
│   ├── prompt_structure_5.png  (3.3 MB - largest)
│   ├── prompt_structure_6.png  (200.9 KB)
│   ├── prompt_structure_7.png  (242.7 KB)
│   ├── prompt_structure_8.png  (458.8 KB)
│   └── prompt_structure_new.png (218.9 KB - unused)
└── topics/
    ├── 1-lets-go-on-a-trip.html
    ├── 2-why-ai-fails.html
    ├── 3-general-prompt-structure.html
    ├── 4-rules-and-skills.html
    ├── 5-grounding.html
    ├── 6-directed-vs-discovered.html
    ├── 7-prompt-depth.html
    ├── 8-revised-prompt-structure.html
    ├── 9-output-evaluation.html
    ├── 10-iteration-and-recovery.html
    └── 11-cheat-sheet.html
```

---

## Design System

### Color Palette

```css
/* CSS Custom Properties (:root) */
--bg: #ffffff              /* Pure white background */
--bg-soft: #f7f8fb         /* Soft gray background (sidebar, cards) */
--bg-muted: #eef2f7        /* Muted background (hover states) */
--border: #d9e0ea          /* Border color */
--text: #142033            /* Primary text (dark blue-black) */
--text-muted: #5f6f86      /* Muted text (body copy) */
--text-subtle: #7c8ba1     /* Subtle text (labels, helpers) */
--accent: #2563eb          /* Primary accent blue */
--accent-soft: #e8f0ff     /* Soft accent background */
--shadow: 0 24px 70px rgba(20, 32, 51, 0.14)  /* Deep shadow */
```

**Component-specific pill colors:**
- **Grounding context pills:**
  - `pill-exists`: `#E6F1FB` bg, `#0C447C` text (blue - "What exists already")
  - `pill-achieve`: `#E1F5EE` bg, `#085041` text (green - "What I'm trying to achieve")
  - `pill-tried`: `#FAEEDA` bg, `#633806` text (amber - "What I've tried or ruled out")

- **Component structure pills (9 components):**
  - `pill-task`: `#E8A838` bg, white text
  - `pill-context`: `#C0522A` bg, white text
  - `pill-grounding`: `#2A7A5A` bg, white text
  - `pill-rules`: `#B03030` bg, white text
  - `pill-skills`: `#B04878` bg, white text
  - `pill-reasoning`: `#3A82C0` bg, white text
  - `pill-role`: `#6A52B8` bg, white text
  - `pill-constraints`: `#3A8A3A` bg, white text
  - `pill-examples`: `#C87820` bg, white text
  - `pill-output`: `#888880` bg, white text

### Typography

**Font Stack:**
```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

**Monospace (code):**
```css
font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
```

**Type Scale:**
- **H1:** `clamp(2.3rem, 6vw, 4.4rem)` — fluid between 2.3rem and 4.4rem
- **H2:** `clamp(1.45rem, 3vw, 2rem)` — fluid between 1.45rem and 2rem
- **H3:** `1.1rem` — fixed size
- **Body:** `16px` base size, `1.6` line-height
- **Hero lede:** `1.16rem`
- **Eyebrow:** `0.78rem`, `800` weight, `0.12em` letter-spacing, uppercase
- **Section headings:** `0.72rem` or `0.73rem`, `750` or `800` weight, `0.11em` or `0.12em` letter-spacing, uppercase

**Letter Spacing:**
- Headings (H1-H3): `-0.035em` (tight)
- Eyebrows/labels: `0.11em` to `0.12em` (loose, uppercase)
- Body: default

**Line Height:**
- Body: `1.6`
- Headings: `1.14`
- Prompt examples: `1.55`

**Font Weights Used:**
- `600` — semibold (pills)
- `650` — mid-bold (prompt examples)
- `700` — bold (various UI elements)
- `750` — extra-bold (nav links, buttons, tabs)
- `800` — heavy (eyebrows, labels)

### Spacing & Layout

**Sidebar:**
- Width: `280px` (CSS variable `--sidebar-width`)
- Padding: `1.25rem`
- Gap between brand and nav: `2rem`

**Content area:**
- Max width: `920px`
- Left margin: `280px` (sidebar width)
- Padding: `4.5rem clamp(1.5rem, 5vw, 5rem)` (desktop)
- Padding: `2.75rem 1.25rem 4rem` (mobile ≤860px)

**Section spacing:**
- Hero bottom padding: `2.25rem`
- Content sections: `margin-top: 2rem`, `padding-top: 2rem`
- Content section gap: `0.85rem`

**Component spacing:**
- Cards gap in grid: `1rem`
- Resource borders: `0.5px solid #e0e0e0`
- Component row borders: `0.5px solid #e0e0e0`

### Borders & Radius

**Border radius scale:**
- Smallest (code): `0.4rem`
- Small (skip link, menu toggle, nav links): `0.5rem`, `0.65rem`, `0.7rem`
- Medium (cards, buttons): `0.75rem`, `0.85rem`, `1rem`
- Large (brand mark): `0.6rem`
- Pill (infinite): `99px` or `999px`

**Border widths:**
- Standard: `1px`
- Thin (resource dividers): `0.5px`
- Accent left border (callout, prompt-example): `0.35rem`

---

## Layout Patterns

### Global Page Shell (Every Page)

```html
<body>
  <a class="skip-link" href="#main-content">Skip to content</a>
  
  <header class="mobile-header">
    <!-- Brand + Menu toggle (visible ≤860px) -->
  </header>
  
  <div class="site-shell">
    <aside class="sidebar" id="site-sidebar">
      <!-- Brand + Navigation -->
    </aside>
    
    <div class="sidebar-backdrop" data-close-menu></div>
    
    <main class="content" id="main-content">
      <!-- Page-specific content -->
    </main>
  </div>
  
  <script src="script.js"></script>
</body>
```

**Sidebar (fixed left, 280px):**
- `.sidebar__inner` — flexbox column, gap `2rem`
- `.brand` — logo + wordmark, links to home
- `[data-site-nav]` — navigation rendered by JavaScript

**Content area:**
- `.content` — max-width `920px`, offset by sidebar width
- Sections: `.hero` followed by multiple `.content-section`

### Hero Pattern (All Pages)

```html
<section class="hero">
  <p class="eyebrow">[Eyebrow text]</p>
  <h1>[Page Title]</h1>
  <p class="hero__lede">[Lede paragraph]</p>
  <!-- Optional: meta blocks, cards, etc. -->
</section>
```

**Styling:**
- Eyebrow: blue accent color, small caps, tight spacing
- H1: Large, fluid size, tight letter-spacing
- Lede: max-width `680px`, muted text color, larger than body

---

## Component Patterns

### 1. Navigation (JavaScript-rendered)

**Structure:** Defined in `script.js` as `navItems` array
- Top-level links (Home, Thesis)
- Sectioned groups ("Topics", "Closing") with sub-links

**Styling:**
```css
.site-nav__link {
  /* Default: muted color, rounded, hover -> lighter bg */
  /* .is-active: accent bg, accent text, bold */
}
```

**Active state:** `aria-current="page"` + `.is-active` class

### 2. Cards

**Topic Card** (3-column grid, responsive to 1-column):
```html
<article class="topic-card">
  <p class="topic-card__label">Label</p>
  <h2><a href="...">Title</a></h2>
  <p>Description</p>
</article>
```
- Border, rounded corners, white background, subtle shadow
- Grid container: `.card-grid` (3 columns desktop, 1 column mobile)

**Example Card** (2-column pairs for before/after):
```html
<div class="example-card">
  <h3>Heading</h3>
  <img src="..." alt="...">
</div>
```

**Prompt Structure Card** (masonry grid):
```html
<figure class="prompt-structure-card">
  <img src="..." alt="...">
</figure>
```
- Container: `.prompt-structures-grid` (column-count: 3 desktop, 2 tablet, 1 mobile)
- Cards: `break-inside: avoid`

### 3. Callout Box

```html
<div class="callout">
  <p class="callout__label">Label</p>
  <p>Content...</p>
</div>
```
- Soft background, border with thick accent left edge
- Gap between items: `0.6rem`

### 4. Prompt Example

```html
<div class="prompt-example">
  Prompt text here
</div>
```
- Gradient background: `linear-gradient(135deg, var(--accent-soft), #ffffff)`
- Large opening quote (`\201C`) positioned absolutely
- Italic, semi-bold (650), larger size (1.08rem)
- Thick accent left border, rounded, shadow

### 5. Pills (Tags)

```html
<span class="pill pill-[type]">Label</span>
```
- Round (infinite border-radius)
- Small size: `13px` font, `5px 13px` padding
- Semibold (600)
- Types: exists, achieve, tried, task, context, grounding, rules, skills, reasoning, role, constraints, examples, output

### 6. Resource List (Grounding page)

```html
<div class="resource">
  <div class="resource-header">
    <strong class="resource-title">Title</strong>
    <div class="pills">
      <span class="pill pill-exists">...</span>
      <span class="pill pill-achieve">...</span>
    </div>
  </div>
  <p>Description...</p>
  <ul>...</ul>
</div>
```
- Thin top/bottom borders (`0.5px`)
- Padding: `1.1rem 0`
- Flexbox header with wrapping pills

### 7. Component Table (Revised Prompt Structure page)

**Header:**
```html
<div class="component-header">
  <span>Component</span>
  <span>Description</span>
  <span>Why it matters</span>
</div>
```
- 3-column grid: `120px 1.4fr 1fr`
- Bottom border, uppercase labels

**Tiers:**
```html
<p class="tier">Mandatory</p>
<div class="component-table">
  <div class="component-row">
    <span class="pill pill-[component]">task</span>
    <p class="component-does">Description</p>
    <p class="component-breaks">Why it matters</p>
  </div>
</div>
```
- Same 3-column grid
- Thin borders between rows
- Three tiers: Mandatory, Important, Good to have

### 8. Home Meta Block

```html
<dl class="home-meta" aria-label="Site details">
  <div>
    <dt>Label</dt>
    <dd>Value</dd>
  </div>
</dl>
```
- 3-column grid (desktop), 1-column (mobile)
- Cards with border, rounded, soft background

### 9. Example Comparison (Why AI Fails page)

```html
<div class="examples-comparison">
  <article class="example-pair">
    <div class="example-card"><!-- Always visible --></div>
    <div class="example-card example-result" data-example-group="..." hidden>
      <!-- Hidden until revealed -->
    </div>
  </article>
</div>
```
- 2-column grid (desktop), 1-column (mobile)
- Reveal button: `data-example-reveal-group="right-examples"`

---

## Interactive Components

### 1. Tabs (Directed vs. Discovered page)

**Structure:**
```html
<div class="example-tabs" data-tabs>
  <div class="example-tabs__list" role="tablist">
    <button class="example-tabs__tab is-active" role="tab" 
            aria-selected="true" data-tab-target="panel-id">
      Tab 1
    </button>
    <!-- More tabs -->
  </div>
  
  <div class="example-tabs__panel" id="panel-id" role="tabpanel">
    <!-- Panel content -->
  </div>
  <div class="example-tabs__panel" hidden><!-- Hidden panels --></div>
</div>
```

**Layout:**
- Container: 2-column grid (`minmax(220px, 0.7fr) minmax(320px, 1.3fr)`)
- Tab list: pill-style container, grid-column 2
- Panels: span full width (grid-column 1 / -1)

**Styling:**
- Tabs: rounded pill container, individual rounded buttons
- Active: white background, accent text, shadow
- Inactive: transparent, muted text

**Keyboard navigation:** Arrow keys, Home, End (handled in `script.js`)

### 2. Reveal Buttons

**Single reveal:**
```html
<button data-example-reveal="target-id">Show</button>
<div id="target-id" hidden>Content</div>
```

**Group reveal:**
```html
<button data-example-reveal-group="group-name">Show all</button>
<div data-example-group="group-name" hidden>Content 1</div>
<div data-example-group="group-name" hidden>Content 2</div>
```

**Button states:**
- Default: accent background, white text
- Hover: darker blue, slight lift (`translateY(-1px)`)
- Revealed: soft background, muted text, disabled cursor

### 3. Mobile Menu

**Trigger:**
```html
<button class="menu-toggle" aria-controls="site-sidebar" aria-expanded="false">
  <span class="menu-toggle__icon" aria-hidden="true"></span>
  <span>Menu</span>
</button>
```

**Icon:** Hamburger (three horizontal lines, pseudo-elements)

**Behavior:**
- Opens: adds `.menu-open` to `<body>`, sidebar slides in from left
- Closes: backdrop click, link click, or Escape key
- Body scroll locked when open

**Animations:**
- Sidebar: `transform: translateX(-105%)` → `translateX(0)` (180ms ease)
- Backdrop: fade in/out (180ms ease)

---

## Responsive Design

### Breakpoints

**Desktop (default):** > 860px
**Tablet:** 861px – 1080px (some adjustments)
**Mobile:** ≤ 860px (major layout shift)

### Mobile Adaptations (≤860px)

**Layout changes:**
- `.mobile-header` appears (sticky top, backdrop blur)
- `.sidebar` hidden by default, slides in when menu open
- `.content` margin-left becomes 0, reduced padding
- `.sidebar-backdrop` overlay appears when menu open

**Grid collapses:**
- `.card-grid`: 3 columns → 1 column
- `.home-meta`: 3 columns → 1 column
- `.example-tabs`: 2 columns → 1 column
- `.prompt-level-row`: 2 columns → 1 column
- `.example-pair`: 2 columns → 1 column
- `.component-header` / `.component-row`: 3 columns → 1 column
  - Header: hides 2nd and 3rd spans
  - Row: stacks vertically

**Column-count adjustments:**
- `.prompt-structures-grid`: 3 → 1 (via 2 on tablet)

### Tablet Adaptations (861px – 1080px)

- `.prompt-structures-grid`: 3 columns → 2 columns

---

## Accessibility Features

### Semantic HTML
- Proper heading hierarchy (H1 → H2 → H3)
- `<nav>` with `aria-label="Primary navigation"`
- `<main>` with `id="main-content"`
- `<section>` for logical content groups
- `<article>` for cards
- `<figure>` for images with context
- Definition list (`<dl>`) for metadata

### ARIA
- Skip link: `class="skip-link"` → jumps to `#main-content`
- Active page: `aria-current="page"`
- Expanded state: `aria-expanded="true/false"` on buttons
- Tabs: full ARIA pattern (`role="tab"`, `role="tablist"`, `role="tabpanel"`, `aria-selected`, `aria-controls`, `aria-labelledby`)
- Hidden content: `hidden` attribute (not `display: none` in CSS)
- Icon-only elements: `aria-hidden="true"` on decorative icons
- Section labels: `aria-label` on navigation, grids, comparisons

### Focus Management
- Visible focus states on all interactive elements
- Skip link reveals on `:focus`
- Tab navigation syncs focus with active panel
- Custom focus styling (e.g., tabs: blue shadow ring)

### Keyboard Navigation
- Tab: through all interactive elements
- Escape: closes mobile menu
- Arrow keys: navigate between tabs
- Home/End: jump to first/last tab

---

## JavaScript Architecture

**Pattern:** IIFE (Immediately Invoked Function Expression) wrapping all code

### Navigation Rendering

**Data structure:**
```javascript
var navItems = [
  { label: "Home", href: "index.html" },
  { label: "Thesis", href: "topics/1-lets-go-on-a-trip.html" },
  { 
    heading: "Topics",
    links: [
      { label: "...", href: "topics/..." },
      // ...
    ]
  },
  // ...
];
```

**Functions:**
- `getPathPrefix()` — detects if in `/topics/` directory, returns `"../"` or `""`
- `getCurrentPage()` — extracts current filename + directory for active state
- `createNavLink(item, currentPage)` — builds `<a>` element, adds `.is-active` if match
- `renderSiteNavigation()` — loops through navItems, creates sections and links

### Mobile Menu

**Functions:**
- `setMenuOpen(isOpen)` — toggles `.menu-open` class on body, updates `aria-expanded`

**Event listeners:**
- Menu button click: toggles menu
- Backdrop click: closes menu
- Nav link click: closes menu
- Document keydown (Escape): closes menu

### Reveal Buttons

**Single reveal:**
- Finds target by `data-example-reveal` ID
- Sets `hidden = false`, updates `aria-expanded`, hides button

**Group reveal:**
- Finds all elements with matching `data-example-group`
- Reveals all, updates button, hides button

### Tabs

**Per tab group (`data-tabs`):**
- `setActiveTab(activeTab)` — updates all tabs and panels:
  - Adds/removes `.is-active` class
  - Sets `aria-selected`
  - Shows/hides panels via `hidden` attribute

**Event listeners per tab:**
- Click: activates clicked tab
- Keydown:
  - ArrowRight: next tab (wraps to first)
  - ArrowLeft: previous tab (wraps to last)
  - Home: first tab
  - End: last tab
  - Updates focus and active state

---

## CSS Architecture

### Organization
1. CSS Custom Properties (`:root`)
2. Reset/Base styles (`*`, `html`, `body`, `a`, `img`, `code`)
3. Utility classes (`.skip-link`)
4. Layout shell (`.site-shell`, `.sidebar`, `.content`)
5. Navigation components
6. Content components (hero, sections, cards)
7. Interactive components (tabs, reveals, menu)
8. Responsive overrides (`@media`)

### Naming Convention
- **BEM-like** for components with variants:
  - `.site-nav__link`, `.site-nav__heading`, `.site-nav__section`
  - `.brand__mark`, `.brand--mobile`
  - `.example-tabs__list`, `.example-tabs__tab`, `.example-tabs__panel`
  - `.prompt-level-row__copy`
  
- **State classes:** `.is-active`, `.menu-open`

- **Data attributes:** `[data-site-nav]`, `[data-tabs]`, `[data-close-menu]`, etc.

### CSS Features Used
- Custom properties (CSS variables)
- Flexbox (navigation, headers, pill groups)
- Grid (card layouts, component tables, tabs)
- `clamp()` for fluid typography
- `column-count` for masonry layout
- Pseudo-elements (`::before`, `::after` for icons, decorations)
- Transitions (hover states, menu animations)
- `backdrop-filter: blur(14px)` on sticky mobile header
- `box-shadow` for depth
- `transform` for animations and hover effects

---

## Assets

### Favicon
- **File:** `favicon.svg`
- **Content:** Dark rounded square (`#0d1117`) with blue monospace `/>` symbol (`#58a6ff`)
- **Size:** 100×100 viewBox
- **Usage:** Sidebar brand mark + browser favicon

### Images

**AI comparison screenshots (6 total):**
- Three pairs: ChatGPT, Claude, Gemini
- Each pair: "wrong" (first try) + "right" (after checking)
- Usage: Page 2 (Why AI Fails Predictably) reveal comparison

**Prompt structure frameworks (8 used + 1 unused):**
- `prompt_structure_1.png` through `prompt_structure_8.png`
- Display: Masonry grid on Page 3 (General Prompt Structure)
- Alt text describes each framework's structure/approach
- Note: `prompt_structure_5.png` is unusually large (3.3 MB)
- Unused: `prompt_structure_new.png` (replaced by HTML table rendering)

---

## Page-Specific Implementations

### Home (`index.html`)
- Standard hero + agenda list
- `.home-meta` card grid with author/date
- No special interactions

### Thesis (`topics/1-lets-go-on-a-trip.html`)
- Three sections: thesis statement, card grid overview, "who this is for"
- `.card-grid` with 10 topic cards (3-column responsive)
- Each card links to corresponding topic page

### Why AI Fails Predictably (`topics/2-why-ai-fails.html`)
- Group reveal button (`data-example-reveal-group="right-examples"`)
- `.examples-comparison` with 3 `.example-pair` rows
- Before/after image pairs (6 images total)
- Commented-out sections (lines 95-109)

### General Prompt Structure (`topics/3-general-prompt-structure.html`)
- `.prompt-structures-grid` (masonry, column-count: 3)
- 8 framework images in `.prompt-structure-card` wrappers
- Prose "Key Points" section below

### Rules and Skills (`topics/4-rules-and-skills.html`)
- Two sections: Rules, Skills
- Definition + examples pattern (repeated)
- Inline lists within paragraphs
- No special interactions or layouts

### Grounding (`topics/5-grounding.html`)
- Callout box with "Start here" label
- 15 `.resource` items with pills
- Pills indicate: exists / achieve / tried
- Most complex content structure

### Directed vs. Discovered (`topics/6-directed-vs-discovered.html`)
- Tab group (`data-tabs`) with 3 examples
- Each tab panel: 4 `.prompt-level-row` items (coffee → fully specified)
- 2-column grid: copy left, prompt example right
- 12 prompt examples total across 3 tabs
- Closing section: "A note on over-specifying"

### Prompt Depth (`topics/7-prompt-depth.html`)
- Simple section-based layout
- No special interactions
- Bulleted list for three levels (Quick, Standard, Deep)

### Revised Prompt Structure (`topics/8-revised-prompt-structure.html`)
- `.component-header` (3-column grid headers)
- Three tiers with `.component-table` each
- 10 component rows total (1 mandatory, 5 important, 4 good to have)
- Color-coded pills for each component
- Callout: "Set once, use always"
- Link to Grounding page at end

### Output Evaluation (`topics/9-output-evaluation.html`)
- Standard sections with `.prompt-example` blocks
- No special interactions
- Four techniques listed as separate paragraphs

### Iteration & Recovery (`topics/10-iteration-and-recovery.html`)
- Standard sections
- One `.prompt-example` (recovery prompt template)
- Inline `<strong>` for emphasis in lists

### Cheat Sheet (`topics/11-cheat-sheet.html`)
- Six sections: compact reference format
- Two `.prompt-example` blocks (evaluation prompt)
- Bulleted lists throughout
- Closes the "Closing" navigation section

---

## HTML Patterns & Conventions

### Doctype & Meta
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>[Page] | Prompting with Intent</title>
    <link rel="icon" href="[../]assets/favicon.svg" type="image/svg+xml">
    <link rel="stylesheet" href="[../]styles.css">
  </head>
```

### Path Handling
- Home page: references `styles.css`, `script.js`, `assets/` directly
- Topic pages: prefix with `../` for all external resources
- Brand link in sidebar: `index.html` (home) or `../index.html` (topics)

### Script Loading
- Single `<script src="[../]script.js"></script>` before `</body>`
- No inline scripts
- No external dependencies (no jQuery, no frameworks)

### Comments
- Two sections commented out in `2-why-ai-fails.html` (lines 95-109)
- HTML comments used for organization, not inline documentation

---

## Browser Compatibility

**Modern browser features used:**
- CSS Grid & Flexbox
- CSS Custom Properties (variables)
- `clamp()` function
- `backdrop-filter: blur()`
- Smooth scroll behavior (`scroll-behavior: smooth`)
- ES5 JavaScript (var, function, IIFE)

**No polyfills or fallbacks** — assumes modern evergreen browser

---

## Performance Considerations

**Optimization:**
- Single CSS file (no imports)
- Single JS file (no modules)
- Images pre-loaded (no lazy loading)
- No web fonts loaded (system font stack)
- Static HTML (no SSR, no build step)

**Potential issues:**
- `prompt_structure_5.png` is 3.3 MB (could be optimized)
- All images load immediately (no lazy loading)
- No image responsive variants (no srcset)

---

## Deployment Notes

**Requirements:**
- Static file server (no server-side processing)
- No build step required
- No environment variables
- No database or backend

**Files to deploy:**
- All `.html` files (root + `/topics/`)
- `styles.css`
- `script.js`
- `/assets/` directory (complete)

**Not needed:**
- `website-content.md` (reference only)
- `website-technical-spec.md` (reference only)
- `.DS_Store` files

---

## Design Decisions & Patterns

### Consistent Patterns Across Pages
1. Every page starts with skip link
2. Every page has mobile header + sidebar + backdrop
3. Every page has hero section with eyebrow + H1 + lede
4. Content sections always have top border + spacing
5. Navigation always rendered by JavaScript (never hardcoded)

### Interactive Philosophy
- Minimal JavaScript, progressive enhancement
- No page reloads (except navigation)
- Keyboard accessible throughout
- Clear focus indicators
- State managed via classes/attributes, not inline styles

### Visual Hierarchy
- Accent color used sparingly (links, eyebrows, active states)
- Soft backgrounds for containment (cards, sidebar, callouts)
- Borders for separation (thin, subtle)
- Shadow for elevation (cards, modals, prompt examples)
- Color-coded pills for categorical differentiation

### Content Strategy (Technical)
- Long-form sections broken into digestible chunks
- Examples always paired with explanation
- Interactive reveals for progressive disclosure
- Tabs for parallel comparisons
- Pills for quick scanning (context tags)

---

## Known Issues / Limitations

1. **Unused asset:** `prompt_structure_new.png` present but not referenced
2. **Commented sections:** `2-why-ai-fails.html` has two sections commented out (lines 95-109)
3. **Inconsistent spacing:** Some navigation label font-sizes vary slightly (0.72rem vs 0.73rem)
4. **Brand link inconsistency:** Topic pages have incorrect home link (`href="index.html"` should be `href="../index.html"` — JavaScript handles this via `getPathPrefix()` but HTML href is wrong)
5. **Large image:** `prompt_structure_5.png` is 3.3 MB, significantly larger than others
6. **No dark mode:** Color scheme locked to light
7. **No print styles:** Page may not print well

---

## Extension Points

### Adding a New Topic Page
1. Create `topics/[number]-[slug].html`
2. Copy shell from existing topic page
3. Update `<title>` and content sections
4. Add entry to `navItems` array in `script.js`
5. Add corresponding content section to `website-content.md`

### Adding New Interactive Component
1. Add markup with data attribute (e.g., `data-new-widget`)
2. Query selector in `script.js` after line 132
3. Add event listeners
4. Style in `styles.css` (add before media queries)

### Styling Variations
- All colors centralized in `:root`
- Add new pill variant: define `pill-[name]` class with bg/color
- Add new tier: duplicate `.component-table` block with new `.tier` label

---

## Related Files

- **Content reference:** `website-content.md` — All copy, messaging, examples, structure
- **This file:** `website-technical-spec.md` — All implementation, styling, behavior

**Together, these files document every aspect of the website for recreation, modification, or handoff to another agent or developer.**
