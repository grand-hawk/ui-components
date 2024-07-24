import React from '@rbxts/react';

import { Box, type BoxProps } from 'components/Box';
import { useTheme } from 'components/ThemeProvider';

export interface SheetProps extends BoxProps {}

export function Sheet(props: React.PropsWithChildren<SheetProps>) {
  const theme = useTheme();

  return (
    <Box BackgroundColor3={theme.overlay} {...props}>
      {props.children}
    </Box>
  );
}
