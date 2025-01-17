import { StoryblokMainHero } from "@/utils/storyblok-types.generated";
import { CrazyEinsteinBadget } from "../molecules/crazy-einstein-badget";
import { Sticker } from "../molecules/sticker";
import { Blok } from "@/utils/types";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { ImageSection } from "../organisms/image-section";

export const SbMainHero = ({ blok }: Blok<StoryblokMainHero>) => {
  const { titulo, subtitulo, acoes, cardTitulo, cardSubtitulo, imagem, imagemMobile } = blok;

  return (
    <div {...storyblokEditable(blok)} className="w-full px-5 sm:px-auto">
      <section className="relative flex justify-center max-w-wrapper">
        <div className="flex flex-col md:items-center px-4 gap-7 mt-14 md:mt-28">
          <h1 className="title-6xl md:text-center max-w-[720px] md:mt-28">{titulo}</h1>
          <p className="md:text-center md:max-w-[514px]">{subtitulo}</p>
          <div className="flex gap-2">
            {(acoes ?? []).map((acao, index) => (
              <StoryblokComponent key={index} blok={acao} />
            ))}
          </div>
        </div>
        <CrazyEinsteinBadget className="hidden lg:block absolute top-20 right-32 z-50" />
        <Sticker
          title={cardTitulo}
          subtitle={cardSubtitulo}
          className="hidden lg:block absolute -rotate-12 top-96 left-32"
        />
      </section>

      <ImageSection desktopImage={imagem} mobileImage={imagemMobile} />
    </div>
  );
};
