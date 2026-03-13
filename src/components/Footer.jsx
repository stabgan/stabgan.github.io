import { personal } from "../data";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted font-mono">
        <span>
          built by{" "}
          <a href={personal.github} className="text-text-secondary hover:text-cyan transition-colors">
            {personal.handle}
          </a>
        </span>
        <span>© {new Date().getFullYear()} {personal.name}</span>
      </div>
    </footer>
  );
}