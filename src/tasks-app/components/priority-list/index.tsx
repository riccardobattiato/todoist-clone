import { Menu } from "@headlessui/react";
import { useFloating, autoUpdate, flip } from "@floating-ui/react-dom";
import { TaskPriority } from "@/types/tasks";
import PriorityListButton from "./button";
import PriorityListItem from "./item";
import { useCallback } from "react";

interface PriorityListProps {
  value?: TaskPriority;
  onChange?: (value?: TaskPriority) => void;
}

const priorities = [
  TaskPriority.URGENT,
  TaskPriority.HIGH,
  TaskPriority.NORMAL,
  TaskPriority.LOW,
];

const PriorityList = ({ value, onChange }: PriorityListProps) => {
  const { refs, floatingStyles } = useFloating({
    whileElementsMounted: autoUpdate,
    middleware: [flip()],
  });

  const handleClick = useCallback(
    (priority: TaskPriority) => () => {
      onChange?.(priority);
    },
    [onChange]
  );

  return (
    <div className="priority-list">
      <Menu>
        <Menu.Button ref={refs.setReference}>
          <PriorityListButton
            value={value}
            onClear={handleClick(TaskPriority.LOW)}
          />
        </Menu.Button>
        <Menu.Items
          ref={refs.setFloating}
          style={floatingStyles}
          className="border border-neutral-700 rounded-lg overflow-hidden z-[1]"
        >
          {priorities.map((priority) => (
            <Menu.Item key={`priority-${priority}`}>
              <PriorityListItem
                value={priority}
                active={value === priority}
                onClick={handleClick(priority)}
              />
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default PriorityList;
