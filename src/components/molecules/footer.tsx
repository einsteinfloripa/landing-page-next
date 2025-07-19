"use client";

import {
  StoryblokAsset,
  StoryblokFooter,
  StoryblokFooterColLink,
} from "@/utils/storyblok-types.generated";
import Image from "next/image";
import { getUrlFromSBLink, getWebpVersionFromSBImage } from "@/lib/utils";
import Link from "next/link";
import PaperTextureBackground from "./paper-texture-background";
import { usePathname } from "next/navigation";

type FooterProps = {
  logo: StoryblokAsset;
  title: string;
  social?: StoryblokFooterColLink["links"];
  linkscol: StoryblokFooter["linkscol"];
  copyright: string;
};

const Footer = ({ logo, title, social, linkscol, copyright }: FooterProps) => {
  const pathname = usePathname();

  const bgBackgroundMap: Record<string, string> = {
    "/": "bg-app-dark-blue-500",
    "/home": "bg-app-dark-blue-500",
    "/voluntariado": "bg-app-neutral-10",
    "/sobre-nos": "bg-app-neutral-10",
  }; // Mapear as rotas com o bg correspondente

  const bgBackground = bgBackgroundMap[pathname] ?? null;

  return (
    <section className="relative w-full flex overflow-hidden">
      {bgBackground && (
        <PaperTextureBackground
          className={`${bgBackground} transform scale-y-[-1] transition-transform`}
        />
      )}
      <div className="relative w-full max-w-wrapper flex flex-col p-4 sm:px-12 sm:py-8 mt-10 mb-20 rounded-3xl">
        <PaperTextureBackground className="bg-app-blue-500 rounded-3xl" />
        <div className="flex justify-between flex-col md:flex-row gap-4">
          <div className="flex gap-4 items-center">
            <Image
              src={getWebpVersionFromSBImage(logo.filename!)}
              alt={logo.alt ?? ""}
              width={62}
              height={60}
            />
            <h2 className="title-2xl max-w-72 text-neutral-50">{title}</h2>
          </div>
          <div className="flex gap-4">
            {social?.map((s) => {
              return (
                <Link
                  key={s._uid}
                  href={getUrlFromSBLink(s.link!)}
                  aria-label={s.title}
                  className="flex items-center"
                >
                  <Image
                    src={getWebpVersionFromSBImage(s.image.filename!)}
                    alt={s.image.alt ?? ""}
                    width={48}
                    height={48}
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col  lg:flex-row gap-8 mt-6 lg:mt-12 text-neutral-50 justify-between lg:w-10/12">
          {linkscol?.map((l, index) => {
            return (
              <div key={`links-col-${index}`} className="flex flex-col gap-3">
                <strong>{l.title}</strong>
                {l.links?.map((link, idx) => {
                  return (
                    <Link
                      key={`link-${idx}`}
                      href={link.link ? getUrlFromSBLink(link.link) : "#"}
                      aria-label={link.label}
                      className="flex items-center"
                    >
                      <span className="max-w-32 text-neutral-50 opacity-70">{link.label}</span>
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div>
          <p className="text-neutral-50 text-sm mt-4 opacity-70">{copyright}</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
