import { getLabelFromDate, getDueDateColor } from "@/utils/date";
import { CalendarIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";

export type TaskDueDateProps = {
  value?: Date;
  large?: boolean;
  iconClassName?: string;
};

const TaskDueDate = ({ value, large, iconClassName }: TaskDueDateProps) => {
  const textColorClass = getDueDateColor(value);
  return (
    <div
      className={clsx([
        "task-due-date inline-flex items-center",
        textColorClass,
      ])}
    >
      <div className="task-due-date__icon">
        <CalendarIcon
          className={clsx(
            { "w-3 mr-0.5": !large, "w-4 mr-1": large },
            iconClassName
          )}
        />
      </div>
      <div
        className={clsx([
          "task-due-date__label font-light leading-none",
          { "text-xs": !large, "text-sm": large },
        ])}
      >
        {value ? getLabelFromDate(value) : "Due date"}
      </div>
    </div>
  );
};

export default TaskDueDate;
