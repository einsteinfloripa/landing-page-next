import Image from "next/image";

type ValueCardProps = {
  title: string;
  description: string;
  icon: string;
};

export const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col gap-6 w-[260px] items-center justify-center">
      <Image width={80} height={80} src={icon} alt={title} />
      <div className="flex flex-col gap-10 text-center">
        <h3 className="font-medium text-2xl">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
