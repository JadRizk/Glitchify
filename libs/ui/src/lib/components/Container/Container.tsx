import styled, { css } from 'styled-components';
import { media } from '../../utils/mediaQueryUtils';
import { ThemeScreen } from '../../theme';

export type ContainerProps = {
  maxWidth?: ThemeScreen;
  fullHeight?: boolean;
};

export const Container = styled.div<ContainerProps>`
  ${({ theme: { screens, spacings }, maxWidth, fullHeight = false }) => css`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-left: ${spacings.containerPadding};
    padding-right: ${spacings.containerPadding};
    ${fullHeight && `height: 100%;`};
    ${maxWidth && `max-width: ${screens[maxWidth]}`};

    ${media.minQueries.md`
      padding-left: ${spacings.containerPaddingMd};
      padding-right: ${spacings.containerPaddingMd};
    `}
  `}
`;
