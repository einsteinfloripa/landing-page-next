"use client";

import { StoryblokContatoSection } from "@/utils/storyblok-types.generated";
import RichText from "../atoms/RichText";
import { Blok } from "@/utils/types";
import PaperTextureBackground from "../molecules/paper-texture-background";
import { storyblokEditable } from "@storyblok/react";
import Headline from "../atoms/Headline";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Input from "../molecules/input";
import Textarea from "../molecules/textarea";
import { Button } from "../atoms/button";
import { EinsteinTransformBadget } from "../molecules/einstein-transform-badget";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

export const SbContatoSection = ({ blok }: Blok<StoryblokContatoSection>) => {

  const { titulo, descricao, emailContato } = blok;
  const searchParams = useSearchParams();
  const parceriaParam = searchParams?.get("parceria") ?? "";
  const partnershipMessage = parceriaParam
    ? PARTNERSHIP_MESSAGES[parceriaParam]
    : undefined;
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: partnershipMessage ?? "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [failedToSubmit, setFailedToSubmit] = useState(false);

  const validate = () => {
    const newErrors: Errors = {};
    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório";
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    if (!formData.message.trim())
      newErrors.message = "Nos fale um pouco como podemos te ajudar!";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const { name, email, message } = formData;

    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("message", message);
    data.append("_captcha", "false");

    try {
      setIsSubmitting(true);
      // Usamos formsubmit como um serviço de envio de email (é gratuito e não requer backend ou conta)
      const response = await fetch(`https://formsubmit.co/${emailContato}`, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setFailedToSubmit(true);
      }
    } catch (err) {
      setFailedToSubmit(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      {...storyblokEditable(blok)}
      className="relative w-full flex overflow-hidden min-h-screen items-center justify-center text-white sm:px-auto px-5"
    >
      <PaperTextureBackground
        className="bg-app-blue-500"
        opacity={100}
        version={2}
      />
      <div className="relative w-full flex flex-col lg:flex-row sm:px-24 py-24 sm:py-36 gap-10 justify-between">
        <div className="w-1/2 flex flex-col gap-10">
          <h1 className="title-4xl">{titulo}</h1>
          <RichText
            className={{ container: "max-w-[620px]" }}
            richText={descricao}
          />
        </div>
        <div className="p-10 bg-white rounded-2xl lg:max-w-1/2 lg:w-[500px] text-app-neutral-900 flex flex-col gap-10">
          {submitted ? (
            <div className="flex flex-col items-center text-center gap-4">
              <EinsteinTransformBadget className="my-10" />
              <Headline element="h3" className="font-normal text-green-700">
                Mensagem enviada com sucesso!
              </Headline>
              <p className="text-app-neutral-500">
                Obrigado por entrar em contato. Em breve responderemos sua
                mensagem!
              </p>
              <Button
                className="mt-4"
                onClick={() => {
                  setFormData({
                    name: "",
                    email: "",
                    message: partnershipMessage ?? "",
                  });
                  setSubmitted(false);
                }}
              >
                Enviar nova mensagem
              </Button>
            </div>
          ) : failedToSubmit ? (
            <div className="flex flex-col items-center text-center gap-4">
              <EinsteinTransformBadget className="my-10" />
              <Headline element="h3" className="font-normal text-red-700">
                Oops! Algo deu errado.
              </Headline>
              <p className="text-app-neutral-500">
                Não conseguimos enviar sua mensagem. Por favor, entre em contato
                diretamente pelo email:{" "}
                <span className="underline">{emailContato}</span>
              </p>
              <Button
                className="mt-4"
                onClick={() => {
                  setFormData({
                    name: "",
                    email: "",
                    message: partnershipMessage ?? "",
                  });
                  setSubmitted(false);
                }}
              >
                Tentar novamente
              </Button>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-2">
                <Headline element="h3" className="font-normal">
                  Fale conosco
                </Headline>
                <p className="text-app-neutral-400">
                  Preencha os campos abaixo e envie sua mensagem!
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6 w-full">
                <Input
                  label="Nome"
                  placeholder="Seu Nome"
                  value={formData.name}
                  onChange={handleChange("name")}
                  error={errors.name}
                />

                <Input
                  label="Email"
                  placeholder="seuemail@dominio.com"
                  value={formData.email}
                  onChange={handleChange("email")}
                  error={errors.email}
                  type="email"
                />

                <Textarea
                  label="Mensagem"
                  placeholder="Como podemos ajudar?"
                  value={formData.message}
                  onChange={handleChange("message")}
                  error={errors.message}
                />

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

const PARTNERSHIP_MESSAGES: Record<string, string> = {
  "apoio-financeiro-e-patrocinio":
    "Quero dar apoio financeiro e patrocínio para iniciativas do Einstein Floripa.",
  "recursos-materiais":
    "Quero ajudar oferecendo recursos materiais para o Einstein Floripa.",
  "consultoria-e-mentoria":
    "Quero apoiar como mentor(a) e oferecer consultoria ao Einstein Floripa.",
  "apoio-institucional-e-pedagogico":
    "Quero dar apoio institucional e pedagógico ao Einstein Floripa.",
};
