import { useCallback, useState } from "react";
import TaskCheckmark from "./checkmark";
import type { TaskTag } from "./tags";
import { EditTaskFormPayload, TaskPriority } from "@/types/tasks";
import TaskEntryActions from "./entry-actions";
import TaskEntryContent from "./entry-content";

export type TaskEntryProps = {
  id: string;
  name: string;
  description?: string;
  priority?: TaskPriority;
  dueDate?: Date;
  completed?: boolean;
  tags?: TaskTag[];
  onToggleEdit?: () => void;
  onChange?: (id: string, value: boolean) => void;
  onSubmit?: (payload: EditTaskFormPayload) => void;
  onDelete?: () => void;
};

const TaskEntry = ({
  id,
  name,
  description,
  priority,
  dueDate,
  tags,
  completed,
  onChange,
  onSubmit,
  onToggleEdit,
  onDelete,
}: TaskEntryProps) => {
  const handleChange = useCallback(
    (value: boolean) => {
      onChange?.(id, value);
    },
    [id, onChange]
  );

  const handleChangeDueDate = useCallback(
    (value: Date) => {
      onSubmit?.({ id, dueDate: value });
    },
    [id, onSubmit]
  );

  return (
    <div className="task-entry group/entry cursor-pointer relative min-h-6 flex items-center">
      <div className="task-entry__wrapper grid grid-cols-[auto_1fr] gap-x-2 items-center">
        <div className="task-entry__checkmark">
          <TaskCheckmark
            onChange={handleChange}
            priority={priority}
            active={completed}
          />
        </div>
        <div className="task-entry__content">
          <TaskEntryContent
            name={name}
            description={description}
            dueDate={dueDate}
            tags={tags}
            completed={completed}
            onChangeDueDate={handleChangeDueDate}
          />
        </div>
      </div>
      <div className="task-entry__actions absolute top-0 right-0 hidden group-hover/entry:block">
        <TaskEntryActions onEdit={onToggleEdit} onDelete={onDelete} />
      </div>
    </div>
  );
};

export default TaskEntry;
