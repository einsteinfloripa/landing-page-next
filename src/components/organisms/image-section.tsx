"use client";

import Image from "next/image";
import DiagonalStripes from "../molecules/diagonal-stripes";
import { DonateCta } from "../molecules/donate-cta";
import useScreenSize from "@/hooks/useScreenSize";

export const ImageSection = () => {
  const { isMobile } = useScreenSize();
  return (
    <section className="relative w-full flex items-center justify-center mt-16 lg:mt-28">
      <div className="flex items-center justify-center">
        <div className="relative px-5 sm:px-auto bg-white p-3 pb-24 lg:p-8 lg:pb-32 rounded-3xl w-full">
          <Image
            width={1273}
            height={491}
            src={isMobile ? "/alunos-organizadores-mobile.jpeg" : "/alunos-organizadores.png"}
            alt="Alunos e Organizadores do EinsteinFloripa"
            priority={true} // Load this image with high priority
            loading="eager" // Load the image eagerly
            sizes="(max-width: 768px) 100vw, 1273px" // Specify different sizes for different viewport widths
          />
          <div className="absolute -top-8 -right-0 lg:-top-16 lg:right-8 flex items-center justify-center">
            <DonateCta />
          </div>
        </div>
        <div>
          <DiagonalStripes />
        </div>
      </div>
    </section>
  );
};
