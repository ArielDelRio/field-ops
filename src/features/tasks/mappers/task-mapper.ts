import type { TaskDto } from "@/features/tasks/api";
import type { Task } from "@/features/tasks/domain";

export function mapTaskDtoToTask(dto: TaskDto): Task {
  return {
    id: dto.id,
    title: dto.title,
    description: dto.description,
    status: dto.status,
    priority: dto.priority,
    assignedTo: dto.assigned_to,
    dueDate: dto.due_date,
    locationName: dto.location_name,
    createdAt: dto.created_at,
    updatedAt: dto.updated_at,
  };
}
