import { NextResponse } from "next/server";

/**
 * Isso é um endpoint de preview para o Storyblok.
 * Precisamos redirecionar para a página correta com o parâmetro de preview.
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const slug = url.searchParams.get("slug") || "home";

  return NextResponse.redirect(`/${slug}?_storyblok=preview`);
}
