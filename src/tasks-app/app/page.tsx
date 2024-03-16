"use client";

import TaskList from "@/components/task-list";
import AddTask from "@/components/add-task";

export default function Home() {
  return (
    <div className="h-full py-10">
      <div className="w-5/6 mx-auto">
        <div className="">
          <TaskList />
        </div>
        <div className="">
          <AddTask />
        </div>
      </div>
    </div>
  );
}
