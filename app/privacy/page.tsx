export default function Privacy() {
  return (
    <main className="relative px-8 py-24">
      <div className="absolute inset-0 radial-glow opacity-30 -z-10" />
      <section className="max-w-[920px] mx-auto">
        <span className="font-label-sm text-white/40 mb-4 tracking-[0.2em] uppercase inline-block">
          Privacy Policy
        </span>
        <h1 className="font-h1 text-white mb-6">How Altura handles images.</h1>
        <p className="font-body-lg text-on-surface-variant mb-10">
          Altura is a hosted AI workflow. It does not run the vision model fully
          offline in your browser. When you analyze an image, the image is sent
          to Altura&apos;s server route and then forwarded to Hugging Face Inference
          Providers so a vision-language model can generate metadata.
        </p>

        <div className="space-y-5">
          <section className="glass-card p-6">
            <h2 className="font-h3 text-white mb-3">What You Send</h2>
            <p className="font-body-md text-white/70">
              You may upload an image file or submit a direct HTTPS image URL.
              The server converts that image into the format required by the
              model request and sends it with a metadata-generation prompt.
            </p>
          </section>

          <section className="glass-card p-6">
            <h2 className="font-h3 text-white mb-3">Where It Goes</h2>
            <p className="font-body-md text-white/70">
              Requests are routed through Hugging Face&apos;s router to the selected
              inference provider for the active VLM, such as Cohere or Together
              depending on model availability and configuration. Your Hugging
              Face token stays on the server and is never exposed to the
              browser.
            </p>
          </section>

          <section className="glass-card p-6">
            <h2 className="font-h3 text-white mb-3">Storage</h2>
            <p className="font-body-md text-white/70">
              Altura does not intentionally store uploaded images, submitted
              URLs, prompts, or generated metadata in an application database.
              Hosting platforms, Hugging Face, and the selected inference
              provider may process operational logs according to their own
              policies.
            </p>
          </section>

          <section className="glass-card p-6">
            <h2 className="font-h3 text-white mb-3">Sensitive Content</h2>
            <p className="font-body-md text-white/70">
              Do not upload confidential, regulated, or highly sensitive images
              unless you are comfortable with hosted provider processing. AI
              output should be reviewed before publication.
            </p>
          </section>

          <section className="glass-card p-6">
            <h2 className="font-h3 text-white mb-3">Provider Policies</h2>
            <p className="font-body-md text-white/70">
              Hugging Face states that routed inference requests are encrypted
              in transit and that request and response bodies are not stored by
              Hugging Face when routing requests, while external providers are
              responsible for their own security policies. Review the{" "}
              <a
                href="https://huggingface.co/docs/inference-providers/security"
                className="underline decoration-white/30 hover:decoration-white"
              >
                Hugging Face Inference Providers security documentation
              </a>{" "}
              and the selected provider&apos;s policy for the most current details.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
