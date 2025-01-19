import Image from "next/image";
import { Button } from "../atoms/button";
import { StarShape } from "../atoms/svg/star-shape";
import useScreenSize from "@/hooks/useScreenSize";
import { StoryblokContributionSection } from "@/utils/storyblok-types.generated";
import { Blok } from "@/utils/types";
import { getWebpVersionFromSBImage } from "@/lib/utils";
import RichText from "../atoms/RichText";
import { SbButtonNav } from "./sb-nav-button";
import { StoryblokComponent } from "@storyblok/react";

const SbContributionSection = ({ blok }: Blok<StoryblokContributionSection>) => {
  const { titulo, qrCode, qrCodeDescricao, botaoPix, descricao, acoes, valores } = blok;

  return (
    <section className="flex items-center justify-center py-32 xl:py-48 sm:px-10 text-app-neutral-900">
      <div className="relative lg:flex-row flex-col flex justify-between bg-app-blue-200 rounded-lg gap-10 pt-14 pb-32 py-10 px-5 lg:px-24 lg:py-16 w-full">
        <div className="flex flex-col gap-6">
          <h1 className="title-4xl lg:w-3/5">{titulo}</h1>
          <div className="flex items-center md:w-4/5 gap-4">
            <Image
              className="hidden md:block rounded-lg"
              src={getWebpVersionFromSBImage(qrCode.filename!)}
              alt={qrCode.alt || ""}
              width={92}
              height={92}
            />

            <div className="flex flex-col items-start gap-4 md:gap-0">
              <RichText richText={qrCodeDescricao} />
              <div className="flex flex-row gap-4">
                <Button className="md:hidden">Copiar chave PIX</Button>
                <SbButtonNav blok={botaoPix[0]} />
              </div>
            </div>
          </div>

          <div className="hidden md:block mt-4 space-y-8 w-full max-w-[477px]">
            <RichText richText={descricao} />
            {(acoes ?? []).map((acao, index) => (
              <StoryblokComponent key={index} blok={acao} />
            ))}
          </div>
        </div>

        <ul>
          {valores.map((doacao, index) => (
            <li key={doacao.valor}>
              <div className="flex gap-2 py-7" key={index}>
                <p className="title-xl">R${doacao.valor}</p>
                <p className="body-regular">{doacao.contribuicao}</p>
              </div>
              <hr className="border-app-blue-300 " />
            </li>
          ))}
        </ul>

        <div className="md:hidden mt-4 space-y-8 w-full max-w-[477px]">
          <RichText richText={descricao} />
          {(acoes ?? []).map((acao, index) => (
            <StoryblokComponent key={index} blok={acao} />
          ))}
        </div>

        <div className="absolute -bottom-24 right-0">
          <StarShape color="#FFEB66" width="180" height="180" />
        </div>
      </div>
    </section>
  );
};

export default SbContributionSection;
