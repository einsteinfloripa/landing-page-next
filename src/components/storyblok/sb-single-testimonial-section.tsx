import Image from "next/image";
import { StoryblokSingleTestimonalSection } from "@/utils/storyblok-types.generated";
import { Blok } from "@/utils/types";
import { StoryblokComponent } from "@storyblok/react";
import { getWebpVersionFromSBImage } from "@/lib/utils";

export const SbSingleTestimonialSection = ({ blok }: Blok<StoryblokSingleTestimonalSection>) => {
  const { imagem, testemunho, nome, apresentacao, botao } = blok;
  return (
    <div className="w-full px-auto">
      <section className="flex items-center justify-center min-h-screen px-10 text-app-neutral-900 max-w-wrapper">
        <div className="flex flex-col items-center gap-10">
          <Image
            src={getWebpVersionFromSBImage(imagem.filename!)}
            alt={imagem?.alt || ""}
            width={140}
            height={140}
            className="rounded-full border-4 border-app-blue-500"
          />
          <h1 className="body-3xl md:body-4xl max-w-[588px] text-center">"{testemunho}"</h1>
          <div className="space-y-1 md:space-x-4">
            <span className="block md:inline-block text-start body-xl-medium">{nome}</span>
            <span className="hidden md:inline-block text-app-neutral-300">──</span>
            <span className="block md:inline-block text-start body-small text-app-neutral-300">
              {apresentacao}
            </span>
          </div>
          {}
          {(botao ?? []).map((b, index) => (
            <StoryblokComponent key={index} blok={b} />
          ))}
        </div>
      </section>
    </div>
  );
};
