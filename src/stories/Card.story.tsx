import React from '@rbxts/react';
import ReactRoblox from '@rbxts/react-roblox';

import Center from './components/Center';
import { Box } from 'components/Box';
import { Card } from 'components/Card';
import { ThemeProvider } from 'components/ThemeProvider';
import { Typography } from 'components/Typography';
import { darkTheme } from 'themes';

import type { FunctionStory } from '@rbxts/ui-labs';

const story: FunctionStory = (target) => {
  const element = (
    <Center>
      <Box Gap={2}>
        <Card Size={UDim2.fromOffset(350, 200)}>
          <Typography Text="This is a card!" />

          <Typography
            Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra, purus ut."
            TextSize={12}
            TextWrap
          />
        </Card>

        <ThemeProvider theme={darkTheme}>
          <Card Size={UDim2.fromOffset(350, 200)}>
            <Typography Text="This is a card!" />

            <Typography
              Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra, purus ut."
              TextSize={12}
              TextWrap
            />
          </Card>
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
