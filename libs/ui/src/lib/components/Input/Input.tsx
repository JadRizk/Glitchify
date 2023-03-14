import { FC } from 'react';

import styled, { css, keyframes } from 'styled-components';

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 2px;
  padding: 1.4rem 2rem 1.6rem;
  //background: rgba(57, 63, 84, 0.8);

  ${({ theme: { colors } }) => css`
    background: #393f54;
  `}
}

&:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  height: 2px;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  background: linear-gradient(to right,
  #b294ff,
  #57e6e6,
  #feffb8,
  #57e6e6,
  #b294ff,
  #57e6e6);
    // ${({ theme: { colors } }) => css`
      //   background: linear-gradient(
      //     to right,
      //     ${colors.magenta5},
      //     ${colors.green5},
      //     ${colors.magenta5},
      //     ${colors.green5}
      //   );
      //
    `}
  background-size: 500% auto;
  animation: ${keyframes`
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 0% 0;
    }
  `} 5s linear infinite;
}
`;

const StyledInput = styled.input`
  flex-grow: 1;
  color: #bfd2ff;
  font-size: 1.8rem;
  line-height: 2.4rem;
  vertical-align: middle;
  border-style: none;
  background: transparent;
  outline: none;

  &::-webkit-input-placeholder {
    color: #7881a1;
  }
`;

const Button = styled.button`
  color: #7881a1;
  font-size: 2.4rem;
  line-height: 2.4rem;
  vertical-align: middle;
  padding: 0;
  background: none;
  border: none;
  outline: none;
  transition: color 0.25s;

  &:hover {
    color: #bfd2ff;
  }
`;

export const Input: FC = () => {
  return (
    <InputWrapper>
      <StyledInput type="email" placeholder="What's your email?" />
      <Button type="submit">
        <i className="icon ion-android-arrow-forward" />
      </Button>
    </InputWrapper>
  );
};
