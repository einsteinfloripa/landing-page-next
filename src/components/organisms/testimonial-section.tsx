import Image from "next/image"
import { Button } from "../atoms/button";
import Student from "@/assets/student.png"

export const TestimonialSection = () => {
    return (
        <div className="w-full px-auto">
            <section className="flex items-center justify-center min-h-screen px-10 text-app-neutral-900 max-w-wrapper">
                <div
                    className="flex flex-col items-center gap-10"
                >
                    <Image 
                        src={Student}
                        alt="Imagem de estudante do Einstein Floripa"
                        width={140}
                        height={140}
                        className="rounded-full border-4 border-app-blue-500"
                    />
                    <h1 className="body-3xl md:body-4xl max-w-[588px] text-center">
                        “Einstein floripa me permitiu evoluir como pessoa e entrar na faculdade dos meus sonhos!”
                    </h1>
                    <div className="space-y-1 md:space-x-4">
                        <span className="block md:inline-block text-start body-xl-medium">
                            João Gonsalves
                        </span>
                        <span className="hidden md:inline-block text-app-neutral-300">
                            ──
                        </span>
                        <span className="block md:inline-block text-start body-small text-app-neutral-300">
                            Aluno do Einstein 2024.2
                        </span>
                    </div>
                    <Button variant={"link"}>Ver +50 depoimentos</Button>
                </div>
            </section>
        </div>
    )
}