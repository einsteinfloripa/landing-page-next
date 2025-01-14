import { cn } from "@/lib/utils";
import Image from "next/image";

type EinsteinTransformBadgetProps = {
  className?: string;
};

export const EinsteinTransformBadget = ({ className }: EinsteinTransformBadgetProps) => {
  return (
    <div className={cn(className)}>
      <div className="size-18 md:size-24 bg-app-blue-500 rounded-full flex items-center justify-center">
        <Image
          alt="Icone branco da cabeça do einstein"
          src="/logos/logo-icon.svg"
          width={80}
          height={80}
        />
        <Image
          alt="Texto"
          src="/icons/rounded-text-transform.svg"
          width={174}
          height={174}
          className="size-[140px] md:size-[174px] absolute animate-spin-reverse"
        />
      </div>
    </div>
  );
};
