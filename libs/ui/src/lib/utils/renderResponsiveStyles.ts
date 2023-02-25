import { ResponsiveValue } from '../theme/screens';
import React from 'react';
import { css } from 'styled-components';
import { media } from './mediaQueryUtils';
import { ThemeScreen } from '@glitchify/ui';

export const renderResponsiveStyles = (
  data: ResponsiveValue<string | number>,
  prop: keyof React.CSSProperties,
  formatter?: (key: any) => string
) => {
  const styles = [];
  const { default: defaultData, ...screensData } = data;

  let screenSize: ThemeScreen;
  for (screenSize in screensData) {
    const screenData = data[screenSize];
    const mediaQuery = media.minQueries[screenSize];
    styles.push(
      mediaQuery`${prop}: ${formatter ? formatter(screenData) : screenData}`
    );
  }
  if (defaultData) {
    styles.push(
      css`
        ${prop}: ${formatter ? formatter(defaultData) : defaultData}
      `
    );
  }
  return styles;
};
