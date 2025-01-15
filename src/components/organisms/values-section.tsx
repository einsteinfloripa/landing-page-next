import { ValueCard } from "../molecules/value-card";
import ProtagonismoIcon from "@/assets/ilustrations/protagonismo.svg";
import CompromissoIcon from "@/assets/ilustrations/compromisso.svg";
import ForcaDeVontadeIcon from "@/assets/ilustrations/forca-de-vontade.svg";
import ParceriaIcon from "@/assets/ilustrations/parceria.svg";

export const ValuesSection = () => {
  return (
    <div className="w-full sm:px-auto px-5 items-center justify-center flex">
      <section className="relative w-full max-w-wrapper md:mx-10 flex justify-center items-center flex-col gap-20 py-20">
        <h1 className="title-4xl max-w-72">Nossos valores</h1>

        <div className="flex flex-wrap gap-10 justify-evenly">
          <ValueCard
            title="Protagonismo"
            description="Empoderamos nossos integrantes para que sejam agentes de transformação, assumindo a responsabilidade pelo próprio crescimento e pelo impacto positivo na vida dos outros."
            icon={ProtagonismoIcon}
          />
          <ValueCard
            title="Compromisso"
            description="Internalizamos o duplo impacto como um todo, ou seja, prezar pelo desenvolvimento e crescimento de cada um, seja pessoal ou dos outros (alunos, professores e demais voluntarios)."
            icon={CompromissoIcon}
          />
          <ValueCard
            title="Força de Vontade"
            description="Acreditamos que tentar faz parte do processo e por isso devemos renovar e acreditar no nosso esforço! “É divertido fazer o que parece impossível”, então desistir de cara não é uma opção!"
            icon={ForcaDeVontadeIcon}
          />
          <ValueCard
            title="Parceria"
            description="Ser Einsteiniano é estar presente para os companheiros, colaborar e transformar desafios em oportunidades de crescimento para todos!"
            icon={ParceriaIcon}
          />
        </div>
      </section>
    </div>
  );
};
