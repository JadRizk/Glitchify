import { FC } from 'react';
import styled, { keyframes } from 'styled-components';

const StyledInputComponent = styled.div`
  position: relative;
`;

const lineglitch = keyframes`
  0% {
    transform: translate(-1px, 1px);
  }
  25% {
    transform: translate(-1px, -1px);
  }
  50% {
    transform: translate(1px, 1px);
  }
  75% {
    transform: translate(1px, -1px);
  }
  100% {
    transform: translate(-1px, 1px);
  }`;

const StyledInput = styled.input`
  transition-property: color, background-color, box-shadow;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  position: relative;

  color: rgba(165, 141, 141, 0.8);
  background: #2c394b;
  border: 2px solid lightgreen;

  appearance: none;
  font-weight: 400;
  border-radius: 0.2rem;
  padding: 0 0.8rem;
  font-size: 1.2rem;
  line-height: 2rem;
  width: 100%;

  &:focus {
    color: #e0dfe1;
    background: #1f1e20;
    border: 2px solid magenta;
    outline: none;
  }

  &:read-only {
    pointer-events: none;
  }

  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }

  ::placeholder {
    color: #99969c;
    font-weight: 400;
  }

  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  &[type='button'] {
    text-align: start;

    &:not(:disabled) {
      pointer-events: auto;
      cursor: pointer;
    }
  }
`;

export const Input: FC = () => {
  return (
    <StyledInputComponent>
      <StyledInput placeholder={'email please...'} />
    </StyledInputComponent>
  );
};
