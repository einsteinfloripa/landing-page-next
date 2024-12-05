'use client'

import Image from "next/image";
import { Button } from "../atoms/button";
import { DonationValuesSection } from "../molecules/donation-values-section";
import { StarShape } from "../atoms/svg/star-shape";


export const DonationSection = () => {
  return (
    <section
      className="flex items-center justify-center min-h-screen py-32 px-10 text-app-neutral-900"
    >
       <div className="relative flex justify-between bg-app-blue-200 rounded-lg pt-14 pb-32 px-[125px] w-full">
            <div className="flex flex-col gap-11">
                <h1 className="title-4xl w-3/5">
                        Gostou da iniciativa e quer nos ajudar?
                </h1>
                <div className="flex items-center max-w-[477px]">
                        <Image 
                            className="rounded-lg" 
                            src="/qrcode-doacao.png"
                            alt="QRCode para realizar doação" 
                            width={92} 
                            height={92} 
                        />

                        <div className="flex flex-col items-start justify-between">
                            <p className="ml-4">
                            Um pix pode <strong>melhorar a vida de nossos estudantes</strong> em situação de vulnerabilidade econômica!
                            </p>
                            <Button variant="link">
                                Saiba mais
                            </Button>
                        </div>
                </div>
                <div className="mt-4 space-y-8 max-w-[477px]">
                        <p className="">
                        Se você é uma <strong>empresa</strong> e quer nos ajudar, pode virar nosso patrocinador! Sempre estamos precisando de alguém para nos ajudar com materiais, comida, hospedagem de site, e muito mais. Entre em contato e nos conte como pode nos ajudar.
                        </p>
                        <Button>Entre em contato</Button>
                </div>
            </div>

            <div className="max-w-[422px]">
                <DonationValuesSection/>
            </div>
            <div className="absolute -bottom-24 right-0">
                <StarShape color="#FFEB66" width="180" height="180" />
            </div>
       </div>
    </section>
  );
};
