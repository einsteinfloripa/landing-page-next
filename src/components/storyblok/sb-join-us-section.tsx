import Image from "next/image";
import { Blok } from "@/utils/types";
import { StoryblokJoinUsSection } from "@/utils/storyblok-types.generated";
import { getWebpVersionFromSBImage } from "@/lib/utils";
import { storyblokEditable } from "@storyblok/react";
import PaperTextureBackground from "../molecules/paper-texture-background";
import { SbButton } from "./sb-button";
import { SbButtonNav } from "./sb-nav-button";

const SbJoinUsSection = ({ blok }: Blok<StoryblokJoinUsSection>) => {
  const { cards } = blok;

  return (
    <section {...storyblokEditable(blok)} className="relative w-full relative flex">
      <PaperTextureBackground className="bg-app-dark-blue-500" />
      <div className="text-app-neutral-900 px-5 sm:px-24 py-24 sm:py-36 w-full gap-28 flex flex-col overflow-hidden">
        <h1 className="title-4xl text-white text-center">
          Faça parte da transform
          <span className="relative inline-block text-app-yellow-500">
            ação
            <span className="absolute size-[76px] border-[1.2px] border-dashed border-app-blue-200 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <span className="absolute size-[150px] border-[1.2px] opacity-90 border-dashed border-app-blue-200 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <span className="absolute size-[240px] border-[1.2px] opacity-80 border-dashed border-app-blue-200 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <span className="absolute size-[325px] border-[1.2px] opacity-70 border-dashed border-app-blue-200 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <span className="absolute size-[425px] border-[1.2px] opacity-60 border-dashed border-app-blue-200 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <span className="absolute size-[512px] border-[1.2px] opacity-40 border-dashed border-app-blue-200 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <span className="absolute size-[612px] border-[1.2px] opacity-30 border-dashed border-app-blue-200 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </span>
        </h1>
        <ul className="flex flex-col xl:flex-row gap-10 z-10">
          {cards.map((c) => {
            return (
              <li
                key={c.titulo}
                className="flex w-full flex-col justify-center items-center gap-8 p-5 bg-white border border-black rounded-lg"
              >
                <div className="relative w-full h-[300px] flex items-end">
                  <div style={{ backgroundColor: c.cor }} className="w-full h-[222px]"></div>
                  <Image
                    src={getWebpVersionFromSBImage(c.image.filename!)}
                    alt={c.image.alt ?? ""}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex flex-col gap-6 max-w-[300px]">
                  <h1 className="title-4xl text-center">{c.titulo}</h1>
                  <p className="body-regular text-center">{c.descricao}</p>
                </div>

                <div className="flex gap-8 justify-center flex-row-reverse md:flex-row">
                  {(c.acoes ?? []).map((acao, index) =>
                    acao.component === "button" ? (
                      <SbButton key={index} blok={acao} />
                    ) : (
                      <SbButtonNav key={index} blok={acao} style={{ backgroundColor: c.cor }} />
                    )
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SbJoinUsSection;
