// components/Statistics.js

import Image from "next/image";

const AchievementsSection = () => {
    const stats = [
      { value: "+600", label: "APROVADOS" },
      { value: "+2MIL", label: "VIDAS TRANSFORMADAS" },
      { value: "+23MIL", label: "HORAS TRABALHADAS" },
      { value: "+8MIL", label: "HORAS DE AULA" },
    ];
  
    return (
    <div className="w-full px-auto">
      <section
        className="pl-[125px] flex justify-between max-w-wrapper"
      >
        <ul className="space-y-8 mt-32">
            {stats.map((stat, index) => (
              <>
                  <li key={index} className="flex items-center space-x-4">
                    <span className="title-4xl">{stat.value}</span>
                    <span className="body-small-medium">{stat.label}</span>
                  </li>
                  <hr/>
              </>
            ))}
        </ul>
        <Image
          src="/images/aprovados.png"
          alt="Imagem de diversos estudantes aprovados no vestibular da UFSC."
          width={800}
          height={500}
          className="mt-20"
        />
      </section>
    </div>
    );
  };
  
  export default AchievementsSection;
  