import { useQuery, gql } from "@apollo/client";
import { ITask } from "@/types/tasks";
import { useMemo } from "react";

export const useTasksFetch = () => {
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

  const allTasks = useMemo<ITask[]>(() => data?.allTasks || [], [data]);

  return { allTasks, loading, error };
};
