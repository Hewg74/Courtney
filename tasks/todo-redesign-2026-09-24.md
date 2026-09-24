# Redesign v2: build spec (2026-09-24)

Branch `redesign-2026-09`. Staged on a SEPARATE Vercel project (`courtney-redesign-preview`). Prod (GitHub Pages, push to `main`) is never touched from this branch.

## Contract (one sentence)
Same Courtney, same words, same pages: her site finally looks like her Maui photos feel, and it breathes.

## Read
Personal practice site for a Maui health coach + Qigong teacher, written for overwhelmed parents and adults. Warm, grounded, gently direct. Lineage: organic (primary, owns motion) + warm-editorial. Dials: variance 6, motion 5, density 3. Verdict: LIFT.

## Rut named
Wellness-coach template: cream + serif + blurry pastel blobs + frosted glass cards + centered everything + uppercase eyebrows + 6 icon cards. The current site is exactly this. Opposite rut (stark black/white minimal) is also out.

## Feeling curve (Home)
1. Hero: "someone kind is here." Cause: her real smile, big; headline set like a book title; rings draw on slowly.
2. Offerings: "I can see where I fit." Cause: an editorial index, four rows, image swaps as you move between them.
3. What clients notice: quiet. Outcomes set as large type, no icons. (Quiet act before the peak.)
4. PEAK, the breath: "oh, I actually calmed down." Cause: forest-green full-height band, the two logo rings expand and contract on a 5s in / 5s out cycle, words crossfade "Breathe in" / "and out". Largest scroll room on the page.
5. Voices: "people like me got better." One quote held in focus, others in a rail.
6. Hi, I'm Courtney: round photo inline in the headline; Maui beach photo.
7. Close: "Not sure what's the best fit?" with the rings, soft.
Tell-someone sentence: "Her website literally breathes with you."

## Tokens (tailwind.config.js + index.css :root)
- Canvas `--paper #F7F3EC` (warm, not white). Raised surface `--paper-2 #FBF8F3`. Deep band `--forest #1E2B23` (from the headshot foliage), `--forest-2 #2A3A2F`.
- Ink `--ink #2B2A24` (warm near-black), secondary ink `--ink-2 #5E5A50`. Max TWO text values per background. On forest: `#F2EEE6` and `#B9C2B5`.
- ONE accent: clay `#B8674F` (text-safe on paper), light clay `#E9C9BC` for fills. Sage `#7D8F7F` only as a supporting tint (rules, small marks), never a second accent.
- Hairlines `rgba(43,42,36,0.12)`. On forest `rgba(242,238,230,0.14)`.
- Type: display Cormorant Garamond (hers; kept) 400/500 + italic 400. Body Figtree 400/500/600 (replaces Inter). Display line-height <= 1.05, `text-wrap: balance` on headings, `pretty` on body. Body 17-18px, never below 14px on anything readable.
- Radius system: 4 tiers only: `sm 10px` (inputs, chips), `md 18px` (cards), `lg 28px` (large panels), `full` (buttons, arch tops). Nested = outer = inner + padding.
- Spacing from a 4px base; section padding `clamp(88px, 12vw, 168px)`.

## Motion constants (organic grammar: grow, draw, breathe; no blur, no bouncy springs)
- `EASE = [0.22, 1, 0.36, 1]` (css `cubic-bezier(.22,1,.36,1)`), `EASE_BREATH = [0.45, 0, 0.55, 1]` (sine in-out).
- `DUR_ENTER = 0.9s`, `DUR_EXIT = 0.35s`, `DUR_FEEDBACK = 0.15s` (hover/press/focus only).
- `DIST = 24px` rise, `SCALE_FROM = 0.97` (growth), BLUR = 0.
- `STAGGER = 0.08s`. `BREATH = 5s` per half cycle.
- Images enter by clip-path grow (inset 12% -> 0 with radius), not fade.
- The rings (`<Rings/>`) draw on via stroke-dashoffset (1.6s) then breathe (scale 1 -> 1.06, gap widening).
- Scroll: framer `useScroll` only; no `window.addEventListener('scroll')`.
- `prefers-reduced-motion`: everything renders in its final state, rings static.

## Bans (this build)
- No em or en dashes in visible copy. Hyphen only (her dash-contrast uses " - ").
- No frosted glass cards, no blurry blob backgrounds, no shimmer on buttons.
- Uppercase tracked eyebrows: max 1 per 3 sections. Prefer a serif italic kicker or nothing.
- No icon-in-a-circle cards. Icons only where they mean something (arrows, play, mail, chevrons). lucide-react stays (existing dep).
- No 3/4/6 equal cards as a default grid. Rows, lists, asymmetric splits.
- Copy: her words are kept verbatim. Any NEW line is marked in the summary for client approval.

## Pages (all keep routes, links, prices, Calendly, emails, FAQ, testimonials verbatim)
- Home, Work With Me, Qigong, About, Testimonials, Books, Contact, Nav, Footer, StickyCTA.

## Verify
- [ ] `npm run build` green
- [ ] Screenshots 1440 + 390, all 7 pages, zero console errors, zero horizontal overflow
- [ ] Reduced-motion render
- [ ] preflight.mjs on the diff
- [ ] Codex review round (client-facing)
- [ ] Vercel preview project returns 200 on / and subpages
- [ ] Prod courtneyalex.com unchanged (same bundle hash as before)

## Review
(filled in when done)
