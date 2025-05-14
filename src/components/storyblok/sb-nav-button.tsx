import { StoryblokButtonNav } from "@/utils/storyblok-types.generated";
import { Button } from "../atoms/button";
import { Blok } from "@/utils/types";
import Link from "next/link";
import { storyblokEditable } from "@storyblok/react";
import { getUrlFromSBLink } from "@/lib/utils";
import { SbButton } from "./sb-button";

export const SbButtonNav = ({ blok }: Blok<StoryblokButtonNav>) => {
  const { button, link } = blok;

  return (
    <Link {...storyblokEditable(blok)} href={getUrlFromSBLink(link)}>
      <SbButton blok={button[0]} />
    </Link>
  );
};
