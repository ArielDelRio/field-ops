import { borderWidths } from "./foundations/border-widths";
import { radius } from "./foundations/radius";
import { shadows } from "./foundations/shadows";
import { spacing } from "./foundations/spacing";
import {
  fontSizes,
  fontWeights,
  lineHeights,
  typography,
} from "./foundations/typography";
import { darkColors } from "./themes/dark";
import { lightColors } from "./themes/light";

type ThemeColors = Record<keyof typeof lightColors, string>;

export const lightTheme = {
  colors: lightColors,
  spacing,
  radius,
  shadows,
  borderWidths,
  fontSizes,
  fontWeights,
  lineHeights,
  typography,
} as const;

export const darkTheme = {
  colors: darkColors,
  spacing,
  radius,
  shadows,
  borderWidths,
  fontSizes,
  fontWeights,
  lineHeights,
  typography,
} as const;

export const theme = lightTheme;

export { borderWidths } from "./foundations/border-widths";
export { radius } from "./foundations/radius";
export { shadows } from "./foundations/shadows";
export { spacing } from "./foundations/spacing";
export {
  fontSizes,
  fontWeights,
  lineHeights,
  typography,
} from "./foundations/typography";
export { darkColors } from "./themes/dark";
export { lightColors } from "./themes/light";
export type Theme = {
  colors: ThemeColors;
  spacing: typeof spacing;
  radius: typeof radius;
  shadows: typeof shadows;
  borderWidths: typeof borderWidths;
  fontSizes: typeof fontSizes;
  fontWeights: typeof fontWeights;
  lineHeights: typeof lineHeights;
  typography: typeof typography;
};
