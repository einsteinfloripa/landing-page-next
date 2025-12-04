import { StoryblokButtonNav } from "@/utils/storyblok-types.generated";
import Link from "next/link";
import { storyblokEditable } from "@storyblok/react";
import { getUrlFromSBLink } from "@/lib/utils";
import { SbButton, Props as SbButtonProps } from "./sb-button";

interface Props extends Omit<SbButtonProps, "blok"> {
  blok: StoryblokButtonNav;
}

export const SbButtonNav = ({ blok, className, ...rest }: Props) => {
  const { button, link } = blok;
  const blokButton = button?.[0];

  if (!blokButton) return null;

  const isDisabled = blokButton.disabled;
  const buttonElement = (
    <SbButton
      blok={blokButton}
      className={className}
      disabled={isDisabled}
      {...rest}
    />
  );

  if (isDisabled) {
    return <span {...storyblokEditable(blok)}>{buttonElement}</span>;
  }

  return (
    <Link {...storyblokEditable(blok)} href={getUrlFromSBLink(link)}>
      {buttonElement}
    </Link>
  );
};
