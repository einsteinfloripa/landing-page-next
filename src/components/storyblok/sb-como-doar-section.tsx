"use client";

import { StoryblokComoDoarSection } from "@/utils/storyblok-types.generated";
import RichText from "../atoms/RichText";
import { Blok } from "@/utils/types";
import PaperTextureBackground from "../molecules/paper-texture-background";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

export const SbComoDoarSection = ({ blok }: Blok<StoryblokComoDoarSection>) => {
  const {
    titulo,
    subtitulo,
    descricao,
    infoDoacaoRecorrente,
    infoTransferencia,
    chavePix,
    qrCodePix,
  } = blok;
  return (
    <section
      {...storyblokEditable(blok)}
      className="relative w-full flex overflow-hidden min-h-screen items-center justify-center"
    >
      <PaperTextureBackground className="bg-app-blue-500" opacity={80} version={2} />
      <div className="relative w-full flex flex-col sm:px-24 py-24 sm:py-36 text-white gap-10 lg:gap-20 px-5 sm:px-auto">
        <div className="flex flex-col text-center w-full gap-1 items-center justify-center xl:mb-10 z-10">
          <h4 className="uppercase font-bold text-app-neutral-50">{subtitulo}</h4>
          <h1 className="title-4xl">{titulo}</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 w-full justify-center items-start">
          <div className="flex-1 flex flex-col items-center justify-center gap-8 w-full">
            <div className="p-5 w-full rounded-xl border border-app-violet-800 bg-app-violet-400 space-y-4">
              <h2 className="title-4xl text-center">Transferência</h2>
              <RichText
                richText={infoTransferencia}
                className={{ paragraph: "text-app-neutral-10 text-center" }}
              />
            </div>
            <div className="p-5 w-full rounded-xl border border-app-yellow-900 bg-app-yellow-500 text-app-neutral-700 gap-4 flex flex-col items-center">
              <h2 className="title-4xl text-center">Doação recorrente</h2>
              <RichText
                richText={infoDoacaoRecorrente}
                className={{ container: "max-w-[480px]" }}
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-8">
            <div className="p-5 w-full rounded-xl border border-app-dark-blue-900 bg-app-dark-blue-600 flex items-center justify-center flex-col gap-4">
              <h2 className="title-4xl text-center">Pix</h2>
              <Image
                src={qrCodePix.filename!}
                width={160}
                height={160}
                className="max-w-[160px] max-h-[160px]"
                alt={`Pix: ${chavePix}`}
              />
              <p>
                Chave <span className="font-semibold">{chavePix}</span>
              </p>
              <button
                className="font-semibold"
                onClick={() => {
                  navigator.clipboard.writeText(chavePix ?? "");
                }}
                type="button"
              >
                Copiar chave Pix
              </button>
            </div>
            <p className="font-medium">{descricao}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
