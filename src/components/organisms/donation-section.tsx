"use client";

import Image from "next/image";
import { Button } from "../atoms/button";
import { DonationValuesSection } from "../molecules/donation-values-section";
import { StarShape } from "../atoms/svg/star-shape";
import useScreenSize from "@/hooks/useScreenSize";

export const DonationSection = () => {
  const { isMobile } = useScreenSize();
  return (
    <section className="flex items-center justify-center py-32 xl:py-48 sm:px-10 text-app-neutral-900">
      <div className="relative lg:flex-row flex-col flex justify-between bg-app-blue-200 rounded-lg gap-10 pt-14 pb-32 py-10 px-5 lg:px-24 lg:py-16 w-full">
        <div className="flex flex-col gap-6">
          <h1 className="title-4xl lg:w-3/5">Gostou da iniciativa e quer nos ajudar?</h1>
          <div className="flex items-center md:w-4/5 gap-4">
            {!isMobile && (
              <Image
                className="rounded-lg"
                src="/qrcode-doacao.png"
                alt="QRCode para realizar doação"
                width={92}
                height={92}
              />
            )}

            <div className="flex flex-col items-start gap-4 md:gap-0">
              <p>
                Um pix pode <strong>melhorar a vida de nossos estudantes</strong> em situação de
                vulnerabilidade econômica!
              </p>
              <div className="flex flex-row gap-4">
                {isMobile && <Button>Copiar chave PIX</Button>}
                <Button className="p-0" variant="link">
                  Saiba mais
                </Button>
              </div>
            </div>
          </div>

          {!isMobile && (
            <div className="mt-4 space-y-8 max-w-[477px]">
              <p className="">
                Se você é uma <strong>empresa</strong> e quer nos ajudar, pode virar nosso
                patrocinador! Sempre estamos precisando de alguém para nos ajudar com materiais,
                comida, hospedagem de site, e muito mais. Entre em contato e nos conte como pode nos
                ajudar.
              </p>
              <Button>Entre em contato</Button>
            </div>
          )}
        </div>

        <DonationValuesSection />

        {isMobile && (
          <div className="mt-4 space-y-8 w-full max-w-[477px]">
            <p className="">
              Se você é uma <strong>empresa</strong> e quer nos ajudar, pode virar nosso
              patrocinador! Sempre estamos precisando de alguém para nos ajudar com materiais,
              comida, hospedagem de site, e muito mais. Entre em contato e nos conte como pode nos
              ajudar.
            </p>
            <Button>Entre em contato</Button>
          </div>
        )}
        <div className="absolute -bottom-24 right-0">
          <StarShape color="#FFEB66" width="180" height="180" />
        </div>
      </div>
    </section>
  );
};
