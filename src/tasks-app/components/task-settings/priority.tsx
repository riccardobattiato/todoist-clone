import CloseBtn from "@/components/atoms/close-btn";
import TaskSettingsWrapper from "./wrapper";
import clsx from "clsx";
import { TaskPriority } from "@/types/tasks";
import { FlagIcon as FlagIconSolid } from "@heroicons/react/24/solid";
import { FlagIcon as FlagIconOutline } from "@heroicons/react/24/outline";
import { priorityColorsMap } from "@/utils/colors";

interface TaskSettingsPriorityProps {
  value?: TaskPriority;
  onChange?: (value: TaskPriority) => void;
  onClear?: () => void;
}

const TaskSettingsPriority = ({
  value,
  onChange,
  onClear,
}: TaskSettingsPriorityProps) => {
  const isLowPriority = !value || value === TaskPriority.LOW;
  return (
    <div className="task-settings-priority">
      <TaskSettingsWrapper>
        <div className="task-settings-priority__content flex items-center gap-x-1">
          <div
            className={clsx([
              "task-settings-priority__icon w-4",
              isLowPriority ? "text-neutral-400" : priorityColorsMap[value],
              {
                "group-hover:text-white": !value,
              },
            ])}
          >
            {isLowPriority ? (
              <FlagIconOutline className="w-full" />
            ) : (
              <FlagIconSolid className="w-full" />
            )}
          </div>
          <div className="task-settings-priority__label font-light leading-none text-sm text-neutral-400">
            {isLowPriority ? "Priority" : `P${value}`}
          </div>
          {!isLowPriority && <CloseBtn onClick={onClear} />}
        </div>
      </TaskSettingsWrapper>
    </div>
  );
};

export default TaskSettingsPriority;
