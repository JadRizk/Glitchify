import styled, { css } from 'styled-components';
import { media } from '../../utils/mediaQueryUtils';
import { glitch, noise1, noise2 } from '../../utils/glitch-animations';

export type TypeProps = {
  textAlign?: 'center' | 'right';
  fontWeight?: 400 | 500 | 600 | 700;
};

const glitchTextStyles = css`
  position: relative;
  color: #dfbfbf;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  &:before {
    content: attr(data-text);
    position: absolute;
    left: -2px;
    text-shadow: -5px 0 lightgreen;
    background: black;
    overflow: hidden;
    top: 0;
    visibility: hidden;
  }

  &:after {
    content: attr(data-label);
    cursor: pointer;
    position: absolute;
    left: 2px;
    text-shadow: -5px 0 magenta;
    background: black;
    overflow: hidden;
    top: 0;
    visibility: hidden;
  }

  &:hover {
    &:before {
      visibility: visible;
      animation: ${noise2} 3s linear infinite alternate-reverse,
        ${glitch} 2s 2.05s infinite;
    }

    &:after {
      visibility: visible;
      animation: ${noise1} 3s linear infinite alternate-reverse,
        ${glitch} 2s 2s infinite;
    }
  }
`;

export const TypeH1 = styled.h1<TypeProps>`
  ${glitchTextStyles}
  ${({
    theme: { fontSizes, lineHeights },
    textAlign = 'unset',
    fontWeight = 700,
  }) => css`
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
  ${glitchTextStyles}

  ${({
    theme: { fontSizes, lineHeights },
    textAlign = 'unset',
    fontWeight = 700,
  }) => css`
    text-align: ${textAlign};
    line-height: ${lineHeights.scale05};
    font-weight: ${fontWeight};
    font-size: ${fontSizes.scale05};
  `}
`;

export const TypeH3 = styled.h3<TypeProps>`
  ${glitchTextStyles}

  ${({
    theme: { fontSizes, lineHeights },
    textAlign = 'unset',
    fontWeight = 600,
  }) => css`
    text-align: ${textAlign};
    line-height: ${lineHeights.scale04};
    font-weight: ${fontWeight};
    font-size: ${fontSizes.scale04};
  `}
`;

export const TypeH4 = styled.h4<TypeProps>`
  ${glitchTextStyles}

  ${({
    theme: { fontSizes, lineHeights },
    textAlign = 'unset',
    fontWeight = 600,
  }) => css`
    text-align: ${textAlign};
    line-height: ${lineHeights.scale03};
    font-weight: ${fontWeight};
    font-size: ${fontSizes.scale03};
  `}
`;

export const TypeH5 = styled.h5<TypeProps>`
  ${glitchTextStyles}

  ${({
    theme: { fontSizes, lineHeights },
    textAlign = 'unset',
    fontWeight = 500,
  }) => css`
    text-align: ${textAlign};
    line-height: ${lineHeights.scale02};
    font-weight: ${fontWeight};
    font-size: ${fontSizes.scale02};
  `}
`;

export const TypeH6 = styled.h6<TypeProps>`
  ${glitchTextStyles}

  ${({
    theme: { fontSizes, lineHeights },
    textAlign = 'unset',
    fontWeight = 400,
  }) => css`
    text-align: ${textAlign};
    line-height: ${lineHeights.scale01};
    font-weight: ${fontWeight};
    font-size: ${fontSizes.scale01};
  `}
`;

export const BodyText = styled.p<TypeProps>`
  ${glitchTextStyles}

  ${({
    theme: { fontSizes, lineHeights },
    fontWeight = 400,
    textAlign = 'unset',
  }) => css`
    text-align: ${textAlign};
    line-height: ${lineHeights.scale03};
    font-size: ${fontSizes.scale03};
    font-weight: ${fontWeight};
  `}
`;

export const SmallBodyText = styled.p<TypeProps>`
  ${glitchTextStyles}

  ${({
    theme: { fontSizes, lineHeights },
    fontWeight = 400,
    textAlign = 'unset',
  }) => css`
    text-align: ${textAlign};
    line-height: ${lineHeights.scale02};
    font-size: ${fontSizes.scale02};
    font-weight: ${fontWeight};
  `}
`;

export const ExtraSmallBodyText = styled.p<TypeProps>`
  ${glitchTextStyles}

  ${({
    theme: { fontSizes, lineHeights },
    fontWeight = 400,
    textAlign = 'unset',
  }) => css`
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
