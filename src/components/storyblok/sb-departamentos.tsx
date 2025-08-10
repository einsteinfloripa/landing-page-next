import {
  StoryblokDetalhesDepartamento,
  StoryblokEquipeDepartamento,
} from "@/utils/storyblok-types.generated";
import {} from "@radix-ui/react-accordion";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import RichText from "../atoms/RichText";

interface Props {
  departamentos: StoryblokDetalhesDepartamento[];
  variant: "light" | "dark";
}

export const SbDepartamentos: React.FC<Readonly<Props>> = ({ departamentos, variant }) => {
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
            <RichText
              richText={d.descricao}
              className={{ paragraph: "text-white text-lg px-10" }}
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
