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
}

export type BoxProps<T extends keyof JSX.IntrinsicElements = 'frame'> =
  JSX.IntrinsicElements[T] & BaseBoxProps;

export function Box<T extends keyof JSX.IntrinsicElements>(
  props: PropsWithChildren<BoxProps<T>>,
) {
  const component = props.Component ?? 'frame';
  props.Component = undefined;

  const ref = props.Ref;
  props.Ref = undefined;

  const paddingProps = props.PaddingProps;
  props.PaddingProps = undefined;

  const cornerProps = props.CornerProps;
  props.CornerProps = undefined;

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

      <uilistlayout
        FillDirection={direction}
        HorizontalAlignment={horizontalAlignment}
        Padding={new UDim(0, gap)}
        VerticalAlignment={verticalAlignment}
        {...listLayoutProps}
      />

      {props.children}
    </Fragment>,
  );
}
