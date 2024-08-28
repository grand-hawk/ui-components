import React from '@rbxts/react';

import { Box } from 'components/Box';
import { useTheme } from 'components/ThemeProvider';

import type { PropsWithChildren } from '@rbxts/react';
import type { BoxProps } from 'components/Box';

export interface TypographyProps extends BoxProps<'textlabel'> {
  Bold?: boolean;
}

export function Typography(componentProps: PropsWithChildren<TypographyProps>) {
  const theme = useTheme();

  const props = { ...componentProps };

  const bold = componentProps.Bold ?? false;
  props.Bold = undefined;

  return (
    <Box
      Component="textlabel"
      Font={bold ? theme.fontBold : theme.fontRegular}
      TextColor3={theme.textPrimary}
      TextSize={12}
      TextXAlignment={Enum.TextXAlignment.Left}
      {...props}
    />
  );
}
