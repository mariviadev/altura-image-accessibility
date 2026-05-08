export type AlturaMetadata = {
  altText: string;
  caption: string;
  seoTitle: string;
  seoDescription: string;
};

export async function generateAltText(
  image: string | File,
): Promise<AlturaMetadata> {
  const formData = new FormData();

  if (typeof image === "string") {
    formData.append("imageUrl", image);
  } else {
    formData.append("image", image);
  }

  const response = await fetch("/api/analyze", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const payload = (await response.json().catch(() => null)) as
      | { error?: string }
      | null;
    throw new Error(payload?.error || "Failed to analyze image.");
  }

  return response.json() as Promise<AlturaMetadata>;
}
