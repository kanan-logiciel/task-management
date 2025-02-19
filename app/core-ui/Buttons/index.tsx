import { ReactNode } from "react";

const Button = ({
  children,
  onClick,
  variant = "primary",
}: {
  children: ReactNode;
  onClick: () => void;
  variant?: string;
}) => {
  const variantStyles =
    variant === "primary"
      ? "bg-primary text-white"
      : "bg-gray-300 text-gray-700";

  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 w-full rounded-md font-medium ${variantStyles} transition-colors duration-300 hover:opacity-80`}
    >
      {children}
    </button>
  );
};

export default Button;
