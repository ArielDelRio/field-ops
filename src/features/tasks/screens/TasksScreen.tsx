import { router } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

import { tasksMockData } from "@/features/tasks/data/tasks-mock";
import { Card, Screen } from "@/shared/components";
import { useAppTheme } from "@/shared/theme/context";
import type { Theme } from "@/shared/theme";

export function TasksScreen() {
  const { theme } = useAppTheme();
  const styles = createStyles(theme);

  return (
    <Screen contentStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Tasks</Text>
        <Text style={styles.subtitle}>
          Review assigned field tasks and open the detail view.
        </Text>
      </View>

      <FlatList
        data={tasksMockData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              router.push({
                pathname: "/tasks/[taskId]",
                params: { taskId: item.id },
              })
            }>
            <Card style={styles.card}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardMeta}>
                {item.status} · {item.priority}
              </Text>
              <Text style={styles.cardText}>{item.locationName}</Text>
            </Card>
          </Pressable>
        )}
      />
    </Screen>
  );
}

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    content: {
      gap: theme.spacing.xl,
    },
    header: {
      gap: theme.spacing.sm,
    },
    title: {
      color: theme.colors.textPrimary,
      ...theme.typography.title,
    },
    subtitle: {
      color: theme.colors.textSecondary,
      ...theme.typography.body,
    },
    listContent: {
      gap: theme.spacing.lg,
      paddingBottom: theme.spacing.xl,
    },
    card: {
      gap: theme.spacing.sm,
    },
    cardTitle: {
      color: theme.colors.textPrimary,
      ...theme.typography.body,
      fontWeight: theme.fontWeights.semibold,
    },
    cardMeta: {
      color: theme.colors.primary,
      ...theme.typography.bodySmall,
      textTransform: "capitalize",
    },
    cardText: {
      color: theme.colors.textSecondary,
      ...theme.typography.bodySmall,
    },
  });
