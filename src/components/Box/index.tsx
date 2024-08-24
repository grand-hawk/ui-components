import React, { createElement, Fragment } from '@rbxts/react';

import type {
  InstanceProps,
  PropsWithChildren,
  PropsWithoutRef,
  Ref,
} from '@rbxts/react';

export interface BaseBoxProps
  extends PropsWithoutRef<InstanceProps<GuiObject>> {
  Component?: keyof JSX.IntrinsicElements;

  Ref?: Ref<unknown>;

  PaddingProps?: InstanceProps<UIPadding>;

  CornerProps?: InstanceProps<UICorner>;

  StrokeProps?: InstanceProps<UIStroke>;

  ListLayoutProps?: InstanceProps<UIListLayout>;

  Padding?: number;

  PaddingX?: number;

  PaddingY?: number;

  BorderRadius?: number;

  Gap?: number;

  Direction?: Enum.FillDirection;

  Center?: boolean;

  HorizontalAlignment?: Enum.HorizontalAlignment;

  VerticalAlignment?: Enum.VerticalAlignment;

  BorderColor3?: Color3;

  BorderThickness?: number;

  DisableListLayout?: boolean;
}

export type BoxProps<T extends keyof JSX.IntrinsicElements = 'frame'> =
  JSX.IntrinsicElements[T] & BaseBoxProps;

export function Box<T extends keyof JSX.IntrinsicElements>(
  componentProps: PropsWithChildren<BoxProps<T>>,
) {
  const props = { ...componentProps };

  const component = props.Component ?? 'frame';
  props.Component = undefined;

  const ref = props.Ref;
  props.Ref = undefined;

  const paddingProps = props.PaddingProps;
  props.PaddingProps = undefined;

  const cornerProps = props.CornerProps;
  props.CornerProps = undefined;

  const strokeProps = props.StrokeProps;
  props.StrokeProps = undefined;

  const listLayoutProps = props.ListLayoutProps;
  props.ListLayoutProps = undefined;

  const padding = props.Padding ? new UDim(0, props.Padding * 8) : undefined;
  props.Padding = undefined;

  const paddingX = props.PaddingX ? new UDim(0, props.PaddingX * 8) : padding;
  props.PaddingX = undefined;

  const paddingY = props.PaddingY ? new UDim(0, props.PaddingY * 8) : padding;
  props.PaddingY = undefined;

  const borderRadius = props.BorderRadius
    ? new UDim(0, props.BorderRadius)
    : undefined;
  props.BorderRadius = undefined;

  const gap = props.Gap ? props.Gap * 8 : 0;
  props.Gap = undefined;

  const direction = props.Direction ?? Enum.FillDirection.Vertical;
  props.Direction = undefined;

  const center = props.Center;
  props.Center = undefined;

  const horizontalAlignment =
    props.HorizontalAlignment ??
    (center ? Enum.HorizontalAlignment.Center : undefined);
  props.HorizontalAlignment = undefined;

  const verticalAlignment =
    props.VerticalAlignment ??
    (center ? Enum.VerticalAlignment.Center : undefined);
  props.VerticalAlignment = undefined;

  const borderColor3 = props.BorderColor3;
  props.BorderColor3 = undefined;

  const borderThickness = props.BorderThickness;
  props.BorderThickness = undefined;

  const disableListLayout = props.DisableListLayout ?? false;
  props.DisableListLayout = undefined;

  return createElement<BoxProps<T>>(
    component,
    {
      AutomaticSize: props.Size ? undefined : Enum.AutomaticSize.XY,
      BackgroundTransparency: props.BackgroundColor3 ? 0 : 1,
      BorderSizePixel: 0,
      ref,
      ...props,
    },
    <Fragment>
      {padding || paddingX || paddingY || paddingProps ? (
        <uipadding
          PaddingBottom={paddingY}
          PaddingLeft={paddingX}
          PaddingRight={paddingX}
          PaddingTop={paddingY}
          {...paddingProps}
        />
      ) : undefined}

      {borderRadius || cornerProps ? (
        <uicorner CornerRadius={borderRadius} {...cornerProps} />
      ) : undefined}

      {borderColor3 || borderThickness || strokeProps ? (
        <uistroke
          ApplyStrokeMode={Enum.ApplyStrokeMode.Border}
          Color={borderColor3}
          Enabled
          Thickness={borderThickness}
          {...strokeProps}
        />
      ) : undefined}

      {!disableListLayout ? (
        <uilistlayout
          FillDirection={direction}
          HorizontalAlignment={horizontalAlignment}
          Padding={new UDim(0, gap)}
          VerticalAlignment={verticalAlignment}
          {...listLayoutProps}
        />
      ) : undefined}

      {props.children}
    </Fragment>,
  );
}
