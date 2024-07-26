import React, { useState } from '@rbxts/react';
import ReactRoblox from '@rbxts/react-roblox';

import Center from './components/Center';
import { Box } from 'components/Box';
import { Sheet } from 'components/Sheet';
import { Slider } from 'components/Slider';
import { ThemeProvider } from 'components/ThemeProvider';
import { darkTheme } from 'themes';

import type { FunctionStory } from '@rbxts/ui-labs';

function ControlledSlider() {
  const [value, setValue] = useState<number>(0);

  return (
    <Slider
      DefaultValue={50}
      SliderChanged={(newValue) => setValue(newValue)}
      Value={value}
    />
  );
}

const story: FunctionStory = (target) => {
  const element = (
    <Center>
      <Box Gap={2}>
        <Sheet AutomaticSize="Y" Padding={4} Size={new UDim2(0, 500, 0, 0)}>
          <Slider />
        </Sheet>

        <ThemeProvider theme={darkTheme}>
          <Sheet AutomaticSize="Y" Padding={4} Size={new UDim2(0, 500, 0, 0)}>
            <ControlledSlider />
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
