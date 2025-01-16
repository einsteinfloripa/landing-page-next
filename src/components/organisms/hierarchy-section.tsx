import Image from "next/image";
import { Button } from "../atoms/button";

export const HierarchySection = () => {
  return (
    <div className="w-full sm:px-auto px-5 items-center justify-center flex">
      <section className="relative w-full max-w-wrapper flex md:mx-10 lg:mx-24 xl:mx-48 flex-col text-center md:text-left py-20">
        <h1 className="title-4xl mb-10">Hierarquia</h1>
        <div className="flex items-center md:justify-between gap-20 xl:gap-32 flex-col-reverse md:flex-row">
          <div className="flex flex-col gap-6 items-left justify-left text-left">
            <div className="max-w-[640px] flex flex-col gap-6">
              <p>
                Para garantir o funcionamento eficiente e o alinhamento entre as equipes, seguimos
                uma estrutura hierárquica clara, conforme mostrado no gráfico.
              </p>
              <p>
                <b>Presidência:</b> No topo da estrutura, a Presidência lidera e supervisiona o
                projeto, guiando toda a organização em direção aos nossos objetivos.
              </p>
              <p>
                <b>Diretoria e Docentes Líderes:</b> Logo abaixo da Presidência, a estrutura se
                divide em duas áreas principais. A Diretoria é responsável por funções
                administrativas e de apoio, englobando os Assessores e a equipe de Organização, que
                coordenam a logística e o planejamento do projeto. Em paralelo, os Docentes Líderes
                orientam e apoiam os Professores e Monitores, que trabalham diretamente com os
                alunos na área de Docência.
              </p>
              <p>
                <b>Voluntários:</b> Na base, estão todos os voluntários que, compondo as diferentes
                funções acima, são a força essencial para o sucesso do Einstein Floripa.
              </p>
            </div>
          </div>

          <Image
            src="/images/hierarquia.png"
            alt="Hierarquia"
            className="object-contain"
            width={400}
            height={450}
          />
        </div>
        <Button variant="outline" className="w-fit mt-5">
          Seja parte da equipe
        </Button>
      </section>
    </div>
  );
};
