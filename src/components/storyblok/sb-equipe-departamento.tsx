import { StoryblokEquipeDepartamento } from "@/utils/storyblok-types.generated";
import {} from "@radix-ui/react-accordion";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface Props {
  departamentos: StoryblokEquipeDepartamento[];
  variant: "light" | "dark";
}

export const SbEquipeDepartamento: React.FC<Readonly<Props>> = ({ departamentos, variant }) => {
  return (
    <Accordion type="multiple">
      {departamentos.map((d) => (
        <AccordionItem
          key={d._uid}
          value={d.titulo}
          className={cn("border-y ", {
            "border-gray-200 hover:bg-app-neutral-50/20": variant === "light",
            "border-app-blue-600 hover:bg-app-blue-600": variant === "dark",
          })}
        >
          <AccordionTrigger className="flex justify-between w-full p-10">
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-medium text-left">{d.titulo}</p>
              <p className="text-left">{d.subtitulo}</p>
            </div>
          </AccordionTrigger>

          <AccordionContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 sm:gap-12 xl:gap-16 items-center justify-center">
            {d.membros.map((m) => (
              <div key={m._uid} className="flex flex-col items-center gap-5 w-full ">
                <Image
                  src={m.imagem.filename!}
                  alt={m.nome}
                  width={160}
                  height={160}
                  className={cn("w-[160px] h-[160px] rounded-2xl border", {
                    "border-app-blue-500": variant === "light",
                    "border-app-blue-400": variant === "dark",
                  })}
                />
                <div className="flex flex-col gap-2 items-center justify-center">
                  <h3 className="text-xl">{m.nome}</h3>
                  <p
                    className={cn("text-center uppercase text-sm font-semibold", {
                      "text-app-blue-400": variant === "light",
                      "text-app-blue-900": variant === "dark",
                    })}
                  >
                    {m.cargo}
                  </p>
                </div>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
