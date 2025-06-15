import type { Metadata } from "next";
import { Roboto, Anton, Kalam } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import StoryblokProvider from "@/components/StoryblokProvider";
import { fetchStory } from "@/utils/storyblok";
import { StoryblokPagina } from "@/utils/storyblok-types.generated";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-anton",
});

const kalam = Kalam({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-kalam",
});

interface Props {
  children: ReactNode;
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const paramsResolved = await params;
  const slug =
    paramsResolved && Array.isArray(paramsResolved.slug) ? paramsResolved.slug : ["home"];
  const content = await fetchStory<StoryblokPagina>(`${[slug[0]].join("/")}`)
    .then((res) => res.story.content)
    .catch(notFound);

  const metadata = {
    title: content.titulo || "Einstein Floripa",
    description:
      content.descricao ||
      "Cursinho pré-vestibular gratuito para estudantes de baixa renda que sonham com uma educação superior de qualidade.",
    // Storyblok sometimes can return the image as an empty object when it is added and
    // removed from the story. To play it safe, we need to check if the image has a valid id
    image: content.imagem?.id ? content.imagem : undefined,
  };

  const images = metadata.image ? [{ url: metadata.image.filename! }] : [];
  const twitter = {
    description: metadata.description,
    images,
    title: metadata.title,
  };

  return {
    title: metadata.title,
    description: metadata.description,
    twitter,
    openGraph: {
      siteName: "Einstein Floripa",
      title: metadata.title,
      description: metadata.description,
      images,
      type: "website",
      url: `https://einsteinfloripa.com.br/${slug.join("/")}`,
    },
  };
}

export default async function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="pt-br" className={`${roboto.variable} ${anton.variable} ${kalam.variable}`}>
      <StoryblokProvider>
        <body className="font-roboto antialiased bg-app-neutral-10">
          {children}
          <Script id="clarity-script" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
          `}
          </Script>
        </body>
      </StoryblokProvider>
    </html>
  );
}
