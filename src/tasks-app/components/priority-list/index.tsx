import { TaskPriority } from "@/types/tasks";
import PriorityListButton from "./button";

interface PriorityListProps {
  value?: TaskPriority;
  onChange?: (value: TaskPriority) => void;
  onClear?: () => void;
}

const PriorityList = ({ value }: PriorityListProps) => {
  return (
    <div className="priority-list">
      <PriorityListButton value={value} />
    </div>
  );
};

export default PriorityList;
