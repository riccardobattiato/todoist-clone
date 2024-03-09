import { TaskEntryProps } from "@/components/task/entry";
import TaskList from "@/components/task/list";
import { Color } from "@/types/colors";

export default function Home() {
  const sampleTasks: TaskEntryProps[] = [
    {
      id: "65ea07742d298099dc88fecb",
      name: "Lorem ipsum",
      description: "Sample task description",
      dueDate: new Date("2024-03-08T00:00:00.000Z"),
      completed: true,
      tags: [],
    },
    {
      id: "65ea09052d298099dc88fecd",
      name: "Another task",
      dueDate: new Date("2024-03-09T00:00:00.000Z"),
      completed: false,
      tags: [],
    },
    {
      id: "65ea09122d298099dc88fecf",
      name: "Useless task",
      dueDate: new Date("2024-03-10T00:00:00.000Z"),
      completed: true,
      tags: [],
    },
    {
      id: "65eb904c5a7af58f0a6a2891",
      name: "Tagged task",
      dueDate: new Date("2024-03-15T00:00:00.000Z"),
      completed: false,
      tags: [
        {
          id: "65ea10672d298099dc88fed1",
          name: "study",
          color: Color.VIOLET,
        },
        {
          id: "65ea10672d298099dc88fed1",
          name: "work",
          color: Color.CYAN,
        },
        {
          id: "65ea10672d298099dc88fed1",
          name: "coding",
          color: Color.ORANGE,
        },
      ],
    },
  ];
  return (
    <div className="pt-10">
      <div className="w-5/6 mx-auto">
        <TaskList items={sampleTasks} />
      </div>
    </div>
  );
}
