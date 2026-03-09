"use client";
import { getUrlFromSBLink, getWebpVersionFromSBImage } from "@/lib/utils";
import {
  StoryblokAsset,
  StoryblokHeader,
  StoryblokMultilink,
  StoryblokLabelLink,
} from "@/utils/storyblok-types.generated";
import { PulsingDot } from "../atoms/pulsing-dot";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { StoryblokServerComponent } from "@storyblok/react/rsc";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

type HeaderProps = {
  readonly links: {
    link: StoryblokMultilink;
    title: string;
  }[];
  readonly logo: StoryblokAsset;
  readonly acoes: StoryblokHeader["acoes"];
  readonly faixaDestaque?: StoryblokLabelLink[];
};

function Header({ links, logo, acoes, faixaDestaque }: HeaderProps) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFaixaDestaqueVisible, setIsFaixaDestaqueVisible] = useState(true);

  // Bloqueia o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (!previous) return;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      {/* Top nav bar */}
      <motion.nav
        variants={{
          hidden: { y: "-100%" },
          visible: { y: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
        className="fixed z-50 w-full backdrop-blur-md bg-white/20 flex flex-col items-center"
      >
        <div className="flex items-center justify-between w-full px-6 lg:px-10 py-4 max-w-wrapper">
          <Link href="/">
            <Image
              aria-label="Ir para página inicial"
              alt={logo.alt ?? ""}
              src={getWebpVersionFromSBImage(logo.filename!)}
              width={130}
              height={60}
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex md:items-center md:w-full">
            <nav className="mx-auto">
              <ul className="flex flex-row md:justify-between gap-10 mr-4 text-lg">
                {links.map((l, index) => (
                  <li key={index}>
                    <Link
                      href={getUrlFromSBLink(l.link)}
                      aria-label={l.title}
                      className="text-app-neutral-900 font-medium text-sm cursor-pointer relative inline-block after:content-[''] after:h-[1.5px] after:w-0 after:bg-app-neutral-900 hover:after:w-full after:transition-all after:duration-300 after:absolute after:block"
                    >
                      {l.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            {(acoes ?? []).map((acao, index) => (
              <StoryblokServerComponent key={index} blok={acao} />
            ))}
          </div>

          {/* Mobile menu (fechado) */}
          <button
            className="p-3 rounded-full border border-app-neutral-900 md:hidden"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <List color="#001840" weight="regular" size={20} />
          </button>
        </div>

        {faixaDestaque && faixaDestaque.length > 0 && isFaixaDestaqueVisible && (
          <div className="w-full bg-app-yellow-500 py-1.5 px-6 lg:px-10 text-sm relative">
            <div className="flex flex-row items-center text-xs sm:text-sm justify-center gap-2 sm:gap-3 text-app-neutral-900 w-full max-w-[85%] sm:max-w-wrapper mx-auto text-center flex-wrap">
              <div className="flex flex-row items-center gap-2 sm:gap-3 justify-center">
                <div className="hidden sm:block">
                  <PulsingDot color="green" />
                </div>
                <span className="line-clamp-1 sm:line-clamp-none text-left">
                  {faixaDestaque[0].label}
                </span>
              </div>
              {faixaDestaque[0].link && (
                <Link
                  href={getUrlFromSBLink(faixaDestaque[0].link)}
                  className="font-semibold underline hover:no-underline text-app-neutral-900 whitespace-nowrap"
                >
                  Saiba mais
                </Link>
              )}
            </div>
            <button
              onClick={() => setIsFaixaDestaqueVisible(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-black/10 transition-colors sm:hidden"
              aria-label="Fechar aviso"
            >
              <X weight="bold" size={14} />
            </button>
          </div>
        )}
      </motion.nav>

      {/* Mobile menu (aberto) */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-50 bg-white flex flex-col"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-app-neutral-50">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image
                aria-label="Ir para página inicial"
                alt={logo.alt ?? ""}
                src={getWebpVersionFromSBImage(logo.filename!)}
                width={130}
                height={60}
              />
            </Link>
            <button
              className="p-3 rounded-full border border-app-neutral-50"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Fechar menu"
            >
              <X color="#001840" weight="regular" size={20} />
            </button>
          </div>

          {/* Menu items */}
          <nav className="flex flex-col">
            {links.map((l, index) => (
              <Link
                key={index}
                href={getUrlFromSBLink(l.link)}
                aria-label={l.title}
                className="px-6 py-4 text-app-neutral-900 font-medium text-lg border-b border-app-neutral-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {l.title}
              </Link>
            ))}
            {(acoes ?? []).map((a, index) => (
              <Link
                key={index}
                href={getUrlFromSBLink(a.link)}
                aria-label={a.button[0].title}
                className="px-6 py-4 text-app-neutral-900 font-medium text-lg border-b border-app-neutral-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {a.button[0].title}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </>
  );
}

export default Header;
