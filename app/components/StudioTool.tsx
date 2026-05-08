"use client";

import { useEffect, useRef, useState } from "react";
import { generateAltText } from "../lib/ai";

export default function StudioTool() {
  const fileInput = useRef<HTMLInputElement>(null);
  const [pendingImage, setPendingImage] = useState<string | File | null>(null);
  const [imgSrc, setImgSrc] = useState<string>("");
  const [selectedFileName, setSelectedFileName] = useState("");
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState<string | null>(null);
  const [results, setResults] = useState({
    altText: "",
    caption: "",
    seoTitle: "",
    seoDescription: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(null), 1500);
    return () => clearTimeout(t);
  }, [copied]);

  async function processImage(image: string | File) {
    setIsProcessing(true);
    setError(null);
    try {
      const res = await generateAltText(image);
      setResults(res);
    } catch (e) {
      setError("Failed to analyze image. Please try again.");
      console.error(e);
    } finally {
      setIsProcessing(false);
    }
  }

  function resetResults() {
    setResults({ altText: "", caption: "", seoTitle: "", seoDescription: "" });
  }

  function stageFile(file: File) {
    readFile(file);
    setPendingImage(file);
    setSelectedFileName(file.name);
    resetResults();
    setError(null);
  }

  function analyzeSelection() {
    const trimmedUrl = url.trim();

    if (trimmedUrl) {
      try {
        new URL(trimmedUrl);
        if (!trimmedUrl.startsWith("https://")) {
          setError("Only HTTPS URLs are supported.");
          return;
        }
        setImgSrc(trimmedUrl);
        setSelectedFileName("");
        setPendingImage(trimmedUrl);
        processImage(trimmedUrl);
      } catch {
        setError("Invalid URL.");
      }
      return;
    }

    if (pendingImage) {
      processImage(pendingImage);
    } else {
      setError("Choose an image or paste a direct HTTPS image URL first.");
    }
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (!f) return;
    if (f.size > 5 * 1024 * 1024) {
      setError("Image too large. Max 5MB.");
      return;
    }
    stageFile(f);
  }

  function readFile(f: File) {
    const reader = new FileReader();
    reader.onload = () => setImgSrc(String(reader.result));
    reader.readAsDataURL(f);
  }

  const resultCards = [
    {
      title: "Alt Text",
      kicker: "Accessibility Focus",
      body: results.altText || "Select an image, then click Analyze.",
      style: "italic text-white/90",
    },
    {
      title: "Caption",
      kicker: "Editorial Standard",
      body: results.caption || "Editorial caption will appear here.",
      style: "italic text-white/90",
    },
    {
      title: "SEO Title",
      kicker: "Click-Through Optimized",
      body: results.seoTitle || "Search title will appear here.",
      style: "text-white font-bold uppercase tracking-tight",
    },
    {
      title: "SEO Description",
      kicker: "Index Strategy",
      body: results.seoDescription || "Meta description will appear here.",
      style: "text-white/90",
    },
  ];

  return (
    <section id="tool" className="px-8 pb-24 scroll-mt-32">
      <div className="max-w-[1200px] mx-auto relative group">
        <div className="absolute -inset-2 bg-gradient-to-b from-white/20 to-transparent blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
        <div className="glass-card rounded-lg p-8 md:p-12 razor-edge relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[560px_1fr] gap-8">
            <section className="p-8 glass-card border border-white/10 rounded-lg">
              <div className="mb-4">
                <h2 className="font-display text-white text-2xl tracking-tight">
                  Drop your asset or paste URL
                </h2>
              </div>
              <div
                className="relative w-full aspect-square max-w-[520px] mx-auto border border-dashed border-white/10 rounded-lg overflow-hidden bg-black/20 hover:border-white/30 hover:bg-white/[0.02] transition-all"
                onDragOver={(e) => e.preventDefault()}
                onDrop={onDrop}
                role="region"
                aria-label="Upload image"
              >
                <input
                  ref={fileInput}
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer z-10"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (!f) return;
                    if (f.size > 5 * 1024 * 1024) {
                      setError("Image too large. Max 5MB.");
                      return;
                    }
                    stageFile(f);
                  }}
                />
                {imgSrc && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={imgSrc}
                    alt="Preview"
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                )}
                {imgSrc && (
                  <button
                    type="button"
                    aria-label="Remove image"
                    onClick={() => {
                      setImgSrc("");
                      setUrl("");
                      setSelectedFileName("");
                      setPendingImage(null);
                      resetResults();
                      setError(null);
                      try {
                        if (fileInput.current) fileInput.current.value = "";
                      } catch {}
                    }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 glass-surface px-4 py-1 border border-white/10 text-white/80 text-xs uppercase tracking-widest hover:bg-white/10 focus-ring inline-flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-sm">
                      close
                    </span>
                    Remove
                  </button>
                )}
                {!imgSrc && (
                  <div className="absolute inset-0 grid place-items-center text-center text-white/70">
                    <div>
                      <div className="material-symbols-outlined text-5xl mb-4">
                        cloud_upload
                      </div>
                      <p className="font-display text-white mb-2">
                        Drop image here
                      </p>
                      <p className="text-white/50">
                        or click to browse from files
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 space-y-4">
                <input
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                    if (e.target.value.trim()) {
                      setPendingImage(null);
                      setSelectedFileName("");
                      resetResults();
                    }
                  }}
                  placeholder="https://image-url.com/asset.jpg"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:ring-1 focus:ring-white/40"
                />
                <div className="glass-surface border border-white/10 rounded-lg px-4 py-4 text-sm text-white/70 min-h-[56px] flex items-center gap-4">
                  <span className="material-symbols-outlined text-lg text-white/50">
                    {url.trim() ? "link" : selectedFileName ? "draft" : "info"}
                  </span>
                  <span className="truncate">
                    {url.trim()
                      ? url.trim()
                      : selectedFileName ||
                        "Choose an image or paste a direct HTTPS image URL."}
                  </span>
                </div>
                {error && (
                  <div className="text-red-300 text-sm bg-red-950/40 border border-red-400/20 rounded-lg p-4">
                    {error}
                  </div>
                )}
                <div className="pt-4 border-t border-white/10 space-y-4">
                  <p className="text-white/50 text-xs mb-4">
                    Analysis starts only when you click the button below.
                  </p>
                  <button
                    type="button"
                    onClick={analyzeSelection}
                    disabled={isProcessing || (!pendingImage && !url.trim())}
                    className="btn-primary w-full"
                  >
                    <span className="material-symbols-outlined text-xl">
                      travel_explore
                    </span>
                    {isProcessing ? "Analyzing..." : "Analyze Image"}
                  </button>
                </div>
              </div>
            </section>

            <aside className="p-12 glass-card border border-white/10 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="font-display text-xl text-white">
                    Generated Insights
                  </h2>
                  <p className="font-label-sm text-white/40 uppercase tracking-widest mt-2">
                    Generated by Altura v2.4
                  </p>
                </div>
                <div className="px-4 py-2 bg-white/10 border border-white/10 rounded font-label-sm text-white/60">
                  LIVE ANALYZER
                </div>
              </div>

              <div className="space-y-4">
                {resultCards.map((c) => (
                  <div
                    key={c.title}
                    className="result-card bg-[var(--surface-container-high)] border border-white/10 rounded-lg p-6 shadow-[0px_4px_12px_rgba(0,0,0,0.2)]"
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex flex-col">
                        <span className="font-label-sm text-white/60 uppercase mb-2">
                          {c.title}
                        </span>
                        <span className="text-white/30 text-[10px] uppercase tracking-widest">
                          {c.kicker}
                        </span>
                      </div>
                      <button
                        type="button"
                        className="result-copy text-white/40 hover:text-white text-sm"
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
                    <p className={`font-body-md ${c.style}`}>{c.body}</p>
                  </div>
                ))}
                <div className="mt-2 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-white/40">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                      <span>API Ready</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                      <span>VLM Enabled</span>
                    </div>
                  </div>
                </div>
                <div className="text-white/50 text-xs">
                  AI-generated content — review before use.
                </div>
              </div>

              <div role="status" aria-live="polite" className="sr-only">
                {copied ? `${copied} copied to clipboard` : ""}
              </div>
              {copied && (
                <div className="fixed bottom-6 right-6 glass-surface glass-border-gradient px-4 py-2 text-sm">
                  <span className="text-white/80">{copied} copied</span>
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
