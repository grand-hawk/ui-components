import React, { useEffect, useRef, useState } from '@rbxts/react';

import { Button, type ButtonProps } from 'components/Button';
import { useTheme } from 'components/ThemeProvider';
import { mergeProps } from 'helpers';

import type { InstanceProps, PropsWithChildren } from '@rbxts/react';

export interface SecondaryButtonProps extends ButtonProps {
  StrokeProps?: InstanceProps<UIStroke>;
}

export function SecondaryButton(
  props: PropsWithChildren<SecondaryButtonProps>,
) {
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
    <Button
      BackgroundColor3={theme.background}
      Ref={buttonRef}
      TextColor3={theme.primary}
      {...props}
      StrokeProps={mergeProps(
        {
          Color: hover ? theme.primary : theme.primary60,
          Thickness: 1,
        },
        props.StrokeProps,
      )}
    />
  );
}
