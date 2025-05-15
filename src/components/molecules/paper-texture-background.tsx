import Image from "next/image";
import PaperTexture from "@/assets/paper-texture.png";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  opacity?: number;
}

/**
 * Componente compartilhado para exibir um fundo de textura de papel.
 * Use o className para adicionar uma cor ao fundo usando `bg-<cor>`.
 */
const PaperTextureBackground: React.FC<Props> = ({ opacity, className }) => {
  return (
    <div className={cn("absolute inset-[-2px] -z-10", className)}>
      <Image
        src={PaperTexture}
        alt="Paper Texture"
        layout="fill"
        objectFit="cover"
        className={opacity ? `opacity-${opacity}` : "opacity-30"}
      />
    </div>
  );
};

export default PaperTextureBackground;
