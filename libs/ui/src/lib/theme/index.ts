import { Colors, colors } from './colors';
import { Screens, screens } from './screens';
import { Spacings, spacings } from './spacings';
import { LineHeights, lineHeights } from './lineHeights';
import { FontSizes, fontSizes } from './fontSizes';

export interface Theme {
  colors: Colors;
  screens: Screens;
  spacings: Spacings;
  fontSizes: FontSizes;
  lineHeights: LineHeights;
}

export const theme: Theme = {
  colors,
  screens,
  spacings,
  fontSizes,
  lineHeights,
};

export type ThemeColor = keyof Colors;
export type ThemeScreen = keyof Screens;
export type ThemeSpacing = keyof Spacings;
