import { StoryblokCardGridSection } from "@/utils/storyblok-types.generated";
import RichText from "../atoms/RichText";
import { Blok } from "@/utils/types";
import PaperTextureBackground from "../molecules/paper-texture-background";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

export const SbCardGridSection = ({ blok }: Blok<StoryblokCardGridSection>) => {
  const { titulo, cards } = blok;
  return (
    <section
      {...storyblokEditable(blok)}
      className="relative w-full flex overflow-hidden min-h-screen items-center justify-center"
    >
      <PaperTextureBackground className="bg-app-neutral-10" opacity={50} version={2} />
      <div className="relative w-full flex flex-col px-8 sm:px-24 py-24 sm:py-36 lg:gap-20">
        <h1 className="title-4xl text-center">{titulo}</h1>

        <div className="flex flex-wrap justify-evenly gap-10 mt-12">
          {cards?.map((c) => (
            <div
              key={c._uid}
              className="flex-1 min-w-[180px] basis-[18%] max-w-[300px] flex flex-col items-center text-center gap-6 lg:gap-10"
              style={{ flexBasis: "18%" }}
            >
              <Image
                src={c.imagem.filename!}
                alt={c.titulo}
                width={80}
                height={80}
                className="rounded-lg size-[80px]"
              />
              <h3 className="text-lg font-medium">{c.titulo}</h3>
              <RichText richText={c.descricao} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
