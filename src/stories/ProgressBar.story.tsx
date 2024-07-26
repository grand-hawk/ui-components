import React from '@rbxts/react';
import ReactRoblox from '@rbxts/react-roblox';

import Center from './components/Center';
import { Box } from 'components/Box';
import { ProgressBar } from 'components/ProgressBar';
import { Sheet } from 'components/Sheet';
import { ThemeProvider } from 'components/ThemeProvider';
import { darkTheme } from 'themes';

import type { FunctionStory } from '@rbxts/ui-labs';

const story: FunctionStory = (target) => {
  const element = (
    <Center>
      <Box Gap={2}>
        <Sheet
          AutomaticSize="Y"
          Gap={2}
          Padding={4}
          Size={new UDim2(0, 500, 0, 0)}
        >
          <ProgressBar Value={0} />

          <ProgressBar Value={25} />
        </Sheet>

        <ThemeProvider theme={darkTheme}>
          <Sheet
            AutomaticSize="Y"
            Gap={2}
            Padding={4}
            Size={new UDim2(0, 500, 0, 0)}
          >
            <ProgressBar Value={75} />

            <ProgressBar Value={100} />
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
