import { Stack, useLocalSearchParams } from "expo-router";

import { TaskDetailScreen } from "@/features/tasks";

export default function TaskDetailRoute() {
  const { taskId } = useLocalSearchParams<{ taskId: string }>();

  return (
    <>
      <Stack.Screen
        options={{
          title: "Task Detail",
          headerBackButtonDisplayMode: "minimal",
        }}
      />
      <TaskDetailScreen taskId={taskId ?? ""} />
    </>
  );
}
