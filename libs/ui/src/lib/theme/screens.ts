import { ThemeScreen } from '../theme';
import { RemNumber } from '../utils/RemValue';

export type Screens = {
  xs: RemNumber;
  sm: RemNumber;
  md: RemNumber;
  lg: RemNumber;
  xl: RemNumber;
  xxl: RemNumber;
};

export type ResponsiveValue<T> = {
  [k in ThemeScreen]?: T;
} & {
  default?: T;
};

export const screens: Screens = {
  xs: '39rem',
  sm: '64rem',
  md: '83.4rem',
  lg: '102.4rem',
  xl: '128rem',
  xxl: '160rem',
};
