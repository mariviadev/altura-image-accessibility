import Link from "next/link";
import Accordion from "./components/Accordion";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Halo background */}
      <div className="absolute inset-0 radial-glow opacity-40 -z-10" />

      {/* Hero */}
      <section className="relative pt-28 pb-24 px-8 hero-glow">
        <div className="max-w-[1280px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 glass-card rounded-full mb-8 razor-edge">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="font-label-sm text-white/60 uppercase">
              Now in Private Beta
            </span>
          </div>
          <h1 className="font-h1 text-white mb-8 max-w-4xl mx-auto">
            Precision Visual Metadata for the Obsidian Era.
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
            Automate WCAG-compliant alt-text and SEO-rich visual descriptions
            with zero latency. Private, browser-native AI for modern scale.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/studio"
              className="bg-white text-black px-10 py-4 font-label-sm uppercase tracking-[0.2em] pressed-metal hover:opacity-90 active:scale-95 transition-all"
            >
              Try it now
            </Link>
            <Link
              href="/studio"
              className="glass-card text-white razor-edge px-10 py-4 font-label-sm uppercase tracking-[0.2em] hover:bg-white/5 active:scale-95 transition-all"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Tool mockup */}
      <section className="px-8 pb-24">
        <div className="max-w-[1280px] mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-b from-white/20 to-transparent blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
          <div className="glass-card rounded-xl p-4 md:p-8 razor-edge relative overflow-hidden">
            <div className="grid grid-cols-12 gap-6 min-h-[420px]">
              {/* Sidebar */}
              <aside className="hidden md:block col-span-3 border-r border-white/10 pr-6">
                <p className="font-label-sm text-white/30 uppercase mb-4">
                  Asset Library
                </p>
                <div className="space-y-2">
                  <div className="h-10 bg-white/5 border border-white/10 rounded-sm flex items-center px-3 gap-2 text-white/60 text-[12px]">
                    obsidian_render_01.png
                  </div>
                  <div className="h-10 bg-white/10 border border-white/20 rounded-sm flex items-center px-3 gap-2 text-white text-[12px]">
                    product_macro_4k.jpg
                  </div>
                  <div className="h-10 bg-white/5 border border-white/10 rounded-sm flex items-center px-3 gap-2 text-white/60 text-[12px]">
                    studio_lighting_set.webp
                  </div>
                </div>
              </aside>
              {/* Canvas */}
              <div className="col-span-12 md:col-span-6 flex flex-col gap-4">
                <div className="aspect-video w-full rounded-lg bg-black border border-white/5 overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1WsaeDJPCcSA0oSmybJdlVghCCEjOadnXUq_YYOIck74BKqoZlLi17FTJwWoU99ztReGGZNRXwhPFzXuSf1LERC-iH9TwVm0W1z2Gu6zvrlLeFFE3scXsFtK40aCyTAlGUqXdw8_J7sqkF8CBeCUqW5vmALmbe48OJiMhwnP_WLzcqhkgTC-lacHVmBts1k0mgW8vwRO4ig_hiFHD4CMjyozrZNaXOtFzbTzMJe6D3iOkE-OzAPbQ8gSeQTe0WE2IKEZAmuJH2fA"
                    alt="Abstract 3D render of flowing obsidian glass with metallic silver highlights and dramatic moody studio lighting on black background"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="glass-card border border-white/20 p-3">
                      <p className="text-[10px] text-white/40 font-display uppercase">
                        Metadata Preview
                      </p>
                      <p className="font-body-md">
                        Sleek obsidian curvature with silver metallic
                        reflections...
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-24 glass-card border border-white/5 rounded-lg flex flex-col items-center justify-center gap-1 text-white/60 text-[10px] font-display">
                    SHARPNESS
                  </div>
                  <div className="h-24 glass-card border border-white/5 rounded-lg flex flex-col items-center justify-center gap-1 text-white/60 text-[10px] font-display">
                    TONALITY
                  </div>
                  <div className="h-24 glass-card border border-white/5 rounded-lg flex flex-col items-center justify-center gap-1 text-white/60 text-[10px] font-display">
                    SEMANTIC
                  </div>
                </div>
              </div>
              {/* Output */}
              <aside className="hidden md:block col-span-3 border-l border-white/10 pl-6">
                <p className="font-label-sm text-white/30 uppercase mb-4">
                  AI Output
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-[10px] text-white/40 uppercase">
                      Primary Keyword
                    </p>
                    <div className="p-2 border border-white/10 rounded-sm text-[12px] text-white bg-white/5">
                      Metallic Architecture
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 uppercase">
                      Description Tag
                    </p>
                    <div className="p-2 border border-white/10 rounded-sm text-[12px] text-white bg-white/5 h-20 overflow-hidden">
                      An intricate high-resolution visualization of
                      architectural obsidian structures...
                    </div>
                  </div>
                  <Link
                    href="/studio"
                    className="block text-center w-full py-2 bg-white text-black font-display text-[11px] uppercase tracking-widest mt-2"
                  >
                    Generate JSON
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Pillars (4‑card grid) */}
      <section className="px-8 pb-24">
        <div className="max-w-[1280px] mx-auto mb-12 text-center">
          <span className="font-label-sm text-white/40 uppercase tracking-widest border-l-2 border-white pl-4 mb-4 inline-block">
            Architectural Pillars
          </span>
          <h2 className="font-h2 text-white max-w-2xl mx-auto">
            Forged for the high‑performance visual web.
          </h2>
        </div>
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-8 razor-edge group hover:bg-white/[0.05] transition-colors">
            <div className="w-12 h-12 glass-card rounded flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-white">bolt</span>
            </div>
            <h3 className="font-h3 mb-3">Instant Generation</h3>
            <p className="font-body-md text-on-surface-variant text-sm">
              Real‑time visual analysis leveraging edge‑computing for zero‑delay
              automation.
            </p>
          </div>
          <div className="glass-card p-8 razor-edge group hover:bg-white/[0.05] transition-colors">
            <div className="w-12 h-12 glass-card rounded flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-white">
                shield_lock
              </span>
            </div>
            <h3 className="font-h3 mb-3">Browser‑Based Privacy</h3>
            <p className="font-body-md text-on-surface-variant text-sm">
              Processing happens entirely on‑device. Your media assets never
              touch our servers.
            </p>
          </div>
          <div className="glass-card p-8 razor-edge group hover:bg-white/[0.05] transition-colors">
            <div className="w-12 h-12 glass-card rounded flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-white">
                layers
              </span>
            </div>
            <h3 className="font-h3 mb-3">Batch Processing</h3>
            <p className="font-body-md text-on-surface-variant text-sm">
              Engineered for petabyte‑scale libraries. Optimize entire domains
              in a single session.
            </p>
          </div>
          <div className="glass-card p-8 razor-edge group hover:bg-white/[0.05] transition-colors">
            <div className="w-12 h-12 glass-card rounded flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-white">
                accessibility_new
              </span>
            </div>
            <h3 className="font-h3 mb-3">WCAG Compliance</h3>
            <p className="font-body-md text-on-surface-variant text-sm">
              Deterministic accessibility scores that guarantee AA and AAA
              standard alignment.
            </p>
          </div>
        </div>
      </section>

      {/* Seamless Integration */}
      <section className="py-24 px-8 bg-[var(--surface-container-lowest)] relative overflow-hidden">
        <div className="absolute inset-0 radial-glow opacity-30" />
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-h2 mb-3">Seamless Integration</h2>
            <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto">
              Three steps to autonomous visual governance.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 flex flex-col items-center text-center group">
              <div className="w-24 h-24 glass-card rounded-full flex items-center justify-center razor-edge mb-6 group-hover:bg-white/10 transition-all">
                <span className="material-symbols-outlined text-3xl">
                  upload_file
                </span>
              </div>
              <h4 className="font-h3 text-lg mb-2">Upload</h4>
              <p className="text-on-surface-variant text-sm px-8">
                Drag and drop assets or connect your CMS via our SDK.
              </p>
            </div>
            <div className="hidden md:block flex-shrink-0 w-24 h-[1px] bg-gradient-to-r from-white/0 via-white/20 to-white/0" />
            <div className="flex-1 flex flex-col items-center text-center group">
              <div className="w-24 h-24 glass-card rounded-full flex items-center justify-center razor-edge mb-6 group-hover:bg-white/10 transition-all">
                <span className="material-symbols-outlined text-3xl">
                  cognition
                </span>
              </div>
              <h4 className="font-h3 text-lg mb-2">Analyze</h4>
              <p className="text-on-surface-variant text-sm px-8">
                Our vision engine identifies subjects, context, and intent with
                extreme precision.
              </p>
            </div>
            <div className="hidden md:block flex-shrink-0 w-24 h-[1px] bg-gradient-to-r from-white/0 via-white/20 to-white/0" />
            <div className="flex-1 flex flex-col items-center text-center group">
              <div className="w-24 h-24 glass-card rounded-full flex items-center justify-center razor-edge mb-6 group-hover:bg-white/10 transition-all">
                <span className="material-symbols-outlined text-3xl">
                  output_circle
                </span>
              </div>
              <h4 className="font-h3 text-lg mb-2">Export</h4>
              <p className="text-on-surface-variant text-sm px-8">
                Instant deployment of metadata to your production environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-8">
        <div className="max-w-[880px] mx-auto">
          <h2 className="font-h2 text-center mb-12">Common Queries</h2>
          <div className="space-y-4">
            <Accordion title="How does Altura ensure data privacy?" defaultOpen>
              Altura utilizes local WASM‑compiled vision models. This means 100%
              of analysis happens in your browser environment. No pixel data
              ever leaves your secure perimeter.
            </Accordion>
            <Accordion title="What is the accuracy compared to human editors?">
              In blind testing, Altura's Alt‑Text was preferred 84% of the time
              over generic descriptions provided by standard human‑led
              processes.
            </Accordion>
            <Accordion title="Which browsers are supported?">
              We support all modern Chromium‑based browsers, Safari 16+, and
              Firefox. Mobile support is optimized for iPadOS and Android
              tablets.
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-8 pb-24">
        <div className="max-w-[1280px] mx-auto text-center glass-card p-16 md:p-24 razor-edge relative overflow-hidden">
          <div className="absolute inset-0 radial-glow opacity-40" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-h1 text-h2 mb-8">
              Ready to automate your visual presence?
            </h2>
            <p className="text-on-surface-variant font-body-lg mb-12">
              Join the waitlist for our Obsidian API and start generating
              precision metadata at the edge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/studio"
                className="bg-white text-black px-12 py-5 font-label-sm uppercase tracking-widest pressed-metal hover:bg-on-surface transition-all active:scale-95 text-sm"
              >
                Start generating now
              </Link>
              <Link
                href="/studio"
                className="bg-transparent border border-white/20 text-white px-12 py-5 font-label-sm uppercase tracking-widest text-sm hover:bg-white/5 transition-all"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
