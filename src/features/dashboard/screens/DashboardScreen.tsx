import { StyleSheet, Text, View } from "react-native";

import { Card, Screen } from "@/shared/components";
import { useAppTheme } from "@/shared/theme/context";
import type { Theme } from "@/shared/theme";

export function DashboardScreen() {
  const { theme } = useAppTheme();
  const styles = createStyles(theme);

  return (
    <Screen contentStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
        <Text style={styles.subtitle}>Welcome to FieldOps.</Text>
      </View>

      <Card style={styles.card}>
        <Text style={styles.cardTitle}>About the app</Text>
        <Text style={styles.cardText}>
          FieldOps is being prepared as a mobile workflow app for operational
          teams, with tasks, scanning, notifications, and field-ready flows.
        </Text>
      </Card>
    </Screen>
  );
}

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    content: {
      justifyContent: "center",
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
    card: {
      gap: theme.spacing.md,
    },
    cardTitle: {
      color: theme.colors.textPrimary,
      ...theme.typography.body,
      fontWeight: theme.fontWeights.semibold,
    },
    cardText: {
      color: theme.colors.textSecondary,
      ...theme.typography.body,
    },
  });
