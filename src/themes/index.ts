export interface Theme {
  primary: Color3;
  primary60: Color3;
  background: Color3;
  overlay: Color3;
  borders: Color3;
  accent: Color3;
  font: Enum.Font;
  fontBold: Enum.Font;
}

export * from './dark';
export * from './light';
