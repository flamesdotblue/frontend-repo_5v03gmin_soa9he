import Header from "./components/Header";
import HelloHero from "./components/HelloHero";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="top" className="min-h-screen bg-zinc-950 text-white">
      <Header />
      <main>
        <HelloHero />
        <Features />
        <section id="get-started" className="mx-auto max-w-6xl px-4 py-16">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-600/20 via-fuchsia-600/10 to-amber-500/10 p-8">
            <h3 className="text-xl font-semibold">Get started</h3>
            <p className="mt-2 text-zinc-300">
              Edit this page and start crafting your experience. The structure is set up with small, focused components so you can move fast.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
