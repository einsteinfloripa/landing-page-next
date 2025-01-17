import type { Metadata } from "next";
import { Roboto, Anton } from "next/font/google";
import Script from "next/script";
import { apiPlugin, storyblokInit } from "@storyblok/react";

import AboutUs from "@/components/pages/sobre-nos";
import Home from "@/components/pages/home";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Einstein Floripa",
  description:
    "Cursinho pré-vestibular gratuito para estudantes de baixa renda que sonham com uma educação superior de qualidade.",
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components: {
    home: Home,
    "sobre-nos": AboutUs,
  },
  apiOptions: {
    region: "us",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${roboto.variable} ${anton.variable}`}>
      <body className="font-roboto antialiased">
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
    </html>
  );
}
