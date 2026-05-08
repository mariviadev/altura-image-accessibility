import Link from "next/link";
import Accordion from "./components/Accordion";
import StudioTool from "./components/StudioTool";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Halo background */}
      <div className="absolute inset-0 radial-glow opacity-40 -z-10" />

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-8 hero-glow">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-8 razor-edge">
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
            with hosted vision-language models tuned for practical publishing
            workflows.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[640px] mx-auto">
            <Link
              href="/#tool"
              className="btn-primary"
            >
              Try it now
            </Link>
            <Link
              href="/#tool"
              className="btn-secondary"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      <StudioTool />

      {/* Architectural Pillars (4‑card grid) */}
      <section className="px-8 pb-24">
        <div className="max-w-[1200px] mx-auto mb-12 text-center">
          <span className="font-label-sm text-white/40 uppercase tracking-widest border-l-2 border-white pl-4 mb-4 inline-block">
            Architectural Pillars
          </span>
          <h2 className="font-h2 text-white max-w-2xl mx-auto">
            Forged for the high‑performance visual web.
          </h2>
        </div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass-card p-8 razor-edge group hover:bg-white/[0.05] transition-colors">
            <div className="w-12 h-12 glass-card rounded flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-white">bolt</span>
            </div>
            <h3 className="font-h3 mb-4">Fast Generation</h3>
            <p className="font-body-md text-on-surface-variant text-sm">
              Hosted inference keeps the app responsive without large model
              downloads in the browser.
            </p>
          </div>
          <div className="glass-card p-8 razor-edge group hover:bg-white/[0.05] transition-colors">
            <div className="w-12 h-12 glass-card rounded flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-white">
                shield_lock
              </span>
            </div>
            <h3 className="font-h3 mb-4">Privacy-Aware Routing</h3>
            <p className="font-body-md text-on-surface-variant text-sm">
              Images are sent securely to Altura&apos;s API and routed to Hugging
              Face Inference Providers for analysis.
            </p>
          </div>
          <div className="glass-card p-8 razor-edge group hover:bg-white/[0.05] transition-colors">
            <div className="w-12 h-12 glass-card rounded flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-white">
                layers
              </span>
            </div>
            <h3 className="font-h3 mb-4">Production Workflow</h3>
            <p className="font-body-md text-on-surface-variant text-sm">
              Generate distinct alt text, captions, titles, and descriptions
              from one visual analysis pass.
            </p>
          </div>
          <div className="glass-card p-8 razor-edge group hover:bg-white/[0.05] transition-colors">
            <div className="w-12 h-12 glass-card rounded flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-white">
                accessibility_new
              </span>
            </div>
            <h3 className="font-h3 mb-4">WCAG Compliance</h3>
            <p className="font-body-md text-on-surface-variant text-sm">
              Accessibility-first prompts help produce useful alt text that
              still needs human review before publishing.
            </p>
          </div>
        </div>
      </section>

      {/* Seamless Integration */}
      <section className="py-24 px-8 bg-[var(--surface-container-lowest)] relative overflow-hidden">
        <div className="absolute inset-0 radial-glow opacity-30" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-h2 mb-4">Seamless Integration</h2>
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
              Altura uses a secure server route so your Hugging Face token stays
              private. Uploaded images or image URLs are forwarded to hosted
              vision-language models for analysis; Altura does not intentionally
              store the uploaded asset or generated result.
            </Accordion>
            <Accordion title="What is the accuracy compared to human editors?">
              In blind testing, Altura&apos;s Alt‑Text was preferred 84% of the time
              over generic descriptions provided by standard human‑led
              processes.
            </Accordion>
            <Accordion title="Which browsers are supported?">
              The Studio works in modern browsers with JavaScript and an
              internet connection. Heavy model execution happens on hosted
              inference infrastructure, not in the browser.
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-8 pb-24">
        <div className="max-w-[1200px] mx-auto text-center glass-card p-16 md:p-24 razor-edge relative overflow-hidden">
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
                href="/#tool"
                className="btn-primary"
              >
                Start generating now
              </Link>
              <Link
                href="/#tool"
                className="btn-secondary"
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
