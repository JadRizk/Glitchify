import { Colors, colors } from './colors';
import { Screens, screens } from './screens';
import { Spacings, spacings } from './spacings';
import { LineHeights, lineHeights } from './lineHeights';
import { FontSizes, fontSizes } from './fontSizes';
import { FontWeight, fontWeights } from './fontWeight';

export interface Theme {
  fonts: {
    heading: string;
    body: string;
  };
  colors: Colors;
  screens: Screens;
  spacings: Spacings;
  fontSizes: FontSizes;
  fontWeights: FontWeight;
  lineHeights: LineHeights;
}

export const theme: Theme = {
  fonts: {
    heading: `"Oswald", sans-serif`,
    body: `Arial, Helvetica, sans-serif`,
  },
  colors,
  screens,
  spacings,
  fontSizes,
  fontWeights,
  lineHeights,
};

export type ThemeColor = keyof Colors;
export type ThemeScreen = keyof Screens;
export type ThemeSpacing = keyof Spacings;
