import { Blok } from "@/utils/types";

type Props = Blok<{ component: string }>;

export default function SbComponentNotFound({ blok }: Readonly<Props>) {
  return (
    <div className="rounded border-2 border-dashed border-error-500 p-4 text-error-500">
      Houve um problema ao carregar o componente{" "}
      <code className="inline-block rounded p-1">
        <strong>{blok.component}</strong>
      </code>
      .
    </div>
  );
}
