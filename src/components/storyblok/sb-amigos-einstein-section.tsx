import { StoryblokAmigosEinsteinSection } from "@/utils/storyblok-types.generated";
import RichText from "../atoms/RichText";
import { Blok } from "@/utils/types";
import PaperTextureBackground from "../molecules/paper-texture-background";
import { storyblokEditable } from "@storyblok/react";
import { cn, getUrlFromSBLink } from "@/lib/utils";
import Link from "next/link";
import ScribbleDraw from "@/assets/ilustrations/scribble-draw.svg";
import HeartsDraw from "@/assets/ilustrations/hearts-draw.svg";
import Image from "next/image";

export const SbAmigosEinsteinSection = ({ blok }: Blok<StoryblokAmigosEinsteinSection>) => {
  const { descricao, cards } = blok;
  return (
    <section
      {...storyblokEditable(blok)}
      className="relative w-full flex overflow-hidden min-h-screen items-center justify-center"
    >
      <PaperTextureBackground className="bg-app-blue-500" opacity={100} version={2} />
      <div className="w-full flex flex-col sm:px-24 py-24 sm:py-36 gap-10 p-5">
        <div className="flex flex-col text-center w-full gap-6 items-center justify-center xl:mb-10 z-10 px-5 sm:px-auto text-white">
          <div className="relative">
            <h1 className="title-4xl">Torne-se um amigo do einstein</h1>
            <Image
              src={ScribbleDraw}
              alt=""
              className="absolute bottom-[-30%] right-[30%] lg:bottom-[-60%] lg:right-[10%] max-w-[200px] lg:max-w-[310px] w-[100vw] block"
              unoptimized
            />
          </div>
          <RichText className={{ container: "max-w-[620px]" }} richText={descricao} />
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {cards?.map((c) => (
            <Link
              {...storyblokEditable(c)}
              href={getUrlFromSBLink(c.link)}
              key={c._uid}
              className="w-full"
              target="_blank"
            >
              <div
                className={cn(
                  "flex-1 flex flex-col gap-4 border-[12px] w-full rounded-xl border-white py-[72px] px-[60px] text-center items-center justify-center",
                  c.corTexto === "light" ? "text-white" : "text-[##001840]"
                )}
                style={{ backgroundColor: c.cor }}
              >
                <h2 className="title-6xl">{c.titulo}</h2>
                <RichText richText={c.descricao} />
              </div>
            </Link>
          ))}
          <Image
            src={HeartsDraw}
            alt=""
            className="absolute block -bottom-24 -right-32"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};
