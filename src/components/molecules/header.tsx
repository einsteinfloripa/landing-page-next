'use client'
import { ChatCentered } from "@phosphor-icons/react/dist/ssr";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

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
      className="fixed z-40 flex items-center justify-between w-full px-10 py-6 bg-app-neutral-10"
    >
      <Link href="/" className="">
      
        <Image alt="Logo EinsteinFloripa" src="/logos/logo-horizontal.svg" width={110} height={40}/>
      </Link>
      <nav className="hidden lg:block ">
        <ul className="flex justify-between gap-10 mr-4 text-lg">
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
            className="group flex items-center gap-2 text-sm font-medium w-20 transition-all duration-75"
      >
            <ChatCentered 
              color="#000A1B" 
              weight="fill" 
              size={14} 
              className="group-hover:h-5 group-hover:w-5"
            />
            Contato
      </Link>
    </motion.nav>
  );
};
