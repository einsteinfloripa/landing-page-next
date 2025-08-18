import SbFooter from "@/components/storyblok/sb-footer";
import SbHeader from "@/components/storyblok/sb-header";
import { fetchStory } from "@/utils/storyblok";
import {
  StoryblokFooter,
  StoryblokHeader,
  StoryblokPagina,
} from "@/utils/storyblok-types.generated";
import { StoryblokServerComponent } from "@storyblok/react/rsc";
import { notFound } from "next/navigation";

async function getProps(slug: string[]) {
  return Promise.all([
    fetchStory<StoryblokPagina>(`${[slug[0]].join("/")}`),
    fetchStory<StoryblokHeader>(`${["layout", "header"].join("/")}`),
    fetchStory<StoryblokFooter>(`${["layout", "footer"].join("/")}`),
  ])
    .then(([body, header, footer]) => ({
      body: body.story.content,
      header: header.story.content,
      footer: footer.story.content,
    }))
    .catch(notFound);
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug: slugParams } = await params;
  const slug = slugParams && Array.isArray(slugParams) ? slugParams : ["home"];
  const { body, header, footer } = await getProps(slug);
  const { corDoFooter } = body;

  return (
    <>
      {body.header && <SbHeader blok={header} />}
      <StoryblokServerComponent blok={body} />
      {body.footer && <SbFooter blok={footer} corDoFooter={corDoFooter} />}
    </>
  );
}
