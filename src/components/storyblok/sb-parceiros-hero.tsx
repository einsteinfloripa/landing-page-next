import { StoryblokParceirosHero } from "@/utils/storyblok-types.generated";
import { Blok } from "@/utils/types";
import RichText from "../atoms/RichText";
import { storyblokEditable } from "@storyblok/react";
import PaperTextureBackground from "../molecules/paper-texture-background";
import Image from "next/image";
import ScribbleDraw from "@/assets/ilustrations/scribble-draw.svg";
import CircleDraw from "@/assets/ilustrations/circle-draw.svg";
import { SbButtonNav } from "./sb-nav-button";

const SbParceirosHero = ({ blok }: Blok<StoryblokParceirosHero>) => {
  const { descricao, imagens, acoes } = blok;
  return (
    <section
      {...storyblokEditable(blok)}
      className="relative flex justify-between min-h-screen flex-col"
    >
      <PaperTextureBackground className="bg-app-blue-500" version={2} opacity={50} />
      <div className="relative flex justify-between min-h-screen flex-col">
        <div className="relative flex flex-1 items-center justify-center my-10 px-5 sm:px-auto lg:min-h-[70vh]">
          <div className="max-w-[420px] text-center flex flex-col gap-8 text-white">
            <div className="relative">
              <h1 className="title-4xl">
                Um pequeno gesto pode mudar uma{" "}
                <span className="text-app-yellow-500">vida inteira</span>!
              </h1>
              <Image
                src={ScribbleDraw}
                alt=""
                className="absolute -bottom-[30%] lg:-bottom-[20%] lg:right-[40%] max-w-[310px] w-[30vw] block"
              />
              <span className="relative text-app-yellow-500 -z-10 overflow-hidden">
                <span className="absolute size-[100px] md:size-[205px] border-[1.2px] opacity-80 border-dashed border-app-blue-200 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <span className="absolute size-[200px] sm:size-[300px] md:size-[412px] border-[1.2px] opacity-70 border-dashed border-app-blue-200 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <span className="absolute size-[300px] sm:size-[500px] md:size-[644px] border-[1.2px] opacity-60 border-dashed border-app-blue-200 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <span className="absolute hidden md:block size-[800px] lg:size-[864px] border-[1.2px] opacity-50 border-dashed border-app-blue-200 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <span className="absolute hidden xl:block size-[1137px] border-[1.2px] opacity-40 border-dashed border-app-blue-200 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <span className="absolute hidden xl:block size-[1389px] border-[1.2px] opacity-30 border-dashed border-app-blue-200 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </span>
            </div>
            <RichText richText={descricao} />

            <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
              {(acoes ?? []).map((acao, index) => (
                <SbButtonNav key={index} blok={acao} className="min-w-[150px]" />
              ))}
            </div>
          </div>
        </div>

        {/* Imagens */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-8 overflow-hidden w-full mb-10">
          {(imagens ?? []).map((image, index) => (
            <div
              key={index}
              className="relative w-full aspect-[3/4] min-h-[180px] max-h-[180px] lg:max-h-[330px] 
              lg:block
              [&:nth-child(n+3)]:hidden 
              lg:[&:nth-child(n+3)]:block"
            >
              <Image
                src={image.asset.filename!}
                alt={image.asset.alt ?? ""}
                fill
                className="object-cover border-4 lg:border-[20px] border-white rounded-lg"
                sizes="(max-width: 768px) 40vw, 1fr"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex min-h-screen flex-col items-center justify-center px-12 sm:px-auto">
        <div className="relative w-fit h-fit">
          <h1 className="title-4xl max-w-[1024px] text-white">
            Somos uma{" "}
            <div className="inline-block relative w-[64px]">
              <span>ONG</span>
              <Image src={CircleDraw} alt="" className="absolute min-w-[72px] -top-2 -left-2" />
            </div>
            formada por estudantes e dedicada a transformar sonhos em realidade. Nossa missão é{" "}
            <span
              className="relative font-bold text-4xl text-app-blue-500"
              style={{
                WebkitTextStroke: "0.5px white",
              }}
            >
              apoiar jovens de baixa renda
            </span>
            , abrindo portas para que{" "}
            <span className="text-app-yellow-500">conquistem seu lugar na universidade</span> e
            possam construir um futuro brilhante.
          </h1>

          <div className="absolute left-[60%] lg:size-36 md:size-32 size-24 rounded-full bg-app-violet-400 hover:bg-app-violet-500 transition-all duration-150 relative flex items-center justify-center shadow-custom">
            <Image
              alt="Seja um apoiador"
              src="/icons/rounded-text-support.svg"
              width={126}
              height={126}
              className="animate-spin-reverse"
            />
            <Image
              alt="Icone de coração branco"
              src="/logos/logo-icon.svg"
              width={64}
              height={64}
              className="absolute"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SbParceirosHero;
