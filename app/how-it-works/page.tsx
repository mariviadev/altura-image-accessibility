export default function HowItWorks() {
  return (
    <div className="relative">
      <div className="absolute inset-0 radial-glow opacity-40 -z-10" />
      <header className="pt-28 pb-12 px-8 text-center">
        <span className="inline-block glass-card border border-white/10 px-4 py-1 rounded-full text-white/60 text-[10px] font-display uppercase tracking-widest mb-6">
          Technological Foundation
        </span>
        <h1 className="font-h1 text-white mb-6">
          Intelligence without{" "}
          <span className="text-white/40">the compromise.</span>
        </h1>
        <p className="font-body-lg max-w-2xl mx-auto text-white/70">
          Altura uses a secure Next.js API route to send images to Hugging Face
          Inference Providers, where hosted vision-language models generate
          structured SEO metadata.
        </p>
      </header>
      <div className="max-w-[1280px] mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="font-h2 text-white mb-4">
            The Architecture: Hosted VLM Inference
          </h2>
          <p className="font-body-lg text-white/70 mb-6">
            The browser handles upload and preview. The server keeps the API
            token private, forwards the image to a VLM provider, and returns
            structured copy for each metadata field.
          </p>
          <div className="space-y-5">
            <div className="flex gap-4 items-start">
              <div className="glass-card p-2 border border-white/10">⚙️</div>
              <div>
                <h4 className="font-display text-sm font-bold uppercase tracking-tight text-white mb-1">
                  Secure API Route
                </h4>
                <p className="text-white/60 text-sm">
                  Tokens stay server-side while requests are sent over HTTPS.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="glass-card p-2 border border-white/10">🧠</div>
              <div>
                <h4 className="font-display text-sm font-bold uppercase tracking-tight text-white mb-1">
                  Vision-Language Models
                </h4>
                <p className="text-white/60 text-sm">
                  Hosted models read the image and generate SEO-aware metadata.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="glass-card p-10 razor-edge relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 text-white/10 text-8xl font-black">
            01
          </div>
          <div className="h-64 w-full border border-white/10 bg-black/40 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEQli_xyHQGHi9N9szHSu-fOht3GXeL9JqrW0jVZOPts3oATXe2zQY6GV3loerybz0iZAZEzD_08zOxHx03FCZlDoRqIJ1jXkYlDAZ7s2FCm9DXU46Hjp_6f6ObhH6W7OVIRLnu9YocZWDlYTlxANDubhjJPLAKXBm8xAzeE1TgVDQIshCNJX12YT40WnP17WNAkamD9NVwWaFiGo7iQ-YMegxlWg-jO35CgGTw5H0d5_i7PeV2-UBfpG7ReiiHSXCEYb_dxSYOcg"
              alt="abstract 3d visualization of glowing neural networks and circuit lines on a dark metallic background"
              className="w-full h-full object-cover grayscale opacity-40 mix-blend-screen"
            />
          </div>
          <p className="text-xs text-white/40 uppercase tracking-widest mt-4">
            Schematic: Hosted Inference Flow
          </p>
        </div>
      </div>
      <section className="py-16 bg-[var(--surface-container-lowest)]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-10">
            <h2 className="font-h2 text-white mb-2">Privacy by Design</h2>
            <p className="font-body-lg text-white/70">
              Clear boundaries for every upload and generated response.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-8 glass-card p-10">
              <h3 className="font-h3 text-white mb-2">No App Storage</h3>
              <p className="font-body-md text-white/70 max-w-md">
                Altura does not intentionally store uploaded images, image URLs,
                prompts, or generated metadata in an application database.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 glass-card p-10">
              <h3 className="font-h3 text-white mb-2">Provider Routing</h3>
              <p className="font-body-md text-white/70 text-sm">
                Requests are routed through Hugging Face to the selected
                inference provider for the active model.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 glass-card p-10">
              <h3 className="font-h3 text-white mb-2">Internet Required</h3>
              <p className="font-body-md text-white/70 text-sm">
                The Studio needs network access because the VLM runs on hosted
                inference infrastructure.
              </p>
            </div>
            <div className="col-span-12 md:col-span-8 glass-card p-0 overflow-hidden relative">
              <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-black to-transparent" />
              <div className="h-60 w-full bg-black/30" />
              <div className="p-6">
                <h3 className="font-h3 text-white mb-1">Transparent Limits</h3>
                <p className="font-body-md text-white/70">
                  Sensitive or confidential images should only be uploaded when
                  you are comfortable with provider processing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Performance */}
      <section className="py-24 max-w-[1280px] mx-auto px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <h2 className="font-h2 text-white mb-6">
              Low-Friction <br />
              Performance
            </h2>
            <p className="text-on-surface-variant mb-6">
              Hosted VLMs avoid multi-gigabyte browser downloads while keeping
              analysis fast enough for portfolio and production-style demos.
            </p>
            <a
              href="#"
              className="border border-white/20 text-white px-8 py-3 font-display tracking-tight text-sm uppercase hover:bg-white/5 transition-all"
            >
              View Benchmarks
            </a>
          </div>
          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 border border-white/5 bg-[var(--surface-container-high)] rounded-lg relative">
              <div className="absolute top-4 right-4">
                <span className="text-xs font-bold text-white/20 uppercase">
                  gb
                </span>
              </div>
              <div className="text-5xl font-black text-white mb-2">0</div>
              <div className="font-label-sm text-white/40 uppercase tracking-widest">
                Browser Model Download
              </div>
              <div className="mt-4 h-1 w-full bg-white/10">
                <div className="h-1 bg-white w-0" />
              </div>
            </div>
            <div className="p-8 border border-white/5 bg-[var(--surface-container-high)] rounded-lg relative">
              <div className="absolute top-4 right-4">
                <span className="text-xs font-bold text-white/20 uppercase">
                  out
                </span>
              </div>
              <div className="text-5xl font-black text-white mb-2">4</div>
              <div className="font-label-sm text-white/40 uppercase tracking-widest">
                Metadata Outputs
              </div>
              <div className="mt-4 h-1 w-full bg-white/10">
                <div className="h-1 bg-white w-full" />
              </div>
            </div>
            <div className="p-8 border border-white/5 bg-[var(--surface-container-high)] rounded-lg relative">
              <div className="absolute top-4 right-4">
                <span className="text-xs font-bold text-white/20 uppercase">
                  db
                </span>
              </div>
              <div className="text-5xl font-black text-white mb-2">0.0</div>
              <div className="font-label-sm text-white/40 uppercase tracking-widest">
                App Storage
              </div>
              <div className="mt-4 h-1 w-full bg-white/10">
                <div className="h-1 bg-white w-0" />
              </div>
            </div>
            <div className="p-8 border border-white/5 bg-[var(--surface-container-high)] rounded-lg relative">
              <div className="absolute top-4 right-4">
                <span className="text-xs font-bold text-white/20 uppercase">
                  api
                </span>
              </div>
              <div className="text-5xl font-black text-white mb-2">HF</div>
              <div className="font-label-sm text-white/40 uppercase tracking-widest">
                Provider Router
              </div>
              <div className="mt-4 h-1 w-full bg-white/10">
                <div className="h-1 bg-white w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack / Logo Cloud */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <h4 className="font-label-sm text-white/30 uppercase tracking-[0.3em] mb-12">
            Built with leading standards
          </h4>
          <div className="flex flex-wrap justify-center gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">api</span>
              <span className="font-h3 text-xl font-bold uppercase">
                API
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">code</span>
              <span className="font-h3 text-xl font-bold uppercase">VLM</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">data_object</span>
              <span className="font-h3 text-xl font-bold uppercase">JSON</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">hub</span>
              <span className="font-h3 text-xl font-bold uppercase">HF</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
