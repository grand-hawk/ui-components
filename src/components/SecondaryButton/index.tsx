import React, { useState } from '@rbxts/react';

import { Button, type ButtonProps } from 'components/Button';
import { useTheme } from 'components/ThemeProvider';
import { mergeFunctions, mergeProps } from 'helpers';

import type { PropsWithChildren } from '@rbxts/react';

export interface SecondaryButtonProps extends ButtonProps {}

export function SecondaryButton(
  props: PropsWithChildren<SecondaryButtonProps>,
) {
  const theme = useTheme();
  const [hover, setHover] = useState<boolean>(false);

  return (
    <Button
      BackgroundColor3={theme.backgroundPrimary}
      TextColor3={theme.textPrimary}
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
      StrokeProps={mergeProps(
        {
          Color: hover ? theme.textPrimary : theme.textSecondary,
          Thickness: 1,
        },
        props.StrokeProps,
      )}
    />
  );
}
