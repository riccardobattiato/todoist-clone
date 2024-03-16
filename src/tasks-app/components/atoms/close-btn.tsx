import { XMarkIcon } from "@heroicons/react/16/solid";

interface CloseBtnProps {
  onClick?: () => void;
}

const CloseBtn = ({ onClick }: CloseBtnProps) => (
  <button
    onClick={onClick}
    className="close-btn text-neutral-400 hover:text-white"
  >
    <XMarkIcon className="w-3" />
  </button>
);

export default CloseBtn;
