import type { ReactNode } from "react";
import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import { useColorScheme } from "react-native";

import { darkTheme, lightTheme, type Theme } from "@/shared/theme";

type ThemeMode = "system" | "light" | "dark";
type ThemeScheme = "light" | "dark";

type ThemeContextValue = {
  mode: ThemeMode;
  scheme: ThemeScheme;
  theme: Theme;
  setMode: (mode: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const systemScheme = useColorScheme();
  const [mode, setMode] = useState<ThemeMode>("system");

  const scheme: ThemeScheme =
    mode === "system" ? (systemScheme === "dark" ? "dark" : "light") : mode;

  const value = useMemo<ThemeContextValue>(() => {
    const currentTheme = scheme === "dark" ? darkTheme : lightTheme;

    return {
      mode,
      scheme,
      theme: currentTheme,
      setMode,
    };
  }, [mode, scheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useAppTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useAppTheme must be used within ThemeProvider");
  }

  return context;
}
