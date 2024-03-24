import type { TaskTag } from "./tags";
import { clsx } from "clsx";
import TaskTags from "./tags";
import TaskDueDate from "@/components/task-due-date";

export type TaskEntryContentProps = {
  name: string;
  description?: string;
  dueDate?: Date;
  completed?: boolean;
  tags?: TaskTag[];
  onChangeDueDate?: (value: Date) => void;
  onSubmitDueDate?: () => void;
};

const TaskEntryContent = ({
  name,
  description,
  dueDate,
  tags,
  completed,
  onChangeDueDate,
  onSubmitDueDate,
}: TaskEntryContentProps) => {
  return (
    <div className="task-entry-content">
      <div
        className={clsx([
          "task-entry-content__name text-sm font-light",
          { "text-neutral-400 line-through": completed },
        ])}
      >
        {name}
      </div>
      <div className="task-entry-content__content col-start-2 col-end-3">
        {description && (
          <div className="task-entry-content__description mt-1">
            <p className="text-xs text-zinc-400 font-light">{description}</p>
          </div>
        )}
        {(dueDate || tags) && (
          <div className="task-entry-content__bottom flex items-center">
            {dueDate && (
              <div
                className={clsx([
                  "task-entry-content__due-date",
                  { "mr-2": !!tags },
                ])}
              >
                <TaskDueDate
                  value={dueDate}
                  onChange={onChangeDueDate}
                  onSubmit={onSubmitDueDate}
                />
              </div>
            )}
            {tags && (
              <div className="task-entry-content__tags">
                <TaskTags items={tags} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskEntryContent;
