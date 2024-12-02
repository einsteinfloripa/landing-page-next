'use client'

import Image from "next/image";
import DiagonalStripes from "../molecules/diagonal-stripes";
import { DonateCta } from "../molecules/donate-cta";

export const ImageSection = () => {
  return (
    <div className="w-full px-auto">
      <section
        className="relative flex items-center justify-center mt-28 px-20 max-w-wrapper"
      >
          <div className="relative bg-white p-8 pb-32 rounded-3xl w-full">
              <Image 
                width={1273} 
                height={491}
                src='/alunos-organizadores.png' 
                alt="Alunos e Organizadores do EinsteinFloripa"
              />
              <div 
                className="absolute -top-16 right-8 flex items-center justify-center"
                >
                  <DonateCta />
              </div>
          </div>
          <div>
          <DiagonalStripes />
          </div>
      </section>
    </div>
  );
};
