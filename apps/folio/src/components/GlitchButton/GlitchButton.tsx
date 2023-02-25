import { FC } from 'react';
import styled from 'styled-components';
import { glitch, noise1, noise2 } from '../GlitchText/GlitchText.styled';

const StyledButton = styled.button`
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

  &:before {
    content: attr(data-text);
    position: absolute;
    left: -2px;
    text-shadow: -5px 0 lightgreen;
    background: black;
    overflow: hidden;
    top: 0;
    animation: ${noise2} 3s linear infinite alternate-reverse,
      ${glitch} 2s 2.05s infinite;
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
    animation: ${noise1} 3s linear infinite alternate-reverse,
      ${glitch} 2s 2s infinite;
  }
`;

export const GlitchButton: FC = () => {
  return (
    <StyledButton data-label={'Signin'} onClick={() => console.log('clicked')}>
      Signin
    </StyledButton>
  );
};
