import React from '@rbxts/react';

import { Sheet, type SheetProps } from 'components/Sheet';

import type { PropsWithChildren } from '@rbxts/react';

export interface CardProps extends SheetProps {}

export function Card(props: PropsWithChildren<CardProps>) {
  return <Sheet BorderRadius={12} Gap={0.5} Padding={3} {...props} />;
}
