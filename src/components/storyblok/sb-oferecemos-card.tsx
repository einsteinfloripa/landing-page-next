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

type Props = Blok<StoryblokOferecemosCard> & { isHovered?: boolean };

const SbOferecemosCard = ({ blok, isHovered = false }: Props) => {
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
      className="relative overflow-hidden flex flex-col justify-between p-6 rounded-xl bg-app-blue-300 text-white h-[282px] transition-all duration-500 ease-out will-change-transform"
    >
      {/* Imagem de fundo apenas no hover, se disponível */}
      {isHovered && safeImagem?.filename && (
        <Image
          src={getWebpVersionFromSBImage(safeImagem.filename)}
          alt={safeImagem.alt ?? ""}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 600px"
          priority={false}
          unoptimized
        />
      )}

      {/* Overlay de gradiente para legibilidade quando houver imagem */}
      {isHovered && safeImagem?.filename && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
      )}
      {/* Ícone no topo esquerdo */}
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

      {/* Conteúdo ancorado na base do card */}
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
