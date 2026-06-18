# Design QA

- Source visual truth path: `/Users/user/GitHub/kiriha_lp/1920w light.jpg`
- Implementation URL: `http://127.0.0.1:8000/`
- Implementation screenshots:
  - `/Users/user/GitHub/kiriha_lp/_qa-implementation-top.png`
  - `/Users/user/GitHub/kiriha_lp/_qa-implementation-faq.png`
  - `/Users/user/GitHub/kiriha_lp/_qa-implementation-mobile.png`
- Comparison evidence: `/Users/user/GitHub/kiriha_lp/_qa-comparison-top.jpg`
- Viewports: 1440 × 900 desktop, 390 × 844 mobile
- State: default page; FAQ item 1 expanded for interaction verification

## Full-view comparison evidence

The source and implementation hero were placed together in `_qa-comparison-top.jpg`. The implementation preserves the source composition: restrained three-part navigation, centered wordmark, left-aligned editorial copy, warm full-bleed product photography, outlined CTA, and generous transition space into the story section.

## Focused region comparison evidence

- Hero: compared directly in `_qa-comparison-top.jpg`; image crop, type hierarchy, nav balance, and CTA treatment align with the reference.
- FAQ: verified in `_qa-implementation-faq.png`; row rules, restrained spacing, plus/minus state, and answer reveal match the reference language.
- Mobile: verified in `_qa-implementation-mobile.png`; layout collapses without horizontal overflow (`scrollWidth = clientWidth = 390`). Hero image positioning and overlay contrast were refined after this capture.
- Product and material regions were checked in-browser for image fit, transparent PNG treatment, caption overlays, and responsive stacking.

## Required fidelity surfaces

- Fonts and typography: Japanese Mincho and high-contrast English serif families reproduce the quiet editorial hierarchy. Sizes, weights, line height, and tracking remain restrained across breakpoints.
- Spacing and layout rhythm: section spacing is tokenized; desktop sections use 120–160px rhythm and mobile sections use 72–96px. Image/text gaps and maximum widths follow the supplied brief.
- Colors and visual tokens: warm ecru, brown text, and deep forest green are defined as CSS custom properties and remain consistent across cards, footer, rules, and overlays.
- Image quality and asset fidelity: all supplied photographic and product assets are used as real images with controlled object-fit/object-position. No visible custom illustration substitutes are used.
- Copy and content: requested brand, product, scent, material, FAQ, CTA, and footer copy is present. CTA uses the scent forest image with a distinct crop because `cta-forest-bg.jpg` was not present in the supplied image folder.

## Findings

No actionable P0, P1, or P2 mismatches remain.

## Patches made

- Built all ten requested sections from the supplied visual target and assets.
- Added responsive desktop, tablet, and mobile layouts.
- Added functional FAQ accordion behavior with accessible expanded states.
- Refined mobile hero image position and overlay contrast after responsive review.

## Follow-up polish

- P3: Replace the CTA background reference with `images/cta-forest-bg.jpg` if that asset is later supplied; the current forest image reuse is visually coherent but not the requested source file.

final result: passed
