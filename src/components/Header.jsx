import { Rocket } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-gradient-to-b from-zinc-900/60 to-zinc-900/20 backdrop-blur sticky top-0 z-20">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-indigo-600/90 text-white grid place-items-center shadow-lg shadow-indigo-600/30">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="text-white font-semibold tracking-tight">Hello World</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#get-started" className="hover:text-white transition-colors">Get started</a>
          <a href="https://lucide.dev" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white">Icons</a>
        </nav>
      </div>
    </header>
  );
}
