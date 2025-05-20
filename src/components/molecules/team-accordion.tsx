import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PropsWithChildren } from "react";
import { TeamMemberCard } from "./team-member-card";

interface TeamAccordionProps extends PropsWithChildren {
  title: string;
  description: string;
  members: {
    name: string;
    role: string;
    image: string;
  }[];
}

export const TeamAccordion: React.FC<TeamAccordionProps> = ({ title, description, members }) => {
  return (
    <AccordionItem
      value={title}
      className="group border-y border-gray-200 data-[state=open]:bg-app-blue-50 transition-colors"
    >
      <AccordionTrigger className="flex justify-between w-full p-10">
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-medium text-left">{title}</p>
          <p className="text-left">{description}</p>
        </div>
        {/* <ChevronDownIcon
          className="transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        /> */}
      </AccordionTrigger>

      <AccordionContent className="flex flex-wrap gap-28 justify-center">
        {members.map((member) => (
          <TeamMemberCard key={member.name} {...member} />
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};
