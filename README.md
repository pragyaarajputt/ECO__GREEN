# Eco Green Sustainability Foundation

**People. Planet. Impact.**

Production Next.js website for Eco Green Sustainability Foundation — a CSR
and sustainability implementation foundation. Ten primary pages plus three
detail templates, rebuilt on a new editorial design system derived from the
supplied reference imagery.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run start
npm run typecheck
```

Node 18.18+. Tailwind v4 — tokens live in `app/globals.css` under `@theme`,
so there is no `tailwind.config.ts`.

---

## Build verification

Run in a sandbox before packaging:

| Check | Result |
|---|---|
| `tsc --noEmit` | Passes, no errors |
| `next build` | Succeeds — 20 static routes, 17 prerendered detail pages |
| All 20 routes | 200 |
| Unknown route | 404 |
| Legacy redirects (`/csr-focus`, `/transparency`, `/knowledge`, `/team-governance`) | 308 to new paths |
| `POST /api/enquiries` valid | 201 with reference number |
| `POST /api/enquiries` invalid | 422 with field errors |
| One `<h1>` per page | Verified across all 12 top-level pages |
| Image placeholders with `aria-label` | 19 on the homepage alone |
| Skip link, `lang="en-IN"`, `aria-hidden` on decorative icons | Present |

**One caveat.** The build sandbox has no egress to `fonts.googleapis.com`, so
`next/font/google` could not fetch Sora and Inter during verification. The
build above ran with the font imports temporarily stubbed to prove the rest
compiles; they are restored in the shipped `app/layout.tsx`. On a machine with
normal network access the build completes including the font step. If your CI
is firewalled, allow-list `fonts.googleapis.com` and `fonts.gstatic.com`, or
self-host the two families and switch to `next/font/local`.

---

## What changed in this redesign

### Design system — rebuilt

The previous forest/limestone/amber system with Fraunces has been replaced by
the green + off-white + near-black system the brief asked for.

| | Before | Now |
|---|---|---|
| Accent | Amber `#E0873B` | Green `#0FA34B` — the single accent |
| Ground | Limestone `#F7F5F0` | Warm off-white `#F4F4F1` + `#EBEBE6` band |
| Type | Fraunces serif + Inter | **Sora** display + **Inter** body, both sans |
| Dark surfaces | Forest `#0B3D2C` | Near-black `#0B0D0C`, deep green `#08331C` for CTA bands |
| Radius | 12px cards, 8px controls | 28px imagery, 20px cards, **pill** controls |
| Shadows | None | None — depth from borders and background bands |

Green is used as an accent on eyebrows, numbers, rules and CTAs. It never
floods a surface. There are no gradients beyond the single hero scrim, and no
neon green anywhere.

### Editorial page-number system

A `PageNumber` component runs through the whole site — green two-digit
numeral, hairline rule, uppercase section label, optional `/ total`. It opens
every major section and every page hero, so the site reads as one numbered
document rather than a stack of unrelated blocks. Numerals are tabular
(`.tnum`) so they align.

### Navigation and IA

Ten-item primary nav exactly as specified: Home, About, CSR, Sustainability,
Programmes, Impact, Partnerships, Projects, Reports, Contact — with **Partner
With Us** as a persistent green CTA.

Routes were renamed to match (`/csr`, `/sustainability`, `/partnerships`,
`/reports`, `/insights`). Permanent redirects from the old paths are in
`next.config.ts`, so nothing breaks.

Ten items will not fit a desktop bar below ~1280px, so the nav collapses to a
full-screen drawer at `xl`. The CTA stays in the mobile bar rather than being
buried in the menu.

### Pages

| Route | Page | Sections |
|---|---|---|
| `/` | Home | 11 numbered sections: hero → who we are → approach → CSR+Sustainability → programmes → impact → stories → partnerships → projects → transparency → CTA |
| `/about` | About / Our Approach | Who we are → what we believe → how we work → why it matters |
| `/csr` | Our CSR Focus | 7-stage process timeline, 7 focus areas as alternating editorial rows |
| `/sustainability` | Sustainability | Full-bleed philosophy band, 6 focus areas |
| `/programmes` | Programmes | 6 CSR + 5 Sustainability programmes |
| `/programmes/[slug]` | Programme detail | Challenge → approach → intervention → beneficiaries → outcomes → indicators |
| `/impact` | Our Impact | Dashboard, impact by area, SDG grid, story framework |
| `/partnerships` | Corporate CSR Partnerships | Audiences, 7-stage process, 8 models, why partner |
| `/projects` | Projects & Case Studies | Case study library + 9-section framework |
| `/projects/[slug]` | Case study template | All 9 sections with before/during/after slots |
| `/reports` | Transparency & Accountability | Governance, registrations, report archive, 11 policies |
| `/insights` + `/insights/[slug]` | Insights | Article index and detail |
| `/contact` | Contact / Partner With Us | Two-column hero with form, two closing CTAs |
| `/privacy` `/terms` `/accessibility` | Utility | Shared `LegalPage` template |

### Animation

Subtle and purposeful: fade-and-rise on first scroll into view (`Reveal`,
IntersectionObserver, fires once), image scale on card hover, arrow
translation on link hover, sticky header background on scroll, and a number
counter that activates only when real figures replace the placeholders.

All of it is disabled under `prefers-reduced-motion`. No parallax, no
scroll-jacking, no auto-rotating carousels.

### Responsive

Designed per breakpoint rather than scaled down.

| | Desktop ≥1280 | Laptop 1024–1279 | Tablet 768–1023 | Mobile <768 |
|---|---|---|---|---|
| Nav | Full 10-item bar | Drawer | Drawer | Drawer |
| Container | 1320px, 48px gutters | 48px gutters | 32px gutters | 20px gutters |
| Hero h1 | 80px | 58px | 58px | 40px |
| Programme cards | 4-up / 3-up | 3-up | 2-up | 1-up |
| Focus area rows | 7/5 split | 7/5 | stacked | stacked |
| Impact dashboard | 3-up | 3-up | 2-up | 2-up |
| People·Planet·Impact divider | vertical | vertical | horizontal | horizontal |

Body text never shrinks below 15–17px. `overflow-x: hidden` on `body` guards
against horizontal scroll. Touch targets are 44px minimum throughout.

---

## Component system

```
components/
├── layout/     Header · Footer · Logo
├── sections/   PageHero · CtaSection · ImpactStat · ImpactDashboard
│               ProcessTimeline · FocusAreaList · PillarGrid
│               ProgrammeCard · CaseStudyCard · ImpactStoryCard
│               ImageTextSection · SdgGrid · ContactForm · LegalPage
└── ui/         Container · Section · SectionHeading · PageNumber
                Button · TextLink · ImagePlaceholder · Reveal
```

Only four are client components — `Header`, `Reveal`, `ImpactStat`,
`ContactForm`. Everything else renders on the server.

---

## Content status — read before publishing

No real Eco Green content was available when this was built, and the brief
forbids inventing any. So the site is built to display real content the moment
it exists, and to state plainly where it does not.

**Placeholders currently in place:**

- **Impact figures** — all nine render as `XX+`. `data/content.ts` sets
  `value: null` on each. Set a number and the counter animates automatically.
- **Registrations** — `data/site.ts` lists the *labels* only (CSR-1, 12A, 80G,
  Darpan, PAN) with "to be confirmed" against each. **No number is invented.**
  A corporate CSR committee verifies these against the MCA register before
  releasing funds, so a fabricated one would be a serious misrepresentation.
- **Contact details** — email, phone and address are marked to be confirmed.
  The contact page says so explicitly rather than showing a fake address or an
  empty map.
- **Case studies** — three template entries with `XXXXX` in every factual
  field, `noindex` on the detail pages.
- **Impact stories** — the five-stage framework renders with "To be supplied"
  against each stage.
- **Photography** — 19+ labelled placeholders describing the intended image.
  None could be mistaken for real project photography.
- **Reports archive** — years and types shown; each row reads "Document
  pending".

**No testimonials, partner logos, board members or client names appear
anywhere.** Those were removed rather than invented.

**Programme content is real in structure** — the eleven programme names,
thematic definitions, challenges, approaches and indicator types come from the
brief. Only scale, location and results are absent.

Everything replaceable sits in three files: `data/site.ts`, `data/content.ts`,
`data/programmes.ts`. No JSX needs editing.

---

## Integration

`app/api/enquiries/route.ts` validates server-side and issues a reference
number. The CRM hand-off is marked as the integration point — add the call
there with a retry queue rather than a silent drop on failure.
