export type TaskStatus =
  | "pending"
  | "in_progress"
  | "blocked"
  | "completed";

export type TaskPriority = "low" | "medium" | "high";

export type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignedTo: string;
  dueDate: string | null;
  locationName: string;
  createdAt: string;
  updatedAt: string;
};
