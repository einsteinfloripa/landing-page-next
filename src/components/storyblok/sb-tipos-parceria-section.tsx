import { StoryblokTiposParceriaSection } from "@/utils/storyblok-types.generated";
import RichText from "../atoms/RichText";
import { Blok } from "@/utils/types";
import PaperTextureBackground from "../molecules/paper-texture-background";
import { storyblokEditable } from "@storyblok/react";
import { SbButtonNav } from "./sb-nav-button";

export const SbTiposParceriaSection = ({
  blok,
}: Blok<StoryblokTiposParceriaSection>) => {
  const { titulo, cards } = blok;
  return (
    <section
      {...storyblokEditable(blok)}
      className="relative w-full flex overflow-hidden min-h-screen items-center justify-center"
      id="tipos-de-parceria"
    >
      <PaperTextureBackground
        className="bg-app-neutral-10"
        opacity={50}
        version={2}
      />
      <div className="relative w-full flex flex-col sm:px-24 py-24 sm:py-36 gap-10 p-5">
        <div className="flex flex-col text-center w-full gap-1 items-center justify-center xl:mb-10 z-10 px-5 sm:px-auto">
          <h1 className="title-4xl">{titulo}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          {cards?.map((c) => {
            const partnershipSlug = createSlug(c.titulo);
            const queryParams = partnershipSlug
              ? { parceria: partnershipSlug }
              : undefined;

            return (
              <div
                key={c._uid}
                className="flex-1 flex flex-col gap-8 border-[12px] rounded-xl border-white p-5 md:p-12"
                style={{ backgroundColor: c.cor }}
              >
                <h3 className="title-3xl">{c.titulo}</h3>
                <RichText
                  richText={c.descricao}
                  className={{ paragraph: "text-app-blue-900" }}
                />

                <SbButtonNav
                  blok={c.botao[0]}
                  className="w-fit border-2"
                  queryParams={queryParams}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const createSlug = (value?: string) => {
  if (!value) return undefined;

  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};
