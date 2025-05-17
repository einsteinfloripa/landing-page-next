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

  return (
    <Link {...storyblokEditable(blok)} href={getUrlFromSBLink(link)}>
      <SbButton blok={button[0]} className={className} {...rest} />
    </Link>
  );
};
