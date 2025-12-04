import { Blok } from "@/utils/types";
import { storyblokEditable } from "@storyblok/react";
import PaperTextureBackground from "../molecules/paper-texture-background";
import OferecemosGrid from "../organisms/oferecemos-grid";

interface StoryblokOferecemosSection {
  titulo: string;
  cards?: any[];
  component: "oferecemos-section";
  _uid: string;
  [k: string]: any;
}

const SbOferecemosSection = ({ blok }: Blok<StoryblokOferecemosSection>) => {
  const { titulo, cards = [] } = blok;

  return (
    <section
      {...storyblokEditable(blok)}
      className="relative w-full flex overflow-hidden items-center justify-center"
    >
      <PaperTextureBackground className="bg-app-neutral-10" opacity={50} version={2} />
      <div className="relative w-full max-w-wrapper flex flex-col px-5 sm:px-12 py-24 sm:py-36 gap-8">
        <h2 className="title-4xl text-center">{titulo}</h2>
        <OferecemosGrid cards={cards} />
      </div>
    </section>
  );
};

export default SbOferecemosSection;
