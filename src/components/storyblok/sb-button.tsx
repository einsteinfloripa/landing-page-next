import { StoryblokButton } from "@/utils/storyblok-types.generated";
import { Button, ButtonProps } from "../atoms/button";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface Props extends Omit<ButtonProps, "variant" | "children"> {
  blok: StoryblokButton;
}

export const SbButton = ({ blok, className, ...rest }: Props) => {
  const { title, variant, icone, iconeADireita, disabled } = blok;

  return (
    <Button
      {...storyblokEditable(blok)}
      variant={variant}
      className={cn(
        "flex gap-2",
        iconeADireita ? "flex-row-reverse" : "flex-row ",
        className,
      )}
      disabled={rest.disabled || disabled}
      {...rest}
    >
      {icone?.filename && (
        <Image
          src={icone.filename!}
          alt={icone.alt || ""}
          width={24}
          height={24}
        />
      )}
      {title}
    </Button>
  );
};
