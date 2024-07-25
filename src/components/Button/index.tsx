import React, { useState } from '@rbxts/react';

import { Box } from 'components/Box';
import { useTheme } from 'components/ThemeProvider';
import { mergeFunctions } from 'helpers';

import type { InstanceProps, PropsWithChildren } from '@rbxts/react';
import type { BoxProps } from 'components/Box';

export interface ButtonProps extends BoxProps<'textbutton'> {
  StrokeProps?: InstanceProps<UIStroke>;
}

export function Button(props: PropsWithChildren<ButtonProps>) {
  const strokeProps = props.StrokeProps;
  props.StrokeProps = undefined;

  const theme = useTheme();
  const [hover, setHover] = useState<boolean>(false);

  return (
    <Box
      AutoButtonColor={false}
      BackgroundColor3={hover ? theme.background : theme.primary}
      BorderRadius={25}
      Component="textbutton"
      Font={theme.fontBold}
      PaddingX={4}
      PaddingY={1.5}
      TextColor3={hover ? theme.primary : theme.background}
      TextSize={16}
      {...props}
      Event={{
        ...props.Event,
        MouseEnter: mergeFunctions(
          () => setHover(true),
          props.Event?.MouseEnter,
        ),
        MouseLeave: mergeFunctions(
          () => setHover(false),
          props.Event?.MouseLeave,
        ),
      }}
    >
      <uistroke
        ApplyStrokeMode={Enum.ApplyStrokeMode.Border}
        Color={theme.primary}
        Thickness={hover ? 1 : 0}
        {...strokeProps}
      />
    </Box>
  );
}
