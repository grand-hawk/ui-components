import React, { useState } from '@rbxts/react';

import { Box } from 'components/Box';
import { Button, type ButtonProps } from 'components/Button';
import { useTheme } from 'components/ThemeProvider';
import { mergeFunctions } from 'helpers';

import type { PropsWithChildren } from '@rbxts/react';
import type { BoxProps } from 'components/Box';

export interface CheckboxProps extends ButtonProps {
  Value?: boolean;

  DefaultValue?: boolean;

  CheckboxChanged?: (value: boolean) => unknown;

  ImageProps?: BoxProps<'imagelabel'>;
}

export function Checkbox(componentProps: PropsWithChildren<CheckboxProps>) {
  const props = { ...componentProps };

  const value = props.Value;
  props.Value = undefined;

  const defaultValue = props.DefaultValue;
  props.DefaultValue = undefined;

  const checkboxChanged = props.CheckboxChanged;
  props.CheckboxChanged = undefined;

  const imageProps = props.ImageProps;
  props.ImageProps = undefined;

  const theme = useTheme();
  const [internalValue, setInternalValue] = useState<boolean>(
    defaultValue ?? false,
  );
  const checkboxValue = value ?? internalValue;

  return (
    <Button
      BackgroundColor3={
        checkboxValue ? theme.accentPrimary : theme.backgroundOverlay
      }
      BorderRadius={4}
      DisableListLayout
      PaddingX={0}
      PaddingY={0}
      Size={UDim2.fromOffset(24, 24)}
      Text=""
      {...props}
      Event={{
        ...props.Event,

        MouseButton1Click: mergeFunctions(() => {
          const newValue = !checkboxValue;

          setInternalValue(newValue);
          if (checkboxChanged) checkboxChanged(newValue);
        }, props.Event?.MouseButton1Click),
      }}
      StrokeProps={{
        Color: checkboxValue ? theme.accentPrimary : theme.bordersPrimary,
        Thickness: 2,

        ...props.StrokeProps,
      }}
    >
      {checkboxValue && (
        <Box
          AnchorPoint={new Vector2(0.5, 0.5)}
          Component="imagelabel"
          Image="rbxassetid://18664334374"
          ImageColor3={new Color3(1, 1, 1)}
          ImageRectSize={new Vector2(36, 36)}
          Position={UDim2.fromScale(0.5, 0.5)}
          Size={UDim2.fromOffset(22, 22)}
          ZIndex={999}
          {...imageProps}
        />
      )}

      {props.children}
    </Button>
  );
}
