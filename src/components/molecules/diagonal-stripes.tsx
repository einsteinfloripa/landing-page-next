import { cn } from "@/lib/utils";
import Image from "next/image";

type StripeProps = {
  className: string;
};
const Stripe = ({ className }: StripeProps) => {
  return (
    <div
      className={cn(
        "absolute bottom-0 left-0 overflow-hidden flex items-center justify-center gap-16 w-full transform text-center text-2xl py-3 whitespace-nowrap",
        className
      )}
    >
      {[...Array(8)].map((_, index) => (
        <Image key={index} src="/pipefy.svg" alt="Logo da Pipefy" width={75} height={32} />
      ))}
    </div>
  );
};
const DiagonalStripes = () => {
  return (
    <>
      <Stripe className="bg-app-blue-100 lg:-rotate-3 -rotate-6" />
      <Stripe className="bg-app-blue-500 rotate-6" />
    </>
  );
};

export default DiagonalStripes;
