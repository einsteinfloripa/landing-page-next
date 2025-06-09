import { StoryblokProcessoParceriaSection } from "@/utils/storyblok-types.generated";
import RichText from "../atoms/RichText";
import { Blok } from "@/utils/types";
import PaperTextureBackground from "../molecules/paper-texture-background";
import { storyblokEditable } from "@storyblok/react";

export const SbProcessoParceriaSection = ({ blok }: Blok<StoryblokProcessoParceriaSection>) => {
  const { subtitulo, titulo, etapas } = blok;

  return (
    <section
      {...storyblokEditable(blok)}
      className="relative w-full flex overflow-hidden min-h-screen items-center justify-center  text-white"
    >
      <PaperTextureBackground className="bg-app-blue-500 rotate-180" opacity={50} version={2} />
      <div className="relative w-full flex flex-col sm:px-24 py-24 sm:py-36 gap-10 p-5">
        <div className="flex flex-col text-center w-full gap-1 items-center justify-center xl:mb-10 z-10 px-5 sm:px-auto">
          <h3 className="font-semibold uppercase text-app-neutral-50">{subtitulo}</h3>
          <h1 className="title-4xl">{titulo}</h1>
        </div>

        <div className="flex flex-wrap flex-col md:flex-row gap-10 md:gap-16 items-start">
          {etapas?.map((e, index) => (
            <div
              key={e._uid}
              className="flex-1 flex flex-col gap-8 items-center justify-center min-w-[250px]"
              style={{ backgroundColor: e.cor }}
            >
              <div className="p-1 size-[80px] rounded-lg bg-app-blue-50 flex items-center justify-center">
                <h4 className="text-app-blue-700 title-3xl">{index + 1}</h4>
              </div>
              <h3 className="text-lg font-medium">{e.titulo}</h3>
              <RichText richText={e.descricao} className={{ paragraph: "text-white" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
