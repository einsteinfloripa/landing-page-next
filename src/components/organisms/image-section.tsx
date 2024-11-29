'use client'

import Image from "next/image";
import DiagonalStripes from "../molecules/diagonal-stripes";

export const ImageSection = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen"
    >
        <div className="relative bg-[#D9D9D9] p-8 pb-32 rounded-3xl">
            <Image width={1057} height={478} src='/alunos-organizadores.png' alt="Alunos e Organizadores do EinsteinFloripa"/>
            <div className="absolute -top-16 right-8 flex items-center justify-center">
                <div className="w-36 h-36 rounded-full bg-[#858585] relative flex items-center justify-center">
                    
                </div>

                <Image className="absolute inset-0 m-auto" src='/heart.svg' alt="Ícone de coração" width={40} height={36}/>
            </div>
        </div>
        <DiagonalStripes/>
    </section>
  );
};
