// components/Statistics.js

const AchievementsSection = () => {
    const stats = [
      { value: "+30MIL", label: "APROVADOS" },
      { value: "+30MIL", label: "VIDAS TRANSFORMADAS" },
      { value: "+30MIL", label: "HORAS TRABALHADAS" },
      { value: "+30MIL", label: "HORAS DE AULA" },
    ];
  
    return (
        <section
      className="relative flex items-center justify-start min-h-[calc(75vh)] ml-[calc(20vw)]"
    >
      <div className="text-gray-900 p-8">
        <div className="max-w-md mx-auto space-y-8">
          {stats.map((stat, index) => (
            <>
                <div key={index} className="flex items-center space-x-4">
                <span className="text-5xl font-bold">{stat.value}</span>
                <span className="text-xl">{stat.label}</span>
                </div>
                <hr/>
            </>
          ))}
        </div>
      </div>
    </section>
    );
  };
  
  export default AchievementsSection;
  