"use client";
import { Button } from "../atoms/button";
import { CrazyEinsteinBadget } from "../molecules/crazy-einstein-badget";
import { Sticker } from "../molecules/sticker";

export const Hero = () => {
  return (
    <div className="w-full px-5 sm:px-auto">
      <section className="relative flex justify-center max-w-wrapper">
        <div className="flex flex-col md:items-center px-4 gap-7 mt-14 md:mt-28">
          <h1 className="title-6xl md:text-center max-w-[720px] mt-28">
            Junte-se a nós e transforme o futuro de aluno para aluno
          </h1>
          <p className="md:text-center md:max-w-[514px]">
            Cursinho pré-vestibular gratuito para estudantes de baixa renda que sonham com uma
            educação superior de qualidade.
          </p>
          <div className="flex gap-2">
            <Button>Seja nosso aluno</Button>
            <Button variant={"outline"}>Faça parte da equipe</Button>
          </div>
        </div>
        <CrazyEinsteinBadget className="hidden lg:block absolute top-20 right-32 z-50" />
        <Sticker className="hidden lg:block absolute -rotate-12 top-96 left-32" />
      </section>
    </div>
  );
};
