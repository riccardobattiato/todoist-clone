import AddTaskButton from "./button";
import AddTaskForm from "./form";
import clsx from "clsx";
import { useAddTask } from "@/hooks/tasks/useAddTask";

const AddTask = () => {
  const {
    payload,
    handleInput,
    handleSubmit,
    isEditing,
    setIsEditing,
    handleCancel,
  } = useAddTask();

  return (
    <div className="add-task">
      <div
        className={clsx([
          "add-task__form",
          { "absolute invisible": !isEditing },
        ])}
      >
        <AddTaskForm
          name={payload.name}
          description={payload.description}
          onInputName={handleInput.name}
          onInputDescription={handleInput.description}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      </div>
      <div
        className={clsx([
          "add-task__button",
          {
            "absolute invisible opacity-0": isEditing,
            "delay-75 transition-all": !isEditing,
          },
        ])}
      >
        <AddTaskButton onClick={() => setIsEditing(true)} />
      </div>
    </div>
  );
};

export default AddTask;
