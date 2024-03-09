import { Color } from "@/types/colors";
import { clsx } from "clsx";
import { textColorsMap } from "@/utils/colors";
import { TagIcon } from "@heroicons/react/24/outline";

export type TaskTag = {
  id: string;
  name: string;
  color: Color;
  favorite?: boolean;
};

export type TaskTagsProps = {
  items: TaskTag[];
};

const TaskTags = ({ items }: TaskTagsProps) => (
  <div className="task-tags">
    <div className="task-tags__wrapper flex flex-wrap gap-2">
      {items.map((item, i) => (
        <div
          key={`tag-${i}`}
          className={clsx([
            "task-tags__entry flex items-center group",
            textColorsMap[item.color],
          ])}
        >
          <div className="task-tags__entry-icon mr-0.5">
            <TagIcon className="w-3 -scale-x-100" />
          </div>
          <div className="task-tags__entry-label text-xs font-extralight group-hover:underline">
            {item.name}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TaskTags;
