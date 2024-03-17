import clsx from "clsx";
import { TaskPriority } from "@/types/tasks";
import { FlagIcon as FlagIconSolid } from "@heroicons/react/24/solid";
import { FlagIcon as FlagIconOutline } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/16/solid";
import { priorityColorsMap } from "@/utils/colors";

interface PriorityListItemProps {
  value?: TaskPriority;
  active?: boolean;
  onClick?: () => void;
}

const PriorityListItem = ({
  value,
  active,
  onClick,
}: PriorityListItemProps) => {
  const isLowPriority = !value || value === TaskPriority.LOW;
  return (
    <button
      className={clsx([
        "priority-list-item relative py-2 pl-3 pr-10 flex w-full items-center gap-2 bg-neutral-800 hover:bg-neutral-600",
        {
          "": !value,
        },
      ])}
      onClick={onClick}
    >
      <span
        className={clsx([
          "priority-list-item__icon w-5",
          isLowPriority ? "text-neutral-400" : priorityColorsMap[value],
        ])}
      >
        {isLowPriority ? (
          <FlagIconOutline className="w-full" />
        ) : (
          <FlagIconSolid className="w-full" />
        )}
      </span>
      <span className="priority-list-item__label font-light leading-none text-xs text-white">
        {`Priority ${value}`}
      </span>
      <span
        className={clsx([
          "priority-list-item__checkmark absolute top-1/2 right-3 -translate-y-1/2",
          {
            hidden: !active,
          },
        ])}
      >
        <CheckIcon className="w-4 text-red-500" />
      </span>
    </button>
  );
};

export default PriorityListItem;
