import { ComponentProps } from "react";

// interface InputProps extends HTMLAttributes<HTMLInputElement> {}

export default function Input({
  className,
  ...props
}: ComponentProps<"input">) {
  return (
    <input
      className={`bg-neutral-200 px-4 py-2 rounded-md w-full ${className}`}
      {...props}
    />
  );
}
