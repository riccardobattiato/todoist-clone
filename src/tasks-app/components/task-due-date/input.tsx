import { getLabelForInput } from "@/utils/date";
import { isValid } from "date-fns";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";

interface TaskDueDateInputProps {
  value?: Date;
  onChange?: (value: Date) => void;
}

const TaskDueDateInput = ({ value, onChange }: TaskDueDateInputProps) => {
  const [text, setText] = useState(value ? getLabelForInput(value) : "");

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setText(value);
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      e.preventDefault();
      const date = new Date(text);
      if (isValid(date)) onChange?.(date);
    },
    [text, onChange]
  );

  return (
    <div className="task-due-date-input">
      <input
        type="text"
        placeholder="Type a due date"
        value={text}
        onChange={handleChange}
        onSubmit={handleSubmit}
        className="task-due-date-input__input w-full px-4 text-sm placeholder:text-zinc-400 leading-8 bg-transparent border-none outline-none"
      />
    </div>
  );
};

export default TaskDueDateInput;
