export interface Theme {
  textPrimary: Color3;
  textSecondary: Color3;
  backgroundPrimary: Color3;
  backgroundOverlay: Color3;
  bordersPrimary: Color3;
  accentPrimary: Color3;
  fontRegular: Enum.Font;
  fontBold: Enum.Font;
}

export * from './dark';
export * from './light';
