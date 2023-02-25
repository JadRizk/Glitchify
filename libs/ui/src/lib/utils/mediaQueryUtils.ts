import { css, Interpolation } from 'styled-components';
import { ThemeScreen } from '../theme';
import { RemNumber } from './RemValue';

/*
 We need to use this transform function for the media queries specifically since
 They do not use the font-size set on the html,
 They only use the font size of the browser which is by default 16
 We need to transform from our rem values from base 10 to a rem value of base 16
 more info https://www.w3.org/TR/mediaqueries-4/#units
*/
export const toRemBase16 = (size: RemNumber): RemNumber =>
  `${(+size.replace('rem', '') * 10) / 16}rem`;

const generateMinMediaQueries =
  (screen: ThemeScreen) =>
  (strings: TemplateStringsArray, ...interpolations: Interpolation<any>[]) =>
    css`
      @media screen and (min-width: ${({ theme }) =>
          toRemBase16(theme.screens[screen])}) {
        ${css(strings, ...interpolations)}
      }
    `;

export const media = {
  minQueries: {
    xs: generateMinMediaQueries('xs'),
    sm: generateMinMediaQueries('sm'),
    md: generateMinMediaQueries('md'),
    lg: generateMinMediaQueries('lg'),
    xl: generateMinMediaQueries('xl'),
    xxl: generateMinMediaQueries('xxl'),
  },
};
