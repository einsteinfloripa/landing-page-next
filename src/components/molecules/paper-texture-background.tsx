import Image from "next/image";
import PaperTexture1 from "@/assets/paper-texture.png";
import PaperTexture2 from "@/assets/paper-texture-2.png";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  opacity?: number;
  version?: 1 | 2;
}

/**
 * Componente compartilhado para exibir um fundo de textura de papel.
 * Use o className para adicionar uma cor ao fundo usando `bg-<cor>`.
 *
 * Existem 2 imagens disponíveis: versão 1 e 2. Use a propriedade `version` para escolher entre elas.
 */
const PaperTextureBackground: React.FC<Props> = ({ opacity, className, version }) => {
  const image = version === 2 ? PaperTexture2 : PaperTexture1;
  return (
    <div className={cn("absolute inset-[-2px] -z-10", className)}>
      <Image
        src={image}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        unoptimized
        style={{ opacity: opacity ? opacity / 100 : 0.3 }}
      />
    </div>
  );
};

export default PaperTextureBackground;
