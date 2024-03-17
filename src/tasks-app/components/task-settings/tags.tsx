import CloseBtn from "@/components/atoms/close-btn";
import clsx from "clsx";
import { TagIcon } from "@heroicons/react/24/outline";

interface TaskSettingsTagsProps {
  // TODO
}

const TaskSettingsTags = ({}: TaskSettingsTagsProps) => {
  return (
    <div className="task-settings-tags group u-task-settings-btn">
      <div className="task-settings-tags__content flex items-center gap-x-1">
        <div
          className={clsx([
            "task-settings-tags__icon w-4 group-hover:text-white",
          ])}
        >
          <TagIcon className="w-4 -scale-x-100" />
        </div>
        <div className="task-settings-tags__label font-light leading-none text-sm text-neutral-400">
          Tags
        </div>
        {false && <CloseBtn />}
      </div>
    </div>
  );
};

export default TaskSettingsTags;
