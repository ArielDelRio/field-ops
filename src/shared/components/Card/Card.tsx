import type { ReactNode } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { StyleSheet, View } from "react-native";

import { useAppTheme } from "@/shared/theme/context";

type CardProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function Card({ children, style }: CardProps) {
  const { theme } = useAppTheme();
  const styles = createStyles(theme);

  return <View style={[styles.card, style]}>{children}</View>;
}

const createStyles = (theme: import("@/shared/theme").Theme) =>
  StyleSheet.create({
    card: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.radius.lg,
      borderWidth: theme.borderWidths.sm,
      borderColor: theme.colors.border,
      padding: theme.spacing.lg,
      ...theme.shadows.sm,
    },
  });
