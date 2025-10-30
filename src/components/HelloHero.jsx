export default function HelloHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.25),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-4 py-20 relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Live sandbox
        </div>
        <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
          Hello, World!
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-300">
          A minimal, beautiful starter powered by React and Tailwind. Use this as a jumping-off point for your next idea.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#get-started" className="rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition">
            Get Started
          </a>
          <a href="#features" className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition">
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}
