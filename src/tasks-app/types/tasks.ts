export enum TaskPriority {
  URGENT = 1,
  HIGH,
  NORMAL,
  LOW,
}

export interface ITask {
  name: string;
  description?: string;
  priority?: TaskPriority;
  dueDate?: Date;
  completed?: boolean;
}
