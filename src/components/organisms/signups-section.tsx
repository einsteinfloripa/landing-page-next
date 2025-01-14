import { PulsingBanner } from "../molecules/pulsing-banner";
import Calendar from "@/assets/ilustrations/calendar.svg";
import SpeechBubble from "@/assets/ilustrations/speech-bubble-with-graduation-hat.svg";
import Books from "@/assets/ilustrations/books.svg";
import Image from "next/image";
import { Button } from "../atoms/button";
import { isSignupsAvailable, signupsDate } from "@/utils/configs";

export const SignupsSection = () => {
  const members = [
    {
      title: "Organizador",
      description:
        "Faça parte de um dos nossos departamentos e ajude a coordenar as atividades dentro do Einstein.",
      ilustration: Calendar,
      viewMoreLink: "/",
      signupLink: "/",
    },
    {
      title: "Professor ou Monitor",
      description:
        "Ministre aulas e, como monitor, disponibilize horários para tirar dúvidas e orientar os alunos.",
      ilustration: SpeechBubble,
      viewMoreLink: "/",
      signupLink: "/",
    },
    {
      title: "Aluno",
      description:
        "Participe de aulas, faça simulados e tenha acesso a monitorias exclusivas para cada matéria.",
      ilustration: Books,
      viewMoreLink: "/",
      signupLink: "/",
    },
  ];
  return (
    <div className="w-full">
      <PulsingBanner
        announcement={
          isSignupsAvailable
            ? "O período para as inscrições já está aberto! Inscreva-se abaixo"
            : `O período para as inscrições abrirá no dia ${signupsDate}!`
        }
        dotColor={isSignupsAvailable ? "green" : "red"}
      />
      <section className=" text-app-neutral-900 max-w-wrapper px-5 sm:px-24">
        <h1 className="title-4xl max-w-72 mt-14">Faça parte do Einstein Floripa</h1>
        <ul className="space-y-10 mt-20">
          {members.map((member) => {
            return (
              <>
                <li
                  key={member.title}
                  className="flex md:items-center md:justify-between w-full flex-col md:flex-row gap-4"
                >
                  <div className="flex items-center gap-5">
                    <Image src={member.ilustration} alt="Ilustração" width={125} height={97} />
                    <div className="flex flex-col gap-2 max-w-96">
                      <h3 className="body-3xl">{member.title}</h3>
                      <p className="body-regular">{member.description}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end flex-row-reverse md:flex-row">
                    <Button variant="link">Saiba mais</Button>
                    <Button disabled={!isSignupsAvailable}>Inscreva-se</Button>
                  </div>
                </li>
                <hr />
              </>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
