import { Blok } from "@/utils/types";
import { StoryblokPagina } from "@/utils/storyblok-types.generated";
import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc";

function GenericPage({ blok }: Blok<StoryblokPagina>) {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body?.map((component, index) => (
        <StoryblokServerComponent key={index} blok={component} />
      ))}
    </main>
  );
}

export default GenericPage;
