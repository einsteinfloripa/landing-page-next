import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export default function Input({ label, error, ...props }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-app-neutral-600">{label}</label>
      <input
        {...props}
        className={`rounded-full border px-4 py-3 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-app-blue-500 ${
          error ? "border-red-500" : "border-app-neutral-100"
        }`}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
