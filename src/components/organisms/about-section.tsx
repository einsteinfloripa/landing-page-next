'use client'

import { Button } from "../atoms/button";
import { EinsteinTransformBadget } from "../molecules/einstein-transform-badget";

export const AboutSection = () => {
  return (
    <div className="w-full px-auto">
        <section
        className="relative flex justify-between px-[125px] mt-40 max-w-wrapper"
        >
            <div className="flex flex-col items-end gap-3">
                <h1 className="title-4xl max-w-72 text-left">
                    Criando um futuro onde a educação é para todos
                </h1>
                <EinsteinTransformBadget />
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
        </section>
    </div>
  );
};
