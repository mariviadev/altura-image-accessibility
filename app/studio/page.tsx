"use client";
import { useEffect, useRef, useState } from "react";

export default function Studio() {
  const fileInput = useRef<HTMLInputElement>(null);
  const [imgSrc, setImgSrc] = useState<string>("");
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(null), 1500);
    return () => clearTimeout(t);
  }, [copied]);

  function onDrop(e: React.DragEvent) {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (f) readFile(f);
  }
  function readFile(f: File) {
    const reader = new FileReader();
    reader.onload = () => setImgSrc(String(reader.result));
    reader.readAsDataURL(f);
  }

  return (
    <div className="px-8 py-10 max-w-[1280px] mx-auto">
      {/* Top utility bar */}
      <div className="mb-4 flex items-center justify-between">
        <div className="glass-surface px-3 py-1 border border-white/10 text-white/80 font-display text-sm tracking-tight">
          Stitch – Design with AI
        </div>
        <div className="flex items-center gap-2 text-white/60 text-xs uppercase">
          <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
          System Ready
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[560px_1fr] gap-6">
        {/* Left: Fixed dropzone/preview + URL */}
        <section className="glass-surface glass-border-gradient p-6 rounded-lg h-full obsidian-glow relative">
          {/* Left column title */}
          <div className="mb-4">
            <h2 className="font-display text-white text-2xl tracking-tight">
              Drop your asset or paste URL
            </h2>
          </div>
          <div
            className="relative w-full aspect-square max-w-[520px] mx-auto border-2 border-dashed border-white/10 rounded-lg overflow-hidden hover:border-white/30 hover:bg-white/[0.02] transition-all"
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDrop}
            role="region"
            aria-label="Upload image"
          >
            {/* Click-to-upload overlay */}
            <input
              ref={fileInput}
              type="file"
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer z-10"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) readFile(f);
              }}
            />
            {/* Image fills without layout shift */}
            {imgSrc && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={imgSrc}
                alt="Preview"
                className="absolute inset-0 w-full h-full object-contain"
              />
            )}
            {/* Clear image button */}
            {imgSrc && (
              <button
                type="button"
                aria-label="Remove image"
                onClick={() => {
                  setImgSrc("");
                  setUrl("");
                  try {
                    if (fileInput.current) fileInput.current.value = "";
                  } catch {}
                }}
                className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 glass-surface px-3 py-1 border border-white/10 text-white/80 text-xs uppercase tracking-widest hover:bg-white/10 focus-ring inline-flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-sm">close</span>
                Remove
              </button>
            )}
            {!imgSrc && (
              <div className="absolute inset-0 grid place-items-center text-center text-white/70">
                <div>
                  <div className="material-symbols-outlined text-5xl mb-3">
                    cloud_upload
                  </div>
                  <p className="font-display text-white mb-1">
                    Drop image here
                  </p>
                  <p className="text-white/50">or click to browse from files</p>
                </div>
              </div>
            )}
            {/* Frame corners */}
            <div className="absolute inset-0 pointer-events-none border border-white/10 flex flex-col justify-between p-4">
              <div className="flex justify-between">
                <span className="w-4 h-4 border-t border-l border-white/40" />
                <span className="w-4 h-4 border-t border-r border-white/40" />
              </div>
              <div className="flex justify-between">
                <span className="w-4 h-4 border-b border-l border-white/40" />
                <span className="w-4 h-4 border-b border-r border-white/40" />
              </div>
            </div>
          </div>
          <div className="mt-6 space-y-2">
            <div className="flex gap-2">
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://image-url.com/asset.jpg"
                className="flex-1 bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-white/40"
              />
              <button
                onClick={() => setImgSrc(url)}
                className="bg-white text-black px-8 py-3 font-label-sm uppercase tracking-widest metallic-button-inset hover:opacity-90 active:scale-95"
              >
                Analyze
              </button>
            </div>
          </div>
        </section>

        {/* Right: Generated Insights */}
        <aside className="glass-surface glass-border-gradient p-6 rounded-lg flex flex-col gap-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="font-display text-[18px] tracking-tight text-white">
                Metadata Output
              </h2>
              <p className="font-label-sm text-white/40 uppercase tracking-widest mt-1">
                Generated by Altura v2.4
              </p>
            </div>
            <div className="px-3 py-1 bg-white/10 border border-white/10 rounded font-label-sm text-white/60">
              LIVE ANALYZER
            </div>
          </div>
          {/* Single-column stacked cards */}
          <div className="grid grid-cols-1 gap-4">
            {[
              { title: "Alt Text", body: "Waiting for image..." },
              { title: "Caption", body: "Waiting for image..." },
              { title: "SEO Title", body: "Waiting for image..." },
              { title: "SEO Description", body: "Waiting for image..." },
            ].map((c) => (
              <div
                key={c.title}
                className="glass-surface glass-border-gradient p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-white/50 uppercase mb-1">
                      {c.title}
                    </span>
                    {/* subtle sublabels to mirror screenshots */}
                    <span className="text-white/30 text-[10px] uppercase tracking-widest">
                      {c.title === "Alt Text"
                        ? "Accessibility Focus"
                        : c.title === "Caption"
                          ? "Editorial Standard"
                          : c.title === "SEO Title"
                            ? "Click-Through Optimized"
                            : "Index Strategy"}
                    </span>
                  </div>
                  <button
                    className="text-white/40 hover:text-white text-sm"
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(c.body);
                        setCopied(c.title);
                      } catch {}
                    }}
                    aria-label={`Copy ${c.title}`}
                  >
                    <span className="material-symbols-outlined text-base">
                      content_copy
                    </span>
                  </button>
                </div>
                {c.title === "Alt Text" || c.title === "Caption" ? (
                  <p className="font-body-md italic text-white/90 leading-relaxed">
                    {c.body}
                  </p>
                ) : c.title === "SEO Title" ? (
                  <p className="font-body-md text-white font-bold uppercase tracking-tight">
                    {c.body}
                  </p>
                ) : (
                  <p className="font-body-md text-white/80 leading-relaxed">
                    {c.body}
                  </p>
                )}
              </div>
            ))}
          </div>
          {/* a11y notifications */}
          <div role="status" aria-live="polite" className="sr-only">
            {copied ? `${copied} copied to clipboard` : ""}
          </div>
          {/* footer statuses */}
          <div className="mt-2 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-white/40">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                <span>Model Loaded</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                <span>WASM Enabled</span>
              </div>
            </div>
            <button className="font-label-sm text-white/80 hover:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-base">
                refresh
              </span>{" "}
              Regenerate
            </button>
          </div>
          {/* toast */}
          {copied && (
            <div className="fixed bottom-6 right-6 glass-surface glass-border-gradient px-4 py-2 text-sm">
              <span className="text-white/80">{copied} copied</span>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
