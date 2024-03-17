import { useQuery, gql } from "@apollo/client";

export const useGetTasks = () => {
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

  return { data, loading, error };
};
