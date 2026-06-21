import type { ComponentProps } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import { useAppTheme } from "@/shared/theme/context";

type TextInputProps = ComponentProps<typeof TextInput>;

type InputProps = TextInputProps & {
  label?: string;
};

export function Input({ label, style, ...props }: InputProps) {
  const { theme } = useAppTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.wrapper}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        placeholderTextColor={theme.colors.textSecondary}
        style={[styles.input, style]}
        {...props}
      />
    </View>
  );
}

const createStyles = (theme: import("@/shared/theme").Theme) =>
  StyleSheet.create({
    wrapper: {
      width: "100%",
      gap: theme.spacing.sm,
    },
    label: {
      color: theme.colors.textPrimary,
      ...theme.typography.bodySmall,
      fontWeight: theme.fontWeights.medium,
    },
    input: {
      minHeight: 48,
      borderRadius: theme.radius.md,
      borderWidth: theme.borderWidths.sm,
      borderColor: theme.colors.border,
      backgroundColor: theme.colors.surface,
      color: theme.colors.textPrimary,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      ...theme.typography.body,
    },
  });
