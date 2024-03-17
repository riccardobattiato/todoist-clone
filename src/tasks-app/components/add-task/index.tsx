import AddTaskButton from "./button";
import AddTaskForm from "./form";
import clsx from "clsx";
import { AddTaskFormPayload, EditTaskFormPayload } from "@/types/tasks";
import { useCallback, useMemo } from "react";

interface AddTaskProps {
  onSubmit?: (data: AddTaskFormPayload) => void;
  editingId?: string;
  toggleEdit?: (value: string) => void;
}

const AddTask = ({ onSubmit, editingId, toggleEdit }: AddTaskProps) => {
  const isEditing = useMemo(() => editingId === "new", [editingId]);
  const handleCancel = useCallback(() => {
    toggleEdit?.("");
  }, []);

  const handleSubmit = useCallback(
    (payload: AddTaskFormPayload | EditTaskFormPayload) => {
      if (!payload.name) throw new Error("Cannot create task without name");
      onSubmit?.({ name: payload.name, description: payload.description });
      handleCancel();
    },
    [onSubmit]
  );

  return (
    <div className="add-task">
      <div
        className={clsx([
          "add-task__form",
          { "absolute h-0 overflow-hidden invisible": !isEditing },
        ])}
      >
        <AddTaskForm onSubmit={handleSubmit} onCancel={handleCancel} />
      </div>
      <div
        className={clsx([
          "add-task__button",
          {
            "absolute h-0 overflow-hidden invisible opacity-0": isEditing,
            "delay-75 transition-all": !isEditing,
          },
        ])}
      >
        <AddTaskButton onClick={() => toggleEdit?.("new")} />
      </div>
    </div>
  );
};

export default AddTask;
