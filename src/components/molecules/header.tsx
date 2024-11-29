'use client'


import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export const Header = () => {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

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
      className="fixed z-40 items-center justify-between w-full h-[70px] px-20 py-2 bg-[#F5F5F5] dark:border-b dark:bg-neutral-800 flex"
    >
      <Link href="/" className="">
        <Image alt="Logo EinsteinFloripa" src="/logo.png" width={120} height={120}/>
      </Link>
      <nav className="hidden lg:block ">
        <ul className="flex justify-between gap-6 mr-4 text-lg">
          <Link
            href="/"
            className="border-b-2 text-black dark:text-white relative border-transparent hover:after:w-full px-6 py-2 cursor-pointer after:content-[''] after:absolute after:duration-500 after:bg-blue-steel after:h-0.5 after:w-0 after:left-0 after:-bottom-2"
          >
            Home
          </Link>
          <Link
            href="/processo-seletivo"
            className="border-b-2 text-black dark:text-white relative border-transparent hover:after:w-full px-6 py-2 cursor-pointer after:content-[''] after:absolute after:duration-500 after:bg-blue-steel after:h-0.5 after:w-0 after:left-0 after:-bottom-2"
          >
            Processo Seletivo
          </Link>
          <Link
            href="/equipe"
            className="border-b-2 text-black dark:text-white relative border-transparent hover:after:w-full px-6 py-2 cursor-pointer after:content-[''] after:absolute after:duration-500 after:bg-blue-steel after:h-0.5 after:w-0 after:left-0 after:-bottom-2"
          >
            Equipe
          </Link>
        </ul>
      </nav>
      <Link
            href="/"
            className="flex gap-2 border-b-2 text-black dark:text-white relative border-transparent hover:after:w-full px-6 py-2 cursor-pointer after:content-[''] after:absolute after:duration-500 after:bg-blue-steel after:h-0.5 after:w-0 after:left-0 after:-bottom-2"
      >
            <Image alt="Icone para Mensagens" src="/chat.svg" width={15} height={15} />
            Contato
        </Link>
      {/* <Button onClick={setDarkMode}>{darkMode ? "Light" : "Dark"}</Button> */}
    </motion.nav>
  );
};
