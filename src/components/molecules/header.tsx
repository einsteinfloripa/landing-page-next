"use client";
import { cn, getUrlFromSBLink, getWebpVersionFromSBImage } from "@/lib/utils";
import {
  StoryblokAsset,
  StoryblokHeader,
  StoryblokMultilink,
} from "@/utils/storyblok-types.generated";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { StoryblokServerComponent } from "@storyblok/react/rsc";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type HeaderProps = {
  links: {
    link: StoryblokMultilink;
    title: string;
  }[];
  logo: StoryblokAsset;
  acoes: StoryblokHeader["acoes"];
};

const Header = ({ links, logo, acoes }: HeaderProps) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      className="fixed z-40 w-full px-auto backdrop-blur-md"
    >
      <div className="flex items-center justify-between w-full px-6 lg:px-10 py-4 max-w-wrapper">
        <Link href="/" className="">
          <Image
            alt={logo.alt ?? ""}
            src={getWebpVersionFromSBImage(logo.filename!)}
            width={130}
            height={60}
          />
        </Link>
        <div
          className={cn("hidden md:flex md:items-center md:w-full", {
            "block absolute top-20 right-0 bg-app-neutral-10 border border-app-neutral-50 rounded-xl p-10 ":
              isMenuOpen && !hidden,
          })}
        >
          <nav className="mx-auto">
            <ul className="flex flex-col md:flex-row md:justify-between gap-10 mr-4 text-lg">
              {links.map((l, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={getUrlFromSBLink(l.link)}
                      aria-label={l.title}
                      className="text-app-neutral-900 font-medium text-sm cursor-pointer relative inline-block after:content-[''] after:h-[1.5px] after:w-0 after:bg-app-neutral-900 hover:after:w-full after:transition-all after:duration-300 after:absolute after:block"
                    >
                      {l.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          {(acoes ?? []).map((acao, index) => (
            <StoryblokServerComponent key={index} blok={acao} />
          ))}
        </div>
        <button
          className="p-3 rounded-full border border-app-neutral-50 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          {!isMenuOpen ? (
            <List color="#001840" weight="regular" size={16} className="" />
          ) : (
            <X color="#001840" weight="regular" size={16} className="" />
          )}
        </button>
      </div>
    </motion.nav>
  );
};

export default Header;
