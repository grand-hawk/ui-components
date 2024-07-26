import React from '@rbxts/react';

import { Box } from 'components/Box';
import { useTheme } from 'components/ThemeProvider';

import type { PropsWithChildren } from '@rbxts/react';
import type { BoxProps } from 'components/Box';

export interface SheetProps extends BoxProps {}

export function Sheet(props: PropsWithChildren<SheetProps>) {
  const theme = useTheme();

  return <Box BackgroundColor3={theme.overlay} {...props} />;
}
