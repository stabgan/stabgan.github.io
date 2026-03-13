import { personal } from "../data";

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t-2 border-border-bold">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted">
        <span>© {new Date().getFullYear()} {personal.name}</span>
        <a href={personal.website} className="link-underline hover:text-text transition-colors">
          {personal.handle}.com
        </a>
      </div>
    </footer>
  );
}
