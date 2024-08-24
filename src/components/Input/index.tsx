import React, { useState } from '@rbxts/react';

import { Box } from 'components/Box';
import { useTheme } from 'components/ThemeProvider';
import { mergeFunctions } from 'helpers';

import type { PropsWithChildren } from '@rbxts/react';
import type { BoxProps } from 'components/Box';

export interface InputProps extends BoxProps<'textbox'> {
  Disabled?: boolean;
}

export function Input(componentProps: PropsWithChildren<InputProps>) {
  const props = { ...componentProps };

  const disabled = props.Disabled ?? false;
  props.Disabled = undefined;

  const theme = useTheme();
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <Box
      AutomaticSize="Y"
      BackgroundColor3={theme.backgroundOverlay}
      BorderColor3={
        focused && !disabled ? theme.accentPrimary : theme.bordersPrimary
      }
      BorderRadius={8}
      BorderThickness={2}
      ClearTextOnFocus={false}
      ClipsDescendants
      Component="textbox"
      PaddingX={2}
      PaddingY={1.5}
      PlaceholderColor3={theme.textSecondary}
      PlaceholderText=""
      Size={UDim2.fromScale(1, 0)}
      Text=""
      TextColor3={disabled ? theme.textSecondary : theme.textPrimary}
      TextEditable={!disabled}
      TextSize={12}
      TextTransparency={disabled ? 0.25 : 0}
      TextXAlignment={Enum.TextXAlignment.Left}
      {...props}
      Event={{
        ...props.Event,

        Focused: mergeFunctions(() => setFocused(true), props.Event?.Focused),

        FocusLost: mergeFunctions(
          () => setFocused(false),
          props.Event?.FocusLost,
        ),
      }}
      StrokeProps={{
        Transparency: disabled ? 0.5 : 0,
        ...props.StrokeProps,
      }}
    />
  );
}
