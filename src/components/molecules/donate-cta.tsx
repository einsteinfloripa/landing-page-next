import Image from "next/image";
import Link from "next/link";

export const DonateCta = () => {
  return (
    <Link href={"/"}>
      <div className="lg:size-36 md:size-32 size-24 rounded-full bg-app-orange-400 hover:bg-app-orange-500 transition-all duration-150 relative flex items-center justify-center shadow-custom">
        <Image
          alt="Seja um apoiador"
          src="/icons/rounded-text-support.svg"
          width={126}
          height={126}
          className="animate-spin-reverse"
        />
        <Image
          alt="Icone de coração branco"
          src="/icons/heart.svg"
          width={40}
          height={36}
          className="absolute"
        />
      </div>
    </Link>
  );
};
