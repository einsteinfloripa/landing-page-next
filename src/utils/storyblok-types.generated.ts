// This file was generated by the Storyblok CLI.
// DO NOT MODIFY THIS FILE BY HAND.
import type { ISbStoryData } from "@storyblok/js";

type StoryblokPropertyType = "asset" | "multiasset" | "multilink" | "table" | "richtext";
interface StoryblokAsset {
  alt: string | null;
  copyright: string | null;
  fieldtype: "asset";
  id: number;
  filename: string | null;
  name: string;
  title: string | null;
  focus: string | null;
  meta_data: Record<string, any>;
  source: string | null;
  is_external_url: boolean;
  is_private: boolean;
  src: string;
  updated_at: string;
  width: number | null;
  height: number | null;
  aspect_ratio: number | null;
  public_id: string | null;
  content_type: string;
}
interface StoryblokMultiasset extends Array<StoryblokAsset> {}
interface StoryblokMultilink {
  fieldtype: "multilink";
  id: string;
  url: string;
  cached_url: string;
  target?: "_blank" | "_self";
  anchor?: string;
  rel?: string;
  title?: string;
  prep?: string;
  linktype: "story" | "url" | "email" | "asset";
  story?: {
    name: string;
    created_at: string;
    published_at: string;
    id: number;
    uuid: string;
    content: Record<string, any>;
    slug: string;
    full_slug: string;
    sort_by_date?: string;
    position?: number;
    tag_list?: string[];
    is_startpage?: boolean;
    parent_id?: number | null;
    meta_data?: Record<string, any> | null;
    group_id?: string;
    first_published_at?: string;
    release_id?: number | null;
    lang?: string;
    path?: string | null;
    alternates?: any[];
    default_full_slug?: string | null;
    translated_slugs?: any[] | null;
  };
  email?: string;
}
interface StoryblokTable {
  fieldtype: "table";
  thead: Array<{
    _uid: string;
    value: string;
    component: "_table_head";
    _editable?: string;
  }>;
  tbody: Array<{
    _uid: string;
    component: "_table_row";
    _editable?: string;
    body: Array<{
      _uid: string;
      value: string;
      component: "_table_col";
      _editable?: string;
    }>;
  }>;
}
interface StoryblokRichtext {
  type: string;
  content?: StoryblokRichtext[];
  marks?: StoryblokRichtext[];
  attrs?: Record<string, any>;
  text?: string;
}

export type {
  StoryblokAsset,
  StoryblokMultiasset,
  StoryblokMultilink,
  StoryblokPropertyType,
  StoryblokRichtext,
  StoryblokTable,
};
// This file was generated by the storyblok CLI.
// DO NOT MODIFY THIS FILE BY HAND.
export interface StoryblokAboutHero {
  titulo: string;
  descricao: StoryblokRichtext;
  imagens?: StoryblokPicture[];
  component: "about-hero";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokAboutSection {
  titulo: string;
  descricao: StoryblokRichtext;
  acoes?: (StoryblokButton | StoryblokButtonNav)[];
  component: "about-section";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokAchievementsSection {
  metricas: StoryblokMetric[];
  imagem: StoryblokAsset;
  component: "achievements-section";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokAmigosEinsteinSection {
  descricao: StoryblokRichtext;
  cards: StoryblokCardAmigosEinstein[];
  component: "amigos-einstein-section";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokAreaAtuacaoSection {
  titulo: string;
  descricao: StoryblokRichtext;
  acoes: StoryblokButtonNav[];
  departamentos: StoryblokEquipeDepartamento[];
  component: "area-atuacao-section";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokBeneficiosParceriaSection {
  subtitulo: string;
  titulo: string;
  cards: StoryblokImagemCard[];
  component: "beneficios-parceria-section";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokButton {
  variant:
    | "default"
    | "secondary"
    | "tertiary"
    | "outline"
    | "outline-secondary"
    | "ghost"
    | "link"
    | "destructive";
  title: string;
  component: "button";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokButtonNav {
  link: Exclude<StoryblokMultilink, { linktype?: "asset" }>;
  button: StoryblokButton[];
  component: "button-nav";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokCardAmigosEinstein {
  titulo: string;
  descricao: StoryblokRichtext;
  link: Exclude<StoryblokMultilink, { linktype?: "email" } | { linktype?: "asset" }>;
  cor: "#00283A" | "#005E89" | "#0079B0" | "#54ADD5" | "#B0D9EC" | "#74C3CC";
  corTexto: "light" | "dark";
  component: "card-amigos-einstein";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokCardGridSection {
  titulo?: string;
  cards: StoryblokImagemCard[];
  component: "card-grid-section";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokCardInscricao {
  image: StoryblokAsset;
  titulo: string;
  descricao: string;
  acoes?: (StoryblokButton | StoryblokButtonNav)[];
  cor?: "#75529A" | "#0085C1" | "#2FA5B3";
  component: "card-inscricao";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokCardTexto {
  titulo: string;
  descricao: StoryblokRichtext;
  component: "card-texto";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokComoDoarSection {
  subtitulo: string;
  titulo: string;
  descricao: string;
  infoTransferencia: StoryblokRichtext;
  infoDoacaoRecorrente: StoryblokRichtext;
  chavePix: string;
  qrCodePix: StoryblokAsset;
  component: "como-doar-section";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokContatoSection {
  titulo: string;
  descricao: StoryblokRichtext;
  component: "contato-section";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokContributionSection {
  titulo: string;
  subtitulo?: StoryblokRichtext;
  qrCode: StoryblokAsset;
  qrCodeDescricao: StoryblokRichtext;
  botaoPix: StoryblokButtonNav[];
  descricao: StoryblokRichtext;
  acoes?: (StoryblokButtonNav | StoryblokButton)[];
  headlineImagem: StoryblokRichtext;
  imagem: StoryblokAsset;
  component: "contribution-section";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokDoacaoCard {
  valor: string;
  titulo: string;
  descricao: StoryblokRichtext;
  component: "doacao-card";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokDoacaoSection {
  subtitulo: string;
  titulo: string;
  valores: StoryblokDoacaoCard[];
  component: "doacao-section";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokDuvida {
  pergunta: string;
  resposta: StoryblokRichtext;
  component: "duvida";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokDuvidasFrequentesSection {
  subtitulo: StoryblokRichtext;
  duvidas: StoryblokDuvida[];
  component: "duvidas-frequentes-section";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokEquipeCard {
  imagem: StoryblokAsset;
  nome: string;
  cargo: string;
  component: "equipe-card";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokEquipeDepartamento {
  titulo: string;
  subtitulo: string;
  membros: StoryblokEquipeCard[];
  component: "equipe-departamento";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokEquipeSection {
  titulo: string;
  descricao: StoryblokRichtext;
  departamentos: StoryblokEquipeDepartamento[];
  component: "equipe-section";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokFooter {
  logo?: StoryblokAsset;
  title?: string;
  social?: StoryblokSocialButton[];
  linkscol?: StoryblokFooterColLink[];
  copyright?: string;
  component: "footer";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokFooterColLink {
  title: string;
  links?: StoryblokLabelLink[];
  component: "footer-col-link";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokFooterLinkCard {
  title: string;
  links: (StoryblokButtonNav | StoryblokButton)[];
  component: "footer-link-card";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokFraseImpactoSection {
  title?: string;
  description?: string;
  component: "frase-impacto-section";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokHeader {
  logo: StoryblokAsset;
  links: StoryblokButtonNav[];
  acoes?: (StoryblokButtonNav | StoryblokButton)[];
  component: "header";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokHierarquiaSection {
  titulo: string;
  descricao: StoryblokRichtext;
  organograma: StoryblokAsset;
  component: "hierarquia-section";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokImagemCard {
  imagem: StoryblokAsset;
  titulo: string;
  descricao: StoryblokRichtext;
  component: "imagem-card";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokJoinUsSection {
  cards: StoryblokCardInscricao[];
  component: "join-us-section";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokLabelLink {
  label: string;
  link?: Exclude<StoryblokMultilink, { linktype?: "email" } | { linktype?: "asset" }>;
  component: "label+link";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokMainHero {
  titulo: string;
  subtitulo: string;
  acoes?: (StoryblokButton | StoryblokButtonNav)[];
  cardTitulo: string;
  cardSubtitulo: string;
  imagem: StoryblokAsset;
  imagemMobile: StoryblokAsset;
  component: "main-hero";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokMetric {
  valor: string;
  descricao: string;
  component: "metric";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokPagina {
  header?: ISbStoryData<StoryblokHeader> | string;
  body: (
    | StoryblokAboutHero
    | StoryblokAboutSection
    | StoryblokAchievementsSection
    | StoryblokAmigosEinsteinSection
    | StoryblokAreaAtuacaoSection
    | StoryblokBeneficiosParceriaSection
    | StoryblokButton
    | StoryblokButtonNav
    | StoryblokCardAmigosEinstein
    | StoryblokCardGridSection
    | StoryblokCardInscricao
    | StoryblokCardTexto
    | StoryblokComoDoarSection
    | StoryblokContatoSection
    | StoryblokContributionSection
    | StoryblokDoacaoCard
    | StoryblokDoacaoSection
    | StoryblokDuvida
    | StoryblokDuvidasFrequentesSection
    | StoryblokEquipeCard
    | StoryblokEquipeDepartamento
    | StoryblokEquipeSection
    | StoryblokFooter
    | StoryblokFooterColLink
    | StoryblokFooterLinkCard
    | StoryblokFraseImpactoSection
    | StoryblokHeader
    | StoryblokHierarquiaSection
    | StoryblokImagemCard
    | StoryblokJoinUsSection
    | StoryblokLabelLink
    | StoryblokMainHero
    | StoryblokMetric
    | StoryblokPagina
    | StoryblokParceirosHero
    | StoryblokPeriodoInscricao
    | StoryblokPicture
    | StoryblokProcessoParceriaSection
    | StoryblokSingleTestimonalSection
    | StoryblokSocialButton
    | StoryblokTextStripe
    | StoryblokTipoParceriaCard
    | StoryblokTiposParceriaSection
    | StoryblokValorContribuicao
    | StoryblokVoluntariadoHero
  )[];
  footer?: ISbStoryData<StoryblokFooter> | string;
  titulo: string;
  descricao: string;
  imagem?: StoryblokAsset;
  component: "pagina";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokParceirosHero {
  descricao: StoryblokRichtext;
  imagens?: StoryblokPicture[];
  acoes: StoryblokButtonNav[];
  component: "parceiros-hero";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokPeriodoInscricao {
  dataInscricao: string;
  tituloInscricoesAbertas: string;
  tituloInscricoesEmBreve: string;
  component: "periodo-inscricao";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokPicture {
  asset: StoryblokAsset;
  component: "picture";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokProcessoParceriaSection {
  subtitulo: string;
  titulo: string;
  etapas: StoryblokCardTexto[];
  component: "processo-parceria-section";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokSingleTestimonalSection {
  imagem: StoryblokAsset;
  testemunho: string;
  nome?: string;
  apresentacao: string;
  botao: (StoryblokButton | StoryblokButtonNav)[];
  component: "single-testimonal-section";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokSocialButton {
  image?: StoryblokAsset;
  link?: Exclude<StoryblokMultilink, { linktype?: "email" } | { linktype?: "asset" }>;
  component: "social-button";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokTextStripe {
  texto: string;
  animar?: boolean;
  component: "text-stripe";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokTipoParceriaCard {
  titulo: string;
  descricao: StoryblokRichtext;
  botao: StoryblokButtonNav[];
  cor: "" | "#B0D9EC" | "#54ADD5" | "#74C3CC" | "#BFE3E7";
  component: "tipo-parceria-card";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokTiposParceriaSection {
  titulo: string;
  cards: StoryblokTipoParceriaCard[];
  component: "tipos-parceria-section";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokValorContribuicao {
  valor: string;
  contribuicao: string;
  component: "valor-contribuicao";
  _uid: string;
  [k: string]: any;
}

export interface StoryblokVoluntariadoHero {
  descricao: StoryblokRichtext;
  imagens?: StoryblokPicture[];
  acoes: StoryblokButtonNav[];
  component: "voluntariado-hero";
  _uid: string;
  [k: string]: any;
}
