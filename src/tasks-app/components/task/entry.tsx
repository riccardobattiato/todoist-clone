import { useCallback } from "react";
import TaskCheckmark from "./checkmark";
import type { TaskTag } from "./tags";
import { clsx } from "clsx";
import TaskTags from "./tags";
import TaskDueDate from "./due-date";
import { TaskPriority } from "@/types/tasks";
import TaskEntryActions from "./entry-actions";

export type TaskEntryProps = {
  id: string;
  name: string;
  description?: string;
  priority?: TaskPriority;
  dueDate?: Date;
  completed?: boolean;
  tags?: TaskTag[];
  onChange?: (id: string, value: boolean) => void;
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
}: TaskEntryProps) => {
  const handleChange = useCallback(
    (value: boolean) => {
      onChange?.(id, value);
    },
    [id, onChange]
  );

  return (
    <div className="task-entry group/entry relative min-h-6 flex items-center">
      <div className="task-entry__wrapper grid grid-cols-[auto_1fr] cursor-pointer gap-x-2 items-center">
        <div className="task-entry__checkmark">
          <TaskCheckmark
            onChange={handleChange}
            priority={priority}
            active={completed}
          />
        </div>
        <div
          className={clsx([
            "task-entry__name text-sm font-light",
            { "text-neutral-400 line-through": completed },
          ])}
        >
          {name}
        </div>
        <div className="task-entry__content col-start-2 col-end-3">
          {description && (
            <div className="task-entry__description mt-1">
              <p className="text-xs text-zinc-400 font-light">{description}</p>
            </div>
          )}
          {(dueDate || tags) && (
            <div className="task-entry__bottom flex items-center">
              {dueDate && (
                <div
                  className={clsx(["task-entry__due-date", { "mr-2": !!tags }])}
                >
                  <TaskDueDate value={dueDate} />
                </div>
              )}
              {tags && (
                <div className="task-entry__tags">
                  <TaskTags items={tags} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="task-entry__actions absolute top-0 right-0 hidden group-hover/entry:block">
        <TaskEntryActions />
      </div>
    </div>
  );
};

export default TaskEntry;
