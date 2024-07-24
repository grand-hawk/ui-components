import React from '@rbxts/react';

import { lightTheme } from 'themes';

import type { Theme } from 'themes';

export interface ThemeProviderProps {
  theme: Theme;
}

export const ThemeContext = React.createContext<Theme>(lightTheme);

export function useTheme() {
  return React.useContext(ThemeContext);
}

export function ThemeProvider(
  props: React.PropsWithChildren<ThemeProviderProps>,
) {
  return (
    <ThemeContext.Provider value={props.theme}>
      {props.children}
    </ThemeContext.Provider>
  );
}
