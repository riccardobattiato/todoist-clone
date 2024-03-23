import { ITag } from "@/types/tags";
import { TaskPriority } from "@/types/tasks";
import PriorityList from "@/components/priority-list";
import TaskSettingsTags from "./tags";
import TaskDueDate from "@/components/task-due-date";

interface TaskSettingsProps {
  dueDate?: Date;
  priority?: TaskPriority;
  onChangePriority?: (value?: TaskPriority) => void;
  tags?: ITag[];
}

const TaskSettings = ({
  dueDate,
  priority,
  onChangePriority,
  tags,
}: TaskSettingsProps) => {
  return (
    <div className="task-settings flex items-center gap-x-2">
      <div className="task-settings__due-date">
        <TaskDueDate value={dueDate} />
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
