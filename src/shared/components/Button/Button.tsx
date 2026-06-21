import type { StyleProp, ViewStyle } from "react-native";
import { Pressable, StyleSheet, Text } from "react-native";

import { useAppTheme } from "@/shared/theme/context";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  label: string;
  onPress?: () => void;
  disabled?: boolean;
  variant?: ButtonVariant;
  style?: StyleProp<ViewStyle>;
};

export function Button({
  label,
  onPress,
  disabled = false,
  variant = "primary",
  style,
}: ButtonProps) {
  const { theme } = useAppTheme();
  const styles = createStyles(theme);

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        variant === "primary" ? styles.primary : styles.secondary,
        pressed && !disabled && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}>
      <Text
        style={[
          styles.label,
          variant === "primary" ? styles.primaryLabel : styles.secondaryLabel,
        ]}>
        {label}
      </Text>
    </Pressable>
  );
}

const createStyles = (theme: import("@/shared/theme").Theme) =>
  StyleSheet.create({
    base: {
      minHeight: 48,
      borderRadius: theme.radius.md,
      paddingHorizontal: theme.spacing.lg,
      paddingVertical: theme.spacing.md,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: theme.borderWidths.sm,
    },
    primary: {
      backgroundColor: theme.colors.primary,
      borderColor: theme.colors.primary,
    },
    secondary: {
      backgroundColor: theme.colors.surface,
      borderColor: theme.colors.border,
    },
    pressed: {
      opacity: 0.9,
    },
    disabled: {
      opacity: 0.5,
    },
    label: {
      ...theme.typography.button,
    },
    primaryLabel: {
      color: theme.colors.surface,
    },
    secondaryLabel: {
      color: theme.colors.textPrimary,
    },
  });
