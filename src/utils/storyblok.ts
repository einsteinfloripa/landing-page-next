import { getStoryblokApi } from "@/lib/storyblok";
import {
  ISbStories,
  ISbStoriesParams,
  ISbStoryData,
} from "@storyblok/react/rsc";
import fs from "fs";
import path from "path";

// Snapshot local do conteúdo do Storyblok, obtido via Management API
// (`npx storyblok stories pull`) em 2026-08-27, mantido como fallback de
// emergência para quando a Content Delivery API estiver indisponível (ex:
// cota mensal de requisições esgotada). Atualize com o mesmo comando caso o
// conteúdo mude enquanto a API ao vivo estiver fora do ar. Remover esse
// fallback quando tivermos confiança de que a correção de cache abaixo
// evitou que a cota estoure de novo.
const FALLBACK_DIR = path.join(process.cwd(), "src/data/storyblok-fallback");

function readFallbackStory<T>(slug: string): { story: ISbStoryData<T> } | null {
  try {
    const filePath = path.join(
      FALLBACK_DIR,
      `${slug.replace(/\//g, "-")}.json`,
    );
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch {
    return null;
  }
}

export async function fetchStory<T>(slug: string) {
  getStoryblokApi();
  const version = process.env.NODE_ENV === "production" ? "published" : "draft";

  try {
    const res = await fetch(
      `https://api-us.storyblok.com/v2/cdn/stories/${slug}?version=${version}&token=${process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN}`,
      // Cacheia as respostas em vez de bater na API a cada requisição — essa
      // era a causa raiz do estouro de cota (cada pageview fazia de 3 a 4
      // chamadas ao vivo sem cache). Atualizações de conteúdo agora levam
      // até 5 minutos pra aparecer, em vez de ser instantâneo.
      { next: { tags: ["cms"], revalidate: 300 } },
    );

    if (!res.ok) {
      throw new Error(
        `Storyblok request for "${slug}" failed with status ${res.status}`,
      );
    }

    return (await res.json()) as { story: ISbStoryData<T> };
  } catch (err) {
    const fallback = readFallbackStory<T>(slug);
    if (fallback) {
      console.warn(
        `[storyblok] Live fetch for "${slug}" failed, serving local fallback snapshot instead. Reason:`,
        err,
      );
      return fallback;
    }
    throw err;
  }
}

export async function fetchStories<T>(
  storyUrl: string,
  apiParams: Omit<ISbStoriesParams, "version">,
) {
  const storyblokApi = getStoryblokApi();
  const version = process.env.NODE_ENV === "production" ? "published" : "draft";

  return storyblokApi
    .get(storyUrl, {
      ...apiParams,
      version,
    })
    .then((res) => res as ISbStories<T>);
}
