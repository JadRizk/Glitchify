import { FC } from 'react';
import { GlitchWrapper } from './GlitchText.styled';
import { GlitchButton } from '../GlitchButton/GlitchButton';
import styled from 'styled-components';
import { Input } from '../Input/Input';

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  color: red;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const GlitchText: FC<{ label: string; subTitle?: string }> = ({
  label,
  subTitle,
}) => {
  return (
    <GlitchWrapper>
      {/*<Glitch data-text={label}>{label}</Glitch>*/}
      {/*<GlowText>{label}</GlowText>*/}
      <Flex>
        {/*{subTitle && <Subtitle>{subTitle}</Subtitle>}*/}
        <>
          <Input />
          <GlitchButton />
        </>
      </Flex>
    </GlitchWrapper>
  );
};
