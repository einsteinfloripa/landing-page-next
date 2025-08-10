import { StoryblokEtapasSection } from "@/utils/storyblok-types.generated";
import RichText from "../atoms/RichText";
import { Blok } from "@/utils/types";
import PaperTextureBackground from "../molecules/paper-texture-background";
import { storyblokEditable } from "@storyblok/react";

export const SbEtapasSection = ({ blok }: Blok<StoryblokEtapasSection>) => {
  const { titulo, subtitulo, etapas } = blok;
  return (
    <section
      {...storyblokEditable(blok)}
      className="relative w-full flex overflow-hidden min-h-screen items-center justify-center"
    >
      <PaperTextureBackground className="bg-app-neutral-10" opacity={50} version={2} />
      <div className="relative w-full flex flex-col sm:px-24 py-24 sm:py-36 px-4">
        <div className="flex flex-col text-center w-full gap-1 items-center justify-center xl:mb-10 z-10 px-5 sm:px-auto">
          <h4 className="uppercase text-app-neutral-200 font-bold">{subtitulo}</h4>
          <h1 className="title-4xl">{titulo}</h1>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-20 mt-12">
          {etapas?.map((e, i) => (
            <div
              key={e._uid}
              className="flex-1 min-w-[180px] max-w-[220px] basis-[18%] flex flex-col items-center text-center gap-6"
              style={{ flexBasis: "18%" }}
            >
              <div className="p-1 size-[80px] rounded-lg bg-app-blue-50 flex items-center justify-center">
                <h2 className="text-app-blue-700 title-3xl">{i + 1}</h2>
              </div>

              <h3 className="text-lg font-medium">{e.titulo}</h3>
              <RichText richText={e.descricao} className={{ paragraph: "text-app-blue-900" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
