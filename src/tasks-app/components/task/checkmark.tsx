import { CheckIcon } from "@heroicons/react/16/solid";
import { clsx } from "clsx";
import { ChangeEventHandler, useCallback, useMemo } from "react";
import { TaskPriority } from "@/types/tasks";
import { priorityColorsMap } from "@/utils/colors";

export type TaskCheckmarkProps = {
  active?: boolean;
  priority?: TaskPriority;
  onChange?: (checked: boolean) => void;
};

const TaskCheckmark = ({ active, priority, onChange }: TaskCheckmarkProps) => {
  const isLowPriority = useMemo(
    () => !priority || priority === TaskPriority.LOW,
    [priority]
  );
  const colorClassName = useMemo(
    () => priorityColorsMap[priority || TaskPriority.LOW],
    [priority]
  );
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
          "task-checkmark__wrapper cursor-pointer inline-block w-full h-full relative border-current rounded-full overflow-hidden",
          "after:inline-block after:absolute after:inset-0 after:bg-current after:opacity-10",
          colorClassName,
          {
            "bg-current": active,
          },
          isLowPriority ? "border" : "border-2",
        ])}
      >
        <input
          className="task-checkmark__input absolute invisible"
          type="checkbox"
          checked={active}
          onChange={handleChange}
        />
      </label>
      <CheckIcon
        className={clsx([
          "w-4/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300",
          {
            "invisible opacity-0 group-hover:visible group-hover:opacity-100":
              !active,
            [colorClassName]: !active,
            "text-neutral-800": active,
          },
        ])}
      />
    </div>
  );
};

export default TaskCheckmark;
