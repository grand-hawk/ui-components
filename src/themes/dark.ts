import type { Theme } from 'themes';

export const darkTheme = {
  primary: Color3.fromRGB(250, 250, 250),
  primary60: Color3.fromRGB(160, 160, 161),
  background: Color3.fromRGB(24, 26, 27),
  overlay: Color3.fromRGB(28, 30, 34),
  borders: Color3.fromRGB(38, 41, 45),
  accent: Color3.fromRGB(67, 147, 228),
  font: Enum.Font.Arial,
  fontBold: Enum.Font.ArialBold,
} as const satisfies Theme;
