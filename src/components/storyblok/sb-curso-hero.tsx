import { Blok } from "@/utils/types";
import { storyblokEditable } from "@storyblok/react";
import { StoryblokServerComponent } from "@storyblok/react/rsc";
import RichText, { richTextHasContent } from "../atoms/RichText";
import Image from "next/image";

const SbCursoHero = ({ blok }: Blok<any>) => {
  const titulo = blok?.titulo ?? blok?.Titulo ?? blok?.title;
  const descricao = blok?.descricao ?? blok?.Descricao ?? blok?.description;
  const acoes = blok?.acoes ?? blok?.Acoes ?? blok?.actions;
  const imagem = blok?.imagem ?? blok?.Imagem ?? blok?.image;

  return (
    <div {...storyblokEditable(blok)} className="w-full px-5 sm:px-auto">
      <section className="relative flex justify-center max-w-wrapper mb-8 md:mb-24 lg:mb-0">
        <div className="flex flex-col md:items-center px-4 gap-7 mt-42 mb-10 md:mb-28">
          {richTextHasContent(titulo) && (
            <RichText
              richText={titulo}
              className={{
                container: "md:text-center md:mt-28",
                heading: "title-4xl md:title-6xl xl:!text-7xl",
                paragraph: "title-4xl md:title-6xl xl:!text-7xl",
              }}
            />
          )}
          {richTextHasContent(descricao) && (
            <RichText
              richText={descricao}
              className={{ container: "md:text-center lg:text-xl" }}
            />
          )}
          {(acoes ?? []).length > 0 && (
            <div className="flex gap-2 [&_button]:px-6 md:[&_button]:px-12">
              {(acoes ?? []).map((acao: any, index: number) => (
                <StoryblokServerComponent key={index} blok={acao} />
              ))}
            </div>
          )}
        </div>
      </section>
      {imagem?.filename && (
        <div className="relative w-screen left-1/2 -translate-x-1/2">
          <Image
            src={imagem.filename!}
            alt={imagem.alt ?? ""}
            width={(imagem.width ?? 1920) as number}
            height={(imagem.height ?? 1080) as number}
            className="w-screen h-auto"
            sizes="100vw"
            priority
          />
        </div>
      )}
    </div>
  );
};

export default SbCursoHero;
