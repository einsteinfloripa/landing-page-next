import { StoryblokAreaAtuacaoSection } from "@/utils/storyblok-types.generated";
import RichText from "../atoms/RichText";
import { Blok } from "@/utils/types";
import PaperTextureBackground from "../molecules/paper-texture-background";
import { storyblokEditable } from "@storyblok/react";
import { SbButtonNav } from "./sb-nav-button";
import { SbDepartamento } from "./sb-departamento";

export const SbAreaAtuacaoSection = ({ blok }: Blok<StoryblokAreaAtuacaoSection>) => {
  const { titulo, descricao, acoes, departamentos } = blok;
  return (
    <section {...storyblokEditable(blok)} className="relative w-full flex overflow-hidden">
      <PaperTextureBackground className="bg-app-blue-500" opacity={50} version={2} />
      <div className="relative w-full text-white flex flex-col sm:px-24 py-24 sm:py-36">
        <div className="flex flex-col text-center w-full gap-8 items-center justify-center xl:mb-10 z-10 px-5 sm:px-auto">
          <h1 className="title-4xl">{titulo}</h1>
          <RichText className={{ container: "max-w-[620px]" }} richText={descricao} />
          <div className="flex flex-row flex-wrap gap-4 justify-center">
            {(acoes ?? []).map((acao, index) => (
              <SbButtonNav key={index} blok={acao} className="min-w-[195px]" />
            ))}
          </div>
        </div>

        <SbDepartamento departamentos={departamentos} variant="dark" />
      </div>
    </section>
  );
};
