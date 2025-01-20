import { StoryblokAboutHero } from "@/utils/storyblok-types.generated";
import { Blok } from "@/utils/types";
import RichText from "../atoms/RichText";
import Image from "next/image";
import { getWebpVersionFromSBImage } from "@/lib/utils";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const SbAboutHero = ({ blok }: Blok<StoryblokAboutHero>) => {
  const { titulo, descricao, acoes, imagemCantoSuperior, imagemCantoDireito, imagemCantoEsquerdo } =
    blok;
  return (
    <div
      {...storyblokEditable(blok)}
      className="w-full sm:px-auto px-5 items-center justify-center flex"
    >
      <section className="relative w-full max-w-wrapper md:mx-10 xl:mx-48 flex justify-between flex-col lg:flex-row gap-6 mt-28">
        <div className="relative flex w-fit flex-col md:gap-3 mb-10 justify-center">
          <h1 className="title-4xl max-w-72">{titulo}</h1>

          <div className="lg:w-[614px]">
            <RichText richText={descricao} />
          </div>

          <div className="flex gap-2">
            {(acoes ?? []).map((acao, index) => (
              <StoryblokComponent key={index} blok={acao} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:gap-5 items-center sm:items-end">
          <div className="relative scale-[0.9] sm:scale-[1] w-[275px] h-[300px] rounded-xl overflow-hidden">
            <Image
              src={getWebpVersionFromSBImage(imagemCantoSuperior.filename!)}
              alt={imagemCantoSuperior.alt ?? ""}
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="flex lg:gap-10 flex-col sm:flex-row items-center md:items-start">
            <div className="relative scale-[0.9] sm:scale-[1] w-[290px] h-[190px] rounded-xl overflow-hidden">
              <Image
                src={getWebpVersionFromSBImage(imagemCantoEsquerdo.filename!)}
                alt={imagemCantoEsquerdo.alt ?? ""}
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="relative scale-[0.9] sm:scale-[1] w-[250px] h-[250px] rounded-full overflow-hidden sm:mt-10 sm:ml-5">
              <Image
                src={getWebpVersionFromSBImage(imagemCantoDireito.filename!)}
                alt={imagemCantoDireito.alt ?? ""}
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SbAboutHero;
