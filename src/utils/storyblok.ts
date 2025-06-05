import { getStoryblokApi } from "@/lib/storyblok";
import { ISbStoryData } from "storyblok";

export async function fetchStory<T>(slug: string) {
  getStoryblokApi();
  const version = process.env.NODE_ENV === "production" ? "published" : "draft";

  return fetch(
    `
  https://api-us.storyblok.com/v2/cdn/stories/${slug}?version=${version}&token=${process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN}`,
    { next: { tags: ["cms"] }, cache: version === "published" ? "default" : "no-store" }
  ).then((res) => res.json()) as Promise<{ story: ISbStoryData<T> }>;
}
