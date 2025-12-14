"use client";

import Image from "next/image";
import { Blok } from "@/utils/types";
import { storyblokEditable } from "@storyblok/react";
import { getWebpVersionFromSBImage } from "@/lib/utils";
import type { StoryblokAsset, StoryblokRichtext } from "@/utils/storyblok-types.generated";
import RichText from "@/components/atoms/RichText";

interface StoryblokOferecemosCard {
  icone?: StoryblokAsset;
  titulo: string;
  descricao?: string;
  imagem?: StoryblokAsset;
  component: "oferecemos-card";
  _uid: string;
  [k: string]: any;
}

type Props = Blok<StoryblokOferecemosCard> & { isHovered?: boolean; isExiting?: boolean };

const SbOferecemosCard = ({ blok, isHovered = false, isExiting = false }: Props) => {
  const { icone, imagem } = blok;
  const safeTitulo =
    (blok as any).titulo || (blok as any).Titulo || (blok as any).title || "";
  const rawDescricao = (blok as any).Descricao ||

    "";
  const isRichTextDescricao = typeof rawDescricao === "object" && rawDescricao && "content" in rawDescricao;
  const safeImagem: StoryblokAsset | undefined = (blok as any).Imagem;

  return (
    <div
      {...storyblokEditable(blok)}
      className={
        `relative overflow-hidden flex flex-col justify-between p-6 rounded-xl bg-app-blue-300 text-white h-[282px] ` +
        `transform-gpu origin-center will-change-transform ` +
        `transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ` +
        (isHovered ? "delay-75 scale-[1.03]" : isExiting ? "delay-50 scale-[1.01]" : "delay-[0ms] scale-100")
      }
    >
      {safeImagem?.filename && (
        <Image
          src={getWebpVersionFromSBImage(safeImagem.filename)}
          alt={safeImagem.alt ?? ""}
          fill
          className={
            `object-cover transition-opacity duration-500 ease-in-out ` +
            (isHovered ? "delay-75 opacity-100" : isExiting ? "delay-50 opacity-0" : "delay-[0ms] opacity-0")
          }
          sizes="(max-width: 768px) 100vw, 600px"
          priority={false}
          unoptimized
        />
      )}

      {safeImagem?.filename && (
        <div
          className={
            `pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent ` +
            `transition-opacity duration-400 ease-in-out ` +
            (isHovered ? "delay-75 opacity-100" : isExiting ? "delay-50 opacity-0" : "delay-[0ms] opacity-0")
          }
        />
      )}
      {/* icone no topo esquerdo */}
      {icone?.filename && (
        <Image
          src={getWebpVersionFromSBImage(icone.filename)}
          alt={icone.alt ?? ""}
          width={28}
          height={28}
          className="rounded-sm relative z-10"
          unoptimized
        />
      )}

      {/* conteudo ancora base do card */}
      <div className="mt-auto flex flex-col gap-1 relative z-10">
        {safeTitulo && <h3 className="body-2xl">{safeTitulo}</h3>}
        {isRichTextDescricao ? (
          <RichText
            richText={rawDescricao as StoryblokRichtext}
            className={{ paragraph: "body-small text-white/90 max-w-[280px]" }}
          />
        ) : (
          typeof rawDescricao === "string" && rawDescricao.trim() !== "" && (
            <p className="body-small text-white/90 max-w-[280px]">{rawDescricao}</p>
          )
        )}
      </div>
    </div>
  );
};

export default SbOferecemosCard;
