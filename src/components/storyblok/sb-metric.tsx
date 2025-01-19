import { StoryblokMetric } from "@/utils/storyblok-types.generated";
import { Blok } from "@/utils/types";

const SbMetric = ({ blok }: Blok<StoryblokMetric>) => {
  const { valor, descricao } = blok;

  return (
    <div className="flex items-center space-x-4">
      <span className="title-4xl">{valor}</span>
      <span className="body-small-medium">{descricao}</span>
    </div>
  );
};

export default SbMetric;
