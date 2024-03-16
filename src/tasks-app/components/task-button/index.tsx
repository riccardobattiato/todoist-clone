import clsx from "clsx";

export interface TaskButtonProps {
  label: string;
  theme?: "primary" | "neutral";
  disabled?: boolean;
  onClick?: () => void;
}

const TaskButton = ({
  label,
  onClick,
  disabled,
  theme = "primary",
}: TaskButtonProps) => (
  <button
    className={clsx([
      "text-ms leading-none text-white font-semibold py-2 px-3 rounded-md",
      "disabled:cursor-not-allowed disabled:opacity-50 disabled:transform-none",
      "active:scale-95 transition-transform duration-300",
      {
        "bg-red-500": theme === "primary",
        "hover:bg-red-400": theme === "primary" && !disabled,
        "bg-neutral-700": theme === "neutral",
        "hover:bg-neutral-600": theme === "neutral" && !disabled,
      },
    ])}
    disabled={disabled}
    onClick={onClick}
  >
    {label}
  </button>
);

export default TaskButton;
