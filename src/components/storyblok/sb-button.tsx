import { StoryblokButton } from "@/utils/storyblok-types.generated";
import { Button } from "../atoms/button";
import { Blok } from "@/utils/types";
import { storyblokEditable } from "@storyblok/react";

export const SbButton = ({ blok }: Blok<StoryblokButton>) => {
  const { title, variant } = blok;

  return (
    <Button {...storyblokEditable(blok)} variant={variant}>
      {title}
    </Button>
  );
};
