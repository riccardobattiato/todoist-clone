import { ITag } from "@/types/tags";
import { TaskPriority } from "@/types/tasks";
import TaskSettingsDueDate from "./due-date";
import PriorityList from "@/components/priority-list";
import TaskSettingsTags from "./tags";

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
        <TaskSettingsDueDate value={dueDate} />
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
