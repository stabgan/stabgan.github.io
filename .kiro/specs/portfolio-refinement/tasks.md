# Implementation Plan: Portfolio Refinement

## Overview

Incremental refinement of the stabgan.com portfolio across content curation, visual polish, UX enhancements, and dependency cleanup. Each task builds on the previous, ending with integration wiring and a final checkpoint.

## Tasks

- [x] 1. Curate data layer — certifications, test scores, honors, bio
  - [x] 1.1 Add `featured: true` to top certifications in `src/data.js`
    - Mark 6–8 high-signal certs (Stanford, MIT 6.86x, AWS-ML, PCAP, Azure AI-900, DSA Specialization, MIT 6.00.1x, Statistical Learning) with `featured: true`
    - _Requirements: 1.1, 1.2_

  - [x] 1.2 Filter test scores to exactly 4 entries in `src/data.js`
    - Keep GATE Statistics (ST), GATE Data Science & AI (DA), TCS CodeVita, PCAP (Python Institute)
    - Remove Raven's Progressive Matrices, Standard Progressive Matrices, WBJEE, WBBSE
    - _Requirements: 2.1, 2.2_

  - [x] 1.3 Trim honors and update bio in `src/data.js`
    - Remove "Fine Arts Professional Diploma" and "Vocal Classical & Rabindrasangeet Diploma" from `honors`
    - Weave arts background into `personal.bio` narrative
    - _Requirements: 3.1, 3.2, 3.3, 3.4_

  - [x] 1.4 Write property test: certification partition — no data loss
    - **Property 1: Certification partition — no data loss**
    - For any certifications array split into visible/hidden, `visible.length + hidden.length === total` and every cert appears in exactly one set
    - **Validates: Requirements 1.1, 1.3, 1.6**

  - [x] 1.5 Write property test: featured certifications always visible
    - **Property 2: Featured certifications always visible**
    - For any certifications array where some entries have `featured: true`, all featured certs appear in the visible set (up to visible count limit)
    - **Validates: Requirements 1.1, 1.2**

- [x] 2. Create Collapsible component and integrate into Skills
  - [x] 2.1 Create `src/components/Collapsible.jsx`
    - Implement animated expand/collapse wrapper using Framer Motion `AnimatePresence`
    - Accept `isExpanded` (boolean) and `duration` (number, default 0.4) props
    - Animate height from 0 to auto with `overflow: hidden` during animation
    - Respect `prefers-reduced-motion` media query
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_

  - [x] 2.2 Update `src/components/Skills.jsx` — collapsible certifications
    - Split certifications into featured (visible) and rest (hidden) using `featured` flag
    - Display only featured certs initially, show total count in heading
    - Add "Show all N" / "Show less" toggle button wired to Collapsible
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7_

  - [x] 2.3 Update `src/components/Skills.jsx` — filtered test scores display
    - Render exactly 4 test score items from the filtered `testScores` array
    - _Requirements: 2.3_

- [x] 3. Checkpoint — data and Skills section
  - Ensure all tests pass, ask the user if questions arise.

- [x] 4. Dark inverted Testimonials section
  - [x] 4.1 Update `src/components/Testimonials.jsx` with dark treatment
    - Set background to `#141413`, primary text to `#FAF9F5`, muted text to `#9C9A95`
    - Apply dark palette to all child elements: names, roles, dates, quotes
    - Maintain existing `section-border` (2px solid top border) styling
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

- [x] 5. Active navigation state
  - [x] 5.1 Create `src/hooks/useActiveSection.js`
    - Implement IntersectionObserver hook tracking which section is in the viewport active zone
    - Return section ID or null; disconnect observer on unmount
    - _Requirements: 5.1, 5.2, 5.3, 5.6_

  - [x] 5.2 Update `src/components/Header.jsx` with active nav highlighting
    - Import and use `useActiveSection` with section IDs from `navLinks`
    - Apply `text-accent` styling to the active nav link, default muted style otherwise
    - Wire active state into both desktop and mobile nav menus
    - _Requirements: 5.4, 5.5_

  - [x] 5.3 Write property test: active section membership
    - **Property 3: Active section membership**
    - For any list of section IDs, the returned value is always a member of that list or null
    - **Validates: Requirements 5.1, 5.2, 5.3**

  - [x] 5.4 Write property test: active nav link matches active section
    - **Property 4: Active nav link matches active section**
    - For any active section ID, exactly one nav link has accent styling and it corresponds to that section
    - **Validates: Requirements 5.4, 5.5**

- [x] 6. Typography, Hero, Experience, and Footer polish
  - [x] 6.1 Add Playfair Display italic import in `src/main.jsx`
    - Add `import "@fontsource/playfair-display/latin-400-italic.css"`
    - _Requirements: 6.1, 6.2_

  - [x] 6.2 Remove "Read more" CTA from `src/components/Hero.jsx`
    - Remove the `<a href="#about" className="btn-secondary">Read more</a>` element
    - Retain "Get in touch" primary CTA
    - _Requirements: 7.1, 7.2_

  - [x] 6.3 Add mobile animation optimization to `src/components/Hero.jsx`
    - Use `window.matchMedia("(max-width: 640px)")` to detect mobile
    - Set character delay to 0.02s (mobile) vs 0.035s (desktop)
    - Set vertical displacement to 20px (mobile) vs 40px (desktop)
    - _Requirements: 11.1, 11.2, 11.3_

  - [x] 6.4 Add "Current" badge to `src/components/Experience.jsx`
    - Render a "Current" badge when `exp.current === true`
    - Style with accent border, monospace uppercase text
    - _Requirements: 8.1, 8.2, 8.3_

  - [x] 6.5 Add "↑ Back to top" link in `src/components/Footer.jsx`
    - Add anchor link with `href="#"` for smooth scroll to top
    - Use `link-underline` hover style
    - _Requirements: 10.1, 10.2, 10.3_

  - [x] 6.6 Write property test: current badge renders iff current is true
    - **Property 5: Current badge renders iff current is true**
    - For any experience entry, the "Current" badge renders if and only if `current: true`
    - **Validates: Requirements 8.1, 8.3**

  - [x] 6.7 Write property test: mobile animation parameters
    - **Property 6: Mobile animation parameters**
    - For viewport ≤640px: delay ≤ 0.02s, displacement 20px; for >640px: delay 0.035s, displacement 40px
    - **Validates: Requirements 11.1, 11.2, 11.3**

- [x] 7. Checkpoint — visual and UX polish
  - Ensure all tests pass, ask the user if questions arise.

- [x] 8. Dead dependency removal
  - [x] 8.1 Remove `simplex-noise` and `@fontsource/space-grotesk` from `package.json`
    - Remove both entries from `dependencies`
    - Run `npm install` to update lockfile
    - Verify build succeeds with `npm run build`
    - _Requirements: 12.1, 12.2, 12.3_

- [x] 9. Final checkpoint — full build verification
  - Ensure all tests pass, ask the user if questions arise.
  - Verify `npm run build` completes without errors after all changes.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document
- All code uses JavaScript/JSX with React 19, Tailwind CSS v4, and Framer Motion
