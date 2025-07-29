import type { ImageLoaderProps } from "next/image";

export default function imageLoader({ src, width, quality }: ImageLoaderProps) {
  // Use the Storyblok image service for images from Storyblok
  if (src.includes("a.storyblok.com")) {
    return [`${src}/m/${width}x0`, quality && `filters:quality(${quality})`]
      .filter(Boolean)
      .join("/");
  }

  // Just return the same URL when we don't have a specific service for it
  return src;
}
