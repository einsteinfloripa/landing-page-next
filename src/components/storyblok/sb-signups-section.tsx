import { PulsingBanner } from "../molecules/pulsing-banner";
import Image from "next/image";
import { Blok } from "@/utils/types";
import { StoryblokJoinUsSection } from "@/utils/storyblok-types.generated";
import { getWebpVersionFromSBImage, interpolateString } from "@/lib/utils";
import { StoryblokComponent } from "@storyblok/react";

const SbJoinUsSection = ({ blok }: Blok<StoryblokJoinUsSection>) => {
  const { titulo, cards, faixaInscricao } = blok;

  const isSignupsAvailable = new Date(faixaInscricao[0].dataInscricao) > new Date();

  return (
    <div className="w-full">
      <PulsingBanner
        announcement={
          isSignupsAvailable
            ? faixaInscricao[0].tituloInscricoesAbertas
            : interpolateString(faixaInscricao[0].tituloInscricoesEmBreve, {
                date: new Intl.DateTimeFormat("pt-BR", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                }).format(new Date(faixaInscricao[0].dataInscricao)),
              })
        }
        dotColor={isSignupsAvailable ? "green" : "red"}
      />
      <section className=" text-app-neutral-900 max-w-wrapper px-5 sm:px-24">
        <h1 className="title-4xl max-w-72 mt-14">{titulo}</h1>
        <ul className="space-y-10 mt-20">
          {cards.map((c) => {
            return (
              <>
                <li
                  key={c.titulo}
                  className="flex md:items-center md:justify-between w-full flex-col md:flex-row gap-4"
                >
                  <div className="flex items-center gap-5">
                    <Image
                      src={getWebpVersionFromSBImage(c.icon.filename!)}
                      alt={c.icon.alt ?? "Ilustração"}
                      width={125}
                      height={97}
                    />
                    <div className="flex flex-col gap-2 max-w-96">
                      <h3 className="body-3xl">{c.titulo}</h3>
                      <p className="body-regular">{c.descricao}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end flex-row-reverse md:flex-row">
                    {(c.acoes ?? []).map((acao, index) => (
                      <StoryblokComponent key={index} blok={acao} />
                    ))}
                  </div>
                </li>
                <hr />
              </>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default SbJoinUsSection;
