import React from '@rbxts/react';

import { Box } from 'components/Box';

import type { BoxProps } from 'components/Box';

export default function Center(props: React.PropsWithChildren<BoxProps>) {
  return (
    <Box Center Size={UDim2.fromScale(1, 1)}>
      {props.children}
    </Box>
  );
}
