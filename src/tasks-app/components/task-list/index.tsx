import TaskEntry from "@/components/task/entry";
import { useTasksList } from "@/hooks/tasks/useTasksList";

const TaskList = () => {
  const { taskList } = useTasksList();
  return (
    <div className="task-list">
      {taskList.map((item, i) => (
        <div
          className="task-list__entry border-b py-2 border-neutral-700"
          key={`item-${i}`}
        >
          <TaskEntry key={`task-${i}`} {...item} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
