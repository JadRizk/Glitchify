import { FC } from 'react';
import styled, { css } from 'styled-components';
import { Flex } from '@glitchify/ui';
import { glitch, glitch2, noise1, noise2 } from '../../utils/glitch-animations';

export const GlitchWrapper = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 40%;
  left: 50%;
  z-index: 10;
`;

export const Glitch = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 10vmax;

  @media screen and (min-width: 83.4rem) {
    font-size: 12rem;
  }

  color: ${({ theme }) => theme.colors.white5};
  position: relative;
  animation: ${glitch} 5s 5s infinite;

  &:before {
    content: attr(data-text);
    position: absolute;
    left: -2px;
    text-shadow: -5px 0 magenta;
    background: black;
    overflow: hidden;
    top: 0;
    animation: ${noise1} 3s linear infinite alternate-reverse,
      ${glitch} 5s 5.05s infinite;
  }

  &:after {
    content: attr(data-text);
    position: absolute;
    left: 2px;
    text-shadow: -5px 0 ${({ theme }) => theme.colors.green3};
    background: black;
    overflow: hidden;
    top: 0;
    animation: ${noise2} 3s linear infinite alternate-reverse,
      ${glitch} 5s 5s infinite;
  }
`;

export const GlowText = styled(Glitch)`
  color: transparent;
  position: absolute;
  top: 0;
  text-shadow: 0 0 1000px ${({ theme }) => theme.colors.white5};
`;

export const Subtitle = styled.p`
  font-size: 1.5vmax;

  @media screen and (min-width: 83.4rem) {
    font-size: 1.8rem;
  }

  ${({ theme: { fontWeights, colors } }) => css`
    font-weight: ${fontWeights.extraLight};
    color: ${colors.white5};
    opacity: 0.4;
  `};

  text-transform: uppercase;
  letter-spacing: 1em;
  text-align: center;
  animation: ${glitch2} 5s 5.02s infinite;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

export type HeroTextProps = {
  label: string;
  subTitle?: string;
};

export const HeroText: FC<HeroTextProps> = ({ label, subTitle }) => {
  return (
    <GlitchWrapper>
      <Flex
        column
        alignItems={'center'}
        justifyContent={'center'}
        gap={{ default: 'spacing10' }}
      >
        <Glitch data-text={label}>{label}</Glitch>
        <GlowText>{label}</GlowText>

        {subTitle && <Subtitle>{subTitle}</Subtitle>}
      </Flex>
    </GlitchWrapper>
  );
};