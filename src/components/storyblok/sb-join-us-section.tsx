import Image from "next/image";
import { Blok } from "@/utils/types";
import { StoryblokJoinUsSection } from "@/utils/storyblok-types.generated";
import { getWebpVersionFromSBImage } from "@/lib/utils";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import PaperTextureBackground from "../molecules/paper-texture-background";

const SbJoinUsSection = ({ blok }: Blok<StoryblokJoinUsSection>) => {
  const { cards } = blok;

  return (
    <section {...storyblokEditable(blok)} className="relative w-full relative flex">
      <PaperTextureBackground className="bg-app-dark-blue-500" />
      <div className="text-app-neutral-900 px-5 sm:px-24 py-24 sm:py-36 w-full gap-28 flex flex-col">
        <h1 className="title-4xl text-white text-center">
          Faça parte da transform<span className="text-app-yellow-500">ação</span>
        </h1>
        <ul className="flex flex-col xl:flex-row gap-10">
          {cards.map((c) => {
            return (
              <li
                key={c.titulo}
                className="flex w-full flex-col justify-center items-center gap-8 p-5 bg-white border border-black rounded-lg"
              >
                <div className="relative w-full h-[300px]">
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
                  {(c.acoes ?? []).map((acao, index) => (
                    <StoryblokComponent key={index} blok={acao} />
                  ))}
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
