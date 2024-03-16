import { ReactNode } from "react";

interface TaskSettingsWrapperProps {
  children: ReactNode;
}

const TaskSettingsWrapper = ({ children }: TaskSettingsWrapperProps) => (
  <div className="task-action inline-flex justify-center items-center cursor-pointer border border-neutral-700 px-2 py-1 rounded group hover:bg-neutral-700">
    {children}
  </div>
);

export default TaskSettingsWrapper;
