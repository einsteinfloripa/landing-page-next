import Image from "next/image";
import { Button } from "../atoms/button";
import { StarShape } from "../atoms/svg/star-shape";
import { StoryblokContributionSection } from "@/utils/storyblok-types.generated";
import { Blok } from "@/utils/types";
import RichText from "../atoms/RichText";
import { SbButtonNav } from "./sb-nav-button";
import PaperTextureBackground from "../molecules/paper-texture-background";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

const SbContributionSection = ({ blok }: Blok<StoryblokContributionSection>) => {
  const {
    titulo,
    qrCode,
    qrCodeDescricao,
    botaoPix,
    descricao,
    acoes,
    subtitulo,
    headlineImagem,
    imagem,
  } = blok;

  return (
    <section className="relative flex items-center justify-center py-32 xl:py-48 sm:px-10 text-app-neutral-900">
      <PaperTextureBackground className="bg-app-blue-500" version={2} opacity={80} />
      <div className="relative flex flex-col lg:flex-row mx-2 bg-white rounded-lg gap-10 py-10 px-5 lg:gap-16 lg:p-14 w-full border border-black">
        {/* Left Container */}
        <div className="flex flex-col gap-10 flex-shrink-1">
          <h1 className="title-4xl lg:w-3/5">{titulo}</h1>
          {subtitulo && <RichText richText={subtitulo} />}
          <div className="flex items-center w-full md:w-4/5 gap-4">
            {(() => {
              const rawSrc = qrCode.filename!;
              const src = rawSrc.startsWith("//")
                ? `https:${rawSrc}`
                : !rawSrc.startsWith("http") && !rawSrc.startsWith("/")
                ? `/${rawSrc}`
                : rawSrc;
              return (
                <Image
                  className="hidden md:block rounded-lg h-full border border-black"
                  src={src}
                  alt={qrCode.alt || ""}
                  width={110}
                  height={110}
                />
              );
            })()}

            <div className="flex flex-col items-start gap-4 md:gap-0">
              <RichText richText={qrCodeDescricao} />
              <div className="flex flex-wrap gap-4">
                <Button className="md:hidden">Copiar chave PIX</Button>
                <SbButtonNav blok={botaoPix[0]} />
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-col mt-4 gap-8 w-full max-w-[477px]">
            <RichText richText={descricao} />
            {(acoes ?? []).map((acao, index) => (
              <StoryblokServerComponent key={index} blok={acao} />
            ))}
          </div>
        </div>

        {/* Right Container */}
        <div className="flex-grow w-full lg:w-auto flex flex-col gap-2 items-center lg:items-start">
          {headlineImagem && (
            <RichText className={{ container: "font-medium" }} richText={headlineImagem} />
          )}
          {imagem?.filename && (() => {
            const rawSrc = imagem.filename;
            const src = rawSrc.startsWith("//")
              ? `https:${rawSrc}`
              : !rawSrc.startsWith("http") && !rawSrc.startsWith("/")
              ? `/${rawSrc}`
              : rawSrc;
            return (
              <Image
                className="rounded-lg object-fit h-full max-h-[400px] w-auto"
                src={src}
                alt={imagem.alt || ""}
                width={640}
                height={400}
              />
            );
          })()}
        </div>

        <div className="md:hidden mt-4 space-y-8 w-full max-w-[477px]">
          <RichText richText={descricao} />
          {(acoes ?? []).map((acao, index) => (
            <StoryblokServerComponent key={index} blok={acao} />
          ))}
        </div>

        {/* Estrela decorativa */}
        <div className="absolute -bottom-24 right-0">
          <StarShape color="#FFEB66" width="180" height="180" />
        </div>
      </div>
    </section>
  );
};

export default SbContributionSection;
