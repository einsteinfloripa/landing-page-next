import { MetadataRoute } from "next";
import { fetchStories } from "@/utils/storyblok";

export async function getContentStoriesMetadata() {
  const { data } = await fetchStories("cdn/stories", {
    per_page: 50,
  });

  const stories = data.stories
    .filter((story) => !story.full_slug.includes("layout"))
    .map((story) => {
      const { published_at: lastModified } = story;
      const slug = story.full_slug === "home" ? [] : story.full_slug.split("/");

      return {
        lastModified: lastModified ? new Date(lastModified) : undefined,
        slug,
      };
    });

  // Garante que a página inicial esteja sempre presente no sitemap
  const homeStory = data.stories.find((story) => story.full_slug === "home");
  if (!homeStory) {
    stories.push({
      lastModified: undefined,
      slug: [],
    });
  }

  return stories;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  function removeTrailingSlash(url: string) {
    return url.endsWith("/") ? url.slice(0, -1) : url;
  }

  const metadata = await getContentStoriesMetadata();

  return metadata.map(({ slug, lastModified }) => ({
    lastModified,
    url: `${removeTrailingSlash("https://einsteinfloripa.com.br")}/${slug.join("/")}`,
  }));
}
