import type { InferenceProvider } from "@huggingface/inference";

export const runtime = "nodejs";

const VLM_MODELS = [
  process.env.HUGGINGFACE_VLM_MODEL,
  "CohereLabs/aya-vision-32b:cohere",
  "CohereLabs/command-a-vision-07-2025:cohere",
  "Qwen/Qwen3.5-9B:together",
  "google/gemma-3n-E4B-it:together",
].filter(Boolean) as string[];
const VLM_PROVIDER = (process.env.HUGGINGFACE_VLM_PROVIDER ||
  "auto") as InferenceProvider | "auto";
const MAX_IMAGE_SIZE = 8 * 1024 * 1024;

type AlturaMetadata = {
  altText: string;
  caption: string;
  seoTitle: string;
  seoDescription: string;
};

type SeoPayload = {
  altText?: string;
  caption?: string;
  seoTitle?: string;
  seoDescription?: string;
};

type ChatCompletionResponse = {
  choices?: Array<{
    message?: {
      content?: unknown;
    };
  }>;
  error?: unknown;
};

function clampText(value: string, maxLength: number) {
  const cleaned = value.replace(/\s+/g, " ").trim();

  if (cleaned.length <= maxLength) return cleaned;

  const sliced = cleaned.slice(0, maxLength).replace(/\s+\S*$/, "").trim();
  return sliced || cleaned.slice(0, maxLength).trim();
}

function clampSentence(value: string, maxLength: number) {
  const cleaned = value.replace(/\s+/g, " ").trim();

  if (cleaned.length <= maxLength) return cleaned;

  const sentenceBoundary = Math.max(
    cleaned.lastIndexOf(". ", maxLength),
    cleaned.lastIndexOf("! ", maxLength),
    cleaned.lastIndexOf("? ", maxLength),
  );

  if (sentenceBoundary > 40) {
    return cleaned.slice(0, sentenceBoundary + 1).trim();
  }

  return `${clampText(cleaned, maxLength - 1).replace(/[,:;]+$/, "")}.`;
}

function stripTerminalPunctuation(value: string) {
  return value.trim().replace(/[.!?]+$/, "");
}

function sentenceCase(value: string) {
  const cleaned = stripTerminalPunctuation(value);
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

function titleCase(value: string) {
  const minorWords = new Set([
    "a",
    "an",
    "and",
    "at",
    "by",
    "for",
    "in",
    "of",
    "on",
    "the",
    "to",
    "with",
  ]);

  return stripTerminalPunctuation(value)
    .split(/\s+/)
    .map((word, index) => {
      const lower = word.toLowerCase();
      if (index > 0 && minorWords.has(lower)) return lower;
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(" ");
}

function improveCaptionGrammar(caption: string) {
  const sentence = sentenceCase(caption)
    .replace(/^A woman standing\b/i, "A woman stands")
    .replace(/^A man standing\b/i, "A man stands")
    .replace(/^A person standing\b/i, "A person stands")
    .replace(/^A woman sitting\b/i, "A woman sits")
    .replace(/^A man sitting\b/i, "A man sits")
    .replace(/^A person sitting\b/i, "A person sits")
    .replace(/\blooking at the sunset\b/i, "looking toward the sunset");

  return `${stripTerminalPunctuation(sentence)}.`;
}

function buildFallbackMetadata(caption: string): AlturaMetadata {
  const sentence = stripTerminalPunctuation(caption);
  const polishedCaption = improveCaptionGrammar(sentence);
  const title = titleCase(
    sentence
      .replace(/^(a|an|the)\s+/i, "")
      .replace(/\bstanding on (a|an|the)?\s*/i, "on ")
      .replace(/\bsitting on (a|an|the)?\s*/i, "on ")
      .replace(/\blooking at (a|an|the)?\s*/i, "at ")
      .replace(/\b(a|an|the)\s+/gi, ""),
  );

  return {
    altText: clampText(`${sentenceCase(sentence)}.`, 125),
    caption: polishedCaption,
    seoTitle: clampText(title || "Optimized Image Metadata", 60),
    seoDescription: clampText(
      `${polishedCaption} Relevant for visual search, editorial publishing, and image SEO.`,
      150,
    ),
  };
}

function normalizeMetadata(payload: SeoPayload, caption: string): AlturaMetadata {
  const fallback = buildFallbackMetadata(caption);

  return {
    altText: clampText(payload.altText || fallback.altText, 125),
    caption: clampText(payload.caption || fallback.caption, 220),
    seoTitle: clampText(payload.seoTitle || fallback.seoTitle, 60),
    seoDescription: clampSentence(
      payload.seoDescription || fallback.seoDescription,
      155,
    ),
  };
}

function extractJsonObject(text: string) {
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) return null;

  try {
    return JSON.parse(match[0]) as SeoPayload;
  } catch {
    return null;
  }
}

async function getImageBlob(formData: FormData) {
  const file = formData.get("image");
  const imageUrl = formData.get("imageUrl");

  if (file instanceof Blob && file.size > 0) {
    if (file.size > MAX_IMAGE_SIZE) {
      throw new Error("Image too large. Max 8MB.");
    }
    return file;
  }

  if (typeof imageUrl === "string" && imageUrl.trim()) {
    const url = new URL(imageUrl);

    if (url.protocol !== "https:") {
      throw new Error("Only HTTPS image URLs are supported.");
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Unable to fetch image URL.");
    }

    const contentType = response.headers.get("content-type") || "";
    if (!contentType.startsWith("image/")) {
      throw new Error("URL must point directly to an image.");
    }

    const blob = await response.blob();
    if (blob.size > MAX_IMAGE_SIZE) {
      throw new Error("Image too large. Max 8MB.");
    }

    return blob;
  }

  throw new Error("Upload an image or provide an HTTPS image URL.");
}

async function blobToDataUrl(blob: Blob) {
  const buffer = Buffer.from(await blob.arrayBuffer());
  const mimeType = blob.type || "image/jpeg";
  return `data:${mimeType};base64,${buffer.toString("base64")}`;
}

function buildSeoInstruction() {
  return [
    "Analyze this image for accessibility and image SEO.",
    "Return only valid JSON with these exact keys: altText, caption, seoTitle, seoDescription.",
    "altText: factual, accessibility-friendly, under 125 characters.",
    "caption: natural editorial sentence with concrete visual details.",
    "seoTitle: compelling search title under 60 characters.",
    "seoDescription: search-friendly meta description under 155 characters.",
    "Do not invent details you cannot see.",
  ].join(" ");
}

async function generateMetadataWithVlm(
  token: string,
  image: Blob,
): Promise<AlturaMetadata> {
  const imageUrl = await blobToDataUrl(image);
  const errors: string[] = [];

  for (const model of VLM_MODELS) {
    const routedModel =
      VLM_PROVIDER === "auto" || model.includes(":")
        ? model
        : `${model}:${VLM_PROVIDER}`;

    try {
      const response = await fetch("https://router.huggingface.co/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: routedModel,
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: buildSeoInstruction(),
                },
                {
                  type: "image_url",
                  image_url: { url: imageUrl },
                },
              ],
            },
          ],
          max_tokens: 260,
          temperature: 0.15,
        }),
      });
      const completion = (await response.json()) as ChatCompletionResponse;

      if (!response.ok) {
        const errorText =
          typeof completion.error === "string"
            ? completion.error
            : JSON.stringify(completion.error || completion);
        throw new Error(errorText);
      }

      const content = completion.choices?.[0]?.message?.content;
      const text = typeof content === "string" ? content : "";
      const parsed = extractJsonObject(text);

      if (parsed) {
        return normalizeMetadata(
          parsed,
          parsed.caption || parsed.altText || "AI-analyzed image",
        );
      }

      errors.push(`${routedModel}: did not return valid JSON`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      errors.push(`${routedModel}: ${message}`);
      console.warn(`VLM model failed: ${routedModel}`, error);
    }
  }

  throw new Error(`VLM analysis failed. ${errors.join(" | ")}`);
}

export async function POST(request: Request) {
  const token = process.env.HUGGINGFACE_FG_TOKEN || process.env.HUGGINGFACE_TOKEN;

  if (!token) {
    return Response.json(
      { error: "Missing HUGGINGFACE_FG_TOKEN or HUGGINGFACE_TOKEN in .env.local." },
      { status: 500 },
    );
  }

  try {
    const formData = await request.formData();
    const image = await getImageBlob(formData);
    const metadata = await generateMetadataWithVlm(token, image);

    return Response.json(metadata);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to analyze image.";

    return Response.json({ error: message }, { status: 400 });
  }
}
