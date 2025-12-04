import Image from "next/image";
import { StoryblokSingleTestimonalSection } from "@/utils/storyblok-types.generated";
import { Blok } from "@/utils/types";
import PaperTextureBackground from "../molecules/paper-texture-background";

export const SbSingleTestimonialSection = ({ blok }: Blok<StoryblokSingleTestimonalSection>) => {
  const { imagem, testemunho, nome, apresentacao } = blok;
  return (
    <section className="relative w-full px-auto">
      <PaperTextureBackground className="bg-app-blue-500 rotate-180" version={2} opacity={70} />
      <div className="flex items-center justify-center min-h-screen px-10 max-w-wrapper text-white">
        <div className="flex flex-col items-center gap-10">
          {(() => {
            const rawSrc = imagem.filename!;
            const src = rawSrc.startsWith("//")
              ? `https:${rawSrc}`
              : !rawSrc.startsWith("http") && !rawSrc.startsWith("/")
              ? `/${rawSrc}`
              : rawSrc;
            return (
              <Image
                src={src}
                alt={imagem?.alt || ""}
                width={140}
                height={140}
                className="rounded-full border-4 border-app-blue-500"
              />
            );
          })()}
          <h1 className="body-3xl md:body-4xl max-w-[588px] text-center">
            &quot;{testemunho}&quot;
          </h1>
          <div className="space-y-1 md:space-x-4">
            <span className="block md:inline-block text-start body-xl-medium">{nome}</span>
            <span className="hidden md:inline-block">──</span>
            <span className="block md:inline-block text-start body-small">{apresentacao}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
