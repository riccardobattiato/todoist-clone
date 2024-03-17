"use client";

import TaskList from "@/components/task-list";
import AddTask from "@/components/add-task";
import { useTasks } from "@/hooks/tasks/useTasks";

export default function Home() {
  const {
    list,
    editingId,
    toggleTaskForm,
    createTask,
    updateTask,
    deleteTask,
  } = useTasks();

  return (
    <div className="h-full py-10">
      <div className="w-5/6 mx-auto">
        <div className="">
          <TaskList
            data={list}
            editingId={editingId}
            onEdit={updateTask}
            onDelete={deleteTask}
            toggleEdit={toggleTaskForm}
          />
        </div>
        <div className="">
          <AddTask
            editingId={editingId}
            toggleEdit={toggleTaskForm}
            onSubmit={createTask}
          />
        </div>
      </div>
    </div>
  );
}
