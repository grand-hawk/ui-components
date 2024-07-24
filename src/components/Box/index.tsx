import React from '@rbxts/react';

export interface BoxProps extends Partial<InstanceProperties<Frame>> {
  Padding?: number;

  PaddingX?: number;

  PaddingY?: number;

  BorderRadius?: number;

  Gap?: number;

  Direction?: Enum.FillDirection;

  Center?: boolean;

  HorizontalAlignment?: Enum.HorizontalAlignment;

  VerticalAlignment?: Enum.VerticalAlignment;
}

export function Box(props: React.PropsWithChildren<BoxProps>) {
  const padding = props.Padding ? new UDim(0, props.Padding * 8) : undefined;
  props.Padding = undefined;

  const paddingX = props.PaddingX ? new UDim(0, props.PaddingX * 8) : padding;
  props.PaddingX = undefined;

  const paddingY = props.PaddingY ? new UDim(0, props.PaddingY * 8) : padding;
  props.PaddingY = undefined;

  const borderRadius = props.BorderRadius;
  props.BorderRadius = undefined;

  const gap = props.Gap ? props.Gap * 8 : 0;
  props.Gap = undefined;

  const direction = props.Direction ?? Enum.FillDirection.Vertical;
  props.Direction = undefined;

  const shouldCenter = props.Center;
  props.Center = undefined;

  const horizontalAlignment =
    props.HorizontalAlignment ??
    (shouldCenter ? Enum.HorizontalAlignment.Center : undefined);
  props.HorizontalAlignment = undefined;

  const verticalAlignment =
    props.VerticalAlignment ??
    (shouldCenter ? Enum.VerticalAlignment.Center : undefined);
  props.VerticalAlignment = undefined;

  return (
    <frame
      AutomaticSize={props.Size ? undefined : 'XY'}
      BackgroundTransparency={props.BackgroundColor3 ? 0 : 1}
      BorderSizePixel={0}
      {...props}
    >
      {padding || paddingX || paddingY ? (
        <uipadding
          PaddingBottom={paddingY}
          PaddingLeft={paddingX}
          PaddingRight={paddingX}
          PaddingTop={paddingY}
        />
      ) : undefined}

      {borderRadius ? (
        <uicorner CornerRadius={new UDim(0, borderRadius)} />
      ) : undefined}

      <uilistlayout
        FillDirection={direction}
        HorizontalAlignment={horizontalAlignment}
        Padding={new UDim(0, gap)}
        VerticalAlignment={verticalAlignment}
      />

      {props.children}
    </frame>
  );
}
