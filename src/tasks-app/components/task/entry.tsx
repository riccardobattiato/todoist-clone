import { useCallback } from "react";
import TaskCheckmark from "./checkmark";
import type { TaskTag } from "./tags";
import { clsx } from "clsx";
import TaskTags from "./tags";
import TaskDueDate from "./due-date";

export type TaskEntryProps = {
  id: string;
  name: string;
  description?: string;
  dueDate?: Date;
  completed?: boolean;
  tags?: TaskTag[];
  onChange?: (id: string, value: boolean) => void;
};

const TaskEntry = ({
  id,
  name,
  description,
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
    <div className="task-entry">
      <div className="task-entry__wrapper grid grid-cols-[auto_1fr] cursor-pointer gap-x-2 items-center">
        <div className="task-entry__checkmark">
          <TaskCheckmark onChange={handleChange} active={completed} />
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
    </div>
  );
};

export default TaskEntry;
