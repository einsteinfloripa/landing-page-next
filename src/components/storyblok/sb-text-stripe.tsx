import { cn } from "@/lib/utils";
import { StoryblokTextStripe } from "@/utils/storyblok-types.generated";
import { Blok } from "@/utils/types";

const SbTextStripe = ({ blok }: Blok<StoryblokTextStripe>) => {
  const { texto, animar } = blok;

  return (
    <div className="w-full overflow-hidden bg-app-blue-200 py-4">
      <div
        className={cn("flex whitespace-nowrap", { "animate-marquee": animar })}
        style={
          animar
            ? {
                animationDirection: "reverse", // esquerda pra direita
                animationIterationCount: "infinite",
                animationTimingFunction: "linear",
              }
            : undefined
        }
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="mx-4 text-white text-3xl font-semibold font-anton">
            {texto}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SbTextStripe;
