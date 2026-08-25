"use client";

import { StoryblokComoDoarSection } from "@/utils/storyblok-types.generated";
import { Blok } from "@/utils/types";
import PaperTextureBackground from "../molecules/paper-texture-background";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Check, ArrowRight, ClipboardList, Heart, Star } from "lucide-react";
export const SbComoDoarSection = ({ blok }: Blok<StoryblokComoDoarSection>) => {
  const {
    titulo,
    subtitulo,
    descricao,
    linkCredito,
    linkForm,
    chavePix,
    qrCodePix,
  } = blok;

  const [isClipped, setIsClipped] = useState(false);

  useEffect(() => {
    if (isClipped) {
      setTimeout(() => {
        setIsClipped(false);
      }, 2000);
    }
  }, [isClipped]);

  return (
    <section
      {...storyblokEditable(blok)}
      className="relative w-full flex overflow-hidden"
      id="como-doar"
    >
      <PaperTextureBackground
        className="bg-app-blue-500"
        opacity={80}
        version={2}
      />
      <div className="relative w-full flex flex-col px-5 sm:px-24 pt-12 pb-24 sm:pt-16 sm:pb-36 text-white gap-10 lg:gap-20 max-w-7xl mx-auto mt-4">
        <div className="flex flex-col text-center w-full gap-1 items-center justify-center xl:mb-10 z-10">
          <h4 className="uppercase font-bold text-app-neutral-50">
            {subtitulo}
          </h4>
          <h1 className="title-4xl">{titulo}</h1>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-12 w-full max-w-6xl mx-auto mt-2">
          <div className="flex flex-col gap-6 w-full lg:w-[320px] shrink-0">
            {/* <div className="p-5 w-full rounded-xl border border-app-violet-800 bg-app-violet-400 space-y-4">
              <h2 className="title-4xl text-center">Transferência</h2>
              <RichText
                richText={infoTransferencia}
                className={{ paragraph: "text-app-neutral-10 text-center" }}
              />
              </div> */}
            <div className="p-4 w-full lg:w-90 rounded-xl border border-app-dark-blue-900 bg-app-dark-blue-600 flex items-center justify-center flex-col gap-4">
              <h2 className="title-4xl text-center">Pix</h2>
              <Image
                src={qrCodePix.filename!}
                width={160}
                height={160}
                className="max-w-[160px] max-h-[160px]"
                alt={`Pix: ${chavePix}`}
              />
              <p>
                Chave <span className="font-semibold">{chavePix}</span>
              </p>
              <button
                className="font-semibold enabled:hover:cursor-pointer enabled:hover:underline"
                onClick={() => {
                  navigator.clipboard.writeText(chavePix ?? "");
                  setIsClipped(true);
                }}
                type="button"
                disabled={isClipped}
              >
                {isClipped ? (
                  <span className="flex items-center gap-2">
                    <Check className="w-4" /> Chave pix copiada
                  </span>
                ) : (
                  "Copiar chave Pix"
                )}
              </button>
            </div>
            <p className="font-medium text-left">{descricao}</p>
          </div>
          <div className="flex-1 flex flex-col w-full">
            <div className="p-5 max-w-400 rounded-xl border border-app-yellow-900 bg-app-yellow-500 text-app-neutral-700 flex flex-col gap-6">
              <div className="flex flex-col items-center gap-2">
                <h2 className="title-4xl text-center">
                  Seja um Amigo do Einstein
                </h2>
                <h3 className="title-3xl text-center">
                  FAZENDO DOAÇÕES RECORRENTES
                </h3>
              </div>

              <p className="title-xl text-left pl-1">Escolha como:</p>

              <div className="flex flex-col gap-6 p-5 sm:p-6 bg-white/40 rounded-xl border border-black/5 shadow-sm">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/icons/credit-card.svg"
                      width={40}
                      height={40}
                      alt="Ícone de cartão de crédito"
                      className="shrink-0"
                    />
                    <div className="flex flex-col">
                      <h4 className="font-bold text-lg leading-tight">
                        Via Cartão de Crédito
                      </h4>
                      <p className="text-sm opacity-90">
                        Sua doação transforma vidas!
                      </p>
                    </div>
                  </div>
                  <a
                    href={linkCredito?.url || linkCredito?.cached_url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-app-blue-700 text-white text-center py-2 px-8 rounded-full text-sm font-semibold hover:bg-app-blue-600 transition-colors shadow-md whitespace-nowrap"
                  >
                    Acessar Link
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-3 sm:gap-2 text-sm font-medium mt-2">
                  <div className="flex flex-row sm:flex-col items-center gap-4 sm:gap-3 w-full sm:flex-1 text-left sm:text-center">
                    <div className="w-8 h-8 sm:w-7 sm:h-7 shrink-0 bg-app-blue-700 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
                      1
                    </div>
                    <p className="leading-tight">
                      Acesse o link
                      <br className="hidden sm:block" /> de pagamento
                    </p>
                  </div>

                  <ArrowRight className="w-5 h-5 opacity-40 shrink-0 rotate-90 sm:rotate-0" />

                  <div className="flex flex-row sm:flex-col items-center gap-4 sm:gap-3 w-full sm:flex-1 text-left sm:text-center">
                    <div className="w-8 h-8 sm:w-7 sm:h-7 shrink-0 bg-app-blue-700 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
                      2
                    </div>
                    <p className="leading-tight">
                      Selecione <br className="hidden sm:block" /> o valor
                    </p>
                  </div>

                  <ArrowRight className="w-5 h-5 opacity-40 shrink-0 rotate-90 sm:rotate-0" />

                  <div className="flex flex-row sm:flex-col items-center gap-4 sm:gap-3 w-full sm:flex-1 text-left sm:text-center">
                    <div className="w-8 h-8 sm:w-7 sm:h-7 shrink-0 bg-app-blue-700 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
                      3
                    </div>
                    <p className="leading-tight">
                      Preencha o forms
                      <br className="hidden sm:block" /> de benefícios abaixo
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6 p-5 sm:p-6 bg-white/40 rounded-xl border border-black/5 shadow-sm">
                <div className="flex items-center gap-4">
                  <Image
                    src="/icons/pix.svg"
                    width={40}
                    height={40}
                    alt="Ícone de Pix"
                    className="shrink-0"
                  />
                  <h4 className="font-bold text-lg leading-tight">Via Pix</h4>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-3 sm:gap-2 text-sm font-medium mt-2">
                  <div className="flex flex-row sm:flex-col items-center gap-4 sm:gap-3 w-full sm:flex-1 text-left sm:text-center">
                    <div className="w-8 h-8 sm:w-7 sm:h-7 shrink-0 bg-app-blue-700 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
                      1
                    </div>
                    <p className="leading-tight">
                      Leia o QRCode
                      <br className="hidden sm:block" /> ao lado
                    </p>
                  </div>

                  <ArrowRight className="w-5 h-5 opacity-40 shrink-0 rotate-90 sm:rotate-0" />

                  <div className="flex flex-row sm:flex-col items-center gap-4 sm:gap-3 w-full sm:flex-1 text-left sm:text-center">
                    <div className="w-8 h-8 sm:w-7 sm:h-7 shrink-0 bg-app-blue-700 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
                      2
                    </div>
                    <p className="leading-tight">
                      Escolha Pix
                      <br className="hidden sm:block" /> recorrente
                    </p>
                  </div>

                  <ArrowRight className="w-5 h-5 opacity-40 shrink-0 rotate-90 sm:rotate-0" />

                  <div className="flex flex-row sm:flex-col items-center gap-4 sm:gap-3 w-full sm:flex-1 text-left sm:text-center">
                    <div className="w-8 h-8 sm:w-7 sm:h-7 shrink-0 bg-app-blue-700 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
                      3
                    </div>
                    <p className="leading-tight">
                      Preencha o forms
                      <br className="hidden sm:block" /> de benefícios abaixo
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5 mt-4 p-5 sm:p-6 bg-white/40 rounded-xl border border-black/5 shadow-sm">
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3 text-sm sm:text-base text-app-neutral-800">
                    <Heart className="w-5 h-5 mt-0.5 shrink-0 text-app-blue-700" />
                    <p className="leading-tight">
                      <span className="font-semibold">Pronto!</span> Todos os
                      meses você apoiará nosso projeto sem esforço.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 text-sm sm:text-base text-app-neutral-800">
                    <Star className="w-5 h-5 mt-0.5 shrink-0 text-app-blue-700 fill-app-blue-700" />
                    <p className="leading-tight">
                      <span className="font-semibold">Benefícios:</span> Você
                      ganha acesso à nossa newsletter exclusiva com atualizações
                      sobre o impacto da sua doação.
                    </p>
                  </div>
                </div>

                <hr className="border-black/10 my-1" />

                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3 text-sm sm:text-base text-app-neutral-800">
                    <ClipboardList className="w-5 h-5 mt-0.5 shrink-0 text-app-blue-700" />
                    <p className="leading-tight font-medium">
                      Para validar sua doação (Cartão ou Pix) e garantir seus
                      benefícios, precisamos que você preencha o formulário
                      abaixo:
                    </p>
                  </div>

                  <a
                    href={linkForm?.url || linkForm?.cached_url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full mt-1 bg-app-blue-700 text-white py-3 px-4 rounded-xl text-base font-bold hover:bg-app-blue-600 transition-colors shadow-md"
                  >
                    Preencher Formulário de Cadastro
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
