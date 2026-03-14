# stabgan.com

Personal portfolio website for [Kaustabh Ganguly](https://stabgan.com) — Senior AI/ML Engineer.

## Tech Stack

- **React 19** with JSX
- **Vite 7** — dev server & build
- **Tailwind CSS 4** (via `@tailwindcss/vite`)
- **Framer Motion** — animations
- **Lenis** — smooth scrolling
- **Lucide React** — icons
- **GitHub Pages** — hosting (auto-deploy on push to `master`)

## Sections

Hero · Manifesto · Impact Dashboard · Experience · Skills · Publications · Projects · Testimonials · Contact

## Getting Started

```bash
git clone https://github.com/stabgan/stabgan.github.io.git
cd stabgan.github.io
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deployment

Pushes to `master` auto-deploy to GitHub Pages via the workflow in `.github/workflows/deploy.yml`. Custom domain: **stabgan.com**.

## License

MIT
