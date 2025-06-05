import { StoryblokAboutSection } from "@/utils/storyblok-types.generated";
import { EinsteinTransformBadget } from "../molecules/einstein-transform-badget";
import { Blok } from "@/utils/types";
import RichText from "../atoms/RichText";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

export const SbAboutSection = ({ blok }: Blok<StoryblokAboutSection>) => {
  const { titulo, descricao, acoes } = blok;
  return (
    <div className="w-full sm:px-auto px-5 items-center justify-center flex">
      <section className="relative w-full max-w-container md:mx-10 xl:mx-48 flex justify-between mt-40 flex-col lg:flex-row gap-10">
        <div className="relative flex w-fit flex-col items-end md:gap-3 mb-10">
          <h1 className="title-4xl text-left max-w-72">{titulo}</h1>
          <EinsteinTransformBadget />
        </div>
        <div className="flex flex-col gap-8 lg:w-[454px]">
          <RichText richText={descricao} />
          <div className="flex gap-2">
            {(acoes ?? []).map((acao, index) => (
              <StoryblokServerComponent key={index} blok={acao} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
