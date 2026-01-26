import { Blok } from "@/utils/types";
import { storyblokEditable } from "@storyblok/react";
import PaperTextureBackground from "../molecules/paper-texture-background";
import OferecemosGrid from "../organisms/oferecemos-grid";
import { StoryblokOferecemosSection } from "@/utils/storyblok-types.generated";

function SbOferecemosSection({ blok }: Blok<StoryblokOferecemosSection>) {
  const safeTitulo = blok.titulo || blok["Titulo"] || "";
  const safeCards = blok.cards || blok["Cards"] || [];

  return (
    <section
      {...storyblokEditable(blok)}
      className="relative w-full flex overflow-hidden items-center justify-center"
    >
      <PaperTextureBackground
        className="bg-app-neutral-10"
        opacity={50}
        version={2}
      />
      <div className="relative w-full max-w-wrapper flex flex-col px-5 sm:px-12 py-24 sm:py-36 gap-8">
        <h2 className="title-4xl text-center">{safeTitulo}</h2>
        <OferecemosGrid cards={safeCards} />
      </div>
    </section>
  );
}

export default SbOferecemosSection;
