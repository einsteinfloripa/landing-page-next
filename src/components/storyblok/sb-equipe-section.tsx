import { StoryblokEquipeSection } from "@/utils/storyblok-types.generated";
import RichText from "../atoms/RichText";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  StoryblokEquipeCard,
  StoryblokEquipeDepartamento,
} from "@/utils/storyblok-types.generated";
import { Blok } from "@/utils/types";
import Image from "next/image";
import PaperTextureBackground from "../molecules/paper-texture-background";
import { storyblokEditable } from "@storyblok/react";
import HeartsDraw from "@/assets/ilustrations/hearts-draw.svg";
import HighlightDraw from "@/assets/ilustrations/highlight-draw.svg";

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
          <Accordion type="multiple">
            {departamentos.map((d) => (
              <SbEquipeDepartamento key={d._uid} blok={d} />
            ))}
          </Accordion>
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

const SbEquipeDepartamento: React.FC<Blok<StoryblokEquipeDepartamento>> = ({ blok }) => {
  const { titulo, subtitulo, membros } = blok;
  return (
    <AccordionItem value={titulo} className="border-y border-gray-200 hover:bg-app-neutral-50/20">
      <AccordionTrigger className="flex justify-between w-full p-10">
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-medium text-left">{titulo}</p>
          <p className="text-left">{subtitulo}</p>
        </div>
      </AccordionTrigger>

      <AccordionContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 sm:gap-12 xl:gap-16 justify-center">
        {membros.map((m) => (
          <SbEquipeCard key={m._uid} blok={m} />
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};

const SbEquipeCard: React.FC<Blok<StoryblokEquipeCard>> = ({ blok }) => {
  const { imagem, nome, cargo } = blok;
  return (
    <div className="flex flex-col items-center gap-5 w-[250px]">
      <Image
        src={imagem.filename!}
        alt={nome}
        width={160}
        height={160}
        className="w-[160px] h-[160px] rounded-2xl border border-app-blue-500"
      />
      <div className="flex flex-col gap-2 items-center justify-center">
        <h3 className="text-xl">{nome}</h3>
        <p className="text-center text-app-blue-400 uppercase text-sm font-semibold">{cargo}</p>
      </div>
    </div>
  );
};
