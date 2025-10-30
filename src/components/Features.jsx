import { Star, CheckCircle, Heart } from "lucide-react";

const items = [
  {
    icon: Star,
    title: "Clean UI",
    text: "A crisp, modern look with smart defaults so you can focus on content.",
  },
  {
    icon: CheckCircle,
    title: "Ready to ship",
    text: "Pre-wired with sensible styles and structure. Just add your flavor.",
  },
  {
    icon: Heart,
    title: "Developer-friendly",
    text: "Readable components with a clear separation of concerns.",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold text-white">Features</h2>
      <p className="mt-2 text-zinc-400">Simple building blocks to say hello in style.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-xl border border-white/10 bg-white/5 p-6 text-zinc-300 hover:bg-white/[0.08] transition"
          >
            <Icon className="h-6 w-6 text-indigo-400" />
            <h3 className="mt-4 text-lg font-medium text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
