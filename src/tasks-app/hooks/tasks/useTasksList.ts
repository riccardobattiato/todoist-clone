import { useQuery, gql } from "@apollo/client";
import { ITask } from "@/types/tasks";
import { useMemo } from "react";
import { mapTasksToProps } from "@/components/task/map";

export const useTasksList = () => {
  const { data, loading, error } = useQuery(
    gql`
      query AllTasks {
        allTasks {
          _id
          name
          description
          dueDate
          priority
          completed
          tags {
            _id
            name
            color
          }
        }
      }
    `
  );

  const taskList = useMemo(
    () => (data?.allTasks ? mapTasksToProps(data.allTasks) : []),
    [data]
  );

  return { taskList, loading, error };
};
