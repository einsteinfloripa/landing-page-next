import Image from "next/image";

type TeamMemberCardProps = {
  name: string;
  role: string;
  image: string;
};

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, image }) => {
  return (
    <div className="flex flex-col items-center gap-5 w-[250px]">
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="w-[200px] h-[200px] rounded-2xl"
      />
      <div className="flex flex-col gap-2 items-center justify-center">
        <h3 className="text-xl">{name}</h3>
        <p className="text-center text-app-blue-400 uppercase text-sm font-semibold">{role}</p>
      </div>
    </div>
  );
};
