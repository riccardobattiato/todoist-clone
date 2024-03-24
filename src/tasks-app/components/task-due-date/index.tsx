import { Popover } from "@headlessui/react";
import { useFloating, autoUpdate, flip } from "@floating-ui/react-dom";
import TaskDateButton from "./button";
import TaskDueDateInput from "./input";
import TaskDueDateMenu from "./menu";
import TaskDueDatePicker from "./picker";

interface TaskDateProps {
  value?: Date;
  onChange?: (value: Date) => void;
  onSubmit?: () => void;
  onClear?: () => void;
}

const TaskDueDate = ({ value, onChange, onSubmit, onClear }: TaskDateProps) => {
  const { refs, floatingStyles } = useFloating({
    whileElementsMounted: autoUpdate,
    middleware: [flip()],
  });
  return (
    <div className="task-due-date">
      <Popover>
        <Popover.Button as="div" ref={refs.setReference}>
          <TaskDateButton value={value} />
        </Popover.Button>
        <Popover.Panel
          ref={refs.setFloating}
          style={floatingStyles}
          className="w-60 border bg-neutral-800 border-neutral-700 rounded-lg overflow-hidden z-[1]"
        >
          <div className="task-due-date__input py-1">
            <TaskDueDateInput
              value={value}
              onChange={onChange}
              onSubmit={onSubmit}
            />
          </div>
          <div className="task-due-date__menu py-1 border-y border-neutral-700">
            <TaskDueDateMenu
              value={value}
              onChange={onChange}
              onClear={onClear}
            />
          </div>
          <div className="task-due-date__picker">
            <TaskDueDatePicker />
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  );
};

export default TaskDueDate;
