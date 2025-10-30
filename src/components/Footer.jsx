export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-400 flex items-center justify-between">
        <p>
          © {year} Hello World. Built with <span className="text-white">React</span> & <span className="text-white">Tailwind</span>.
        </p>
        <a href="#top" className="hover:text-white transition">Back to top ↑</a>
      </div>
    </footer>
  );
}
