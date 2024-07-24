import React from '@rbxts/react';

import { useTheme } from 'components/ThemeProvider';

export interface TypographyProps
  extends Partial<InstanceProperties<TextLabel>> {}

export function Typography(props: TypographyProps) {
  const theme = useTheme();

  return (
    <textlabel
      AutomaticSize={props.Size ? undefined : 'XY'}
      BackgroundTransparency={props.BackgroundColor3 ? 0 : 1}
      TextColor3={theme.primary}
      TextSize={16}
      {...props}
    />
  );
}
