"use client";

import { StoryblokContatoSection } from "@/utils/storyblok-types.generated";
import RichText from "../atoms/RichText";
import { Blok } from "@/utils/types";
import PaperTextureBackground from "../molecules/paper-texture-background";
import { storyblokEditable } from "@storyblok/react";
import Headline from "../atoms/Headline";
import { useState } from "react";
import Input from "../molecules/input";
import Textarea from "../molecules/textarea";
import { Button } from "../atoms/button";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

export const SbContatoSection = ({ blok }: Blok<StoryblokContatoSection>) => {
  const { titulo, descricao } = blok;
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Errors = {};
    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório";
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    if (!formData.message.trim()) newErrors.message = "Nos fale um pouco como podemos te ajudar!";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange =
    (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
      setErrors({ ...errors, [field]: undefined });
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // TODO: enviar as informações para algum lugar
    setSubmitted(true);
  };
  return (
    <section
      {...storyblokEditable(blok)}
      className="relative w-full flex overflow-hidden min-h-screen items-center justify-center text-white sm:px-auto px-5"
    >
      <PaperTextureBackground className="bg-app-blue-500" opacity={100} version={2} />
      <div className="relative w-full flex flex-col lg:flex-row sm:px-24 py-24 sm:py-36 gap-10 justify-between">
        <div className="w-1/2 flex flex-col gap-10">
          <h1 className="title-4xl">{titulo}</h1>
          <RichText className={{ container: "max-w-[620px]" }} richText={descricao} />
        </div>
        <div className="p-10 bg-white rounded-2xl max-w-1/2 md:w-[500px] text-app-neutral-900 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <Headline element="h3" className="font-normal">
              Fale conosco
            </Headline>
            <p className="text-app-neutral-400">Preencha os campos abaixo e envie sua mensagem!</p>
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

            <Button type="submit" className="w-full">
              Enviar
            </Button>

            {submitted && (
              <p className="text-green-600 font-medium">Mensagem enviada com sucesso!</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
