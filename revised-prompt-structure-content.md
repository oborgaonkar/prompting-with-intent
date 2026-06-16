# Page content spec: Revised prompt structure

## Page metadata
- **Eyebrow:** Topic guide
- **Title:** Revised prompt structure
- **Lede:** A refined prompt structure that builds on the earlier framework with clearer context, constraints, and checks.

---

## Bridge paragraph

The 3-part structure — task, context, output — tells the AI what you want. That's enough to get a response. These nine components tell it how to think, what to know, and where the hard edges are. The difference shows up in whether you spend the next ten minutes editing the output or using it.

---

## Section title
The components

## Section intro
Some of these belong in your system prompt and stay there — set once, always active. Others change with every task. Knowing which is which saves more time than any other prompt habit.

---

## Components

Components are grouped into three tiers: **Mandatory**, **Important**, and **Good to have**.

Each component has three fields:
- **Name** — the component label, shown as a styled pill
- **What it does** — a short description
- **What breaks without it** — what goes wrong when this component is missing

### Tier 1: Mandatory

| Component | What it does | What breaks without it |
|---|---|---|
| task | What you want the AI to do. Always required. | Nothing works. This is the minimum. |

### Tier 2: Important

| Component | What it does | What breaks without it |
|---|---|---|
| context | Background that shapes the response — who, what, where, why. | You get a technically correct answer to the wrong problem. |
| grounding | Source material to anchor the response. Docs, data, specs. | The AI fills gaps with confident, plausible fiction. Field names get invented. Assumptions go unstated. |
| rules | Hard boundaries. What the AI must always or never do. | You re-state the same constraints in every prompt — or forget once and get something you have to undo. |
| skills | Domain expertise to load. Shifts the AI from generalist to specialist. | Responses read like they came from someone who googled the topic, not someone who works in it. |
| reasoning | How to think through the problem — steps, logic, what to consider before responding. | The AI jumps to an answer. Edge cases you care about get skipped. |

### Tier 3: Good to have

| Component | What it does | What breaks without it |
|---|---|---|
| role | Persona to adopt. Shapes tone, perspective, and level of expertise. | Tone is off. Too technical, too generic, or pitched at the wrong seniority level. |
| constraints | Scope limits — length, format, topics to avoid, assumptions to make. | Output is the right idea in the wrong shape. You edit format instead of content. |
| examples | Show the AI what good looks like — style, structure, tone reference. | The AI interprets "good" on its own. Usually fine. Often not quite right. |
| output | Desired format of the response — list, table, markdown, JSON, plain text. | You get prose when you needed a table, or markdown when you needed plain text. |

---

## Callout block

**Heading:** Set once, use always

**Body:** Rules, skills, and role belong in your system prompt. Define them at the start of a project and they stay active for every prompt after that. Everything else — task, context, grounding, reasoning, constraints, examples, output — gets written per task.

---

## Signpost

Grounding is the component that does the most work for Salesforce designers. It gets its own section — including a full list of resources you can use to ground any prompt.

[Link text: Go to the grounding section]
[Link target: anchor to the grounding section of the guide]

---

## Visual design notes

- Each component name should render as a **colored pill** (rounded label), not plain text
- Tier groupings should be visually distinct — use a label or divider to separate mandatory / important / good to have
- The "what breaks without it" column should feel secondary — muted color or smaller weight than "what it does"
- The callout block should be visually distinct from the main content — a bordered or tinted box
- The page already has styles for ul, li, strong tags — do not override those
- Pills need their own styles — they are not covered by existing styles
