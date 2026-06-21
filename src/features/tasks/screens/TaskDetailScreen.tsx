import { StyleSheet, Text } from "react-native";

import { getTaskById } from "@/features/tasks/data/tasks-mock";
import { CenteredScreen } from "@/shared/components/CenteredScreen/CenteredScreen";
import { useAppTheme } from "@/shared/theme/context";
import type { Theme } from "@/shared/theme";

type TaskDetailScreenProps = {
  taskId: string;
};

export function TaskDetailScreen({ taskId }: TaskDetailScreenProps) {
  const { theme } = useAppTheme();
  const styles = createStyles(theme);
  const task = getTaskById(taskId);

  return (
    <CenteredScreen title="Task Detail">
      <Text style={styles.subtitle}>Task ID: {taskId}</Text>
      {task ? (
        <>
          <Text style={styles.title}>{task.title}</Text>
          <Text style={styles.meta}>
            {task.status} · {task.priority}
          </Text>
          <Text style={styles.body}>{task.description}</Text>
          <Text style={styles.body}>Location: {task.locationName}</Text>
          <Text style={styles.body}>Assigned to: {task.assignedTo}</Text>
        </>
      ) : (
        <Text style={styles.body}>Task not found.</Text>
      )}
    </CenteredScreen>
  );
}

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    subtitle: {
      marginTop: theme.spacing.sm,
      color: theme.colors.textSecondary,
      ...theme.typography.bodySmall,
    },
    title: {
      marginTop: theme.spacing.lg,
      color: theme.colors.textPrimary,
      ...theme.typography.body,
      fontWeight: theme.fontWeights.semibold,
    },
    meta: {
      marginTop: theme.spacing.sm,
      color: theme.colors.primary,
      ...theme.typography.bodySmall,
      textTransform: "capitalize",
    },
    body: {
      marginTop: theme.spacing.sm,
      color: theme.colors.textSecondary,
      ...theme.typography.body,
      textAlign: "center",
    },
  });
