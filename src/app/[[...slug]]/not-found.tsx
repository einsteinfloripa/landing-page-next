import Headline from "@/components/atoms/Headline";
import PaperTextureBackground from "@/components/molecules/paper-texture-background";
import { fetchStory } from "@/utils/storyblok";
import { notFound } from "next/navigation";
import ThreeArrowsDraw from "@/assets/ilustrations/three-arrows-draw.svg";
import Image from "next/image";
import SbHeader from "@/components/storyblok/sb-header";
import { StoryblokFooter, StoryblokHeader } from "@/utils/storyblok-types.generated";
import SbFooter from "@/components/storyblok/sb-footer";

async function getProps() {
  return Promise.all([
    fetchStory<StoryblokHeader>(`${["layout", "header"].join("/")}`),
    fetchStory<StoryblokFooter>(`${["layout", "footer"].join("/")}`),
  ])
    .then(([header, footer]) => ({
      header: header.story.content,
      footer: footer.story.content,
    }))
    .catch(notFound);
}

export default async function NotFound() {
  const { header, footer } = await getProps();

  return (
    <>
      {header && <SbHeader blok={header} />}
      <section className="relative w-full flex overflow-hidden min-h-screen items-center justify-center text-white sm:px-auto px-5">
        <PaperTextureBackground className="bg-white" opacity={100} version={2} />
        <div className="flex items-center justify-center flex-col gap-8">
          <div className="relative w-fit">
            <Headline
              element="h1"
              className="text-app-blue-500 title-6xl !text-[130px] md:!text-[200px]"
            >
              404
            </Headline>
            <Image
              src={ThreeArrowsDraw}
              alt=""
              className="absolute -top-[55%] md:-top-[35%] -left-[50%] md:-left-[30%] rotate-270 block"
            />
          </div>
          <Headline element="h2" className="text-app-neutral-400 title-4xl">
            Oops! Não encontramos o que você procura :(
          </Headline>
        </div>
      </section>
      {footer && <SbFooter blok={footer} corDoFooter="branco" />}
    </>
  );
}
