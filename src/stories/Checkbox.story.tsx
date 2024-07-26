import React from '@rbxts/react';
import ReactRoblox from '@rbxts/react-roblox';

import Center from './components/Center';
import { Box } from 'components/Box';
import { Checkbox } from 'components/Checkbox';
import { Sheet } from 'components/Sheet';
import { ThemeProvider } from 'components/ThemeProvider';
import { Typography } from 'components/Typography';
import { darkTheme } from 'themes';

import type { FunctionStory } from '@rbxts/ui-labs';

const story: FunctionStory = (target) => {
  const element = (
    <Center>
      <Box Gap={2}>
        <Sheet
          AutomaticSize="Y"
          Direction={Enum.FillDirection.Horizontal}
          Gap={2}
          ListLayoutProps={{
            HorizontalFlex: 'SpaceBetween',
          }}
          Padding={4}
          Size={new UDim2(0, 300, 0, 0)}
          VerticalAlignment={Enum.VerticalAlignment.Center}
        >
          <Typography Text="Checkbox" TextSize={14} />

          <Checkbox />
        </Sheet>

        <ThemeProvider theme={darkTheme}>
          <Sheet
            AutomaticSize="Y"
            Direction={Enum.FillDirection.Horizontal}
            Gap={2}
            ListLayoutProps={{
              HorizontalFlex: 'SpaceBetween',
            }}
            Padding={4}
            Size={new UDim2(0, 300, 0, 0)}
            VerticalAlignment={Enum.VerticalAlignment.Center}
          >
            <Typography Text="Checkbox" TextSize={14} />

            <Checkbox DefaultValue />
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
