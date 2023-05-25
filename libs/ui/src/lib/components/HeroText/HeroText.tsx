import { FC } from 'react';
import styled, { css } from 'styled-components';
import { Flex } from '@glitchify/ui';
import { glitch, glitch2, noise1, noise2 } from '../../utils/glitch-animations';
import { motion } from 'framer-motion';
import { media } from '../../utils/mediaQueryUtils';

export const GlitchWrapper = styled.div`
  position: absolute;
  transform: translate(-50%, 50%);
  user-select: none;
  top: 37.5%;
  left: 50%;
  z-index: 1;

  cursor: pointer;
`;

export const Glitch = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 12vmax;

  ${media.minQueries.md`
    font-size: 12rem;
  `}

  color: ${({ theme }) => theme.colors.white5};
  position: relative;
  animation: ${glitch} 2.5s 2.5s infinite;

  &:before {
    content: attr(data-text);
    position: absolute;
    left: -2px;
    text-shadow: -5px 0 magenta;
    background: black;
    overflow: hidden;
    top: 0;
    animation: ${noise1} 1.5s linear infinite alternate-reverse,
      ${glitch} 2.5s 2.55s infinite;
  }

  &:after {
    content: attr(data-text);
    position: absolute;
    left: 2px;
    text-shadow: -5px 0 ${({ theme }) => theme.colors.green3};
    background: black;
    overflow: hidden;
    top: 0;
    animation: ${noise2} 1.5s linear infinite alternate-reverse,
      ${glitch} 2.5s 2.5s infinite;
  }
`;

export const GlowText = styled(Glitch)`
  color: transparent;
  position: absolute;
  top: 0;
  text-shadow: 0 0 1000px ${({ theme }) => theme.colors.white5};
  min-width: 30rem;
`;

export const Subtitle = styled.p`
  font-size: 1.5vmax;

  ${media.minQueries.md`
    font-size: 1.8rem;
  `}

  ${({ theme: { fontWeights, colors } }) => css`
    font-weight: ${fontWeights.extraLight};
    color: ${colors.white5};
    opacity: 0.4;
  `};

  text-transform: uppercase;
  letter-spacing: 0.5rem;
  text-align: center;
  animation: ${glitch2} 5s 5.02s infinite;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

export type HeroTextProps = {
  label: string;
  subTitle?: string;
  onClick?: () => void;
};

const CustomGapFlex = styled(Flex)`
  text-align: center;
  gap: ${({ theme }) => theme.spacings.spacing10};

  ${media.minQueries.md`
    font-size: 1.8rem;
    gap: 6rem;
  `}
`;

const MinWidthDiv = styled(motion.div)`
  min-width: 30rem;
`;

export const HeroText: FC<HeroTextProps> = ({ label, subTitle, onClick }) => {
  return (
    <GlitchWrapper onClick={onClick}>
      <CustomGapFlex column alignItems={'center'} justifyContent={'center'}>
        <MinWidthDiv
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{
            scale: [1, 1.07, 1.03],
            rotate: [0, 1, -1, 0],
            x: [0, -2, 2, -2, 2, 0],
            y: [0, -1, 1, -1, 1, 0],
            transition: {
              duration: 0.5,
              loop: Infinity,
              ease: 'linear',
              repeatDelay: 0.2,
            },
          }}
        >
          <Glitch data-text={label}>{label}</Glitch>
          <GlowText>{label}</GlowText>
        </MinWidthDiv>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {subTitle && <Subtitle>{subTitle}</Subtitle>}
        </motion.div>
      </CustomGapFlex>
    </GlitchWrapper>
  );
};
