export default function Accessibility() {
  return (
    <main className="relative pt-28 pb-24">
      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-8 text-center mb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-white glow-halo" />
          <span className="font-label-sm uppercase tracking-widest text-white/60">
            Education Hub
          </span>
        </div>
        <h1 className="font-h1 text-gradient mb-8 max-w-4xl mx-auto">
          Bridging the Gap through Accessibility.
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto opacity-80">
          A guide to creating a truly inclusive web. Learn how semantic image
          descriptions empower users and elevate your digital presence.
        </p>
      </section>

      {/* Why Alt‑Text Matters + SEO Bridge */}
      <section className="max-w-[1280px] mx-auto px-8 mb-24">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8 glass-surface p-12 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="mb-12">
                <span className="material-symbols-outlined text-4xl text-white mb-4">
                  visibility
                </span>
                <h2 className="font-h2 mb-4">Why Alt‑Text Matters</h2>
                <p className="font-body-md text-on-surface-variant max-w-lg">
                  For millions of users relying on screen readers, alt‑text is
                  the only way to experience visual content. It transforms a
                  static image into a narrative, ensuring no one is left behind
                  in the digital age.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 border border-white/10 bg-white/5 font-label-sm">
                  SCREEN READER SUPPORT
                </div>
                <div className="px-4 py-2 border border-white/10 bg-white/5 font-label-sm">
                  INCLUSIVE DESIGN
                </div>
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 glow-halo opacity-50 group-hover:opacity-80 transition-opacity" />
          </div>
          <div className="col-span-12 md:col-span-4 glass-surface p-12 flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-4xl text-white mb-4">
                search
              </span>
              <h3 className="font-h3 text-white mb-2">The SEO Bridge</h3>
              <p className="font-body-md text-on-surface-variant opacity-70">
                Search engines cannot "see" images. Alt‑text provides the
                textual context needed to index your visuals, driving organic
                traffic through semantic relevance.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="text-4xl font-bold text-white">40%</div>
              <div className="font-label-sm uppercase text-white/40">
                Traffic Increase Potential
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crafting Precise Descriptions */}
      <section className="max-w-[1280px] mx-auto px-8 mb-24">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-h2 text-white mb-6">
              Crafting Precise Descriptions
            </h2>
            <p className="font-body-lg text-on-surface-variant">
              The art of description lies in the balance between brevity and
              detail. Follow these professional standards.
            </p>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent hidden md:block mb-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all group">
            <div className="w-12 h-12 flex items-center justify-center border border-white/20 text-white font-h3 mb-8 group-hover:bg-white group-hover:text-black transition-colors">
              01
            </div>
            <h4 className="font-h3 text-xl text-white mb-4 uppercase tracking-tight">
              Be Descriptive
            </h4>
            <p className="font-body-md text-on-surface-variant opacity-70">
              Describe the subject, the setting, and the mood. Instead of "Dog,"
              use "Golden Retriever playing with a tennis ball in a sunlit
              park."
            </p>
          </div>
          <div className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all group">
            <div className="w-12 h-12 flex items-center justify-center border border-white/20 text-white font-h3 mb-8 group-hover:bg-white group-hover:text-black transition-colors">
              02
            </div>
            <h4 className="font-h3 text-xl text-white mb-4 uppercase tracking-tight">
              Avoid "Image of"
            </h4>
            <p className="font-body-md text-on-surface-variant opacity-70">
              Screen readers already announce images as "graphic" or "image."
              Don’t waste characters repeating it; dive straight into the
              description.
            </p>
          </div>
          <div className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all group">
            <div className="w-12 h-12 flex items-center justify-center border border-white/20 text-white font-h3 mb-8 group-hover:bg-white group-hover:text-black transition-colors">
              03
            </div>
            <h4 className="font-h3 text-xl text-white mb-4 uppercase tracking-tight">
              The 125 Limit
            </h4>
            <p className="font-body-md text-on-surface-variant opacity-70">
              Most screen readers cut off descriptions at ~125 characters — keep
              your copy punchy, informative, and essential.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Copywriting for Images */}
      <section className="max-w-[1280px] mx-auto px-8 mb-24 relative">
        <div className="absolute inset-0 glow-halo opacity-30 pointer-events-none" />
        <div className="glass-surface p-12 md:p-24 overflow-hidden relative">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="font-h2 text-white">SEO Copywriting for Images</h2>
              <p className="font-body-lg text-on-surface-variant">
                True optimization happens at the intersection of natural
                language and strategic keyword placement. Learn to satisfy both
                the algorithm and the human experience.
              </p>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-white">
                    check_circle
                  </span>
                  <div>
                    <h5 className="font-h3 text-lg text-white">
                      Natural Integration
                    </h5>
                    <p className="font-body-md text-on-surface-variant opacity-60">
                      Never force keywords. If your image is of a 'minimalist
                      watch', ensure that phrase fits naturally into the
                      description of the item.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-white">
                    check_circle
                  </span>
                  <div>
                    <h5 className="font-h3 text-lg text-white">
                      Contextual Relevance
                    </h5>
                    <p className="font-body-md text-on-surface-variant opacity-60">
                      The description should relate to the surrounding text on
                      the page to build a cohesive topical authority.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full max-w-md">
              <div className="glass-surface p-8 relative">
                <div className="absolute -top-4 -left-4 px-4 py-1 bg-white text-black font-label-sm uppercase">
                  Example Architecture
                </div>
                <div className="space-y-4 pt-4">
                  <div className="h-48 w-full bg-white/5 border border-white/10 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-full h-full object-cover grayscale opacity-50"
                      alt="Modern workspace with laptop"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2xeki5U4aHgMehDDGDpUMNa9-stdLlsfxJvmTqw1t-uDlQRsAYUn6-6WVThRCLVAil-l1kV1JTYX6IJeZ23-LXHEZ0NCz7ORvABDbb4A0pmZb-UGhTeZwj-JGOTMvUKb5yUWGkh6ZCi-TAw1ChQ_I4mMVSoEC-FkW-aBoxjqa7UiyxDACyiis3jAUNAVI4DBi3vU9X7eAyDw1gWD-ELyl2s7RxsQlZl35MMdt5HBIEJ69AlPXnANjfv_KfkIPOBN0a2Lzoplqi5c"
                    />
                  </div>
                  <div className="bg-black/40 p-4 border border-white/5">
                    <p className="font-label-sm text-white/40 text-[10px] uppercase mb-2">
                      ALT TEXT CONFIGURATION
                    </p>
                    <p className="text-sm font-mono text-white/90">
                      "Professional minimalist workspace featuring a high-end
                      laptop on a dark marble desk with dramatic lighting."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Altura Standard */}
      <section className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="h-40 glass-surface flex items-center justify-center">
                <span className="material-symbols-outlined text-5xl opacity-20">
                  auto_awesome
                </span>
              </div>
              <div className="h-40 glass-surface flex items-center justify-center border-white/20 bg-white/10">
                <span className="material-symbols-outlined text-5xl text-white">
                  precision_manufacturing
                </span>
              </div>
              <div className="h-40 glass-surface flex items-center justify-center">
                <span className="material-symbols-outlined text-5xl opacity-20">
                  rocket_launch
                </span>
              </div>
              <div className="h-40 glass-surface flex items-center justify-center">
                <span className="material-symbols-outlined text-5xl opacity-20">
                  verified_user
                </span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="font-h2 text-white">The Altura Standard</h2>
            <p className="font-body-lg text-on-surface-variant">
              Writing perfect alt‑text for thousands of images is a monumental
              task. Altura provides a high‑quality, AI‑driven starting point
              that understands context, lighting, and subject matter with
              startling precision.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                <span className="text-white opacity-80">
                  99.9% Contextual Accuracy
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                <span className="text-white opacity-80">
                  Bulk API Processing
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                <span className="text-white opacity-80">
                  Multi‑language Support
                </span>
              </div>
            </div>
            <a
              href="/studio"
              className="bg-white text-black font-bold px-10 py-4 hover:bg-white/90 transition-all font-h3 text-lg inline-block"
            >
              Start Building Accessibly
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
