export default function About() {
  return (
    <main className="relative">
      {/* Hero */}
      <section className="relative px-8 pt-28 pb-16 max-w-[1280px] mx-auto text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[480px] radial-glow -z-10" />
        <span className="font-label-sm text-white/40 mb-4 tracking-[0.2em] uppercase inline-block">
          The Why Behind Altura
        </span>
        <h1 className="font-h1 text-white mb-6 max-w-4xl mx-auto">
          Building the foundation for a more transparent web.
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
          We believe visual intelligence should be accessible to everyone,
          without the hidden cost of personal data harvesting.
        </p>
      </section>

      {/* Our Mission */}
      <section className="px-8 py-24 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 relative group">
            <div className="absolute -inset-1 bg-white/10 opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
            <div className="relative glass-card aspect-[16/9] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover mix-blend-lighten opacity-80"
                alt="Abstract digital visualization of global data streams"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT13S8CRFMX9sIiH8ha2lqapesvWqt0KKGmO0FQSRI_oSbEm1m2OEBwZoyrYUoaasZoOWUIf3JRtBfgYOwlI8XachM_qh7C9DbkbK1pShzBPyEuJbI00oQlCyXeIC3VKA1b-SsS3kZ-RSfiiMZqD3DrAFaj2yAEQts6kC_0nUMbnTWaCny-YN9XYN1oe2-Dox4tRsXOVBrbUFSUI2FzXUvEnssspImVbPyOoOr-LoLF8B877jvZK5eYfeoCgTgarElz8_Dgk8IfE0"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
            </div>
          </div>
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="w-12 h-1 bg-white mb-4" />
            <h2 className="font-h2 text-white">Our Mission</h2>
            <p className="font-body-lg text-on-surface/60">
              Altura was born from a simple realization: the web’s visual
              metadata is broken. We are democratizing high‑quality image SEO
              while protecting user privacy.
            </p>
            <p className="font-body-md text-on-surface/40">
              Most visual AI today is locked behind walled gardens or fueled by
              invasive data collection. We’ve built a tool that puts the power
              of sophisticated SEO directly into the hands of creators, sans the
              surveillance.
            </p>
          </div>
        </div>
      </section>

      {/* Status Quo */}
      <section className="px-8 py-24 bg-[var(--surface-container-lowest)]">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-12">
            <h2 className="font-h2 text-white mb-3">The Status Quo</h2>
            <p className="font-body-lg text-on-surface/60">
              Why we chose a different path than standard AI tools.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 flex flex-col gap-4">
              <span className="material-symbols-outlined text-white/40 text-4xl">
                lock_person
              </span>
              <h3 className="font-h3 text-white">Account Fatigue</h3>
              <p className="font-body-md text-on-surface/50">
                Many AI tools require mandatory registration just to process a
                single file, capturing your identity before providing value.
              </p>
            </div>
            <div className="glass-card p-8 flex flex-col gap-4">
              <span className="material-symbols-outlined text-white/40 text-4xl">
                database
              </span>
              <h3 className="font-h3 text-white">Persistent Storage</h3>
              <p className="font-body-md text-on-surface/50">
                Metadata and original assets are often stored indefinitely on
                centralized servers, creating privacy vulnerabilities.
              </p>
            </div>
            <div className="glass-card p-8 flex flex-col gap-4">
              <span className="material-symbols-outlined text-white/40 text-4xl">
                visibility_off
              </span>
              <h3 className="font-h3 text-white">Black Box AI</h3>
              <p className="font-body-md text-on-surface/50">
                Traditional engines offer zero transparency into how your data
                is used to train subsequent models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Powered by Obsidian AI */}
      <section className="px-8 py-24 max-w-[1280px] mx-auto overflow-hidden">
        <div className="glass-card p-12 md:p-24 relative flex flex-col md:flex-row gap-16 items-center">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
            <div className="w-full h-full radial-glow" />
          </div>
          <div className="flex-1 z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="font-label-sm text-white uppercase tracking-widest">
                Engine Technology
              </span>
            </div>
            <h2 className="font-h2 text-white mb-6">Powered by Obsidian AI</h2>
            <p className="font-body-lg text-on-surface/60 mb-8">
              The core engine of Altura is built on Obsidian AI — a proprietary,
              lean vision model designed for speed and local‑first execution.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-white font-h3 mb-1">0ms</div>
                <div className="font-label-sm text-white/40 uppercase">
                  Server Retention
                </div>
              </div>
              <div>
                <div className="text-white font-h3 mb-1">99.8%</div>
                <div className="font-label-sm text-white/40 uppercase">
                  Accuracy Rate
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="razor-border aspect-square w-full max-w-[400px] rotate-3 flex items-center justify-center p-8 bg-black/40">
              <div className="w-full h-full border border-white/5 flex items-center justify-center -rotate-6 bg-black/20">
                <span className="material-symbols-outlined text-white/20 text-9xl">
                  memory
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="px-8 py-24 max-w-[980px] mx-auto text-center">
        <div className="separator-line h-px w-full mb-24" />
        <h2 className="font-h2 text-white mb-8">The Vision</h2>
        <p className="font-h3 text-on-surface/80 leading-relaxed mb-12">
          We are building a faster, safer visual web. A future where every image
          is accessible, every site is optimized, and no user privacy is
          sacrificed in the process.
        </p>
        <a
          href="/studio"
          className="bg-white text-black px-12 py-5 font-display tracking-tight text-lg uppercase font-bold shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] hover:scale-[1.02] transition-transform"
        >
          Join the Mission
        </a>
      </section>
    </main>
  );
}
