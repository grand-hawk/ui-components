import React from '@rbxts/react';

import { Box } from 'components/Box';
import { useTheme } from 'components/ThemeProvider';

import type { PropsWithChildren } from '@rbxts/react';
import type { BoxProps } from 'components/Box';

export interface SheetProps extends BoxProps {
  Background?: boolean;
}

export function Sheet(componentProps: PropsWithChildren<SheetProps>) {
  const theme = useTheme();

  const props = { ...componentProps };

  const background = props.Background
    ? theme.backgroundPrimary
    : theme.backgroundOverlay;
  props.Background = undefined;

  return <Box BackgroundColor3={background} {...props} />;
}
