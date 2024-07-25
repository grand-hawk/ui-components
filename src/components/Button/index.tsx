import React, { useEffect, useRef, useState } from '@rbxts/react';

import { Box } from 'components/Box';
import { useTheme } from 'components/ThemeProvider';

import type { InstanceProps, PropsWithChildren } from '@rbxts/react';
import type { BoxProps } from 'components/Box';

export interface ButtonProps extends BoxProps<'textbutton'> {
  StrokeProps?: InstanceProps<UIStroke>;
}

export function Button(props: PropsWithChildren<ButtonProps>) {
  const strokeProps = props.StrokeProps;
  props.StrokeProps = undefined;

  const theme = useTheme();
  const buttonRef = useRef<TextButton>(undefined);
  const [hover, setHover] = useState<boolean>(false);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    button.MouseEnter.Connect(() => setHover(true));
    button.MouseLeave.Connect(() => setHover(false));
  });

  return (
    <Box
      AutoButtonColor={false}
      BackgroundColor3={hover ? theme.background : theme.primary}
      BorderRadius={25}
      Component="textbutton"
      Font={theme.fontBold}
      PaddingX={4}
      PaddingY={1.5}
      Ref={props.Ref ?? buttonRef}
      TextColor3={hover ? theme.primary : theme.background}
      TextSize={16}
      {...props}
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
