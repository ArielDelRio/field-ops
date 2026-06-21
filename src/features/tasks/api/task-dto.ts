import type { TaskPriority, TaskStatus } from "@/features/tasks/domain";

export type TaskDto = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  assigned_to: string;
  due_date: string | null;
  location_name: string;
  created_at: string;
  updated_at: string;
};
