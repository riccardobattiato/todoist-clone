import CloseBtn from "@/components/atoms/close-btn";
import TaskDueDateLabel from "@/components/task-due-date/label";
import clsx from "clsx";

interface TaskDateBtnProps {
  value?: Date;
  onClick?: () => void;
  onClear?: () => void;
}

const TaskDueDateButton = ({ value, onClick, onClear }: TaskDateBtnProps) => {
  return (
    <div
      className="task-date-button group u-task-settings-btn"
      onClick={onClick}
    >
      <div className="task-settings-due-date__date flex items-center gap-x-1">
        <TaskDueDateLabel
          value={value}
          large
          iconClassName={clsx({ "group-hover:text-white": !value })}
        />
        {value && <CloseBtn onClick={onClear} />}
      </div>
    </div>
  );
};

export default TaskDueDateButton;
