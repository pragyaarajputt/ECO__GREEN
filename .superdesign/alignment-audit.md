# Alignment audit — 2026-10-07 (before fixes)

Method: 31 routes from `sitemap.xml` × 1440 / 768 / 375 px, measured in headless Edge over the
DevTools Protocol, plus full-page screenshots. Measured on every page: horizontal overflow,
container edges, characters per line (cpl), card heights per grid row, section padding, `h1` count,
layout shift and console errors.

## Site-wide (all 31 routes)
- [x] No horizontal scroll and no overflowing elements, at every width.
- [x] One container (`Container`, 1320px max) with identical left edges on every page: 20 / 32 / 48px gutters.
- [x] Exactly one `h1` per page. Layout shift 0. No console errors.
- [x] Text alignment is consistent: everything is left-aligned (0 centred headings or paragraphs).
- [ ] Section padding comes from 5 different hard-coded sets (`py-20 lg:py-32`, `py-16 lg:py-28`, `py-14 lg:py-20`,
      `py-20 lg:py-36`, hero `pt-8/pt-10 … lg:pb-20/lg:pb-24`). The home hero and interior heroes differ (32 vs 40px top on mobile).
- [ ] Section-heading ledes run full width below `lg`: about 85 cpl at 768px.
- [ ] Image-placeholder captions clip in narrow tiles (home hero at 375px: "Environmenta…").
- [ ] Global focus style forces `border-radius: 4px`, so focused rounded cards lose their shape.
- [ ] Scroll-reveal content stays invisible if JavaScript fails (`opacity: 0` set before hydration).

## Per page
- **/ (home)**: 768: the "CSR and sustainability" lede is 85 cpl. 375: hero tile captions clip; the "Who we are" 3:4 portrait
  (about 450px tall) sits above its heading. Programme and case-study cards have no entrance animation.
  The People/Planet divider still says "Impact" (tagline is now Prosperity).
- **/about**: 375: both `ImageTextSection`s stack a tall portrait above the text.
- **/csr**, **/sustainability**: 768: each focus area stacks a full-width 4:3 image (about 530px), 7 and 6 times. 768: lede 82 cpl.
- **/programmes**: OK. Cards are equal height, with links pinned to the bottom.
- **/impact**: 768: lede 81 cpl. 375: 9 stats in 2 columns leave the last one alone (acceptable).
- **/partnerships**, **/projects**, **/insights**: OK.
- **/reports**: the 11 policies in a 3-column grid leave an empty grey 12th cell. The publication-status note runs 85 cpl.
- **/contact**: the "Location & contact details" note runs 83 cpl at 1440.
- **/privacy**, **/terms**, **/accessibility**: body text runs 79–83 cpl (`max-w-[68ch]` at 17px).
- **/programmes/[slug]** (11 pages): body paragraphs run 81–83 cpl on 4 programmes.
- **/projects/[slug]**, **/insights/[slug]**: OK.
- **Footer and closing CTA**: pages with a `CtaSection` show two closing CTAs back to back (the band plus the footer's
  "Let's create meaningful impact together."). This is content, so it is flagged, not removed.
