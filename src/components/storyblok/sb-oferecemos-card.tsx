"use client";

import Image from "next/image";
import { Blok } from "@/utils/types";
import { storyblokEditable } from "@storyblok/react";
import { getWebpVersionFromSBImage } from "@/lib/utils";
import type { StoryblokOferecemosCard, StoryblokRichtext } from "@/utils/storyblok-types.generated";
import RichText from "@/components/atoms/RichText";

type Props = Blok<StoryblokOferecemosCard>;

function SbOferecemosCard({ blok }: Props) {
  const icone = blok.icone || blok["Icone"];
  // Algumas vezes o Storyblok retorna o campo com a primeira letra maiúscula ou minuscula dependendo da versão do componente
  const safeTitulo = blok.Titulo || blok["titulo"] || "";
  const rawDescricao = blok.Descricao || blok["descricao"] || "";
  const isRichTextDescricao =
    typeof rawDescricao === "object" && rawDescricao && "content" in rawDescricao;

  return (
    <div
      {...storyblokEditable(blok)}
      className="relative overflow-hidden flex flex-col justify-between p-6 rounded-xl bg-app-blue-300 text-white h-[282px]"
    >
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
          typeof rawDescricao === "string" &&
          rawDescricao.trim() !== "" && (
            <p className="body-small text-white/90 max-w-[280px]">{rawDescricao}</p>
          )
        )}
      </div>
    </div>
  );
}

export default SbOferecemosCard;
