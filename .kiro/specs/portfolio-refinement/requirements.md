# Requirements Document

## Introduction

This document defines the requirements for a comprehensive refinement pass on the stabgan.com portfolio — an Anthropic-inspired single-page React application. The refinements span content curation (certifications, test scores, honors), visual rhythm (dark inverted Testimonials section), UX polish (active nav state, collapsible sections, current role badge, back-to-top), typography fixes (Playfair Display italic), hero CTA cleanup, mobile animation optimization, and dead dependency removal. All changes are purely frontend with no backend or API changes. The Anthropic design identity (warm cream palette, bold borders, serif headings, generous whitespace) must be preserved throughout.

## Glossary

- **Portfolio_App**: The stabgan.com single-page React application built with Vite 7, React 19, Tailwind CSS v4, and Framer Motion
- **Skills_Section**: The component rendering expertise categories, test scores, certifications, and honors (`Skills.jsx`)
- **Certifications_List**: The array of certification objects exported from `data.js`
- **Featured_Certifications**: Certifications marked with `featured: true` that appear in the initially visible set
- **Collapsible_Component**: A new generic animated expand/collapse wrapper using Framer Motion
- **Header_Component**: The fixed navigation header with scroll progress bar (`Header.jsx`)
- **useActiveSection_Hook**: A new custom React hook using IntersectionObserver to track the currently visible section
- **Hero_Component**: The landing section with name animation, title, subtitle, and CTA buttons (`Hero.jsx`)
- **Experience_Section**: The component rendering work history and education (`Experience.jsx`)
- **Testimonials_Section**: The component rendering LinkedIn recommendations (`Testimonials.jsx`)
- **Footer_Component**: The bottom section with copyright and links (`Footer.jsx`)
- **Data_Module**: The centralized data file exporting all portfolio content (`data.js`)
- **Test_Scores_List**: The array of competitive exam and test score objects in `data.js`
- **Honors_List**: The array of honors and awards strings in `data.js`
- **Dark_Inverted_Treatment**: A visual style using background color `#141413` with light text `#FAF9F5` for contrast rhythm
- **Active_Nav_State**: Visual highlighting of the navigation link corresponding to the section currently in the viewport

## Requirements

### Requirement 1: Content Curation — Certifications

**User Story:** As a portfolio visitor, I want to see the most impressive certifications prominently, so that I can quickly assess the candidate's qualifications without being overwhelmed by a long list.

#### Acceptance Criteria

1. WHEN the Skills_Section renders, THE Skills_Section SHALL display only Featured_Certifications (6 to 8 items) in the initially visible set
2. WHEN a certification has `featured: true` in the Data_Module, THE Skills_Section SHALL include that certification in the visible set
3. THE Collapsible_Component SHALL contain all non-featured certifications in a hidden expandable region
4. WHEN a visitor clicks the expand toggle, THE Collapsible_Component SHALL animate the hidden certifications into view using Framer Motion
5. WHEN a visitor clicks the collapse toggle, THE Collapsible_Component SHALL animate the expanded certifications out of view
6. THE Skills_Section SHALL display the total certification count alongside the section heading
7. WHEN the Collapsible_Component is in collapsed state, THE Collapsible_Component SHALL render no hidden certification content in the DOM

### Requirement 2: Content Curation — Test Scores

**User Story:** As a portfolio visitor, I want to see only the most relevant and impressive test scores, so that the competitive achievements section feels curated and impactful.

#### Acceptance Criteria

1. THE Data_Module SHALL export exactly 4 test scores: GATE Statistics (ST), GATE Data Science & AI (DA), TCS CodeVita, and PCAP (Python Institute)
2. THE Data_Module SHALL exclude Raven's Progressive Matrices, Standard Progressive Matrices, WBJEE, and WBBSE from the Test_Scores_List
3. WHEN the Skills_Section renders the test scores grid, THE Skills_Section SHALL display exactly 4 test score items

### Requirement 3: Content Curation — Honors

**User Story:** As a portfolio visitor, I want the honors section to reflect academic and competitive achievements, so that the portfolio maintains a focused professional narrative.

#### Acceptance Criteria

1. THE Data_Module SHALL exclude "Fine Arts Professional Diploma" from the Honors_List
2. THE Data_Module SHALL exclude "Vocal Classical & Rabindrasangeet Diploma" from the Honors_List
3. THE Data_Module SHALL retain "Swami Vivekananda Merit cum Means Scholarship" and "PNTSE Rank 2 Zonal, Rank 46 West Bengal" in the Honors_List
4. THE Data_Module SHALL incorporate the arts background into the `personal.bio` narrative

### Requirement 4: Dark Inverted Testimonials Section

**User Story:** As a portfolio visitor, I want the testimonials section to stand out visually with a dark background, so that the social proof section has gravitas and creates visual rhythm on the page.

#### Acceptance Criteria

1. THE Testimonials_Section SHALL use background color `#141413` (Dark_Inverted_Treatment)
2. THE Testimonials_Section SHALL use text color `#FAF9F5` for primary quote text
3. THE Testimonials_Section SHALL use text color `#9C9A95` for muted elements (section label, dates, roles)
4. WHEN the Testimonials_Section renders, THE Testimonials_Section SHALL apply the dark palette to all child text elements including names, roles, and dates
5. THE Testimonials_Section SHALL maintain the existing section-border (2px solid top border) styling

### Requirement 5: Active Navigation State

**User Story:** As a portfolio visitor, I want the navigation to highlight which section I am currently viewing, so that I always know my position on the page.

#### Acceptance Criteria

1. THE useActiveSection_Hook SHALL use IntersectionObserver to track which section is currently in the viewport active zone
2. WHEN a section enters the viewport active zone, THE useActiveSection_Hook SHALL return that section's ID
3. WHEN no section is in the viewport active zone, THE useActiveSection_Hook SHALL return null
4. WHEN the useActiveSection_Hook returns a section ID, THE Header_Component SHALL apply accent color styling to the corresponding navigation link
5. WHEN the useActiveSection_Hook returns null, THE Header_Component SHALL display all navigation links in their default muted style
6. WHEN the Header_Component unmounts, THE useActiveSection_Hook SHALL disconnect the IntersectionObserver to prevent memory leaks

### Requirement 6: Playfair Display Italic Font Loading

**User Story:** As a portfolio visitor, I want testimonial quotes to render with true italic Playfair Display, so that the typography feels polished and intentional rather than using browser faux-italic.

#### Acceptance Criteria

1. THE Portfolio_App SHALL import `@fontsource/playfair-display/latin-400-italic.css` in `main.jsx`
2. WHEN the Testimonials_Section renders italic quotes, THE Testimonials_Section SHALL use the loaded Playfair Display italic font weight

### Requirement 7: Hero CTA Cleanup

**User Story:** As a portfolio visitor, I want a clean hero section with a single clear call-to-action, so that the landing experience is focused and decisive.

#### Acceptance Criteria

1. THE Hero_Component SHALL NOT render a "Read more" button or link
2. THE Hero_Component SHALL retain the "Get in touch" primary CTA button linking to the contact section

### Requirement 8: Current Role Indicator

**User Story:** As a portfolio visitor, I want to immediately identify the candidate's current position, so that I can understand their present role at a glance.

#### Acceptance Criteria

1. WHEN an experience entry has `current: true`, THE Experience_Section SHALL render a "Current" badge adjacent to the role title
2. THE "Current" badge SHALL use accent color border and text with monospace uppercase styling
3. WHEN an experience entry does not have `current: true`, THE Experience_Section SHALL NOT render a "Current" badge for that entry

### Requirement 9: Collapsible Component

**User Story:** As a developer, I want a reusable animated expand/collapse component, so that content sections can be progressively disclosed without layout shift.

#### Acceptance Criteria

1. THE Collapsible_Component SHALL accept `isExpanded` (boolean) and `duration` (number, default 0.4) props
2. WHEN `isExpanded` transitions from false to true, THE Collapsible_Component SHALL animate content height from 0 to auto
3. WHEN `isExpanded` transitions from true to false, THE Collapsible_Component SHALL animate content height from current to 0
4. THE Collapsible_Component SHALL use `overflow: hidden` during animation to prevent layout shift
5. WHEN `prefers-reduced-motion` is active, THE Collapsible_Component SHALL respect the reduced motion media query

### Requirement 10: Footer Back-to-Top Link

**User Story:** As a portfolio visitor, I want a quick way to return to the top of the page from the footer, so that I can navigate efficiently on long single-page layouts.

#### Acceptance Criteria

1. THE Footer_Component SHALL render a "↑ Back to top" anchor link
2. WHEN a visitor clicks the "Back to top" link, THE Footer_Component SHALL scroll the page to the top using smooth scroll behavior
3. THE "Back to top" link SHALL use the existing `link-underline` hover style consistent with the Anthropic design system

### Requirement 11: Mobile Hero Animation Optimization

**User Story:** As a mobile visitor, I want the hero name animation to complete faster, so that the page feels responsive and I can interact with content sooner.

#### Acceptance Criteria

1. WHILE the viewport width is 640px or less, THE Hero_Component SHALL use a character animation delay of 0.02 seconds or less
2. WHILE the viewport width is greater than 640px, THE Hero_Component SHALL use the default character animation delay of 0.035 seconds
3. WHILE the viewport width is 640px or less, THE Hero_Component SHALL use reduced vertical displacement (20px instead of 40px) for character animation

### Requirement 12: Dead Dependency Removal

**User Story:** As a developer, I want unused dependencies removed from the project, so that the bundle size is minimized and the dependency tree stays clean.

#### Acceptance Criteria

1. THE Portfolio_App SHALL NOT include `simplex-noise` in `package.json` dependencies
2. THE Portfolio_App SHALL NOT include `@fontsource/space-grotesk` in `package.json` dependencies
3. WHEN the build runs after dependency removal, THE Portfolio_App SHALL build without errors
