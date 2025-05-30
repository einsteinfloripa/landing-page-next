import { StoryblokDuvidasFrequentesSection } from "@/utils/storyblok-types.generated";
import RichText from "../atoms/RichText";
import { Blok } from "@/utils/types";
import PaperTextureBackground from "../molecules/paper-texture-background";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import ScribbleDrawPurple from "@/assets/ilustrations/scribble-draw-purple.svg";
import ThreeArrowsDraw from "@/assets/ilustrations/three-arrows-draw.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const SbDuvidasFrequentesSection = ({ blok }: Blok<StoryblokDuvidasFrequentesSection>) => {
  const { subtitulo, duvidas } = blok;
  return (
    <section {...storyblokEditable(blok)} className="relative w-full flex overflow-hidden">
      <PaperTextureBackground className="bg-app-neutral-10" opacity={30} version={2} />
      <div className="relative w-full flex flex-col sm:px-24 py-24 sm:py-36">
        <div className="flex flex-col text-center w-full gap-8 items-center justify-center xl:mb-10 z-10 px-5 sm:px-auto">
          <div className="relative">
            <h1 className="title-4xl">Dúvidas Frequentes</h1>
            <Image
              src={ThreeArrowsDraw}
              alt=""
              className="absolute bottom-[10%] -right-[40%] block"
            />
            <Image
              src={ScribbleDrawPurple}
              alt=""
              className="absolute -bottom-[30%] -left-[30%] max-w-[224px] max-h-[27px] w-[30vw] block"
            />
          </div>
          <RichText className={{ container: "max-w-[620px]" }} richText={subtitulo} />
        </div>

        <Accordion type="multiple">
          {duvidas.map((d) => (
            <AccordionItem
              key={d._uid}
              value={d._uid}
              className="border-y border-gray-200 hover:bg-app-neutral-50/20"
            >
              <AccordionTrigger className="flex justify-between w-full p-10">
                <p className="text-lg font-medium text-left">{d.pergunta}</p>
              </AccordionTrigger>

              <AccordionContent className="flex px-10 w-full text-left">
                <RichText richText={d.resposta} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
