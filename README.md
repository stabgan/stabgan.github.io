<p align="center">
  <img src="public/favicon.svg" alt="stabgan.com logo" width="80" />
</p>

<h1 align="center">stabgan.com</h1>

<p align="center">
  Personal portfolio for <a href="https://stabgan.com">Kaustabh Ganguly</a> — Senior AI/ML Engineer.<br/>
  A fast, animated single-page React app showcasing experience, publications, projects, and more.
</p>

<p align="center">
  <a href="https://stabgan.com">Live Site</a> ·
  <a href="#tech-stack">Tech Stack</a> ·
  <a href="#running-locally">Run Locally</a> ·
  <a href="#known-issues">Known Issues</a>
</p>

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| ⚛️ Framework | **React 19** (JSX, Strict Mode) |
| ⚡ Build Tool | **Vite 7** — dev server, HMR, production bundling |
| 🎨 Styling | **Tailwind CSS 4** via `@tailwindcss/vite` plugin with custom design tokens |
| 🎬 Animations | **Framer Motion 12** — scroll reveals, staggered entrances, hover effects |
| 🖱️ Smooth Scroll | **Lenis** — buttery-smooth scroll experience |
| 🔣 Icons | **Lucide React** — lightweight SVG icon set |
| 🔤 Fonts | **Playfair Display** · **Inter** · **JetBrains Mono** (self-hosted via `@fontsource`) |
| 🧹 Linting | **ESLint 9** with React Hooks & React Refresh plugins |
| 🧪 Testing | **Vitest 4** + **fast-check** (property-based tests) |
| 🚀 Hosting | **GitHub Pages** — auto-deploy on push to `master` |
| 🔄 CI/CD | **GitHub Actions** — build → upload artifact → deploy |

## Sections

Hero · About · Impact Dashboard · Experience · Skills · Publications · Projects · Testimonials · Contact

Each section uses Framer Motion scroll-triggered animations with `prefers-reduced-motion` respected via CSS and runtime hooks.

## Project Structure

```
src/
├── main.jsx              # Entry point, font imports, StrictMode
├── App.jsx               # Root layout, Lenis smooth-scroll init, skip-to-content
├── data.js               # All portfolio content (experience, pubs, skills, etc.)
├── index.css             # Tailwind v4 @theme tokens, custom utilities
├── components/
│   ├── Header.jsx        # Sticky nav with scroll progress bar & active-section highlighting
│   ├── Hero.jsx          # Animated hero with character-stagger name reveal
│   ├── Manifesto.jsx     # About / personal philosophy section
│   ├── ImpactDashboard.jsx  # Animated count-up stats grid
│   ├── Experience.jsx    # Work history & education timeline
│   ├── Skills.jsx        # Skills grid, test scores, certifications, honors
│   ├── Publications.jsx  # Peer-reviewed papers with external links
│   ├── Projects.jsx      # Featured project cards
│   ├── Testimonials.jsx  # LinkedIn recommendations (dark section)
│   ├── Contact.jsx       # CTA + social links
│   ├── Footer.jsx        # Copyright & back-to-top
│   └── Collapsible.jsx   # Reusable expand/collapse with reduced-motion support
├── hooks/
│   ├── useActiveSection.js       # IntersectionObserver-based active nav tracking
│   ├── useIsMobile.js            # Reactive mobile breakpoint detection
│   └── usePrefersReducedMotion.js # Reactive reduced-motion preference
└── __tests__/            # Property-based tests (fast-check + Vitest)
```

## Running Locally

Requires Node.js ≥ 18 and npm.

```bash
git clone https://github.com/stabgan/stabgan.github.io.git
cd stabgan.github.io
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Commands

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |
| `npx vitest --run` | Run property-based tests once |

## Deployment

Pushes to `master` trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`):

1. `npm ci` → `npm run build`
2. Copies `CNAME` into `dist/`
3. Deploys to GitHub Pages

Custom domain: **stabgan.com**

## ⚠️ Known Issues

- **No dark mode** — the site uses a fixed warm light palette. A dark theme is not yet implemented.
- **Lenis + keyboard navigation** — Lenis smooth-scroll can occasionally interfere with keyboard-only navigation and anchor jumps. The `prefers-reduced-motion` media query disables CSS animations but Lenis itself stays active.
- **No SSR / SEO limits** — as a client-rendered SPA, search engine crawlers that don't execute JavaScript may see an empty page. Basic `<meta>` and Open Graph tags are present in `index.html`.

## License

MIT
