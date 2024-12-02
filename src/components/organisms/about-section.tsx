'use client'

import Image from "next/image";
import Heading from "../atoms/typography/typography";
import { Button } from "../atoms/button";

export const AboutSection = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen"
    >
        <div className="flex flex-col lg:flex-row items-center px-4 gap-60">
            <div className="text-center 2xl:text-start relative 2xl:w-[457px]">
                <Heading className="text-xl xl:text-5xl uppercase">
                    Criando um futuro onde a educação é para todos
                </Heading>
                <div className="xl:absolute xl:-bottom-24 xl:-right-16 flex items-center justify-center">
                    <div className="w-36 h-36 rounded-full bg-[#E3E3E3] relative flex items-center justify-center"/>
                    <Image className="absolute left-0 right-0 m-auto" src='/logos/logo-icon.svg' alt="Logo Einstein" width={72} height={72}/>
                </div>

            </div>
            <div className="flex flex-col gap-8">
                <p className="lg:w-[454px] ">
                Einstein Floripa nasceu do sonho de três universitários <strong>democratizar o acesso ao ensino superior</strong> em  no Brasil. Ao se depararem com as dificuldades de muitos para alcançar uma <strong>educação de qualidade</strong>, decidiram agir e criaram este projeto <strong> voluntário e gratuito</strong>, que abre portas para um futuro melhor.
                </p>
                <div>
                    <Button className="rounded-full ">
                        Conheça mais
                    </Button>
                </div>
            </div>
        </div>
    </section>
  );
};
