import { ButtonHTMLAttributes, forwardRef, memo, ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { glitch, noise1, noise2 } from '../../utils/glitch-animations';

const StyledButton = styled.button<StyledBaseProps>`
  all: unset;
  cursor: pointer;
  position: relative;
  color: lightgreen;
  font-size: 24px;
  letter-spacing: 0.02em;
  text-decoration: none;
  padding: 0 1rem;
  border: 2px solid lightgreen;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  ${({ disabled, isLoading }) => css`
    ${disabled &&
    `
        opacity: 0.6;
        cursor: default;
        pointer-events: none;
      `};

    ${isLoading &&
    `
        opacity: 0.6;
        cursor: default;
        pointer-events: none;
      `}
  `}
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
    border: 2px solid magenta;
    left: 2px;
    text-shadow: -5px 0 magenta;
    background: black;
    overflow: hidden;
    top: 0;
    padding: 0 1rem;
    visibility: hidden;
  }

  &:hover {
    &:before {
      visibility: visible;
      animation: ${noise2} 0s linear 0.03s infinite alternate-reverse,
        ${glitch} 0s infinite;
    }

    &:after {
      visibility: visible;
      animation: ${noise1} 0s linear 0s infinite alternate-reverse,
        ${glitch} 0s infinite;
    }
  }
`;

type StyledBaseProps = {
  label: string;
  disabled?: boolean;
  isLoading?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & StyledBaseProps;

const ButtonComp = (props: ButtonProps) => {
  const { label, iconLeft, iconRight } = props;

  return (
    <StyledButton data-label={label} {...props}>
      {iconLeft && iconLeft}
      {label}
      {iconRight && iconRight}
    </StyledButton>
  );
};

const ForwardRef = forwardRef(ButtonComp);
export const Button = memo(ForwardRef);
