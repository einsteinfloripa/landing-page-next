import { StoryblokButton } from "@/utils/storyblok-types.generated";
import { Button, ButtonProps } from "../atoms/button";
import { storyblokEditable } from "@storyblok/react";

export interface Props extends Omit<ButtonProps, "variant" | "children"> {
  blok: StoryblokButton;
}

export const SbButton = ({ blok, className, ...rest }: Props) => {
  const { title, variant } = blok;

  return (
    <Button {...storyblokEditable(blok)} variant={variant} className={className} {...rest}>
      {title}
    </Button>
  );
};
