import { FC } from 'react';
import { Glitch, GlitchWrapper, GlowText, Subtitle } from './GlitchText.styled';
import { Button, Flex } from '@glitchify/ui';

export const GlitchText: FC<{ label: string; subTitle?: string }> = ({
  label,
  subTitle,
}) => {
  return (
    <GlitchWrapper>
      <Glitch data-text={label}>{label}</Glitch>
      <GlowText>{label}</GlowText>
      <Flex
        column
        alignItems={'center'}
        justifyContent={'center'}
        gap={{ default: 'spacing03' }}
      >
        {subTitle && <Subtitle>{subTitle}</Subtitle>}

        <Button label={'Signin'} />
      </Flex>
    </GlitchWrapper>
  );
};
