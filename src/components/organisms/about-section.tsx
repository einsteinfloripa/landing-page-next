"use client";

import { Button } from "../atoms/button";
import { EinsteinTransformBadget } from "../molecules/einstein-transform-badget";

export const AboutSection = () => {
  return (
    <div className="w-full sm:px-auto px-5 items-center justify-center flex">
      <section className="relative w-full max-w-container md:mx-10 xl:mx-48 flex justify-between mt-40 flex-col lg:flex-row gap-10">
        <div className="relative flex w-fit flex-col items-end md:gap-3 mb-10">
          <h1 className="title-4xl text-left max-w-72">
            Criando um futuro onde a educação é para todos
          </h1>

          <EinsteinTransformBadget />
        </div>
        <div className="flex flex-col gap-8">
          <p className="lg:w-[454px]">
            Einstein Floripa nasceu do sonho de três universitários{" "}
            <strong>democratizar o acesso ao ensino superior</strong> em no Brasil. Ao se depararem
            com as dificuldades de muitos para alcançar uma <strong>educação de qualidade</strong>,
            decidiram agir e criaram este projeto <strong> voluntário e gratuito</strong>, que abre
            portas para um futuro melhor.
          </p>
          <div>
            <Button className="rounded-full">Conheça mais</Button>
          </div>
        </div>
      </section>
    </div>
  );
};
