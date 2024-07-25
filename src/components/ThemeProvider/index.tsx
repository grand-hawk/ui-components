import React, { createContext, useContext } from '@rbxts/react';

import { lightTheme } from 'themes';

import type { PropsWithChildren } from '@rbxts/react';
import type { Theme } from 'themes';

export interface ThemeProviderProps {
  theme: Theme;
}

export const ThemeContext = createContext<Theme>(lightTheme);

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider(props: PropsWithChildren<ThemeProviderProps>) {
  return (
    <ThemeContext.Provider value={props.theme}>
      {props.children}
    </ThemeContext.Provider>
  );
}
