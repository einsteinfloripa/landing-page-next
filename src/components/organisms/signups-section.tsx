import { PulsingBanner } from "../molecules/pulsing-banner"
import Calendar from "@/assets/ilustrations/calendar.svg"
import SpeechBubble from "@/assets/ilustrations/speech-bubble-with-graduation-hat.svg"
import Books from "@/assets/ilustrations/books.svg"
import Image from "next/image"
import { Button } from "../atoms/button"

export const SignupsSection = () => {
    const members = [
        {
            title: 'Organizador',
            description: 'Faça parte de um dos nossos departamentos e ajude a coordenar as atividades dentro do Einstein.',
            ilustration: Calendar,
            viewMoreLink: '/',
            signupLink: '/'
        },
        {
            title: 'Professor ou Monitor',
            description: 'Ministre aulas e, como monitor, disponibilize horários para tirar dúvidas e orientar os alunos.',
            ilustration: SpeechBubble,
            viewMoreLink: '/',
            signupLink: '/'
        },
        {
            title: 'Aluno',
            description: 'Participe de aulas, faça simulados e tenha acesso a monitorias exclusivas para cada matéria.',
            ilustration: Books,
            viewMoreLink: '/',
            signupLink: '/'
        },
    ]
    return(
        <div className="w-full px-auto">
            <PulsingBanner announcement="O período para as inscrições já está aberto! Inscreva-se abaixo"/>
            <section className="min-h-screen px-[125px] text-app-neutral-900 max-w-wrapper">
                <h1 className="title-4xl max-w-72 mt-14">
                    Faça parte do Einstein Floripa
                </h1>
                <ul className="space-y-10 mt-20 px-24">
                    {members.map((member) => {
                        return (
                            <>
                            <li 
                                key={member.title}
                                className="flex items-center justify-between w-full"
                            >
                                <div className="flex items-center gap-5">
                                    <Image 
                                        src={member.ilustration}
                                        alt="Ilustração"
                                        width={125}
                                        height={97}
                                    />
                                    <div className="flex flex-col gap-2 max-w-96">
                                        <h3 className="body-3xl">
                                            {member.title}
                                        </h3>
                                        <p className="body-regular">
                                            {member.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="space-x-1">
                                    <Button variant="link">Saiba mais</Button>
                                    <Button>Inscreva-se</Button>
                                </div>
                            </li>
                            <hr />
                            </>
                        )
                    })}
                </ul>
            </section>
        </div>
    )
}