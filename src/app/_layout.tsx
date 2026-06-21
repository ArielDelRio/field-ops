import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="tasks/[taskId]" options={{ title: "Task Detail" }} />
      <Stack.Screen name="auth/sign-in" options={{ title: "Sign In" }} />
    </Stack>
  );
}
