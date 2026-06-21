import type { Task } from "@/features/tasks/domain";

export const tasksMockData: Task[] = [
  {
    id: "task-1",
    title: "Inspect generator unit",
    description:
      "Perform a visual inspection of the backup generator and verify fuel, casing, and indicators.",
    status: "pending",
    priority: "high",
    assignedTo: "Alex Morgan",
    dueDate: "2026-06-25T17:00:00.000Z",
    locationName: "North Plant",
    createdAt: "2026-06-20T09:00:00.000Z",
    updatedAt: "2026-06-20T09:00:00.000Z",
  },
  {
    id: "task-2",
    title: "Scan equipment barcode",
    description:
      "Locate the installed device in the field and register its barcode in the mobile app.",
    status: "in_progress",
    priority: "medium",
    assignedTo: "Jamie Chen",
    dueDate: "2026-06-23T15:30:00.000Z",
    locationName: "Warehouse 4",
    createdAt: "2026-06-19T14:15:00.000Z",
    updatedAt: "2026-06-20T08:10:00.000Z",
  },
  {
    id: "task-3",
    title: "Review safety checklist",
    description:
      "Confirm the site checklist is complete before allowing the intervention to continue.",
    status: "blocked",
    priority: "low",
    assignedTo: "Taylor Brooks",
    dueDate: null,
    locationName: "South Terminal",
    createdAt: "2026-06-18T11:45:00.000Z",
    updatedAt: "2026-06-20T07:20:00.000Z",
  },
];

export function getTaskById(taskId: string) {
  return tasksMockData.find((task) => task.id === taskId) ?? null;
}
