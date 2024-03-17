import TaskEntry, { TaskEntryProps } from "@/components/task/entry";
import AddTaskForm from "../add-task/form";
import clsx from "clsx";
import {
  AddTaskFormPayload,
  EditTaskFormPayload,
  isEditPayload,
} from "@/types/tasks";
import { useCallback } from "react";

interface TaskListProps {
  data: TaskEntryProps[];
  editingId?: string;
  onEdit?: (data: EditTaskFormPayload) => void;
  onDelete?: (value: string) => void;
  toggleEdit?: (value: string) => void;
}

const TaskList = ({
  data,
  editingId,
  onEdit,
  onDelete,
  toggleEdit,
}: TaskListProps) => {
  const handleFormSubmit = useCallback(
    (payload: AddTaskFormPayload | EditTaskFormPayload) => {
      if (!isEditPayload(payload))
        throw new Error("Cannot update task without ID");
      onEdit?.(payload);
      toggleEdit?.("");
    },
    []
  );

  const handleTaskCheck = useCallback(
    (id: string, value: boolean) => {
      onEdit?.({ id, completed: value });
      if (editingId) toggleEdit?.("");
    },
    [editingId]
  );

  return (
    <div className="task-list">
      {data.map((item, i) => (
        <div
          className={clsx([
            "task-list__entry py-2 border-neutral-700",
            { "border-b": editingId !== item.id },
          ])}
          key={`item-${i}`}
        >
          {editingId === item.id ? (
            <AddTaskForm
              initialData={item}
              onSubmit={handleFormSubmit}
              onCancel={() => toggleEdit?.("")}
              isEditing
            />
          ) : (
            <TaskEntry
              key={`task-${i}`}
              {...item}
              onChange={handleTaskCheck}
              onToggleEdit={() => toggleEdit?.(item.id)}
              onDelete={() => onDelete?.(item.id)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
