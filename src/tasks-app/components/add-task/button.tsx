import { PlusIcon } from "@heroicons/react/16/solid";

export interface AddTaskButtonProps {
  onClick?: () => void;
}

const AddTaskButton = ({ onClick }: AddTaskButtonProps) => {
  return (
    <button
      className="add-task-btn inline-flex w-full items-center group cursor-pointer py-2"
      onClick={onClick}
    >
      <span className="add-task-btn__icon group-hover:bg-red-500 rounded-full relative mr-2">
        <PlusIcon className="w-5 text-red-500 group-hover:text-white" />
      </span>
      <span className="add-task-btn__label text-sm text-zinc-400 group-hover:text-red-500">
        Add task
      </span>
    </button>
  );
};

export default AddTaskButton;
