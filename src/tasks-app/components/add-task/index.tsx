import { useCallback, useState } from "react";
import AddTaskButton from "./button";
import AddTaskForm from "./form";
import clsx from "clsx";
import { AddTaskFormPayload } from "@/types/tasks";

interface AddTaskProps {
  onSubmit?: (data: AddTaskFormPayload) => void;
}

const AddTask = ({ onSubmit }: AddTaskProps) => {
  const [active, setActive] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleCancel = useCallback(() => {
    setName("");
    setDescription("");
    setActive(false);
  }, []);

  const handleSubmit = useCallback(() => {
    onSubmit?.({ name, description });
    handleCancel();
  }, [onSubmit]);

  return (
    <div className="add-task">
      <div
        className={clsx(["add-task__form", { "absolute invisible": !active }])}
      >
        <AddTaskForm
          name={name}
          description={description}
          onInputName={setName}
          onInputDescription={setDescription}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      </div>
      <div
        className={clsx([
          "add-task__button",
          {
            "absolute invisible opacity-0": active,
            "delay-75 transition-all": !active,
          },
        ])}
      >
        <AddTaskButton onClick={() => setActive(true)} />
      </div>
    </div>
  );
};

export default AddTask;
