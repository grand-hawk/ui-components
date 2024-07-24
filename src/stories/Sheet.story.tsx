import React from '@rbxts/react';
import ReactRoblox from '@rbxts/react-roblox';

import Center from './components/Center';
import { Box } from 'components/Box';
import { Sheet } from 'components/Sheet';
import { ThemeProvider } from 'components/ThemeProvider';
import { Typography } from 'components/Typography';
import { darkTheme } from 'themes';

import type { FunctionStory } from '@rbxts/ui-labs';

const story: FunctionStory = (target) => {
  const element = (
    <Center>
      <Box Gap={2}>
        <Sheet Center Size={UDim2.fromOffset(300, 100)}>
          <Typography Text="Hello world!" />
        </Sheet>

        <ThemeProvider theme={darkTheme}>
          <Sheet Center Size={UDim2.fromOffset(300, 100)}>
            <Typography Text="Hello world!" />
          </Sheet>
        </ThemeProvider>
      </Box>
    </Center>
  );

  const root = ReactRoblox.createRoot(target);
  root.render(element);

  return () => {
    root.unmount();
  };
};

export = story;
