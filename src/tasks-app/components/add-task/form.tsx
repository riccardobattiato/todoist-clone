import InputAutogrow from "@/components/input-autogrow";
import TaskButton from "../task-button";
import TaskSettings from "../task-settings";
import {
  AddTaskFormPayload,
  EditTaskFormPayload,
  TaskPriority,
} from "@/types/tasks";
import { useCallback, useState } from "react";
import { TaskEntryProps } from "../task/entry";

export interface AddTaskFormProps {
  initialData?: TaskEntryProps;
  dueDate?: Date;
  priority?: TaskPriority;
  isEditing?: boolean;
  onSubmit?: (payload: AddTaskFormPayload | EditTaskFormPayload) => void;
  onCancel?: () => void;
}

const defaultData: AddTaskFormPayload = {
  name: "",
  description: "",
};

const AddTaskForm = ({
  initialData,
  isEditing,
  onSubmit,
  onCancel,
}: AddTaskFormProps) => {
  const [payload, setPayload] = useState<AddTaskFormPayload>(
    initialData || defaultData
  );

  const handleInput = useCallback(
    (key: keyof AddTaskFormPayload) =>
      (value: AddTaskFormPayload[typeof key]) => {
        setPayload({ ...payload, [key]: value });
      },
    [payload]
  );

  const handleSubmit = useCallback(() => {
    onSubmit?.({
      id: initialData?.id,
      name: payload.name,
      description: payload.description,
      priority: payload.priority,
    });
  }, [initialData, payload, onSubmit]);

  const handleCancel = useCallback(() => {
    setPayload(defaultData);
    onCancel?.();
  }, [onCancel]);

  return (
    <div className="add-task-form border border-neutral-700 focus-within:border-neutral-500 rounded-xl">
      <div className="add-task-form__content p-3">
        <div className="add-task-form__name">
          <InputAutogrow
            placeholder="Task name"
            value={payload.name}
            onInput={handleInput("name")}
            inputClassName="text-sm font-medium"
          />
        </div>
        <div className="add-task-form__description mt-1">
          <InputAutogrow
            placeholder="Description"
            value={payload.description}
            onInput={handleInput("description")}
            inputClassName="text-ms font-light"
          />
        </div>
        <div className="add-task-form__settings mt-2">
          <TaskSettings
            dueDate={payload.dueDate}
            priority={payload.priority}
            onChangePriority={handleInput("priority")}
          />
        </div>
      </div>
      <div className="add-task-form__actions border-t border-neutral-700 p-3 flex justify-between items-center">
        <div className="add-task-form__project">
          {/* Coming soon */}
          &nbsp;
        </div>
        <div className="add-task-form__buttons flex items-center gap-2">
          <div className="add-task-form__cancel-btn">
            <TaskButton label="Cancel" theme="neutral" onClick={handleCancel} />
          </div>
          <div className="add-task-form__submit-btn">
            <TaskButton
              label={isEditing ? "Save" : "Add task"}
              theme="primary"
              disabled={!payload?.name}
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTaskForm;
