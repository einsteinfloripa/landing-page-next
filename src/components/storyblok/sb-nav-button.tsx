import { StoryblokButtonNav } from "@/utils/storyblok-types.generated";
import Link from "next/link";
import { storyblokEditable } from "@storyblok/react";
import { getUrlFromSBLink } from "@/lib/utils";
import { SbButton, Props as SbButtonProps } from "./sb-button";

interface Props extends Omit<SbButtonProps, "blok"> {
  blok: StoryblokButtonNav;
  queryParams?: Record<string, string | number | boolean | undefined>;
}

export const SbButtonNav = ({
  blok,
  className,
  queryParams,
  ...rest
}: Props) => {
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

  const href = appendQueryParams(getUrlFromSBLink(link), queryParams);

  return (
    <Link {...storyblokEditable(blok)} href={href}>
      {buttonElement}
    </Link>
  );
};

const appendQueryParams = (
  href: string,
  params?: Record<string, string | number | boolean | undefined>,
) => {
  if (!params) return href;

  const entries = Object.entries(params).filter(
    ([, value]) => value !== undefined,
  );
  if (!entries.length) return href;

  const hashIndex = href.indexOf("#");
  const hasHash = hashIndex >= 0;
  const hash = hasHash ? href.slice(hashIndex) : "";
  const hrefWithoutHash = hasHash ? href.slice(0, hashIndex) : href;

  const queryIndex = hrefWithoutHash.indexOf("?");
  const baseUrl =
    queryIndex >= 0 ? hrefWithoutHash.slice(0, queryIndex) : hrefWithoutHash;
  const existingQuery =
    queryIndex >= 0 ? hrefWithoutHash.slice(queryIndex + 1) : "";

  const searchParams = new URLSearchParams(existingQuery);
  entries.forEach(([key, value]) => {
    if (value !== undefined) {
      searchParams.set(key, String(value));
    }
  });

  const queryString = searchParams.toString();
  const querySection = queryString ? `?${queryString}` : "";

  return `${baseUrl}${querySection}${hash}`;
};
