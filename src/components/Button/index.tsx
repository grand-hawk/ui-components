import React, { useState } from '@rbxts/react';

import { Box } from 'components/Box';
import { useTheme } from 'components/ThemeProvider';
import { mergeFunctions } from 'helpers';

import type { InstanceProps, PropsWithChildren } from '@rbxts/react';
import type { BoxProps } from 'components/Box';

export interface ButtonProps extends BoxProps<'textbutton'> {
  StrokeProps?: InstanceProps<UIStroke>;
}

export function Button(componentProps: PropsWithChildren<ButtonProps>) {
  const props = { ...componentProps };

  const strokeProps = props.StrokeProps;
  props.StrokeProps = undefined;

  const theme = useTheme();
  const [hover, setHover] = useState<boolean>(false);

  return (
    <Box
      AutoButtonColor={false}
      BackgroundColor3={hover ? theme.backgroundPrimary : theme.textPrimary}
      BorderRadius={25}
      Component="textbutton"
      Font={theme.fontBold}
      PaddingX={4}
      PaddingY={1.5}
      TextColor3={hover ? theme.textPrimary : theme.backgroundPrimary}
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
        Color={theme.textPrimary}
        Thickness={hover ? 1 : 0}
        {...strokeProps}
      />

      {props.children}
    </Box>
  );
}
