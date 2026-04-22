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
          Altura leverages browser‑native WebAssembly to run complex models
          locally — eliminating cloud inference, reducing latency, and
          preserving privacy.
        </p>
      </header>
      <div className="max-w-[1280px] mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="font-h2 text-white mb-4">
            The Architecture: Client‑Side Compute
          </h2>
          <p className="font-body-lg text-white/70 mb-6">
            We deliver optimized WASM bundles that interface directly with your
            device through WebGPU and WebAssembly.
          </p>
          <div className="space-y-5">
            <div className="flex gap-4 items-start">
              <div className="glass-card p-2 border border-white/10">⚙️</div>
              <div>
                <h4 className="font-display text-sm font-bold uppercase tracking-tight text-white mb-1">
                  WASM Runtime
                </h4>
                <p className="text-white/60 text-sm">
                  Near‑native performance within the browser sandbox.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="glass-card p-2 border border-white/10">🧠</div>
              <div>
                <h4 className="font-display text-sm font-bold uppercase tracking-tight text-white mb-1">
                  Neural Sharding
                </h4>
                <p className="text-white/60 text-sm">
                  Dynamic partitioning balances memory load across hardware.
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
            Schematic: Local Inference Engine
          </p>
        </div>
      </div>
      <section className="py-16 bg-[var(--surface-container-lowest)]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-10">
            <h2 className="font-h2 text-white mb-2">Privacy by Design</h2>
            <p className="font-body-lg text-white/70">
              The safest data is the data you never share.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-8 glass-card p-10">
              <h3 className="font-h3 text-white mb-2">No Remote Logs</h3>
              <p className="font-body-md text-white/70 max-w-md">
                Processing happens in local RAM; no server‑side logs of your
                prompts or results are ever created.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 glass-card p-10">
              <h3 className="font-h3 text-white mb-2">Incognito Compute</h3>
              <p className="font-body-md text-white/70 text-sm">
                The execution environment is sandboxed and isolated from other
                tabs.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 glass-card p-10">
              <h3 className="font-h3 text-white mb-2">Offline Utility</h3>
              <p className="font-body-md text-white/70 text-sm">
                Once cached, Altura runs without an internet connection.
              </p>
            </div>
            <div className="col-span-12 md:col-span-8 glass-card p-0 overflow-hidden relative">
              <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-black to-transparent" />
              <div className="h-60 w-full bg-black/30" />
              <div className="p-6">
                <h3 className="font-h3 text-white mb-1">Immutable Privacy</h3>
                <p className="font-body-md text-white/70">
                  A zero‑trust model that starts at the hardware level.
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
              Zero‑Latency <br />
              Performance
            </h2>
            <p className="text-on-surface-variant mb-6">
              By eliminating the round‑trip to a data center, we reduce
              inference latency from seconds to milliseconds.
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
                  ms
                </span>
              </div>
              <div className="text-5xl font-black text-white mb-2">12</div>
              <div className="font-label-sm text-white/40 uppercase tracking-widest">
                Average TTFT
              </div>
              <div className="mt-4 h-1 w-full bg-white/10">
                <div className="h-1 bg-white w-1/12" />
              </div>
            </div>
            <div className="p-8 border border-white/5 bg-[var(--surface-container-high)] rounded-lg relative">
              <div className="absolute top-4 right-4">
                <span className="text-xs font-bold text-white/20 uppercase">
                  t/s
                </span>
              </div>
              <div className="text-5xl font-black text-white mb-2">120</div>
              <div className="font-label-sm text-white/40 uppercase tracking-widest">
                Throughput Rate
              </div>
              <div className="mt-4 h-1 w-full bg-white/10">
                <div className="h-1 bg-white w-3/4" />
              </div>
            </div>
            <div className="p-8 border border-white/5 bg-[var(--surface-container-high)] rounded-lg relative">
              <div className="absolute top-4 right-4">
                <span className="text-xs font-bold text-white/20 uppercase">
                  gb
                </span>
              </div>
              <div className="text-5xl font-black text-white mb-2">0.0</div>
              <div className="font-label-sm text-white/40 uppercase tracking-widest">
                Data Uploaded
              </div>
              <div className="mt-4 h-1 w-full bg-white/10">
                <div className="h-1 bg-white w-0" />
              </div>
            </div>
            <div className="p-8 border border-white/5 bg-[var(--surface-container-high)] rounded-lg relative">
              <div className="absolute top-4 right-4">
                <span className="text-xs font-bold text-white/20 uppercase">
                  p/w
                </span>
              </div>
              <div className="text-5xl font-black text-white mb-2">10x</div>
              <div className="font-label-sm text-white/40 uppercase tracking-widest">
                Efficiency Multiplier
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
                WebGPU
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">code</span>
              <span className="font-h3 text-xl font-bold uppercase">WASM</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">data_object</span>
              <span className="font-h3 text-xl font-bold uppercase">Rust</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">hub</span>
              <span className="font-h3 text-xl font-bold uppercase">ONNX</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
