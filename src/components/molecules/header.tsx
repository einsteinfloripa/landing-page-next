'use client'
import { cn } from "@/lib/utils";
import { ChatCentered, List, X } from "@phosphor-icons/react/dist/ssr";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const headerLinks = [
    {
      name: 'Sobre',
      link: '/',
      aria: 'Saiba mais sobre nós.'
    },
    {
      name: 'Curso e Inscrição',
      link: '/',
      aria: 'Saiba sobre o curso e como se inscrever.'
    },
    {
      name: 'Voluntario',
      link: '/',
      aria: 'Apoie o projeto sendo um voluntario.'
    },
    {
      name: 'Apoie-nos',
      link: '/',
      aria: 'Saiba como apoiar nosso projeto.'
    },
  ]

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
      className="fixed z-40 w-full px-auto bg-app-neutral-10"
    >
      <div
      className="flex items-center justify-between w-full px-6 lg:px-10 py-6 max-w-wrapper"
      >
        <Link href="/" className="">
        
        <Image alt="Logo EinsteinFloripa" src="/logos/logo-horizontal.svg" width={130} height={60}/>
        </Link>
        <div
          className={cn(
            "hidden md:flex md:items-center md:w-full", 
            {"block absolute top-20 right-0 bg-app-neutral-10 border border-app-neutral-50 rounded-xl p-10 ":isMenuOpen && !hidden})}
        >
          <nav className="mx-auto">
            <ul className="flex flex-col md:flex-row md:justify-between gap-10 mr-4 text-lg">
              {headerLinks.map((headerLink) => {
                return <>
                <li key={headerLink.name}>
                  <Link
                    href={headerLink.link}
                    aria-label={headerLink.aria}
                    className="text-app-neutral-900 font-medium text-sm cursor-pointer relative inline-block after:content-[''] after:h-[1.5px] after:w-0 after:bg-app-neutral-900 hover:after:w-full after:transition-all after:duration-300 after:absolute after:block"
                  >
                    {headerLink.name}
                  </Link>
                </li>
                </>
              })}
            </ul>
          </nav>
          <Link
                href="/"
                aria-label="Entre em contato conosco."
                className="mt-10 md:mt-0 flex group items-center gap-2 text-sm font-medium w-20 transition-all duration-75"
          >
                <ChatCentered 
                  color="#000A1B" 
                  weight="fill" 
                  size={14} 
                  className="group-hover:h-5 group-hover:w-5"
                />
                Contato
          </Link>
        </div>
        <button 
          className="p-3 rounded-full border border-app-neutral-50 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
            {!isMenuOpen ?
            <List 
              color="#001840" 
              weight="regular" 
              size={16} 
              className=""
            /> : 
            <X 
              color="#001840" 
              weight="regular" 
              size={16} 
              className=""
            />
            }
        </button>
      </div>
    </motion.nav>
  );
};
