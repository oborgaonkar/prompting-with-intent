# Prompting with Intent — Website Content

This document captures the content of the site page by page, in the order the pages appear in the navigation.

---

## 1. Home

**Title:** Prompt Engineering: Designing Better AI Outcomes Through Structured Communication

Give the AI half a prompt and it will confidently hand you half an answer. The trick isn't a better model. It's a better prompt.

**First try**

- ChatGPT — [chatgpt-wrong.png]
- Claude — [claude-wrong.png]
- Gemini — [gemini-wrong.png]

**Second try**

- ChatGPT — [chatgpt-right.png]
- Claude — [claude-right.png]
- Gemini — [gemini-right.png]

Button: "Reveal the others"

---

## 2. Why AI Fails Predictably

AI does not fail randomly. When you leave a gap in your prompt, it fills that gap with the most statistically average answer from its training. The failures are predictable once you see them as missing context, not missing intelligence.

### Have you ever ordered a coffee?

[why-ai-fails.png]

Consider ordering coffee. Imagine a barista who has spent ten years mastering his craft, capable of making over fifty different drinks, any one of them excellent. You walk up and say, "I want a coffee." What do you get? Almost certainly the best-selling or highest-rated option—the safe average of everything people tend to order. You might love it. You might not. The barista's skill was never the limiting factor; your request was. But say instead, "I'd like an iced latte with oat milk and a double shot of espresso," and suddenly you are nearly guaranteed to get a drink you enjoy. Nothing about the barista changed. You simply closed the gaps he would otherwise have filled with the most popular guess.

Same thing happens with AI. The fewer gaps you leave, the less it has to guess. And it doesn't guess randomly. It defaults to whatever's most common, the "whole milk" of its training data.

---

## 3. Prompt Structures are a Menu

**Title:** It's a Menu, Not a Checklist

The levers are not a checklist to fill out every time. They're a menu of levers you can choose from.

### Structure

Every framework is the same handful of levers. Your job is choosing which ones this task needs, not filling them all in.

- [prompt_structure_1.png] — Basic AI prompt template with structure and example columns
- [prompt_structure_2.png] — Table describing the structure of a good prompt
- [prompt_structure_3.png] — Prompt sections for role, format, constraints, logic, stop conditions, context, and task
- [prompt_structure_4.png] — Prompt components grouped by mandatory, important, and nice-to-have
- [prompt_structure_5.png] — Key elements of an effective AI prompt
- [prompt_structure_6.png] — Anatomy of a Claude prompt with labeled sections
- [prompt_structure_7.png] — Six-step prompt checklist ranked by importance
- [prompt_structure_8.png] — CRISPE framework for structured prompting

### Key Points

Those frameworks look different, but they're the same handful of levers wearing different names: role, task, context, format, constraints, examples. Once you see that, the specific framework you start from stops mattering.

The trap is treating every lever as a box to tick. Fill them all in on every prompt and you bury the one thing the task actually needed under a pile of detail it didn't.

So treat it like a menu. The task is the only thing you always order, so start there, every time. Then add context, examples, constraints, or format only when the task in front of you calls for them. A throwaway question needs one line. A production design needs several. Same menu, different order.

---

## 4. Lets Design Together

**Title:** Lets Design a Case Management Console Together

Let's take this from a vague ask to a real design, the way you'd brief a thoughtful junior designer. We'll add one lever at a time and shape it into something complete.

Button: "Lets start the prompt"

**Prompt panel — Case Management Console**

- **Role:** UX designer who knows the Salesforce Lightning Design System and service cloud patterns
- **Task:** Design a case management console for the support team.
- **Context:** Tier-one support agents handling 50+ cases a day. They live in this screen for a full shift, with high volume, lots of context-switching between cases.
- **Output Format:** A screen-by-screen layout with component names and a short rationale for each region

---

## 5. Directed vs. Discovered

Are you executing a vision, or leaving room for the AI to surprise you? Know which one before you start.

### Choose how much creative freedon you want to give the AI

What do you have in mind?

Specificity slider (Discovered → Directed):

- **Discovered:** "Design whatever console you think works best."
  - 🤖❓ Layout
  - 🤖❓ Components
  - 🤖❓ Triage sort
  - 🤖❓ Knowledge panel
  - The AI picks the layout, the components, everything.
- "Build it around fast triage, agents need to see what's urgent without clicking in."
  - 🤖 Layout
  - 🤖 Components
  - 🧑‍🦲 Triage sort
  - 🤖 Knowledge panel
  - You've set a principle, left the execution open.
- "Three-column layout: case list, case detail, and a side panel for knowledge articles. Use standard SLDS components."
  - 🧑‍🦲 Layout
  - 🧑‍🦲 Components
  - 🤖 Triage sort
  - 🧑‍🦲 Knowledge panel
  - Structure fixed, the AI fills the detail.
- **Directed:** "Three columns. Left: a filterable case list sorted by SLA breach risk. Center: case detail with the activity timeline collapsed by default. Right: a knowledge panel that surfaces articles based on case subject. Use the SLDS data table, no custom components, keep everything above the fold at 1280px."
  - 🧑‍🦲 Layout
  - 🧑‍🦲 Components
  - 🧑‍🦲 Triage sort
  - 🧑‍🦲 Knowledge panel
  - The AI fills only the smallest gaps.
  - Button: "Add to Prompt"

**Prompt panel — Case Management Console**

- **Role:** UX designer who knows the Salesforce Lightning Design System and service cloud patterns
- **Task:** Design a case management console for the support team.
- **Context:** Tier-one support agents handling 50+ cases a day. They live in this screen for a full shift, with high volume, lots of context-switching between cases.
- **Output Format:** A screen-by-screen layout with component names and a short rationale for each region
- **Directions:** Three columns. Left: a filterable case list sorted by SLA breach risk. Center: case detail with the activity timeline collapsed by default. Right: a knowledge panel that surfaces articles based on case subject. Use the SLDS data table, no custom components, keep everything above the fold at 1280px.

---

## 6. Process

Process is the actual steps you want the agent to follow to get there. When you know the method that produces a good answer, handing it over is often the difference between a right answer and a confident wrong one.

Button: "Add process"

### Why it matters

Most prompts describe a destination and leave the route entirely to the agent. Sometimes that's fine. But for tasks where the way you reach the answer determines whether it's correct, leaving the route open is how you get answers that look right and aren't.

The console makes this concrete. Say you ask the agent to design a case management console. With no process, it jumps straight to a layout, arranging components by convention rather than by how agents actually work. Give it the route instead: first map the agent's task flow from case assignment to resolution, identify the moments of highest cognitive load, then design the layout to reduce clicks at those moments, and only then pick components. The design stops being a guess at a layout and starts being the result of a method you'd trust.

That's the lever. When you know the steps that lead to a good answer, write them into the prompt rather than hoping the agent picks the same path. Where Grounding hands over facts and Rules set the guardrails, Process hands over the method.

One thing to note: you don't always want to specify the process. If the agent's own approach is likely better than yours, leaving the route open is the smarter call, the same way discovery can beat direction. Process is a lever you reach for when the method matters to whether the answer is right, not a step you bolt onto every prompt.

**Prompt panel — Case Management Console**

- **Role:** UX designer who knows the Salesforce Lightning Design System and service cloud patterns
- **Task:** Design a case management console for the support team.
- **Context:** Tier-one support agents handling 50+ cases a day. They live in this screen for a full shift, with high volume, lots of context-switching between cases.
- **Output Format:** A screen-by-screen layout with component names and a short rationale for each region
- **Directions:** Three columns. Left: a filterable case list sorted by SLA breach risk. Center: case detail with the activity timeline collapsed by default. Right: a knowledge panel that surfaces articles based on case subject. Use the SLDS data table, no custom components, keep everything above the fold at 1280px.
- **Process:** First map the agent's task flow from case assignment to resolution, identify the moments of highest cognitive load, then design the layout to reduce clicks at those moments, and only then pick components.

---

## 7. Prompt Depth

**Title:** Prompt Effort

Prompt Effort is about telling the AI how much thinking, detail, and verification the task actually needs. It's also called reasoning effort or thinking level.

### How to choose prompt effort

Effort slider (Auto → Quick → Standard → Deep):

- **Auto:** &lt;No additional constraint&gt; — You don't say how much effort to put in, so the AI picks the depth on its own based on what the task looks like it needs.
- **Quick:** "Give me a rough wireframe-level layout, no reasoning." — A fast pass. You want the regions blocked out and little else.
- **Standard:** "Give me the layout plus why each region is placed where it is, enough to brief a developer." — A useful answer you can act on, with enough reasoning to hand off. Button: "Add to Prompt"
- **Deep:** "Give me the layout, the rationale, accessibility considerations for agents using screen readers, two options for the side panel with tradeoffs, and a note on where the design might strain at high case volume." — Maximum thinking and output, for when the design has to land.

**Prompt panel — Case Management Console**

- **Role:** UX designer who knows the Salesforce Lightning Design System and service cloud patterns
- **Task:** Design a case management console for the support team.
- **Context:** Tier-one support agents handling 50+ cases a day. They live in this screen for a full shift, with high volume, lots of context-switching between cases.
- **Output Format:** A screen-by-screen layout with component names and a short rationale for each region
- **Directions:** Three columns. Left: a filterable case list sorted by SLA breach risk. Center: case detail with the activity timeline collapsed by default. Right: a knowledge panel that surfaces articles based on case subject. Use the SLDS data table, no custom components, keep everything above the fold at 1280px.
- **Process:** First map the agent's task flow from case assignment to resolution, identify the moments of highest cognitive load, then design the layout to reduce clicks at those moments, and only then pick components.
- **Effort:** The layout plus why each region is placed where it is — enough to brief a developer.

---

## 8. Grounding

Grounding gives AI the facts, sources, and constraints it needs to answer from reliable context instead of letting it generate from training data alone.

Before you make your request, answer these three questions in the prompt itself:

- What already exists
- What you're trying to get to
- What you've already tried, or ruled out

### Why Grounding Matters

Without grounding, the AI fills gaps with the most statistically probable answer from its training. That's where hallucinations come from. It's not lying, it's pattern-matching in the absence of facts. Grounding removes that gap.

### How to Ground a Prompt

Adding md files to the project folder is the easiest way to ground a prompt.

**Project brief** (What exists already / What I'm trying to achieve)

A single file covering:

- Client name, industry, what their Salesforce instance is for
- The specific project goal — what you're designing and why
- Key stakeholders and their concerns
- What's in scope and what's explicitly out of scope

**Salesforce config dump** (What exists already)

Export or paste the relevant metadata — objects, fields, relationships, and naming conventions specific to this client. A trimmed spreadsheet works. This stops the agent from inventing field names or assuming standard objects when the client has custom ones.

**Current page or screen audit** (What exists already)

Screenshots or a Figma file of the UI users actually see today. Without this, the agent designs in a vacuum — and often duplicates something that already exists or conflicts with what it's replacing.

**Figma-to-SLDS mapping** (What exists already / What I'm trying to achieve)

Document your component-to-SLDS mapping explicitly. "This card maps to lightning-card. This input maps to lightning-input with this variant." Now the agent generates code that matches your design instead of interpreting it.

**Org-specific component library** (What exists already)

A pattern inventory of custom components beyond base SLDS. Prevents the agent from suggesting things that already exist, are forbidden, or are due for deprecation.

**Navigation and permissions model** (What exists already)

- What page layouts, app pages, and navigation items exist
- Which profiles or permissions control access to them

The agent needs to know where your design lives in the org before it can make sensible placement decisions.

**User personas or role matrix** (What I'm trying to achieve)

- Job titles and technical comfort levels
- What each role is actually trying to do in Salesforce

Grounds the agent in real user goals rather than system requirements.

**Journey map or task flow** (What exists already / What I'm trying to achieve)

The step-by-step process users follow today, even if it's rough. Shows the agent what the current experience looks like and where the design needs to step in.

**Known pain points** (What I'm trying to achieve / What I've tried or ruled out)

A short list of what users complain about or struggle with — even from informal feedback or a Slack thread. Tells the agent what you're solving for, and signals what hasn't worked.

**Accessibility constraints** (What I'm trying to achieve / What I've tried or ruled out)

- WCAG level required
- Org-specific a11y rules
- Screen reader expectations

Often a ruled-out direction is "we tried X but it failed accessibility review" — this is the place to say that explicitly.

**Stakeholder constraints** (What I'm trying to achieve / What I've tried or ruled out)

Non-negotiables tied to specific people. "The VP of Sales won't approve modal-heavy flows." "IT requires all data to stay in standard objects." If it's going to get vetoed, the agent should know before it builds.

**Prior design explorations** (What I've tried or ruled out)

Rejected Figma concepts, killed prototypes, directions leadership already said no to. The most underused resource on this list. Drop them in and the agent stops re-suggesting dead ends.

**Release or sprint scope** (What I'm trying to achieve / What I've tried or ruled out)

What's getting built this cycle vs. what's future state. Keeps the agent from designing the full vision when you only need the MVP.

**Decision log** (What I've tried or ruled out)

A running list of design decisions already made and why. "We chose a modal over a new page for record creation because of the client's navigation constraints." Stops the agent from reopening closed questions.

**Session handoff note** (What exists already / What I've tried or ruled out)

End each session by asking the agent: "Summarize what we built today, what decisions were made, and what's next." Paste that at the top of the next session. It's a cheap memory bridge.

**Prompt panel — Case Management Console**

- **Role:** UX designer who knows the Salesforce Lightning Design System and service cloud patterns
- **Task:** Design a case management console for the support team.
- **Context:** Tier-one support agents handling 50+ cases a day. They live in this screen for a full shift, with high volume, lots of context-switching between cases.
- **Output Format:** A screen-by-screen layout with component names and a short rationale for each region
- **Directions:** Three columns. Left: a filterable case list sorted by SLA breach risk. Center: case detail with the activity timeline collapsed by default. Right: a knowledge panel that surfaces articles based on case subject. Use the SLDS data table, no custom components, keep everything above the fold at 1280px.
- **Process:** First map the agent's task flow from case assignment to resolution, identify the moments of highest cognitive load, then design the layout to reduce clicks at those moments, and only then pick components.
- **Effort:** The layout plus why each region is placed where it is — enough to brief a developer.
- **Grounding Details:** Your actual case object fields, the SLA definitions your org uses, a screenshot of the current console, the SLDS version you're on.

---

## 9. Rules and Skills

Rules and Skills are repeatable instructions that can be used to improve the quality of the output.

- Rules are the guardrails that hold throughout your chat
- Skills are expertise in a field that the AI can bring to the table

### Rules

**Definition:** Short, persistent "Do" or "Don't" instructions that are supposed to be followed for every prompt in your current workspace.

**Example:**

- Always use SLDS component names, never invent custom component labels
- Never suggest a new pattern if an existing SLDS component covers the use case
- Always flag accessibility issues before suggesting visual changes

Can be thought of as a "code of conduct" or "guardrails" for the AI.

Rules govern every response.

In Claude.ai, rules live in your Project instructions. In Cursor, they live in your .cursor/rules/*.mdc (latest) or .cursorrules (older versions) file. Set them once and they're active for every prompt in that context.

### Skills

**Definition:** Skills are reusable instruction sets that teach the AI how to behave in a specific domain.

**Example:**

- "Review any design description or component spec against WCAG 2.1 AA. Flag contrast issues, missing focus states, touch target sizes, and screen reader considerations. Be specific about what fails and why."
- "You are a design director. When I share work, evaluate it across: user clarity, business alignment, technical feasibility, and consistency with existing patterns. Give me the hard feedback, not the kind version."
- "When I describe a product problem, help me think upstream. Push back if I'm jumping to solutions. Ask about the job to be done, what success looks like in 6 months, and what we'd need to believe for this to work."

Can be thought of as a "expertise" for the AI.

Skills activate a mode of thinking.

In Claude.ai, skills live in your Project instructions alongside your rules. In Cursor, they go in your .cursor/rules/*.mdc (latest) or .cursorrules (older versions) file as a named block. In a Slackbot, they live in the system prompt configured when the bot is set up. In all three cases, the principle is the same: you write the expertise once, and the AI carries it into every interaction.

**Prompt panel — Case Management Console**

- **Role:** UX designer who knows the Salesforce Lightning Design System and service cloud patterns
- **Task:** Design a case management console for the support team.
- **Context:** Tier-one support agents handling 50+ cases a day. They live in this screen for a full shift, with high volume, lots of context-switching between cases.
- **Output Format:** A screen-by-screen layout with component names and a short rationale for each region
- **Directions:** Three columns. Left: a filterable case list sorted by SLA breach risk. Center: case detail with the activity timeline collapsed by default. Right: a knowledge panel that surfaces articles based on case subject. Use the SLDS data table, no custom components, keep everything above the fold at 1280px.
- **Process:** First map the agent's task flow from case assignment to resolution, identify the moments of highest cognitive load, then design the layout to reduce clicks at those moments, and only then pick components.
- **Effort:** The layout plus why each region is placed where it is — enough to brief a developer.
- **Grounding Details:** Your actual case object fields, the SLA definitions your org uses, a screenshot of the current console, the SLDS version you're on.
- **Rule:**
  - Always use SLDS components over custom components
  - Never put a primary action below the fold
  - Every interactive element meets WCAG 2.1 AA
- **Skill:**
  - Use an /accessibility_audit skill that checks contrast and focus order
  - Use a /design_system_compliance skill that flags any component not in SLDS

---

## 10. Output Evaluation

Getting a bad output isn't a failure. It's information. The question is what you do with it.

### Four things worth building in

- **Ask it to critique its own answer.** 'Review what you just wrote. Does it actually answer what I asked? What's the weakest part?' Simple, and most people never do it.
- **Ask it to list its assumptions.** Every output is built on things you didn't say. 'List the assumptions you made that I should verify.' That list is usually where the problems are.
- **Ask it to flag uncertainty.** AI writes confident prose even when the reasoning is thin. 'Tell me where you're least confident and why' breaks that habit fast.
- **Ask it to check against something specific.** 'Check this against WCAG 2.1 AA. Tell me what fails and what you're unsure about.' The more specific the standard, the more useful the answer.

**Prompt panel — Case Management Console**

- **Output Evaluation:** Before I review this, check it yourself. Does it answer the original question? What assumptions did you make that I should verify? Where are you least confident? Flag anything that could be wrong for a &lt;context&gt;.

---

## 11. Iteration Or Recovery

A clean start with a better prompt beats ten rounds of correction.

[iterate-vs-recover.png]

**Prompt panel — Case Management Console**

- **Output Evaluation:** Before I review this, check it yourself. Does it answer the original question? What assumptions did you make that I should verify? Where are you least confident? Flag anything that could be wrong for a &lt;context&gt;.
- **Iteration Or Recovery:** Summarize what you currently think I want

---

## 12. Closing / Cheat Sheet

**Title:** Cheat Sheet

The parts worth keeping. Use this when you're about to prompt something important.

### Before you start

Three questions to answer before you type:

- What already exists
- What you're trying to achieve
- What you've already tried or ruled out

If you can't answer all three, you're not ready yet.

### The prompt structure

- **Always required:** Task. What you want the AI to do.
- **Usually needed:** Context, grounding, rules, skills, reasoning.
- **Add when useful:** Role, constraints, examples, output format.

### The two dials

Specificity is how much direction you give. Depth is how much thinking you ask for. If you don't set them, the AI guesses both.

- **Quick:** 'Give me the short version.'
- **Standard:** 'Explain it with examples and next steps.'
- **Deep:** 'Think through edge cases, flag tradeoffs, tell me what could go wrong.'

### The underused levers

Most people use task, context, and role and stop there. These three are worth the extra effort:

- **Grounding:** paste in the doc, spec, or decision log. Specific context produces specific answers.
- **Rules:** set once in your project instructions. Always use SLDS component names. Always flag accessibility before suggesting visual changes.
- **Skills:** set once. 'You are a design director. Evaluate my work across user clarity, business alignment, technical feasibility, and consistency with existing patterns. Give me the hard feedback.'

### When output misses

When output misses, diagnose before you re-prompt:

- **Task unclear:** restate with more specificity
- **Context missing:** add the grounding you left out
- **Depth wrong:** say so directly
- **Format wrong:** show it an example

Refine when the AI still has the right general understanding of what you need. Restart when it has locked onto a wrong interpretation and keeps returning to it.

Recovery prompt: 'That didn't land. Here's what I was actually looking for: [describe it]. Here's what was wrong: [be specific]. Try again.'

### Build evaluation in

Add this to any high-stakes prompt:

'Before I review this, check it yourself. Does it answer the original question? What assumptions did you make that I should verify? Where are you least confident? Flag anything that could be wrong for a &lt;context&gt;.'

Change the last sentence to fit your domain. The first three questions work for almost anything.
