import { getStoryblokApi, StoryblokComponent } from "@storyblok/react";

export default async function DynamicPage({ params }: { params: { slug: string[] } }) {
  const slug = params && Array.isArray(params.slug) ? params.slug.join("/") : "home";
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: process.env.NODE_ENV === "production" ? "published" : "draft",
    cv: process.env.NODE_ENV === "production" ? undefined : Date.now(),
  });

  return <StoryblokComponent blok={data.story.content} />;
}
