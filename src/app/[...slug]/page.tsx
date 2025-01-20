import { fetchStory } from "@/utils/storyblok";
import { StoryblokHeader, StoryblokPagina } from "@/utils/storyblok-types.generated";
import { ISbStory, StoryblokComponent } from "@storyblok/react";
import { notFound } from "next/navigation";

async function getProps(slug: string[]) {
  return Promise.all([
    fetchStory<ISbStory<StoryblokPagina>["data"]>(`${["cdn/stories", slug[0]].join("/")}`),
    fetchStory<ISbStory<StoryblokHeader>["data"]>(
      `${["cdn/stories", "layout", "header"].join("/")}`
    ),
  ])
    .then(([body, header]) => ({
      body: body.data.story.content,
      header: header.data.story.content,
    }))
    .catch(notFound);
}

export default async function DynamicPage({ params }: { params: { slug: string[] } }) {
  const slug = params && Array.isArray(params.slug) ? params.slug : ["home"];
  const { body, header } = await getProps(slug);

  return (
    <>
      {body.header && <StoryblokComponent blok={header} />}
      <StoryblokComponent blok={body} />
    </>
  );
}
