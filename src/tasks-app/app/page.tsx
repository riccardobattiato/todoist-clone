"use client";

import TaskList from "@/components/task-list";
import { useMemo } from "react";
import { useTasksList } from "@/hooks/tasks/useTasksList";
import { mapTasksToProps } from "@/components/task/map";
import AddTask from "@/components/add-task";

export default function Home() {
  return (
    <div className="pt-10">
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
