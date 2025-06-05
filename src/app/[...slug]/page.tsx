import { fetchStory } from "@/utils/storyblok";
import { StoryblokPagina } from "@/utils/storyblok-types.generated";
import { StoryblokServerComponent } from "@storyblok/react/rsc";
import { notFound } from "next/navigation";

async function getProps(slug: string[]) {
  return Promise.all([
    fetchStory<StoryblokPagina>(`${[slug[0]].join("/")}`),
    fetchStory(`${["layout", "header"].join("/")}`),
    fetchStory(`${["layout", "footer"].join("/")}`),
  ])
    .then(([body, header, footer]) => ({
      body: body.story.content,
      header: header.story.content,
      footer: footer.story.content,
    }))
    .catch(notFound);
}

export default async function DynamicPage({ params }: { params: { slug: string[] } }) {
  const slug = params && Array.isArray(params.slug) ? params.slug : ["home"];
  const { body, header, footer } = await getProps(slug);

  return (
    <>
      {body.header && <StoryblokServerComponent blok={header} />}
      <StoryblokServerComponent blok={body} />
      {body.footer && <StoryblokServerComponent blok={footer} />}
    </>
  );
}
