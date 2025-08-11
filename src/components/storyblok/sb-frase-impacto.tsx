import { StoryblokFraseImpactoSection } from "@/utils/storyblok-types.generated";
import { Blok } from "@/utils/types";

const SbFraseImpacto = ({ blok }: Blok<StoryblokFraseImpactoSection>) => {
  const { title, description } = blok;

  return (
    <section className="bg-app-blue-50 py-12 md:py-24 relative overflow-hidden px-2">
      <div className="relative flex flex-col gap-8 items-center w-full justify-center text-center text-app-blue-700">
        <div className="relative">
          <span className="absolute left-0 -ml-10 top-8 md:left-4 md:-ml-20 md:top-12 text-[80px] md:text-[178px] font-anton text-app-blue-100 -translate-y-1/2 z-0">
            “
          </span>
          <h1 className="text-2xl md:text-5xl font-kalam relative z-10">{title}</h1>
          <span className="absolute -right-10 top-12  md:-right-14 md:top-24 text-[80px] md:text-[178px] font-anton text-app-blue-100 -translate-y-1/2 z-0">
            ”
          </span>
        </div>
        <p className="font-roboto text-sm md:text-base max-w-sm md:max-w-xl relative z-10">
          {description}
        </p>
      </div>
    </section>
  );
};

export default SbFraseImpacto;
