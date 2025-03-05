import { ReactNode } from "react";

const Button = ({
  children,
  onClick,
  variant = "primary",
}: {
  children: ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary" | "google" | "logout";
}) => {
  const variantStyles =
    variant === "primary"
      ? "bg-primary text-white hover:bg-primary/80"
      : variant === "google"
      ? "bg-white text-gray-700 border border-gray-300"
      : variant === "logout"
      ? "bg-red-500 text-white hover:bg-red-600"
      : "bg-gray-300 text-gray-700";

  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 w-full rounded-md font-medium ${variantStyles} transition-colors duration-300 hover:opacity-80 flex items-center justify-center gap-2`}
    >
      {children}
    </button>
  );
};

export default Button;
