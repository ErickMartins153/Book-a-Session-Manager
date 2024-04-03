import { useRef } from "react";

type InputProps = {
  label: string;
};

export default function Input({ label }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex flex-col my-4">
      <label htmlFor={label} className="text-white font-light text-xl">
        {label}
      </label>
      <p>
        <input
          ref={inputRef}
          id={label}
          name={label}
          className="rounded-md px-2 py-1 focus:outline-none"
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          required
        />
      </p>
    </div>
  );
}
