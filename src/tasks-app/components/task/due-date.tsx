import { getLabelFromDate, getDueDateColor } from "@/utils/date";
import { CalendarIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";

export type TaskDueDateProps = {
  value: Date;
};

const TaskDueDate = ({ value }: TaskDueDateProps) => {
  const textColorClass = getDueDateColor(value);
  return (
    <div
      className={clsx([
        "task-due-date inline-flex items-center",
        textColorClass,
      ])}
    >
      <div className="task-due-date__icon mr-0.5">
        <CalendarIcon className="w-3" />
      </div>
      <div className="task-due-date__label text-xs font-light">
        {getLabelFromDate(value)}
      </div>
    </div>
  );
};

export default TaskDueDate;
