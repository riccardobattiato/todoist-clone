import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { SunIcon } from "@heroicons/react/24/outline";
import { TvIcon } from "@heroicons/react/24/outline";
import { ForwardIcon } from "@heroicons/react/24/outline";
import { NoSymbolIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react";
import {
  startOfToday,
  startOfTomorrow,
  nextSaturday,
  nextMonday,
} from "date-fns";
import { getQuickChoiceLabelFromDate } from "@/utils/date";

interface TaskDueDateMenuProps {
  onChange?: (value: Date) => void;
  onClear?: () => void;
}

type Item = {
  icon: ReactNode;
  label: string;
  date?: Date;
  onChange?: (value: Date) => void;
  onClear?: () => void;
};

const items: Item[] = [
  {
    icon: <CalendarDaysIcon className="text-green-600" />,
    label: "Today",
    date: startOfToday(),
  },
  {
    icon: <SunIcon className="text-orange-400" />,
    label: "Tomorrow",
    date: startOfTomorrow(),
  },
  {
    icon: <TvIcon className="text-blue-600" />,
    label: "Next weekend",
    date: nextSaturday(new Date()),
  },
  {
    icon: <ForwardIcon className="text-violet-700" />,
    label: "Next week",
    date: nextMonday(new Date()),
  },
  {
    icon: <NoSymbolIcon className="text-neutral-500" />,
    label: "No Date",
  },
];

const TaskDueDateMenuButton = ({
  icon,
  label,
  date,
  onChange,
  onClear,
}: Item) => (
  <button
    className="task-due-date-menu__btn w-full px-4 py-1 flex gap-x-2 items-center cursor-pointer hover:bg-neutral-600"
    onClick={() => {
      if (date) onChange?.(date);
      else onClear?.();
    }}
  >
    <span className="w-5">{icon}</span>
    <span className="font-light leading-none text-ms text-white">{label}</span>
    {date && (
      <span className="text-ms text-zinc-400 ml-auto">
        {getQuickChoiceLabelFromDate(date)}
      </span>
    )}
  </button>
);

const TaskDueDateMenu = ({ onChange, onClear }: TaskDueDateMenuProps) => {
  return (
    <div className="task-due-date-menu">
      {items.map((item, i) => (
        <div className="task-due-date-menu__item" key={`item-${i}`}>
          <TaskDueDateMenuButton
            {...item}
            onChange={onChange}
            onClear={onClear}
          />
        </div>
      ))}
    </div>
  );
};

export default TaskDueDateMenu;
