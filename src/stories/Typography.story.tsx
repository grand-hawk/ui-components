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
      <Box Direction={Enum.FillDirection.Horizontal} Gap={2}>
        <Sheet Padding={2}>
          <Typography Text="32px" TextSize={32} />
          <Typography Text="16px" TextSize={16} />
          <Typography Text="12px" TextSize={12} />
          <Typography Text="8px" TextSize={8} />
        </Sheet>

        <ThemeProvider theme={darkTheme}>
          <Sheet Padding={2}>
            <Typography Text="32px" TextSize={32} />
            <Typography Text="16px" TextSize={16} />
            <Typography Text="12px" TextSize={12} />
            <Typography Text="8px" TextSize={8} />
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
