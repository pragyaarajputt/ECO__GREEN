# Eco Green Foundation — Design System (v4, brand-aligned)

Source of truth for the visual language. Tokens live in `app/globals.css` under `@theme` (Tailwind v4).

## Product context
CSR and sustainability implementation foundation (India). Audiences: corporate CSR committees,
institutional partners, community stakeholders. Pages are editorial and numbered (`PageNumber`),
so the site reads as one document. Primary journey: understand the work, then "Partner With Us" (`/contact`).

## Brand source
Logo concept 04, "Human & Leaf": a navy crescent embraces a navy-teal human figure, with a green
leaf rising beside it. Meaning: care in both directions. The Foundation protects communities, and
communities care for the planet. Mood: gentle, caring, long-term, trustworthy. Board line:
"Caring for people, nurturing the planet."

Assets: `public/brand/eco-green-logo.png` (full lockup), `public/brand/eco-green-mark.png`
(transparent mark), `app/icon.png` and `app/apple-icon.png` (favicons).

## Palette (sampled from the logo artwork)
| Token | Hex | Logo source | Use |
|---|---|---|---|
| `ink-950` | `#002A49` | ECO wordmark and crescent | Headings, dark surfaces (footer) |
| `ink-900` / `ink-800` | `#00375D` / `#0B4466` | crescent shading | Hover on dark, gradients |
| `ink-600` | `#3D5568` | (derived) | Body copy, 7:1 on paper |
| `ink-400` | `#5B6E7F` | (derived) | Small labels, 4.7:1 on paper |
| `green-600` | `#2E7D1E` | GREEN wordmark `#306F1B` and leaf | Primary actions, accents. White text is 5.2:1 |
| `green-700` | `#23611A` | leaf base | Hover / pressed |
| `green-900` | `#0F3B22` | deep leaf | Gradient end on dark bands |
| `green-500` | `#92C60C` | leaf tip (lime) | Accents **on navy only** (7:1 on navy, fails on white) |
| `teal-600` | `#01818D` | the figure | Focus rings, gradient start |
| `paper` / `paper-2` | `#F5F7F2` / `#E9EFE4` | (derived) | Page ground, bands |
| `line` / `line-strong` | `#DAE2D5` / `#8FA39A` | (derived) | Dividers / form boundaries (3:1) |

Rules: navy carries text and dark surfaces, green is the action colour, and lime and teal are small
accents. The single brand gradient (`.bg-brand-band`) runs navy to deep green with a lime glow,
like the leaf rising out of the crescent. It is used only on CTA bands.

## Typography
- Display: **Montserrat** 600/700/800. It is the closest Google Font to the geometric logo wordmark.
- Body: **Inter** 400/500/600.
- The logo lockup in the header mirrors the artwork: navy "ECO", green "GREEN", and "FOUNDATION" tracked wide.

## Type scale (fluid 375 → 1440px)
`text-display` 44→94 (home hero only) · `text-h1` 36→68 (page heroes, statements) · `text-h2` 30→52 (sections) ·
`text-h3` 20→24 (cards) · `text-lede` 17→20 · body 15–17 / 1.6–1.75 · `text-eyebrow` 12, uppercase, tracked.
Each page has one `Button size="lg"` primary action, and secondary actions use the quieter outline variant.

## Composition
- Backgrounds rotate between paper, white, `green-50` (airy statement), navy (`ink-950`) and deep green (`green-900`, emphasis).
  Two dark bands are never adjacent, except the closing CTA into the footer.
- Organic shapes: `.shape-leaf` / `.shape-leaf-alt` image frames, round tiles (the figure's head) and `CrescentArc`.
- Proof only from real content (`ProofStrip`, counts computed from the data files). Outcome figures stay "XX+" until verified.

## Shape and depth
- Radius: 28px imagery, 20px cards, pill controls. Rounded forms echo the crescent and the leaf.
- Depth: borders by default. A soft navy-tinted shadow (`--shadow-card`) plus a 1–4px lift on hover.

## Layout
- One container everywhere: `Container`, 1320px max, with 20 / 32 / 48px gutters.
- Spacing steps are 4 / 8 / 16 / 24 / 32 / 48 / 64 / 96 (Tailwind `1 2 4 6 8 12 16 24`). Card grids use `gap-6`.
- Section rhythm is fluid between 375px and 1440px: `py-section-sm` (56→80), `py-section` (64→112),
  `py-section-lg` (80→128, dark and CTA bands), and `pt-hero-top` / `pb-hero-bottom` (32→64 / 56→96) on every hero.
- Measure: `main p` is capped at 62ch (about 72 characters per line).
- Alignment: everything is left-aligned. A section heading puts the title in 7 columns and the lede in 5, aligned to the bottom.
- Split sections: the image sits beside the text from `lg` up. When stacked, the text comes first and the image
  follows at 4:3 (16:9 for focus areas, 16:10 for heroes).
- Cards in a row are equal height (each grid cell stretches), and the link is pinned to the bottom with `mt-auto`.

## Motion (organic: growth and breeze)
| Token | Value | Use |
|---|---|---|
| `--motion-fast` | 150ms | colour change, press feedback |
| `--motion-base` | 300ms | hover lift, icons, underlines |
| `--motion-slow` | 600ms | entrances, image zoom |
| `--motion-stagger` | 70ms | gap between siblings entering (`STAGGER_MS` in JS) |
| `--motion-rise` / `--motion-lift` | 20px / -5px | entrance travel / card hover |
| `ease-organic` | `cubic-bezier(0.22, 1, 0.36, 1)` | every eased transition |

- Classes: `.reveal` (`Reveal`), `.stagger` (`Stagger`), `.hero-seq`, `.grow-line`, `.leaf-drift` (`LeafDrift`),
  `.link-grow`, `.card-lift` with `.card-zoom`, `.card-icon` and `.card-leaf`.
- Only `transform` and `opacity` animate (plus colour on buttons and links). The card shadow fades in on a pseudo-element.
- Content is hidden for an entrance only when JavaScript is running (`html.js`), so a failed script never hides it.
- Reduced motion: nothing moves or fades. Content is simply there.

## Interaction and accessibility
- Focus: 3px teal outline with a 3px offset (lime on dark surfaces).
- Every text pairing meets WCAG AA. Touch targets are 44px or more.
- Motion is disabled under `prefers-reduced-motion`.

## Page patterns (v5, visual-impact pass)
- **Interior hero:** `PageHero variant="organic"` gives a brand glow, a leaf-shaped image and the crescent behind it, with the last phrase of the h1 in the teal→green gradient. Optional children sit below the split: a proof strip, a status strip or audience chips.
- **Proof only from real content:** strips count things that exist on the site (focus areas, programmes, stages). They never show outcome claims; outcome figures stay `XX+` until verified.
- **Section rhythm:** each page alternates paper/white, a dark band (`BrandBand` in navy or deep green, with the crescent) and a `green-50` pause. Two dark bands are never adjacent.
- **Cards:** `FeatureCard` (numbered or iconed, outlined numerals for sequences, light/dark) inside a `Stagger` grid for equal heights. An empty last grid slot gets a dashed "next step" tile that links to Contact.
- **Navigation aids:** `FocusAreaNav` chips and in-page jump links on long pages; legal pages have a sticky "On this page" list.
- **Colour coding:** green marks social/CSR, teal marks environmental/sustainability. Teal text on a tint uses `#01656E` for AA.
- **Closing CTA:** `CtaSection number` continues the page's own section numbering.
