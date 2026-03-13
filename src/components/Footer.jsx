import { personal } from "../data";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>
          Built by{" "}
          <a href={personal.github} className="text-slate-400 hover:text-white transition-colors">
            {personal.handle}
          </a>
        </p>
        <p className="font-mono">© {new Date().getFullYear()} {personal.name}</p>
      </div>
    </footer>
  );
}