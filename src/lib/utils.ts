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
