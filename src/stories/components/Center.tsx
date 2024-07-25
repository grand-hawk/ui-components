import React from '@rbxts/react';

import { Box } from 'components/Box';

import type { PropsWithChildren } from '@rbxts/react';
import type { BaseBoxProps } from 'components/Box';

export default function Center(props: PropsWithChildren<BaseBoxProps>) {
  return (
    <Box Center Size={UDim2.fromScale(1, 1)}>
      {props.children}
    </Box>
  );
}
