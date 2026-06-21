import type { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

import { Screen } from "@/shared/components/Screen/Screen";
import { useAppTheme } from "@/shared/theme/context";

type CenteredScreenProps = {
  title: string;
  children?: ReactNode;
};

export function CenteredScreen({ title, children }: CenteredScreenProps) {
  const { theme } = useAppTheme();
  const styles = createStyles(theme);

  return (
    <Screen contentCentered>
      <Text style={styles.title}>{title}</Text>
      {children}
    </Screen>
  );
}

const createStyles = (theme: import("@/shared/theme").Theme) =>
  StyleSheet.create({
    title: {
      color: theme.colors.textPrimary,
      ...theme.typography.title,
    },
  });
