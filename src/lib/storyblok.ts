import GenericPage from "@/components/pages/generic-page";
import SbAboutHero from "@/components/storyblok/sb-about-hero";
import { SbAboutSection } from "@/components/storyblok/sb-about-section";
import SbAchievementsSection from "@/components/storyblok/sb-achievements-section";
import { SbAreaAtuacaoSection } from "@/components/storyblok/sb-area-atuacao-section";
import { SbButton } from "@/components/storyblok/sb-button";
import { SbCardGridSection } from "@/components/storyblok/sb-card-grid-section";
import { SbComoDoarSection } from "@/components/storyblok/sb-como-doar-section";
import SbComponentNotFound from "@/components/storyblok/sb-component-not-found";
import SbContributionSection from "@/components/storyblok/sb-contribution-section";
import { SbDoacaoSection } from "@/components/storyblok/sb-doacao-section";
import { SbDuvidasFrequentesSection } from "@/components/storyblok/sb-duvidas-frequentes-section";
import { SbEquipeSection } from "@/components/storyblok/sb-equipe-section";
import SbFooter from "@/components/storyblok/sb-footer";
import SbFraseImpacto from "@/components/storyblok/sb-frase-impacto";
import SbHeader from "@/components/storyblok/sb-header";
import { SbHierarquiaSection } from "@/components/storyblok/sb-hierarquia-section";
import SbJoinUsSection from "@/components/storyblok/sb-join-us-section";
import { SbMainHero } from "@/components/storyblok/sb-main-hero";
import SbMetric from "@/components/storyblok/sb-metric";
import { SbButtonNav } from "@/components/storyblok/sb-nav-button";
import SbParceirosHero from "@/components/storyblok/sb-parceiros-hero";
import { SbSingleTestimonialSection } from "@/components/storyblok/sb-single-testimonial-section";
import SbTextStripe from "@/components/storyblok/sb-text-stripe";
import SbVoluntariadoHero from "@/components/storyblok/sb-voluntariado-hero";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

export const getStoryblokApi = storyblokInit({
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
    "about-hero": SbAboutHero,
    "equipe-section": SbEquipeSection,
    "hierarquia-section": SbHierarquiaSection,
    "voluntariado-hero": SbVoluntariadoHero,
    "area-atuacao-section": SbAreaAtuacaoSection,
    "text-stripe": SbTextStripe,
    "duvidas-frequentes-section": SbDuvidasFrequentesSection,
    "parceiros-hero": SbParceirosHero,
    "doacao-section": SbDoacaoSection,
    "como-doar-section": SbComoDoarSection,
    header: SbHeader,
    footer: SbFooter,
    "frase-impacto-section": SbFraseImpacto,
    "card-grid-section": SbCardGridSection,
  },
  apiOptions: {
    region: "us",
  },
  customFallbackComponent: SbComponentNotFound,
  enableFallbackComponent: true,
});
