import React from '@rbxts/react';

import { Box } from 'components/Box';
import { useTheme } from 'components/ThemeProvider';

import type { PropsWithChildren } from '@rbxts/react';
import type { BoxProps } from 'components/Box';

export interface TypographyProps extends BoxProps<'textlabel'> {}

export function Typography(props: PropsWithChildren<TypographyProps>) {
  const theme = useTheme();

  return (
    <Box
      Component="textlabel"
      TextColor3={theme.primary}
      TextSize={16}
      {...props}
    />
  );
}
