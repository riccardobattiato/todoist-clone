import InputAutogrow from "@/components/input-autogrow";
import TaskButton from "../task-button";
import TaskSettings from "../task-settings";

export interface AddTaskFormProps {
  name: string;
  description?: string;
  onInputName?: (value: string) => void;
  onInputDescription?: (value: string) => void;
  onSubmit?: () => void;
  onCancel?: () => void;
}

const AddTaskForm = ({
  name,
  description,
  onInputName,
  onInputDescription,
  onSubmit,
  onCancel,
}: AddTaskFormProps) => {
  return (
    <div className="add-task-form border border-neutral-700 rounded-xl">
      <div className="add-task-form__content p-3">
        <div className="add-task-form__name">
          <InputAutogrow
            placeholder="Task name"
            value={name}
            onInput={onInputName}
            inputClassName="text-sm font-medium"
            placeholderClassName="text-zinc-400"
          />
        </div>
        <div className="add-task-form__description mt-1">
          <InputAutogrow
            placeholder="Description"
            value={description}
            onInput={onInputDescription}
            inputClassName="text-ms font-light"
            placeholderClassName="text-zinc-400"
          />
        </div>
        <div className="add-task-form__settings mt-2">
          <TaskSettings />
        </div>
      </div>
      <div className="add-task-form__actions border-t border-neutral-700 p-3 flex justify-between items-center">
        <div className="add-task-form__project">
          {/* Coming soon */}
          &nbsp;
        </div>
        <div className="add-task-form__buttons flex items-center gap-2">
          <div className="add-task-form__cancel-btn">
            <TaskButton label="Cancel" theme="neutral" onClick={onCancel} />
          </div>
          <div className="add-task-form__submit-btn">
            <TaskButton
              label="Add task"
              theme="primary"
              disabled={!name}
              onClick={onSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTaskForm;
