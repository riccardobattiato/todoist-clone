import { CheckIcon } from "@heroicons/react/16/solid";
import { clsx } from "clsx";
import { ChangeEventHandler, useCallback } from "react";

export type TaskCheckmarkProps = {
  active?: boolean;
  onChange?: (checked: boolean) => void;
};

const TaskCheckmark = ({ active, onChange }: TaskCheckmarkProps) => {
  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      onChange?.(e.target.checked);
    },
    [onChange]
  );

  return (
    <div className="task-checkmark group relative w-5 h-5">
      <label
        className={clsx([
          "task-checkmark__wrapper cursor-pointer inline-block w-full h-full border-stone-400 border rounded-full",
          {
            "text-neutral-800 bg-stone-400": active,
          },
        ])}
      >
        <input
          className="task-checkmark__input absolute invisible"
          type="checkbox"
          checked={active}
          onChange={handleChange}
        />
        <CheckIcon
          className={clsx([
            "w-5/6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300",
            {
              "invisible opacity-0 group-hover:visible group-hover:opacity-100":
                !active,
            },
          ])}
        />
      </label>
    </div>
  );
};

export default TaskCheckmark;
