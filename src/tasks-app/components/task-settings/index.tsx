import { ITag } from "@/types/tags";
import { TaskPriority } from "@/types/tasks";
import TaskSettingsDueDate from "./due-date";
import PriorityList from "@/components/priority-list";
import TaskSettingsTags from "./tags";

interface TaskSettingsProps {
  dueDate?: Date;
  priority?: TaskPriority;
  tags?: ITag[];
}

const TaskSettings = ({ dueDate, priority, tags }: TaskSettingsProps) => {
  return (
    <div className="task-settings flex items-center gap-x-2">
      <div className="task-settings__due-date">
        <TaskSettingsDueDate value={dueDate} />
      </div>
      <div className="task-settings__priority">
        <PriorityList value={priority} />
      </div>
      <div className="task-settings__tags">
        <TaskSettingsTags />
      </div>
    </div>
  );
};

export default TaskSettings;
