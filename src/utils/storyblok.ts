import { getStoryblokApi, ISbResult, ISbStoriesParams } from "@storyblok/react";

interface TypedISbResult<T> extends Omit<ISbResult, "data"> {
  data: T;
}

export async function fetchStory<T>(
  storyUrl: string,
  apiParams?: Omit<ISbStoriesParams, "version">
) {
  const storyblokApi = getStoryblokApi();

  return storyblokApi
    .get(storyUrl, {
      ...apiParams,
      version: process.env.NODE_ENV === "production" ? "published" : "draft",
      cv: process.env.NODE_ENV === "production" ? undefined : Date.now(),
    })
    .then((res) => res as TypedISbResult<T>);
}
