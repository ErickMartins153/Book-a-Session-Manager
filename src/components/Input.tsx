type InputProps = {
  label: string;
};

export default function Input({ label }: InputProps) {
  return (
    <div className="flex flex-col my-4">
      <label htmlFor={label} className="text-white font-light text-xl">
        {label}
      </label>
      <p>
        <input
          id={label}
          name={label}
          className="rounded-md px-2 focus:outline-none"
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
        />
      </p>
    </div>
  );
}
