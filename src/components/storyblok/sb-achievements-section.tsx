import { getWebpVersionFromSBImage } from "@/lib/utils";
import { StoryblokAchievementsSection } from "@/utils/storyblok-types.generated";
import { Blok } from "@/utils/types";
import { StoryblokServerComponent } from "@storyblok/react/rsc";
import Image from "next/image";

const SbAchievementsSection = ({ blok }: Blok<StoryblokAchievementsSection>) => {
  const { metricas, imagem } = blok;

  return (
    <div className="w-full">
      <section className="flex md:justify-around max-w-wrapper px-5 sm:px-auto">
        <ul className="w-full md:w-fit max-w-container space-y-8 mt-32">
          {metricas.map((m, index) => (
            <>
              <li key={index} className="flex items-center space-x-4">
                <StoryblokServerComponent blok={m} />
              </li>
              <hr />
            </>
          ))}
        </ul>

        <div className="hidden md:block">
          <Image
            src={getWebpVersionFromSBImage(imagem.filename!)}
            alt={imagem.alt!}
            width={800}
            height={500}
            className="mt-20 object-fill"
          />
        </div>
      </section>
    </div>
  );
};

export default SbAchievementsSection;
