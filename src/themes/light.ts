import type { Theme } from 'themes';

export const lightTheme = {
  primary: Color3.fromRGB(19, 20, 20),
  primary60: Color3.fromRGB(113, 114, 114),
  background: Color3.fromRGB(255, 255, 255),
  borders: Color3.fromRGB(227, 229, 234),
  overlay: Color3.fromRGB(250, 250, 250),
  accent: Color3.fromRGB(67, 147, 228),
  font: Enum.Font.Arial,
  fontBold: Enum.Font.ArialBold,
} as const satisfies Theme;
