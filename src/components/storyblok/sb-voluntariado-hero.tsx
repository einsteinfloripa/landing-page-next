import { StoryblokVoluntariadoHero } from "@/utils/storyblok-types.generated";
import { Blok } from "@/utils/types";
import RichText from "../atoms/RichText";
import { storyblokEditable } from "@storyblok/react";
import PaperTextureBackground from "../molecules/paper-texture-background";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ScribbleDraw from "@/assets/ilustrations/scribble-draw.svg";
import { SbButtonNav } from "./sb-nav-button";

// Tem 4 imagens, então definimos um array de posições para cada uma das imagens.
const imagePositions = [
  "absolute block top-[10%] left-[5%] -rotate-3", // top left
  "absolute block bottom-[8%] left-[5vw] -rotate-2", // bottom left
  "absolute block top-[10%] right-[5vw] rotate-3", // top right
  "absolute block bottom-[8%] right-[10%] rotate-6", // bottom right
];

const SbVoluntariadoHero = ({ blok }: Blok<StoryblokVoluntariadoHero>) => {
  const { descricao, imagens, acoes } = blok;
  return (
    <section
      {...storyblokEditable(blok)}
      className="relative flex justify-center min-h-screen overflow-hidden"
    >
      <PaperTextureBackground className="bg-white" version={2} opacity={80} />
      <div className="relative flex w-full flex-col gap-8 justify-center xl:mb-10 z-10 max-w-[700px] px-5 sm:px-auto">
        <div className="relative">
          <h1 className="title-4xl">Transforme Vidas, inclusive a Sua</h1>
          <Image
            src={ScribbleDraw}
            alt=""
            className="absolute -bottom-[30%] right  -[20%] lg:-bottom-[75%] lg:right-[23%] max-w-[310px] w-[30vw] block"
          />
        </div>
        <RichText richText={descricao} />

        <div className="flex flex-row flex-wrap gap-4 justify-center">
          {(acoes ?? []).map((acao, index) => (
            <SbButtonNav key={index} blok={acao} className="min-w-[195px]" />
          ))}
        </div>
      </div>

      {/* Imagens */}
      {(imagens ?? []).map((image, index) => (
        <div
          key={index}
          className={cn(
            imagePositions[index % imagePositions.length],
            "w-auto w-[200px] min-h-[120px] xl:w-[20vw] h-auto xl:max-w-[320px] xl:min-w-[200px] xl:min-h-[180px] xl:max-h-[200px] transition-all duration-300"
          )}
          style={{ aspectRatio: "2.4/1" }}
        >
          <Image
            src={image.asset.filename!}
            alt={image.asset.alt ?? ""}
            fill
            className="object-cover border-[6px] border-white rounded-lg"
            sizes="(max-width: 768px) 40vw, 180px"
            priority={index === 0}
          />
        </div>
      ))}
    </section>
  );
};

export default SbVoluntariadoHero;
