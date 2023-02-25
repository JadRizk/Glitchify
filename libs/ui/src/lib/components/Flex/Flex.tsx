import React from 'react';
import { Theme, ThemeSpacing } from '../../theme';
import { ResponsiveValue } from '../../theme/screens';
import styled, { css } from 'styled-components';
import { renderResponsiveStyles } from '../../utils/renderResponsiveStyles';
import { Property } from 'csstype';

type Gap = `${ThemeSpacing} ${ThemeSpacing}` | ThemeSpacing;

type ResponsiveGap = ResponsiveValue<Gap>;

type FlexProps = {
  alignItems?: Property.AlignItems;
  justifyContent?: Property.JustifyContent;
  noWrap?: boolean;
  column?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
  gap?: ResponsiveGap;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
};

export const FlexItem = styled.div<{ filled?: boolean }>`
  ${({ filled }) => css`
    flex: ${filled ? '1 1 auto' : '0 0 auto'};
    min-width: 0;
    width: ${filled ? '100%' : 'auto'};
    max-width: 100%;
  `}
`;

const gapFormatter = (theme: Theme) => (gap: Gap) => {
  const spacings = gap.split(' ');
  return spacings
    .map((spacing) => theme.spacings[spacing as ThemeSpacing])
    .join(' ');
};

export const Flex = styled.div<FlexProps>`
  ${({
    theme,
    alignItems,
    justifyContent,
    noWrap,
    column,
    fullWidth,
    fullHeight,
    gap,
  }) => {
    return css`
      display: flex;
      flex-wrap: ${noWrap ? 'nowrap' : 'wrap'};
      flex-direction: ${column ? 'column' : 'row'};
      ${alignItems && `align-items: ${alignItems};`};
      ${justifyContent && `justify-content: ${justifyContent};`};
      width: ${fullWidth ? '100%' : 'auto'};
      height: ${fullHeight ? '100%' : 'auto'};
      ${gap && renderResponsiveStyles(gap, 'gap', gapFormatter(theme))}
    `;
  }}
`;
