import { ITag } from "@/types/tags";
import { TaskPriority } from "@/types/tasks";
import PriorityList from "@/components/priority-list";
import TaskSettingsTags from "./tags";
import TaskDueDate from "@/components/task-due-date";

interface TaskSettingsProps {
  dueDate?: Date;
  priority?: TaskPriority;
  onChangeDueDate?: (value?: Date) => void;
  onChangePriority?: (value?: TaskPriority) => void;
  onSubmitDate?: () => void;
  tags?: ITag[];
}

const TaskSettings = ({
  dueDate,
  priority,
  onChangeDueDate,
  onChangePriority,
  onSubmitDate,
  tags,
}: TaskSettingsProps) => {
  return (
    <div className="task-settings flex items-center gap-x-2">
      <div className="task-settings__due-date">
        <TaskDueDate
          value={dueDate}
          onChange={onChangeDueDate}
          onSubmit={onSubmitDate}
        />
      </div>
      <div className="task-settings__priority">
        <PriorityList value={priority} onChange={onChangePriority} />
      </div>
      <div className="task-settings__tags">
        <TaskSettingsTags />
      </div>
    </div>
  );
};

export default TaskSettings;
