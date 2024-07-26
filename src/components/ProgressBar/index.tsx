import React from '@rbxts/react';

import { Box } from 'components/Box';
import { useTheme } from 'components/ThemeProvider';

import type { PropsWithChildren } from '@rbxts/react';
import type { BoxProps } from 'components/Box';

export interface ProgressBarProps extends BoxProps<'canvasgroup'> {
  Value?: number;

  BorderRadius?: number;

  IndicatorProps?: BoxProps;

  InnerIndicatorProps?: BoxProps;
}

export function ProgressBar(
  componentProps: PropsWithChildren<ProgressBarProps>,
) {
  const props = { ...componentProps };

  const value = props.Value ?? 0;
  props.Value = undefined;

  const borderRadius = props.BorderRadius ?? 8;
  props.BorderRadius = undefined;

  const indicatorProps = props.IndicatorProps;
  props.IndicatorProps = undefined;

  const innerIndicatorProps = props.InnerIndicatorProps;
  props.InnerIndicatorProps = undefined;

  const theme = useTheme();

  return (
    <Box
      BackgroundColor3={theme.primary60}
      BackgroundTransparency={0.8}
      BorderRadius={borderRadius}
      ClipsDescendants
      Component="canvasgroup"
      Size={new UDim2(1, 0, 0, 12)}
      {...props}
    >
      <Box Component="canvasgroup" Size={UDim2.fromScale(1, 1)}>
        <Box
          BackgroundColor3={theme.accent}
          BorderRadius={borderRadius}
          ClipsDescendants
          HorizontalAlignment={Enum.HorizontalAlignment.Right}
          Size={UDim2.fromScale(value / 100, 1)}
          {...indicatorProps}
        >
          <Box
            BackgroundColor3={theme.accent}
            Size={UDim2.fromScale(0.5, 1)}
            {...innerIndicatorProps}
          />
        </Box>
      </Box>

      {props.children}
    </Box>
  );
}
