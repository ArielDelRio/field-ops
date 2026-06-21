import type { TaskDto } from "@/features/tasks/api";
import { mapTaskDtoToTask } from "@/features/tasks/mappers";

export const tasksMockDtos: TaskDto[] = [
  {
    id: "task-1",
    title: "Inspect generator unit",
    description:
      "Perform a visual inspection of the backup generator and verify fuel, casing, and indicators.",
    status: "pending",
    priority: "high",
    assigned_to: "Alex Morgan",
    due_date: "2026-06-25T17:00:00.000Z",
    location_name: "North Plant",
    created_at: "2026-06-20T09:00:00.000Z",
    updated_at: "2026-06-20T09:00:00.000Z",
  },
  {
    id: "task-2",
    title: "Scan equipment barcode",
    description:
      "Locate the installed device in the field and register its barcode in the mobile app.",
    status: "in_progress",
    priority: "medium",
    assigned_to: "Jamie Chen",
    due_date: "2026-06-23T15:30:00.000Z",
    location_name: "Warehouse 4",
    created_at: "2026-06-19T14:15:00.000Z",
    updated_at: "2026-06-20T08:10:00.000Z",
  },
  {
    id: "task-3",
    title: "Review safety checklist",
    description:
      "Confirm the site checklist is complete before allowing the intervention to continue.",
    status: "blocked",
    priority: "low",
    assigned_to: "Taylor Brooks",
    due_date: null,
    location_name: "South Terminal",
    created_at: "2026-06-18T11:45:00.000Z",
    updated_at: "2026-06-20T07:20:00.000Z",
  },
];

export const tasksMockData = tasksMockDtos.map(mapTaskDtoToTask);

export function getTaskById(taskId: string) {
  return tasksMockData.find((task) => task.id === taskId) ?? null;
}
