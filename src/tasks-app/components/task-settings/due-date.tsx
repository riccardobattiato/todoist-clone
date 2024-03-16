import CloseBtn from "@/components/atoms/close-btn";
import TaskDueDate from "@/components/task/due-date";
import TaskSettingsWrapper from "./wrapper";
import clsx from "clsx";

interface TaskSettingsDueDateProps {
  value?: Date;
  onChange?: (value: Date) => void;
  onClear?: () => void;
}

const TaskSettingsDueDate = ({
  value,
  onChange,
  onClear,
}: TaskSettingsDueDateProps) => {
  return (
    <div className="task-settings-due-date">
      <TaskSettingsWrapper>
        <div className="task-settings-due-date__date flex items-center gap-x-1">
          <TaskDueDate
            value={value}
            large
            iconClassName={clsx({ "group-hover:text-white": !value })}
          />
          {value && <CloseBtn onClick={onClear} />}
        </div>
      </TaskSettingsWrapper>
    </div>
  );
};

export default TaskSettingsDueDate;