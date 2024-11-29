'use client'

import Image from "next/image";
import { Button } from "../atoms/button";
import { DonationValuesSection } from "../molecules/donation-values-section";
import Heading from "../atoms/typography/typography";
import { ArrowUpRight } from "lucide-react";


export const DonationSection = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen p-8"
    >
       <div className="flex bg-[#D9D9D9] rounded-lg p-24">
            <div className="flex flex-col gap-16 w-1/2">
                <div className="flex flex-col gap-8">
                    <Heading className="text-xl xl:text-5xl uppercase w-3/5">
                        É uma empresa e quer nos ajudar?
                    </Heading>
                    <p className="w-3/5">
                    Você pode ser nosso patrocinador! Sempre estamos precisando de alguém para nos ajudar: com materiais, comida, hospedagem de site, e muito mais. Entre em contato e nos conte sua proposta.
                    </p>
                    <div>
                        <Button className="px-6 py-4 text-white rounded-full bg-black">Entre em contato</Button>
                    </div>
                </div>

                <div className="flex gap-6 items-center ">
                    <div>
                        <Image className="rounded-lg" src="/qrcode-doacao.png"alt="QRCode para realizar doação" width={230} height={230} />
                    </div>

                    <div className="flex flex-col items-start justify-between">
                        <p className="w-4/5">
                            Se você gostou da nossa proposta e não sabe como nos ajudar, um pix pode <strong>melhorar a vida de nossos estudantes</strong> em situação de vulnerabilidade econômica!
                        </p>
                        <div>
                            <Button className="uppercase bg-transparent text-black hover:bg-transparent" >
                                Saiba mais
                                <ArrowUpRight size={18}/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <DonationValuesSection/>

       </div>
    </section>
  );
};
