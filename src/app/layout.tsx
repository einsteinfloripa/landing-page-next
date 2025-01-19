import type { Metadata } from "next";
import { Roboto, Anton } from "next/font/google";
import Script from "next/script";
import { apiPlugin, storyblokInit } from "@storyblok/react";

import "./globals.css";
import GenericPage from "@/components/pages/generic-page";
import { SbMainHero } from "@/components/storyblok/sb-main-hero";
import { SbButton } from "@/components/storyblok/sb-button";
import { SbButtonNav } from "@/components/storyblok/sb-nav-button";
import SbComponentNotFound from "@/components/storyblok/sb-component-not-found";
import { SbAboutSection } from "@/components/storyblok/sb-about-section";
import SbAchievementsSection from "@/components/storyblok/sb-achievements-section";
import SbMetric from "@/components/storyblok/sb-metric";
import SbContributionSection from "@/components/storyblok/sb-contribution-section";
import { SbSingleTestimonialSection } from "@/components/storyblok/sb-single-testimonial-section";
import SbJoinUsSection from "@/components/storyblok/sb-signups-section";

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
    "main-hero": SbMainHero,
    "button-nav": SbButtonNav,
    pagina: GenericPage,
    button: SbButton,
    "about-section": SbAboutSection,
    "achievements-section": SbAchievementsSection,
    metric: SbMetric,
    "contribution-section": SbContributionSection,
    "single-testimonal-section": SbSingleTestimonialSection,
    "join-us-section": SbJoinUsSection,
  },
  apiOptions: {
    region: "us",
  },
  customFallbackComponent: SbComponentNotFound,
  enableFallbackComponent: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${roboto.variable} ${anton.variable}`}>
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
    </html>
  );
}
