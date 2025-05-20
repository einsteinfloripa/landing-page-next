import { StoryblokAboutHero } from "@/utils/storyblok-types.generated";
import { Blok } from "@/utils/types";
import RichText from "../atoms/RichText";
import { storyblokEditable } from "@storyblok/react";
import PaperTextureBackground from "../molecules/paper-texture-background";
import Image from "next/image";
import { cn } from "@/lib/utils";

const imagePositions = [
  "absolute block top-[8%] -left-[3%] lg:top-[10%] lg:left-[10%] -rotate-3",
  "absolute block bottom-[4%] -right-[3%] lg:top-[40%] lg:left-[-5vw] -rotate-1",
  "absolute hidden lg:block bottom-[6%] left-[24%] -rotate-3",
  "absolute hidden lg:block bottom-[8%] right-[18%] rotate-6",
  "absolute hidden lg:block top-[50%] right-[-10vw] -rotate-3",
  "absolute hidden lg:block top-[10%] right-[10%] -rotate-2",
];

const SbAboutHero = ({ blok }: Blok<StoryblokAboutHero>) => {
  const { titulo, descricao, imagens } = blok;
  return (
    <section
      {...storyblokEditable(blok)}
      className="relative flex justify-center text-white min-h-screen overflow-hidden"
    >
      <PaperTextureBackground className="bg-app-blue-500" />
      <div className="relative flex w-full flex-col gap-8 justify-center text-center xl:mb-10 z-10 max-w-[700px] px-5 sm:px-auto">
        <h1 className="title-4xl">{titulo}</h1>
        <RichText richText={descricao} />
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

export default SbAboutHero;
