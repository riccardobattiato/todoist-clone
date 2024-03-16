"use client";

import TaskList from "@/components/task-list";
import { useMemo } from "react";
import { useTasksFetch } from "@/hooks/data-fetching/useTasksFetch";
import { mapTasksToProps } from "@/components/task/map";
import AddTask from "@/components/add-task";

export default function Home() {
  const { allTasks } = useTasksFetch();
  const taskListItems = useMemo(() => mapTasksToProps(allTasks), [allTasks]);

  return (
    <div className="pt-10">
      <div className="w-5/6 mx-auto">
        <div className="">
          <TaskList items={taskListItems} />
        </div>
        <div className="">
          <AddTask />
        </div>
      </div>
    </div>
  );
}
