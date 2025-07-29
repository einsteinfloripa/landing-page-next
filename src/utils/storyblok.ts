import { getStoryblokApi } from "@/lib/storyblok";
import { ISbStories, ISbStoriesParams, ISbStoryData } from "@storyblok/react/rsc";

export async function fetchStory<T>(slug: string) {
  getStoryblokApi();
  const version = process.env.NODE_ENV === "production" ? "published" : "draft";

  return fetch(
    `
  https://api-us.storyblok.com/v2/cdn/stories/${slug}?version=${version}&token=${process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN}`,
    { next: { tags: ["cms"] }, cache: "no-store" }
  ).then((res) => res.json()) as Promise<{ story: ISbStoryData<T> }>;
}

export async function fetchStories<T>(
  storyUrl: string,
  apiParams: Omit<ISbStoriesParams, "version">
) {
  const storyblokApi = getStoryblokApi();
  const version = process.env.NODE_ENV === "production" ? "published" : "draft";

  return storyblokApi
    .get(storyUrl, {
      ...apiParams,
      version,
    })
    .then((res) => res as ISbStories<T>);
}
