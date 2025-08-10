import { StoryblokEquipeSection } from "@/utils/storyblok-types.generated";
import RichText from "../atoms/RichText";
import { Blok } from "@/utils/types";
import Image from "next/image";
import PaperTextureBackground from "../molecules/paper-texture-background";
import { storyblokEditable } from "@storyblok/react";
import HeartsDraw from "@/assets/ilustrations/hearts-draw.svg";
import HighlightDraw from "@/assets/ilustrations/highlight-draw.svg";
import { SbEquipeDepartamento } from "@/components/storyblok/sb-equipe-departamento";

export const SbEquipeSection = ({ blok }: Blok<StoryblokEquipeSection>) => {
  const { titulo, descricao, departamentos } = blok;
  return (
    <section {...storyblokEditable(blok)} className="relative w-full flex overflow-hidden">
      <PaperTextureBackground className="bg-app-neutral-10" opacity={20} version={2} />
      <div className="relative w-full max-w-wrapper flex flex-col sm:px-24 py-24 sm:py-36">
        <div className="flex flex-col gap-8 justify-center xl:mb-10 z-10 px-5 sm:px-auto">
          <div className="relative max-w-[742px] max-w-fit">
            <h1 className="title-4xl">{titulo}</h1>
            <Image src={HighlightDraw} alt="" className="absolute -top-24 -right-24" />
          </div>
          <RichText className={{ container: "max-w-[742px]" }} richText={descricao} />
        </div>

        <div className="relative">
          <SbEquipeDepartamento departamentos={departamentos} variant="light" />
          <Image
            src={HeartsDraw}
            alt=""
            className="absolute md:top[100vh] md:right-[-15%] max-w-[120px] w-[10vw] block top-[100vh] right-[5%] lg:top-[100vh] lg:right-[-10%]"
          />
        </div>
      </div>
    </section>
  );
};
