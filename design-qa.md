# Design QA

- Source visual truth: `/Users/user/GitHub/kiriha_lp/1920w light.jpg`
- Implementation URL: `http://127.0.0.1:8000/`
- Existing desktop evidence: `/Users/user/GitHub/kiriha_lp/_qa-implementation-top.png`
- Existing source/desktop comparison: `/Users/user/GitHub/kiriha_lp/_qa-comparison-top.jpg`
- Responsive verification: live browser layout metrics at 375, 430, 768, 1024, and 1440px
- State: default page, responsive navigation closed

## Full-view comparison evidence

The 1440px layout remains on the original desktop rules: absolute editorial header, overlaid hero copy, 820px hero image, desktop product columns, and full-width visual sections. The existing side-by-side source comparison remains representative because the new rules begin at 1023px.

## Focused responsive evidence

- 375px: fixed 64px header, hamburger visible, 560px hero image followed by a separate text panel, no horizontal overflow, two-line hero title.
- 430px: same mobile structure with no horizontal overflow.
- 768px: fixed header and hamburger, separate 500px hero image/text regions, single-column product layout.
- 1024px: desktop header and overlaid hero restored; desktop product columns preserved.
- 1440px: desktop layout preserved; hamburger hidden.
- Browser metrics confirmed `scrollWidth <= clientWidth` at all five widths.

## Required fidelity surfaces

- Fonts and typography: Garamond logo, Avenir-style English labels, Japanese serif headings, and Japanese sans-serif body hierarchy are preserved. Mobile hero is 34px with 1.55 line height and a controlled two-line wrap.
- Spacing and layout rhythm: tablet uses 40px side space; mobile uses 20px. Mobile hero text padding is 44px top and 52px bottom. Section rhythm stays 96px on tablet and 72px on mobile.
- Colors and visual tokens: translucent ecru fixed header, ecru menu surface, brown-charcoal menu lines, and existing forest/ecru palette remain consistent.
- Image quality and asset fidelity: supplied hero and section imagery remain unchanged. Responsive crops use `object-fit: cover` with bottle-focused positioning.
- Copy and content: existing desktop copy is unchanged. Mobile menu labels map to existing section IDs.
- Accessibility: 44px menu button, `aria-expanded`, `aria-controls`, `aria-hidden`, Escape close, background scroll lock, reduced-motion handling, and 80px mobile anchor offset are implemented.

## Findings

No actionable P0, P1, or P2 responsive findings remain.

## Patches made

- Added the 1024/768 responsive breakpoint model.
- Added fixed tablet/mobile header and restrained full-screen navigation.
- Split tablet/mobile hero into independent visual and text regions.
- Stacked constrained two-column sections where needed.
- Added scroll offsets, background scroll lock, Escape handling, and menu-link close behavior.
- Verified JavaScript syntax and every internal anchor target.

## Follow-up polish

- P3: Real-device testing on iOS Safari can confirm final `backdrop-filter` rendering and dynamic viewport behavior.

final result: passed
