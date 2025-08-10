import { StoryblokLinksMateriaisSection } from "@/utils/storyblok-types.generated";
import RichText from "../atoms/RichText";
import { Blok } from "@/utils/types";
import PaperTextureBackground from "../molecules/paper-texture-background";
import { storyblokEditable } from "@storyblok/react";
import { SbButtonNav } from "./sb-nav-button";
import BoaSorte from "@/assets/ilustrations/boa-sorte.svg";
import Image from "next/image";

export const SbLinksMateriaisSection = ({ blok }: Blok<StoryblokLinksMateriaisSection>) => {
  const { titulo, descricao, links } = blok;
  return (
    <section
      {...storyblokEditable(blok)}
      className="relative w-full flex overflow-hidden items-center justify-center"
    >
      <PaperTextureBackground className="bg-app-neutral-10 rotate-180" opacity={50} version={2} />
      <Image
        src={BoaSorte}
        alt=""
        className="absolute top-[70%] md:top-[55%] right-[20%] max-w-[310px] w-[30vw] block"
      />
      <div className="relative w-full flex flex-col sm:px-24 py-24 sm:py-36 px-4">
        <div className="flex flex-col text-center w-full gap-1 items-center justify-center xl:mb-10 z-10 px-5 sm:px-auto">
          <h1 className="title-4xl">{titulo}</h1>
          <RichText richText={descricao} className={{ paragraph: "text-app-blue-900 text-lg" }} />
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {links?.map((l) => (
            <SbButtonNav
              blok={l}
              key={l._uid}
              className="!rounded !bg-white !text-app-neutral-400"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
