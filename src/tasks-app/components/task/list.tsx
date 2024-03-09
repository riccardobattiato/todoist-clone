"use client";

import TaskEntry, { TaskEntryProps } from "./entry";

export type TaskListProps = {
  items: TaskEntryProps[];
};

const TaskList = ({ items }: TaskListProps) => {
  return (
    <div className="task-list">
      {items.map((item, i) => (
        <div className="task-list__entry border-b py-2 border-neutral-700" key={`item-${i}`}>
          <TaskEntry key={`task-${i}`} {...item} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
