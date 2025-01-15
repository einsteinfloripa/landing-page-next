import * as Accordion from "@radix-ui/react-accordion";
import { TeamAccordion } from "../molecules/team-accordion";
import ProtagonismoIcon from "@/assets/ilustrations/protagonismo.svg";

export const TeamSection = () => {
  return (
    <div className="w-full sm:px-auto px-5 items-center justify-center flex">
      <section className="relative w-full max-w-wrapper md:mx-10 lg:mx-24 flex justify-center items-center flex-col gap-20 py-20">
        <div className="flex flex-col gap-6 items-center justify-center">
          <h1 className="title-4xl max-w-72">Nossos valores</h1>
          <p className="text-center max-w-[640px]">
            Aqui no Einstein Floripa nos organizamos em diferentes departamentos, cada um com papéis
            específicos que juntos contribuem para nossa missão. Essa divisão permite que cada
            voluntário possa atuar em uma área que valorize suas habilidades e interesses,
            promovendo um ambiente onde aprendizado e colaboração caminham lado a lado.
          </p>
        </div>

        <Accordion.Root type="single" className="w-full" collapsible>
          <TeamAccordion
            title="Capital"
            description="Diretoria Administrativa"
            members={Array.from({ length: 5 }).map((_, index) => ({
              name: `João Silva ${index}`,
              role: "Diretor Administrativo",
              image: ProtagonismoIcon,
            }))}
          />

          <TeamAccordion
            title="Embaixada do Amor"
            description="Gestão de Pessoas"
            members={Array.from({ length: 5 }).map((_, index) => ({
              name: `João Silva ${index}`,
              role: "Diretor Administrativo",
              image: ProtagonismoIcon,
            }))}
          />
          <TeamAccordion
            title="Times Square"
            description="Captação de Recursos e Marketing"
            members={Array.from({ length: 5 }).map((_, index) => ({
              name: `João Silva ${index}`,
              role: "Diretor Administrativo",
              image: ProtagonismoIcon,
            }))}
          />
          <TeamAccordion
            title="Vale do Silicio"
            description="Tecnologia e Inovação"
            members={Array.from({ length: 5 }).map((_, index) => ({
              name: `João Silva ${index}`,
              role: "Diretor Administrativo",
              image: ProtagonismoIcon,
            }))}
          />
          <TeamAccordion
            title="Ministério"
            description="Financeiro e Jurídico"
            members={Array.from({ length: 5 }).map((_, index) => ({
              name: `João Silva ${index}`,
              role: "Diretor Administrativo",
              image: ProtagonismoIcon,
            }))}
          />
          <TeamAccordion
            title="Hogwarts"
            description="Departamento de Ensino"
            members={Array.from({ length: 5 }).map((_, index) => ({
              name: `João Silva ${index}`,
              role: "Diretor Administrativo",
              image: ProtagonismoIcon,
            }))}
          />
        </Accordion.Root>
      </section>
    </div>
  );
};
