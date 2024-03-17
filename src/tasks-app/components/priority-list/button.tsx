import CloseBtn from "@/components/atoms/close-btn";
import clsx from "clsx";
import { TaskPriority } from "@/types/tasks";
import { FlagIcon as FlagIconSolid } from "@heroicons/react/24/solid";
import { FlagIcon as FlagIconOutline } from "@heroicons/react/24/outline";
import { priorityColorsMap } from "@/utils/colors";

interface PriorityListBtnProps {
  value?: TaskPriority;
  onClick?: () => void;
  onClear?: () => void;
}

const PriorityListButton = ({
  value,
  onClick,
  onClear,
}: PriorityListBtnProps) => {
  const isLowPriority = !value || value === TaskPriority.LOW;
  return (
    <div
      className="priority-list-button group u-task-settings-btn"
      onClick={onClick}
    >
      <div className="priority-list-button__content flex items-center gap-x-1">
        <div
          className={clsx([
            "priority-list-button__icon w-4",
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
        <div className="priority-list-button__label font-light leading-none text-sm text-neutral-400">
          {isLowPriority ? "Priority" : `P${value}`}
        </div>
        {!isLowPriority && <CloseBtn onClick={onClear} />}
      </div>
    </div>
  );
};

export default PriorityListButton;
