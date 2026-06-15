# Prompting with Intent — Full Website Export

> This document is a faithful text export of the presentation website on prompt engineering.
> It captures the site title, navigation, per-page content, layout structure, and image
> references. Images are not embedded; they are referenced by filename in square brackets,
> e.g. `[prompt_structure_1.png]`. This file is intended to be handed to another agent for
> content review.

---

## Site Overview

- **Site title:** Prompting with Intent
- **Author:** Onkar Borgaonkar
- **Date:** June 17, 2026
- **Audience (intended):** Experienced UX designers, from junior level to senior director, who already use AI tools daily.
- **Tech:** Static HTML site, single shared `styles.css`, single shared `script.js`. One home page plus eleven topic pages under `/topics/`.

### Global Layout (every page)

Every page shares the same shell:

- **Skip link:** "Skip to content" (accessibility, jumps to main content).
- **Mobile header:** Brand wordmark ("Prompting with Intent") + a "Menu" toggle button (hamburger icon). Visible only on narrow screens (≤860px).
- **Fixed left sidebar (280px wide):**
  - Brand block: favicon mark [favicon.svg] + "Prompting with Intent" wordmark, links to home.
  - Primary navigation (rendered by JavaScript — see Navigation below).
- **Sidebar backdrop:** Dark overlay shown behind the sidebar when the mobile menu is open.
- **Main content area:** Max width ~920px, offset to the right of the sidebar. Contains a `hero` section followed by stacked `content-section` blocks separated by top borders.

### Navigation (rendered from `script.js`)

The navigation is generated dynamically and is identical on every page. The active page is highlighted with an accent background and `aria-current="page"`. Structure:

- **Home** → `index.html`
- **Thesis** → `topics/1-thesis.html`
- **Topics** (section heading)
  1. Why AI Fails Predictably? → `topics/2-why-ai-fails.html`
  2. General Prompt Structure → `topics/3-general-prompt-structure.html`
  3. Rules and Skills → `topics/4-rules-and-skills.html`
  4. Grounding → `topics/5-grounding.html`
  5. Directed vs. Discovered → `topics/6-directed-vs-discovered.html`
  6. Prompt Depth → `topics/7-prompt-depth.html`
  7. Revised Prompt Structure → `topics/8-revised-prompt-structure.html`
  8. Output Evaluation → `topics/9-output-evaluation.html`
  9. Iteration & Recovery → `topics/10-iteration-and-recovery.html`
- **Closing** (section heading)
  - Closing / Cheat Sheet → `topics/11-cheat-sheet.html`

### Interactive behaviors (from `script.js`)

- **Mobile menu toggle:** Opens/closes the sidebar; closes on link click, on backdrop click, or on `Escape`.
- **Reveal buttons:** A button can reveal a single hidden element (`data-example-reveal`) or a group of hidden elements (`data-example-reveal-group`). Used on the "Why AI Fails Predictably?" page to reveal the corrected ("after checking") answers.
- **Tabs:** Accessible tab groups (`data-tabs`) with arrow-key / Home / End keyboard navigation. Used on the "Directed vs. Discovered" page to switch between Example 1/2/3.

---

## Page: Home

- **File:** `index.html`
- **Browser tab title:** "Home | Prompting with Intent"
- **Layout:** Hero section followed by one `content-section` (the agenda list).

### Content

- **Eyebrow:** Welcome
- **H1:** Prompting with Intent
- **Lede (paragraph 1):** "You already use AI. Probably every day. This isn't about learning the basics — you're past that. It's about getting sharper at something you're already doing."
- **Lede (paragraph 2):** "Every prompt has gaps. The AI fills them all, every time, without asking. Sometimes the guess is fine. Sometimes it's exactly where things go wrong. The difference between an okay result and a useful one usually isn't how much you wrote — it's whether you were intentional about what you left open."
- **Meta block** (definition list, card style, `home-meta`):
  - Author: Onkar Borgaonkar
  - Date: June 17, 2026

### Section: Agenda

Bulleted list:
- Why prompts fail predictably
- How prompt structure actually works
- The three levers most people never use
- How to calibrate specificity on purpose
- What to do when the output misses

---

## Page: Thesis

- **File:** `topics/1-thesis.html`
- **Browser tab title:** "Thesis | Prompting with Intent"
- **Layout:** Hero + three content sections. The second section contains a `card-grid` (3-column responsive grid of `topic-card`s) that maps the rest of the deck.

### Hero

- **Eyebrow:** The argument
- **H1:** Thesis
- **Lede:** "Every gap in your prompt is a creative decision you are handing to the AI. This guide is about choosing those gaps on purpose."

### Section: Gaps are decisions

Two paragraphs:
- "When you leave something unspecified, the AI does not stop and ask. It fills the gap with the most statistically probable answer from its training. That is where 'bad output' actually comes from. It is not lying and it is not broken. It is pattern-matching in the absence of facts you never gave it."
- "So the real skill is not writing longer prompts. It is noticing every gap and deciding, deliberately, whether to fill it or leave it open. Fill it when the output needs to match something specific you already have in mind. Leave it open when you want the model to surprise you with something better than you would have specified. Either way, the choice is yours, and you make it whether you notice it or not."

### Section: What you'll learn

Intro: "The pages that follow build one idea at a time, from how AI fails to the levers that let you control the gaps you care about."

Card grid (label → title → blurb, each card links to the page):
1. Foundation → Why AI Fails Predictably? (`2-why-ai-fails.html`) — "Failures come from missing context, not missing intelligence."
2. Structure → General Prompt Structure (`3-general-prompt-structure.html`) — "The skeleton every framework agrees on: task, context, role, format."
3. Levers → Rules and Skills (`4-rules-and-skills.html`) — "Persistent guardrails and reusable expertise for the AI."
4. Levers → Grounding (`5-grounding.html`) — "Give the AI facts and sources so it answers from reality."
5. Control → Directed vs. Discovered (`6-directed-vs-discovered.html`) — "Decide how much direction to give before you start."
6. Control → Prompt Depth (`7-prompt-depth.html`) — "Tell the AI how much thinking the task actually needs."
7. Payoff → Revised Prompt Structure (`8-revised-prompt-structure.html`) — "The skeleton with the levers snapped into place."
8. Recovery → Output Evaluation (`9-output-evaluation.html`) — "Make the AI pressure-test its own work before you do."
9. Recovery → Iteration & Recovery (`10-iteration-and-recovery.html`) — "Diagnose why output missed, then refine or restart."
10. Takeaways → Cheat Sheet (`11-cheat-sheet.html`) — "The parts worth keeping, on one page."

### Section: Who this is for

Paragraph: "People who already use AI every day and want to move past 'write a clear prompt.' If you have felt the difference between an answer that nails it and one that drifts, this is about understanding why, and getting that result on purpose."

---

## Page 1: Why AI Fails Predictably?

- **File:** `topics/2-why-ai-fails.html`
- **Browser tab title:** "Why AI Fails Predictably? | Prompting with Intent"
- **Layout:** Hero + one content section. The section contains an interactive side-by-side image comparison with a group reveal button. (Two further sections — "What Makes AI Seem Smart" and "A Useful Way to Think About It" — exist in the source but are commented out.)

### Hero

- **Eyebrow:** Topic guide
- **H1:** Why AI Fails Predictably?
- **Lede:** "AI does not fail randomly. When you leave a gap in your prompt, it fills that gap with the most statistically average answer from its training. The failures are predictable once you see them as missing context, not missing intelligence."

### Section: Some Examples

Paragraph: "AI is smart at some tasks and limited at others. It can summarize, translate, classify, generate ideas, and spot patterns across large amounts of information. It does not understand the world the same way people do, and it can make confident mistakes when it lacks context or reliable evidence."

- **Reveal button:** "Show all corrections" — reveals the "after checking" cards below.
- **Layout:** `examples-comparison` grid of three `example-pair` rows; each pair is a 2-column grid with a "first try" card (always visible) and an "after checking" card (hidden until revealed). Each card has a heading and an image.

  | Tool first try (always visible) | After checking (revealed by button) |
  |---|---|
  | "ChatGPT first try" — [chatgpt-wrong.png] | "ChatGPT after checking" — [chatgpt-right.png] |
  | "Claude first try" — [claude-wrong.png] | "Claude after checking" — [claude-right.png] |
  | "Gemini first try" — [gemini-wrong.png] | "Gemini after checking" — [gemini-right.png] |

---

## Page 2: General Prompt Structure

- **File:** `topics/3-general-prompt-structure.html`
- **Browser tab title:** "General Prompt Structure | Prompting with Intent"
- **Layout:** Hero + two content sections. First section is a masonry/multi-column grid (`prompt-structures-grid`, `column-count: 3`) of 8 framework images, each in its own `prompt-structure-card`; second is prose.

### Hero

- **Eyebrow:** Topic guide
- **H1:** General Prompt Structure
- **Lede:** "A general structure for prompts that can be used for a variety of tasks."

### Section: Structure

A multi-column (masonry) grid of eight images, each in its own card. In order:

1. [prompt_structure_1.png] — alt: "Basic AI prompt template with structure and example columns"
2. [prompt_structure_2.png] — alt: "Table describing the structure of a good prompt"
3. [prompt_structure_3.png] — alt: "Prompt sections for role, format, constraints, logic, stop conditions, context, and task"
4. [prompt_structure_4.png] — alt: "Prompt components grouped by mandatory, important, and nice-to-have"
5. [prompt_structure_5.png] — alt: "Key elements of an effective AI prompt"
6. [prompt_structure_6.png] — alt: "Anatomy of a Claude prompt with labeled sections"
7. [prompt_structure_7.png] — alt: "Six-step prompt checklist ranked by importance"
8. [prompt_structure_8.png] — alt: "CRISPE framework for structured prompting"

### Section: Key Points

Three paragraphs (verbatim):

- "Every framework has a task, context, a role, and a format. That's the skeleton. The rest of it, reasoning steps, stop conditions, constraints, evaluation, that's muscle you add when the task is complex enough to need it."
- "The one I find most honest is the one that breaks components into mandatory, important, and nice-to-have. It's the only framework that tells you what to skip. Task first. Always. Then context and examples. Everything else is optional depending on what you're building."
- "The mistake I used to make, and still see constantly, is treating all of these as a checklist to fill out every time. They're not. They're a menu. Your job is knowing which items your specific task actually needs."

---

## Page 3: Rules and Skills

- **File:** `topics/4-rules-and-skills.html`
- **Browser tab title:** "Rules and Skills | Prompting with Intent"
- **Layout:** Hero + two content sections (Rules, Skills). No images.

### Hero

- **Eyebrow:** Topic guide
- **H1:** Rules and Skills
- **Lede:** "Rules and Skills are repeatable instructions that can be used to improve the quality of the output."

### Section: Rules

- **Definition:** Short, persistent "Do" or "Don't" instructions that are supposed to be followed for every prompt in your current workspace.
- **Examples:**
  - Always use SLDS component names, never invent custom component labels
  - Never suggest a new pattern if an existing SLDS component covers the use case
  - Always flag accessibility issues before suggesting visual changes
- **Closing lines:**
  - "Can be thought of as a 'code of conduct' or 'guardrails' for the AI."
  - "Rules govern every response"
  - "In Claude.ai, rules live in your Project instructions. In Cursor, they live in your .cursor/rules/*.mdc (latest) or .cursorrules (older versions) file. Set them once and they're active for every prompt in that context."

### Section: Skills

- **Definition:** Skills are reusable instruction sets that teach the AI how to behave in a specific domain.
- **Examples:**
  - "Review any design description or component spec against WCAG 2.1 AA. Flag contrast issues, missing focus states, touch target sizes, and screen reader considerations. Be specific about what fails and why."
  - "You are a design director. When I share work, evaluate it across: user clarity, business alignment, technical feasibility, and consistency with existing patterns. Give me the hard feedback, not the kind version."
  - "When I describe a product problem, help me think upstream. Push back if I'm jumping to solutions. Ask about the job to be done, what success looks like in 6 months, and what we'd need to believe for this to work."
- **Closing lines:**
  - "Can be thought of as a 'expertise' for the AI."
  - "Skills activate a mode of thinking."
  - "In Claude.ai, skills live in your Project instructions alongside your rules. In Cursor, they go in your .cursor/rules/*.mdc (latest) or .cursorrules (older versions) file as a named block. In a Slackbot, they live in the system prompt configured when the bot is set up. In all three cases, the principle is the same: you write the expertise once, and the AI carries it into every interaction."

---

## Page 4: Grounding

- **File:** `topics/5-grounding.html`
- **Browser tab title:** "Grounding | Prompting with Intent"
- **Layout:** Hero + two content sections. The first section ("Why Grounding Matters") ends with a `callout` block. The second section ("How to Ground a Prompt") is a stacked list of `resource` rows; each row has a bold `resource-title` plus one or more colored `pill`s that tag it as "What exists already" (blue), "What I'm trying to achieve" (green), or "What I've tried or ruled out" (amber). No images.

### Hero

- **Eyebrow:** Topic guide
- **H1:** Grounding
- **Lede:** "Grounding gives AI the facts, sources, and constraints it needs to answer from reliable context instead of letting it generate from training data alone."

### Section: Why Grounding Matters

Paragraph: "Without grounding, the AI fills gaps with the most statistically probable answer from its training. That's where hallucinations come from. It's not lying — it's pattern-matching in the absence of facts. Grounding removes that gap."

**Callout** (label: "Start here"):
- "Before writing any task prompt, answer these three questions inside it:"
  - Here is what exists already
  - Here is what I'm trying to achieve
  - Here is what I've already tried or ruled out
- "This transfers to any domain"

### Section: How to Ground a Prompt

Intro: "Adding md files to the project folder is the easiest way to ground a prompt."

Resource list (title — [pills] — description):

1. **Project brief** — [exists, achieve] — "A single file covering:"
   - Client name, industry, what their Salesforce instance is for
   - The specific project goal — what you're designing and why
   - Key stakeholders and their concerns
   - What's in scope and what's explicitly out of scope
2. **Salesforce config dump** — [exists] — "Export or paste the relevant metadata — objects, fields, relationships, and naming conventions specific to this client. A trimmed spreadsheet works. This stops the agent from inventing field names or assuming standard objects when the client has custom ones."
3. **Current page or screen audit** — [exists] — "Screenshots or a Figma file of the UI users actually see today. Without this, the agent designs in a vacuum — and often duplicates something that already exists or conflicts with what it's replacing."
4. **Figma-to-SLDS mapping** — [exists, achieve] — "Document your component-to-SLDS mapping explicitly. 'This card maps to lightning-card. This input maps to lightning-input with this variant.' Now the agent generates code that matches your design instead of interpreting it."
5. **Org-specific component library** — [exists] — "A pattern inventory of custom components beyond base SLDS. Prevents the agent from suggesting things that already exist, are forbidden, or are due for deprecation."
6. **Navigation and permissions model** — [exists] — List:
   - What page layouts, app pages, and navigation items exist
   - Which profiles or permissions control access to them

   "The agent needs to know where your design lives in the org before it can make sensible placement decisions."
7. **User personas or role matrix** — [achieve] — List:
   - Job titles and technical comfort levels
   - What each role is actually trying to do in Salesforce

   "Grounds the agent in real user goals rather than system requirements."
8. **Journey map or task flow** — [exists, achieve] — "The step-by-step process users follow today, even if it's rough. Shows the agent what the current experience looks like and where the design needs to step in."
9. **Known pain points** — [achieve, tried] — "A short list of what users complain about or struggle with — even from informal feedback or a Slack thread. Tells the agent what you're solving for, and signals what hasn't worked."
10. **Accessibility constraints** — [achieve, tried] — List:
    - WCAG level required
    - Org-specific a11y rules
    - Screen reader expectations

    "Often a ruled-out direction is 'we tried X but it failed accessibility review' — this is the place to say that explicitly."
11. **Stakeholder constraints** — [achieve, tried] — "Non-negotiables tied to specific people. 'The VP of Sales won't approve modal-heavy flows.' 'IT requires all data to stay in standard objects.' If it's going to get vetoed, the agent should know before it builds."
12. **Prior design explorations** — [tried] — "Rejected Figma concepts, killed prototypes, directions leadership already said no to. The most underused resource on this list. Drop them in and the agent stops re-suggesting dead ends."
13. **Release or sprint scope** — [achieve, tried] — "What's getting built this cycle vs. what's future state. Keeps the agent from designing the full vision when you only need the MVP."
14. **Decision log** — [tried] — "A running list of design decisions already made and why. 'We chose a modal over a new page for record creation because of the client's navigation constraints.' Stops the agent from reopening closed questions."
15. **Session handoff note** — [exists, tried] — "End each session by asking the agent: 'Summarize what we built today, what decisions were made, and what's next.' Paste that at the top of the next session. It's a cheap memory bridge."

---

## Page 5: Directed vs. Discovered

- **File:** `topics/6-directed-vs-discovered.html`
- **Browser tab title:** "Directed vs. Discovered | Prompting with Intent"
- **Layout:** Hero + an interactive tab group (`example-tabs`) with three tabs (Example 1, Example 2, Example 3), followed by one closing content section. Each tab panel contains four `prompt-level-row`s; each row is a 2-column grid pairing an explanatory copy block (left) with a quoted example prompt (right, `prompt-example`). No images.

### Hero

- **Eyebrow:** Topic guide
- **H1:** Directed vs. Discovered
- **Lede:** "Are you executing a vision, or leaving room for the AI to surprise you? Know which one before you start. The same way you might tell a barista 'surprise me' or order down to the temperature and the cup size."

### Tab structure

Three tabs, each showing the same four specificity levels (using a coffee-order metaphor) applied to a different scenario:

- **Example 1** scenario: summarizing research / user interviews
- **Example 2** scenario: design critique / onboarding flow review
- **Example 3** scenario: designing a login page

The four levels (repeated across all three tabs) are:

1. **"Coffee"** — "You're handing the wheel to the AI entirely. No direction, no constraints. What comes back is pure AI. Its interpretation, its defaults, its creative choices. Sometimes that's exactly what you want. Sometimes it surprises you in ways you wouldn't have thought of yourself."
2. **"Iced coffee"** — "You've set a general direction but left the details open. The AI knows roughly where to go but makes most of the creative decisions along the way. Good when you have a starting point in mind but want the AI to fill the space."
3. **"Iced oat latte, two shots"** — "You're in the driver's seat. You've defined the what and the why — the AI handles the how. The creative space is narrower, the output is closer to your vision. Iteration at this level is refinement, not redirection."
4. **"Iced oat latte, two shots, light ice, vanilla, in a venti cup"** — "You know exactly what you want. The AI is executing your vision, not contributing its own. There's little room for surprise — but there's also little room for drift. This is the level you want when the output needs to match something specific you already have in mind."

### Example prompts per level

**Example 1 — Research synthesis**

- Coffee: "Summarize my research notes"
- Iced coffee: "Summarize these 5 user interviews and find common themes"
- Iced oat latte, two shots: "Analyze these interview transcripts from mid-market operations managers. Identify pain points around approval workflows, rank them by frequency, and flag any quotes worth keeping for a stakeholder presentation"
- Iced oat latte (fully specified): "You are a senior UX researcher. Here are 12 interview transcripts from operations managers at mid-market logistics companies. Synthesize the findings into: top 5 pain points ranked by frequency, behavioral patterns across segments, one HMW per theme, and a one-page executive summary framed around business impact. Flag any contradictions between what users said and what they did. Output in a format ready to paste into a Confluence page."

**Example 2 — Design critique**

- Coffee: "Is this design good?"
- Iced coffee: "Review my onboarding flow and give feedback"
- Iced oat latte, two shots: "Review this 5-step onboarding flow for a B2B SaaS tool targeting non-technical users. Flag any steps where cognitive load is too high and suggest simplifications."
- Iced oat latte (fully specified): "Act as a senior product designer who specializes in B2B SaaS onboarding. Review this flow against these criteria: time-to-value, cognitive load per step, and drop-off risk. For each screen, tell me what's working, what's a problem, and one specific change. End with a prioritized list of fixes ranked by impact. Be direct — I don't need encouragement, I need the hard feedback."

**Example 3 — Login page design**

- Coffee: "Design a login page"
- Iced coffee: "Design a login page for a partner portal with email and password fields"
- Iced oat latte, two shots: "Design a login page for a B2B partner portal. Include email and password fields, a forgot password link, and a company logo placeholder. The audience is external partners — resellers and consultants — so it needs to feel professional and trustworthy. Use our brand colors and follow SLDS guidelines."
- Iced oat latte (fully specified): "You are a senior product designer specializing in B2B enterprise portals. Design a login page for a Salesforce Experience Cloud partner portal used by external resellers and consulting partners. The page must include:
  - Company logo top center
  - Email and password fields with inline validation
  - Forgot password and SSO login options
  - A trust signal — partners need to feel this is secure
  - Error states for incorrect credentials and locked accounts

  Context:
  - Partners log in infrequently, so they often forget credentials — reduce friction around recovery
  - Some partners are non-technical, so error messages must be plain language
  - Must follow SLDS component guidelines and map to our existing Figma token library
  - Responsive — partners access this on both desktop and tablet

  Do not use generic placeholder copy. Write real microcopy for every label, error state, and helper text. Output as an annotated Figma-ready component breakdown with a note on accessibility considerations for each element."

### Section: A note on over-specifying

Paragraph: "The fully specified prompt is not always the right prompt. When you close every gap, you remove every surprise. Sometimes that's exactly what you need — output that matches something specific you already have in mind. But sometimes the constraint you added is the thing that killed the idea you needed. The skill isn't writing the longest prompt. It's knowing which gaps are worth closing for this specific task, and which ones are worth leaving open. A senior designer asking for a design direction probably wants the iced oat latte. The same designer exploring a problem they don't fully understand yet might get more from the iced coffee."

---

## Page 6: Prompt Depth

- **File:** `topics/7-prompt-depth.html`
- **Browser tab title:** "Prompt Depth | Prompting with Intent"
- **Layout:** Hero + four content sections. No images.

### Hero

- **Eyebrow:** Topic guide
- **H1:** Prompt Depth
- **Lede:** "Prompt depth is about telling the AI how much thinking, detail, and verification the task actually needs."

### Section: Why Depth Matters

Paragraph: "Not every prompt needs a long answer. Simple tasks need speed and clarity. Complex tasks need reasoning, tradeoffs, edge cases, and checks. If you do not set the depth, the AI guesses how much work to do."

### Section: (Depth vs. specificity — no heading)

Paragraph: "Depth is not the same as specificity. Specificity is about how much direction you give the AI — how tightly you define the what, the who, and the constraints. Depth is about how much thinking you ask it to do with that direction. You can write a highly specific prompt and still get a shallow answer. You can write a loose prompt and ask for deep reasoning. They are separate dials. You control both."

### Section: Three Useful Levels

- **Quick:** "Use this when you need a short answer, a definition, or a small edit. Example: 'Flag any accessibility issues in this component.' Use this when you need a fast sanity check before a handoff. You're not looking for a full audit, just a quick scan for obvious problems."
- **Standard:** "Use this when you need a useful explanation with examples or next steps. Example: 'Review this onboarding flow for accessibility issues. For each problem you find, tell me what's failing and suggest one fix.' Use this when you need something actionable enough to brief a developer or write a ticket."
- **Deep:** "Use this when the task has risk, ambiguity, multiple options, or important consequences. Example: 'Audit this onboarding flow against WCAG 2.1 AA. For each failure, tell me the criterion it violates, who it affects and how, and give me two options for fixing it, one quick and one thorough. Flag anything that's a borderline pass. End with a prioritized list ranked by impact on users with screen readers.' Use this when the work has real stakes, a client review, a compliance requirement, or a flow going to production."

### Section: How to Ask for Depth

Paragraph: "Add a sentence that describes the level of effort you want: 'Give me the short version first,' 'Compare the tradeoffs before recommending one,' or 'Think through edge cases and tell me what could go wrong.' This helps the AI match the answer to the job instead of over-explaining simple things or under-thinking hard ones."

---

## Page 7: Revised Prompt Structure

- **File:** `topics/8-revised-prompt-structure.html`
- **Browser tab title:** "Revised Prompt Structure | Prompting with Intent"
- **Layout:** Hero + a lede paragraph + one content section. The section contains a three-column header row (`component-header`: Component / Description / Why it matters) and three tiered tables (`component-table`) grouped by "Mandatory", "Important", and "Good to have". Each row (`component-row`) is a 3-column grid: a colored `pill` for the component name, a "what it does" description, and a "what breaks without it" note. A `callout` and a closing paragraph follow. No standalone framework image (the previous `[prompt_structure_new.png]` is no longer used).

### Hero

- **Eyebrow:** Topic guide
- **H1:** Revised prompt structure
- **Lede:** "A refined prompt structure that builds on the earlier framework with clearer context, constraints, and checks."

### Intro paragraph

"The 3-part structure — task, context, output — tells the AI what you want. That's enough to get a response. These nine components tell it how to think, what to know, and where the hard edges are. The difference shows up in whether you spend the next ten minutes editing the output or using it."

### Section: The components

Intro: "Some of these belong in your system prompt and stay there — set once, always active. Others change with every task. Knowing which is which saves more time than any other prompt habit."

Table columns: **Component | Description | Why it matters**

**Tier: Mandatory**
- **task** — "What you want the AI to do. Always required." — Why it matters: "Nothing works. This is the minimum."

**Tier: Important**
- **context** — "Background that shapes the response — who, what, where, why." — "You get a technically correct answer to the wrong problem."
- **grounding** — "Source material to anchor the response. Docs, data, specs." — "The AI fills gaps with confident, plausible fiction. Field names get invented. Assumptions go unstated."
- **rules** — "Hard boundaries. What the AI must always or never do." — "You re-state the same constraints in every prompt — or forget once and get something you have to undo."
- **skills** — "Domain expertise to load. Shifts the AI from generalist to specialist." — "Responses read like they came from someone who googled the topic, not someone who works in it."
- **reasoning** — "How to think through the problem — steps, logic, what to consider before responding." — "The AI jumps to an answer. Edge cases you care about get skipped."

**Tier: Good to have**
- **role** — "Persona to adopt. Shapes tone, perspective, and level of expertise." — "Tone is off. Too technical, too generic, or pitched at the wrong seniority level."
- **constraints** — "Scope limits — length, format, topics to avoid, assumptions to make." — "Output is the right idea in the wrong shape. You edit format instead of content."
- **examples** — "Show the AI what good looks like — style, structure, tone reference." — "The AI interprets 'good' on its own. Usually fine. Often not quite right."
- **output** — "Desired format of the response — list, table, markdown, JSON, plain text." — "You get prose when you needed a table, or markdown when you needed plain text."

**Callout — "Set once, use always":** "Rules, skills, and role belong in your system prompt. Define them at the start of a project and they stay active for every prompt after that. Everything else — task, context, grounding, reasoning, constraints, examples, output — gets written per task."

**Closing paragraph:** "Grounding is the component that does the most work for Salesforce designers. It gets its own section — including a full list of resources you can use to ground any prompt." (Links to the Grounding page: "Go to the grounding section".)

---

## Page 8: Output Evaluation

- **File:** `topics/9-output-evaluation.html`
- **Browser tab title:** "Output Evaluation | Prompting with Intent"
- **Layout:** Hero + four content sections (in this order: "A simple evaluation prompt", "Why evaluation is a prompting skill", "Four things worth building in", "Wrong vs. useless"). No images.

### Hero

- **Eyebrow:** Topic guide
- **H1:** Output Evaluation
- **Lede:** "Most people evaluate output by feel. It seemed right, so they used it. That works until it doesn't. And when it doesn't, the mistake was usually confident enough to look correct."

### Section: A simple evaluation prompt

- "When you want the AI to check before you do:"
- (Rendered as a `prompt-example` styled block): `'Before I review this, check it yourself. Does it answer the original question? What assumptions did you make that I should verify? Where are you least confident? Flag anything that could be wrong for a <context>.'`
- "Change the last sentence to fit your domain. The first three work for almost anything."

### Section: Why evaluation is a prompting skill

- "Evaluating output isn't something you do after prompting. It's part of the prompt. You can ask the AI to check its own work, surface its assumptions, and test its answer against your criteria before you read a word of it."
- "It won't catch everything. But it catches more than a quick read does, and it forces the kind of review that's easy to skip when you're moving fast."

### Section: Four things worth building in

- "Ask it to critique its own answer. 'Review what you just wrote. Does it actually answer what I asked? What's the weakest part?' Simple, and most people never do it."
- "Ask it to list its assumptions. Every output is built on things you didn't say. 'List the assumptions you made that I should verify.' That list is usually where the problems are."
- "Ask it to flag uncertainty. AI writes confident prose even when the reasoning is thin. 'Tell me where you're least confident and why' breaks that habit fast."
- "Ask it to check against something specific. 'Check this against WCAG 2.1 AA. Tell me what fails and what you're unsure about.' The more specific the standard, the more useful the answer."

### Section: Wrong vs. useless

- "Not all bad output is wrong. Some of it is technically correct and completely useless — generic advice that ignores your constraints, a design suggestion that doesn't fit the system you're building in."
- "Wrong output is easy to catch. Useless output passes a quick read and costs you time later."
- "That's a grounding problem, not an evaluation problem. If the AI doesn't know your context, no amount of self-critique will make the output specific enough to use. Evaluation catches mistakes. Grounding prevents the more common one."

---

## Page 9: Iteration & Recovery

- **File:** `topics/10-iteration-and-recovery.html`
- **Browser tab title:** "Iteration & Recovery | Prompting with Intent"
- **Layout:** Hero + four content sections. No images.

### Hero

- **Eyebrow:** Topic guide
- **H1:** Iteration & Recovery
- **Lede:** "Getting a bad output isn't a failure. It's information. The question is what you do with it."

### Section: The three things that go wrong

Intro: "Most missed outputs come from one of three places."
- "**The task was unclear.** The AI produced something, just not what you needed. The what, the who, or the why wasn't defined, so it filled those gaps with its defaults."
- "**The context was missing.** The output was reasonable in the abstract but wrong for your situation. The AI didn't know enough about your project or your constraints to give you something useful."
- "**The depth was wrong.** Too shallow, or too much. The AI guessed how much work to do, and got it wrong."
- "Figure out which one you're dealing with before you re-prompt. Otherwise you're just guessing twice."

### Section: Refine or restart

- "Not every missed output needs a fresh start. One question helps: is the conversation still good context, or is it now pulling the AI toward the wrong answer?"
- "Refine when the output was close. When the miss was a format or depth issue. When the AI still has the right general understanding of what you need."
- "Restart when the AI keeps returning to a wrong interpretation. When the conversation has drifted too far to correct. When you realize the original prompt was missing something structural, like grounding or a key constraint."
- "Quick test: summarize what the AI currently thinks you want. If that summary is wrong, restart. The working model is the problem, not just the last output."

### Section: What to add in your next prompt

Intro: "When you refine, be specific about what missed. Vague corrections produce vague fixes."
- **Unclear task:** restate it with more specificity.
- **Missing context:** add the grounding you left out.
- **Wrong depth:** say so directly, don't hint at it.
- **Wrong format:** show it an example of what you wanted.
- "One change at a time. If you rewrite the whole prompt at once, you won't know what fixed it."

### Section: The prompt that covers most recoveries

- "When you're stuck, this covers most situations:"
- (Rendered as a `prompt-example` styled block): `'That didn't land. Here's what I was actually looking for: [describe it]. Here's what was wrong: [be specific]. Try again.'`
- "Two blanks. If you can't fill them in, the problem is your own clarity, not the AI's output. That's useful to know too."

---

## Closing Page: Cheat Sheet

- **File:** `topics/11-cheat-sheet.html`
- **Browser tab title:** "Cheat Sheet | Prompting with Intent"
- **Layout:** Hero + six content sections. No images. (Appears in the "Closing" nav group.)

### Hero

- **Eyebrow:** Topic guide
- **H1:** Cheat Sheet
- **Lede:** "The parts worth keeping. Use this when you're about to prompt something important."

### Section: Before you start

"Three questions to answer before you type:"
- What already exists
- What you're trying to achieve
- What you've already tried or ruled out

"If you can't answer all three, you're not ready yet."

### Section: The prompt structure

- **Always required:** Task. What you want the AI to do.
- **Usually needed:** Context, grounding, rules, skills, reasoning.
- **Add when useful:** Role, constraints, examples, output format.

### Section: The two dials

"Specificity is how much direction you give. Depth is how much thinking you ask for. If you don't set them, the AI guesses both."
- **Quick:** 'Give me the short version.'
- **Standard:** 'Explain it with examples and next steps.'
- **Deep:** 'Think through edge cases, flag tradeoffs, tell me what could go wrong.'

### Section: The underused levers

"Most people use task, context, and role and stop there. These three are worth the extra effort:"
- **Grounding:** paste in the doc, spec, or decision log. Specific context produces specific answers.
- **Rules:** set once in your project instructions. Always use SLDS component names. Always flag accessibility before suggesting visual changes.
- **Skills:** set once. 'You are a design director. Evaluate my work across user clarity, business alignment, technical feasibility, and consistency with existing patterns. Give me the hard feedback.'

### Section: When output misses

"When output misses, diagnose before you re-prompt:"
- **Task unclear:** restate with more specificity
- **Context missing:** add the grounding you left out
- **Depth wrong:** say so directly
- **Format wrong:** show it an example

"Refine when the AI still has the right general understanding of what you need. Restart when it has locked onto a wrong interpretation and keeps returning to it."

"Recovery prompt: 'That didn't land. Here's what I was actually looking for: [describe it]. Here's what was wrong: [be specific]. Try again.'"

### Section: Build evaluation in

"Add this to any high-stakes prompt:"

(Rendered as a `prompt-example` styled block): `'Before I review this, check it yourself. Does it answer the original question? What assumptions did you make that I should verify? Where are you least confident? Flag anything that could be wrong for a <context>.'`

"Change the last sentence to fit your domain. The first three questions work for almost anything."

---

## Image Inventory (referenced by filename)

- [favicon.svg] — site brand mark (sidebar + mobile header)
- [chatgpt-wrong.png], [chatgpt-right.png] — ChatGPT incorrect vs. corrected answer (Page 1: Why AI Fails Predictably?)
- [claude-wrong.png], [claude-right.png] — Claude incorrect vs. corrected answer (Page 1)
- [gemini-wrong.png], [gemini-right.png] — Gemini incorrect vs. corrected answer (Page 1)
- [prompt_structure_1.png] … [prompt_structure_8.png] — eight prompt-framework reference images (Page 2: General Prompt Structure)

> Note: [prompt_structure_new.png] was referenced by the old Revised Prompt Structure page but is no longer used; that page is now a rendered component table.
