import type { ComponentProps, ReactNode } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAppTheme } from "@/shared/theme/context";

type ScreenProps = {
  children: ReactNode;
  contentCentered?: boolean;
  style?: ComponentProps<typeof SafeAreaView>["style"];
  contentStyle?: StyleProp<ViewStyle>;
};

export function Screen({
  children,
  contentCentered = false,
  style,
  contentStyle,
}: ScreenProps) {
  const { theme } = useAppTheme();
  const styles = createStyles(theme);

  return (
    <SafeAreaView style={[styles.safeArea, style]}>
      <View
        style={[
          styles.content,
          contentCentered && styles.contentCentered,
          contentStyle,
        ]}
      >
        {children}
      </View>
    </SafeAreaView>
  );
}

const createStyles = (theme: import("@/shared/theme").Theme) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    content: {
      flex: 1,
      padding: theme.spacing.lg,
    },
    contentCentered: {
      alignItems: "center",
      justifyContent: "center",
    },
  });
