import { PencilSquareIcon } from "@heroicons/react/24/outline";

interface EditBtnProps {
  onClick?: () => void;
}

const EditBtn = ({ onClick }: EditBtnProps) => (
  <button>
    <PencilSquareIcon className="w-6" />
  </button>
);

export default EditBtn;
