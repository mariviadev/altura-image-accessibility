export default function Terms() {
  return (
    <main className="relative px-8 py-24">
      <div className="absolute inset-0 radial-glow opacity-30 -z-10" />
      <section className="max-w-[920px] mx-auto">
        <span className="font-label-sm text-white/40 mb-4 tracking-[0.2em] uppercase inline-block">
          Terms of Service
        </span>
        <h1 className="font-h1 text-white mb-6">Use Altura responsibly.</h1>
        <p className="font-body-lg text-on-surface-variant mb-10">
          Altura generates AI-assisted alt text, captions, SEO titles, and meta
          descriptions. The output is a drafting aid, not a guarantee of
          accuracy, accessibility compliance, ranking performance, or legal
          suitability.
        </p>

        <div className="space-y-5">
          <section className="glass-card p-6">
            <h2 className="font-h3 text-white mb-3">Your Responsibility</h2>
            <p className="font-body-md text-white/70">
              You are responsible for the images you upload, the URLs you submit,
              and how you use generated metadata. Review and edit AI output
              before publishing it.
            </p>
          </section>

          <section className="glass-card p-6">
            <h2 className="font-h3 text-white mb-3">Hosted Providers</h2>
            <p className="font-body-md text-white/70">
              Altura depends on Hugging Face Inference Providers and the active
              third-party model provider. Availability, supported models, rate
              limits, speed, and provider access may change without notice.
            </p>
          </section>

          <section className="glass-card p-6">
            <h2 className="font-h3 text-white mb-3">Acceptable Use</h2>
            <p className="font-body-md text-white/70">
              Do not use Altura to process images you do not have rights to use,
              to violate privacy rights, to create misleading metadata, or to
              submit unlawful, harmful, or prohibited content.
            </p>
          </section>

          <section className="glass-card p-6">
            <h2 className="font-h3 text-white mb-3">No Warranty</h2>
            <p className="font-body-md text-white/70">
              Altura is provided as-is for metadata generation and portfolio
              demonstration. AI systems can miss context, infer details
              incorrectly, or produce wording that needs human judgment.
            </p>
          </section>

          <section className="glass-card p-6">
            <h2 className="font-h3 text-white mb-3">Third-Party Terms</h2>
            <p className="font-body-md text-white/70">
              Your use of hosted inference may also be subject to Hugging Face
              and provider-specific terms, policies, and limits. See the{" "}
              <a
                href="https://huggingface.co/docs/inference-providers/en/index"
                className="underline decoration-white/30 hover:decoration-white"
              >
                Hugging Face Inference Providers documentation
              </a>{" "}
              for current provider information.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
