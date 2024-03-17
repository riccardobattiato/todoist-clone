import { TrashIcon } from "@heroicons/react/24/outline";

interface DeleteBtnProps {
  onClick?: () => void;
}

const DeleteBtn = ({ onClick }: DeleteBtnProps) => (
  <button onClick={onClick}>
    <TrashIcon className="w-6 text-red-500" />
  </button>
);

export default DeleteBtn;
