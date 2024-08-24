import React, { useState } from '@rbxts/react';

import { Box } from 'components/Box';
import { ProgressBar, type ProgressBarProps } from 'components/ProgressBar';
import { useTheme } from 'components/ThemeProvider';
import { mergeFunctions } from 'helpers';

import type { PropsWithChildren } from '@rbxts/react';
import type { BoxProps } from 'components/Box';

export interface SliderProps extends BoxProps {
  Value?: ProgressBarProps['Value'];

  DefaultValue?: ProgressBarProps['Value'];

  SliderChanged?: (value: number) => unknown;

  HandleProps?: BoxProps<'textbutton'>;

  ProgressBarProps?: ProgressBarProps;
}

export function Slider(componentProps: PropsWithChildren<SliderProps>) {
  const props = { ...componentProps };

  const value = props.Value;
  props.Value = undefined;

  const defaultValue = props.DefaultValue;
  props.DefaultValue = undefined;

  const sliderChanged = props.SliderChanged;
  props.SliderChanged = undefined;

  const handleProps = props.HandleProps;
  props.HandleProps = undefined;

  const progressBarProps = props.ProgressBarProps;
  props.ProgressBarProps = undefined;

  const theme = useTheme();
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [internalValue, setInternalValue] = useState<number>(defaultValue ?? 0);

  return (
    <Box DisableListLayout Size={new UDim2(1, 0, 0, 6)} {...props}>
      {isDragging && (
        <Box
          Active
          AnchorPoint={new Vector2(0.5, 0.5)}
          Component="textbutton"
          Event={{
            MouseMoved: (rbx: GuiObject, x: number) => {
              if (!isDragging) return;

              const parent = rbx.Parent as GuiObject;
              const newValue = math.min(
                100,
                (math.max(0, x - parent.AbsolutePosition.X) /
                  parent.AbsoluteSize.X) *
                  100,
              );

              setInternalValue(newValue);
              if (sliderChanged) sliderChanged(newValue);
            },

            MouseButton1Up: () => setIsDragging(false),
          }}
          Selectable={false}
          Size={UDim2.fromOffset(math.huge, math.huge)}
          Text=""
          ZIndex={100}
        />
      )}

      <ProgressBar
        BackgroundColor3={theme.accentPrimary}
        Size={UDim2.fromScale(1, 1)}
        Value={!value ? internalValue : value}
        {...progressBarProps}
      />

      <Box
        AnchorPoint={new Vector2(0.25, 0.25)}
        AutoButtonColor={false}
        BackgroundColor3={theme.accentPrimary}
        Component="textbutton"
        Position={new UDim2(internalValue / 100, 0, -0, 0)}
        Size={UDim2.fromOffset(16, 16)}
        Text=""
        {...handleProps}
        CornerProps={{
          CornerRadius: new UDim(1, 0),
          ...handleProps?.CornerProps,
        }}
        Event={{
          ...handleProps?.Event,

          MouseButton1Down: mergeFunctions(() => {
            if (isDragging) return;
            setIsDragging(true);
          }, handleProps?.Event?.MouseButton1Down),
        }}
      />

      {props.children}
    </Box>
  );
}
