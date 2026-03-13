import { personal } from "../data";

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-border-light">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted">
        <span>© {new Date().getFullYear()} {personal.name}</span>
        <span>
          <a href={personal.website} className="hover:text-accent transition-colors">
            {personal.handle}.com
          </a>
        </span>
      </div>
    </footer>
  );
}
