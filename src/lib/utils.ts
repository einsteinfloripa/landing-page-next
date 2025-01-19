import { StoryblokButtonNav } from "@/utils/storyblok-types.generated";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getUrlFromSBLink = (link: StoryblokButtonNav["link"]) => {
  // Nós removemos o "home" da URL porque é a página padrão (então "home" é igual a "/")
  const url = (link.url || link.cached_url || "").replace("home", "");

  if (link?.linktype !== "story") {
    return url;
  }

  const rootLink = url.startsWith("/") ? url : `/${url}`;

  return [rootLink, link.anchor].filter(Boolean).join("#");
};

export function getWebpVersionFromSBImage(src: string) {
  const isSvg = src.endsWith(".svg");
  const url = isSvg ? src : `${src}/m/`;

  return url;
}

/**
 * Interpolates a string with the given key-value pairs.
 * @param template - The template string with keys enclosed in brackets.
 * @param values - An object containing key-value pairs for interpolation.
 * @returns The interpolated string.
 */
export function interpolateString(template: string, values: { [key: string]: string }): string {
  const a = template.replace(/\{(\w+)\}/g, (_, key) => values[key] || `{${key}}`);
  console.log(template, a, values);
  return a;
}
