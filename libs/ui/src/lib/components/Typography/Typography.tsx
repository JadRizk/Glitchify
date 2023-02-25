import { ThemeColor } from '../../theme';
import styled, { css } from 'styled-components';
import { media } from '../../utils/mediaQueryUtils';

export type TypeProps = {
  color?: ThemeColor;
  textAlign?: 'center' | 'right';
  fontWeight?: 400 | 500 | 600 | 700;
};

export const TypeH1 = styled.h1<TypeProps>`
  ${({
    theme: { fontSizes, colors, lineHeights },
    color,
    textAlign = 'unset',
    fontWeight = 700,
  }) => css`
    color: ${color ? colors[color] : 'inherit'};
    text-align: ${textAlign};
    line-height: ${lineHeights.scale05};
    font-weight: ${fontWeight};
    font-size: ${fontSizes.scale05};

    ${media.minQueries.sm`
      line-height: ${lineHeights.scale06};
      font-size: ${fontSizes.scale06};
    `}
  `}
`;

export const TypeH2 = styled.h2<TypeProps>`
  ${({
    theme: { fontSizes, colors, lineHeights },
    color,
    textAlign = 'unset',
    fontWeight = 700,
  }) => css`
    color: ${color ? colors[color] : 'inherit'};
    text-align: ${textAlign};
    line-height: ${lineHeights.scale05};
    font-weight: ${fontWeight};
    font-size: ${fontSizes.scale05};
  `}
`;

export const TypeH3 = styled.h3<TypeProps>`
  ${({
    theme: { fontSizes, colors, lineHeights },
    color,
    textAlign = 'unset',
    fontWeight = 600,
  }) => css`
    color: ${color ? colors[color] : 'inherit'};
    text-align: ${textAlign};
    line-height: ${lineHeights.scale04};
    font-weight: ${fontWeight};
    font-size: ${fontSizes.scale04};
  `}
`;

export const TypeH4 = styled.h4<TypeProps>`
  ${({
    theme: { fontSizes, colors, lineHeights },
    color,
    textAlign = 'unset',
    fontWeight = 600,
  }) => css`
    color: ${color ? colors[color] : 'inherit'};
    text-align: ${textAlign};
    line-height: ${lineHeights.scale03};
    font-weight: ${fontWeight};
    font-size: ${fontSizes.scale03};
  `}
`;

export const TypeH5 = styled.h5<TypeProps>`
  ${({
    theme: { fontSizes, colors, lineHeights },
    color,
    textAlign = 'unset',
    fontWeight = 500,
  }) => css`
    color: ${color ? colors[color] : 'inherit'};
    text-align: ${textAlign};
    line-height: ${lineHeights.scale02};
    font-weight: ${fontWeight};
    font-size: ${fontSizes.scale02};
  `}
`;

export const TypeH6 = styled.h6<TypeProps>`
  ${({
    theme: { fontSizes, colors, lineHeights },
    color,
    textAlign = 'unset',
    fontWeight = 400,
  }) => css`
    color: ${color ? colors[color] : 'inherit'};
    text-align: ${textAlign};
    line-height: ${lineHeights.scale01};
    font-weight: ${fontWeight};
    font-size: ${fontSizes.scale01};
  `}
`;

export const BodyText = styled.p<TypeProps>`
  ${({
    theme: { fontSizes, colors, lineHeights },
    color,
    fontWeight = 400,
    textAlign = 'unset',
  }) => css`
    color: ${color ? colors[color] : 'inherit'};
    text-align: ${textAlign};
    line-height: ${lineHeights.scale03};
    font-size: ${fontSizes.scale03};
    font-weight: ${fontWeight};
  `}
`;

export const SmallBodyText = styled.p<TypeProps>`
  ${({
    theme: { fontSizes, colors, lineHeights },
    color,
    fontWeight = 400,
    textAlign = 'unset',
  }) => css`
    color: ${color ? colors[color] : 'inherit'};
    text-align: ${textAlign};
    line-height: ${lineHeights.scale02};
    font-size: ${fontSizes.scale02};
    font-weight: ${fontWeight};
  `}
`;

export const ExtraSmallBodyText = styled.p<TypeProps>`
  ${({
    theme: { fontSizes, colors, lineHeights },
    color,
    fontWeight = 400,
    textAlign = 'unset',
  }) => css`
    color: ${color ? colors[color] : 'inherit'};
    text-align: ${textAlign};
    line-height: ${lineHeights.scale01};
    font-size: ${fontSizes.scale01};
    font-weight: ${fontWeight};
  `}
`;

export const Article = styled.article`
  ${({ theme: { spacings, lineHeights } }) => css`
    h1 {
      margin-top: ${lineHeights.scale01};
      margin-bottom: ${spacings.spacing10};
    }
    h2 {
      margin-top: ${lineHeights.scale01};
      margin-bottom: ${lineHeights.scale01};
    }
    h3 {
      margin-top: ${lineHeights.scale01};
      margin-bottom: 0;
    }
    h4 {
      margin-top: ${lineHeights.scale01};
      margin-bottom: 0;
    }
    h5 {
      margin-top: ${lineHeights.scale01};
      margin-bottom: 0;
    }

    ${BodyText} {
      margin-top: 0;
      margin-bottom: ${lineHeights.scale01};
    }

    > *:first-child {
      margin-top: 0;
    }

    > *:last-child {
      margin-bottom: 0;
    }
  `}
`;
