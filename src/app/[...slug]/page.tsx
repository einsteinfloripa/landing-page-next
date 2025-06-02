import { fetchStory } from "@/utils/storyblok";
import { StoryblokFooter, StoryblokHeader, StoryblokPagina } from "@/utils/storyblok-types.generated";
import { ISbStory, StoryblokComponent } from "@storyblok/react";
import { notFound } from "next/navigation";

async function getProps(slug: string[]) {
  return Promise.all([
    fetchStory<ISbStory<StoryblokPagina>["data"]>(`${["cdn/stories", slug[0]].join("/")}`),
    fetchStory<ISbStory<StoryblokHeader>["data"]>(
      `${["cdn/stories", "layout", "header"].join("/")}`
    ),
    fetchStory<ISbStory<StoryblokFooter>["data"]>(
      `${["cdn/stories", "layout", "footer"].join("/")}`
    ),
  ])
    .then(([body, header, footer]) => ({
      body: body.data.story.content,
      header: header.data.story.content,
      footer: footer.data.story.content,
    }))
    .catch(notFound);
}

export default async function DynamicPage({ params }: { params: { slug: string[] } }) {
  const slug = params && Array.isArray(params.slug) ? params.slug : ["home"];
  const { body, header, footer } = await getProps(slug);

  return (
    <>
      {body.header && <StoryblokComponent blok={header} />}
      <StoryblokComponent blok={body} />
      {body.footer && <StoryblokComponent blok={footer} />}
    </>
  );
}
