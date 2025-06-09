import { StoryblokBeneficiosParceriaSection } from "@/utils/storyblok-types.generated";
import RichText from "../atoms/RichText";
import { Blok } from "@/utils/types";
import PaperTextureBackground from "../molecules/paper-texture-background";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

export const SbBeneficiosParceriaSection = ({ blok }: Blok<StoryblokBeneficiosParceriaSection>) => {
  const { subtitulo, titulo, cards } = blok;
  return (
    <section
      {...storyblokEditable(blok)}
      className="relative w-full flex overflow-hidden min-h-screen items-center justify-center  text-white"
    >
      <PaperTextureBackground className="bg-app-blue-500" opacity={50} version={2} />
      <div className="relative w-full flex flex-col sm:px-24 py-24 sm:py-36 gap-10 p-5">
        <div className="flex flex-col text-center w-full gap-1 items-center justify-center xl:mb-10 z-10 px-5 sm:px-auto">
          <h3 className="font-semibold uppercase text-app-neutral-50">{subtitulo}</h3>
          <h1 className="title-4xl">{titulo}</h1>
        </div>

        <div className="flex flex-wrap flex-col md:flex-row gap-10 md:gap-20">
          {cards?.map((c) => (
            <div
              key={c._uid}
              className="flex-1 flex flex-col gap-8 items-center justify-center"
              style={{ backgroundColor: c.cor }}
            >
              <Image
                src={c.imagem.filename!}
                alt={c.titulo}
                width={120}
                height={120}
                className="rounded-lg size-[120px]"
              />

              <h3 className="text-lg font-medium">{c.titulo}</h3>
              <RichText richText={c.descricao} className={{ paragraph: "text-white" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
