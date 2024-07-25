import React from '@rbxts/react';
import ReactRoblox from '@rbxts/react-roblox';

import Center from './components/Center';
import { Box } from 'components/Box';
import { Button } from 'components/Button';
import { SecondaryButton } from 'components/SecondaryButton';
import { Sheet } from 'components/Sheet';
import { ThemeProvider } from 'components/ThemeProvider';
import { Typography } from 'components/Typography';
import { darkTheme } from 'themes';

import type { FunctionStory } from '@rbxts/ui-labs';

const story: FunctionStory = (target) => {
  const element = (
    <Center>
      <Box Direction={Enum.FillDirection.Horizontal} Gap={2}>
        <Sheet Gap={2} PaddingX={6} PaddingY={4}>
          <Box Gap={0.5}>
            <Typography Text="Button" TextSize={12} />
            <Button Text="Hello World" />
          </Box>

          <Box Gap={0.5}>
            <Typography Text="Secondary Button" TextSize={12} />
            <SecondaryButton Text="Hello World" />
          </Box>
        </Sheet>

        <ThemeProvider theme={darkTheme}>
          <Sheet Gap={2} PaddingX={6} PaddingY={4}>
            <Box Gap={0.5}>
              <Typography Text="Button" TextSize={12} />
              <Button Text="Hello World" />
            </Box>

            <Box Gap={0.5}>
              <Typography Text="Secondary Button" TextSize={12} />
              <SecondaryButton Text="Hello World" />
            </Box>
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
