import { StyleSheet, Text, View } from "react-native";

import { Button, Card, Input, Screen } from "@/shared/components";
import { useAppTheme } from "@/shared/theme/context";

export function SignInScreen() {
  const { theme } = useAppTheme();
  const styles = createStyles(theme);

  return (
    <Screen contentStyle={styles.screenContent}>
      <Card style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>Sign In</Text>
          <Text style={styles.subtitle}>
            Enter your credentials to access FieldOps.
          </Text>
        </View>

        <View style={styles.form}>
          <Input
            autoCapitalize="none"
            keyboardType="email-address"
            label="Email"
            placeholder="name@company.com"
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            secureTextEntry
          />
          <Button label="Sign In" />
        </View>
      </Card>
    </Screen>
  );
}

const createStyles = (theme: import("@/shared/theme").Theme) =>
  StyleSheet.create({
    screenContent: {
      justifyContent: "center",
      alignItems: "center",
    },
    card: {
      width: "100%",
      maxWidth: 420,
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
    form: {
      gap: theme.spacing.lg,
    },
  });
