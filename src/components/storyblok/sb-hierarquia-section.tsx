import { StoryblokHierarquiaSection } from "@/utils/storyblok-types.generated";
import RichText from "../atoms/RichText";

import { Blok } from "@/utils/types";
import Image from "next/image";
import PaperTextureBackground from "../molecules/paper-texture-background";
import { storyblokEditable } from "@storyblok/react";

export const SbHierarquiaSection = ({ blok }: Blok<StoryblokHierarquiaSection>) => {
  const { titulo, descricao, organograma } = blok;
  return (
    <section {...storyblokEditable(blok)} className="relative w-full flex overflow-hidden">
      <PaperTextureBackground className="bg-app-neutral-10" opacity={40} version={2} />
      <div className="relative w-full max-w-wrapper flex flex-col lg:flex-row sm:px-24 py-24 sm:py-36 justify-between gap-10">
        <div className="flex lg:w-1/2 flex-col gap-8 justify-center xl:mb-10 z-10 px-5 sm:px-auto">
          <h1 className="title-4xl">{titulo}</h1>
          <RichText richText={descricao} />
        </div>

        <div className="lg:w-1/2">
          <Image
            src={organograma.filename!}
            alt="Organograma do Einstein Floripa"
            width={400}
            height={450}
            className="w-full max-w-[400px] h-auto object-contain mx-auto z-10"
          />
        </div>
      </div>
    </section>
  );
};
