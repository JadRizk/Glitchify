import styled, { keyframes } from 'styled-components';

export const glitch = keyframes`
  1% {
    transform: rotateX(10deg) skewX(90deg);
  }
  2% {
    transform: rotateX(0deg) skewX(0deg);
  }
`;

export const glitch2 = keyframes`
  1% {
    transform: rotateX(10deg) skewX(70deg);
  }
  2% {
    transform: rotateX(0deg) skewX(0deg);
  }
`;

export const noise1 = keyframes`
${Array.from({ length: 30 }, (_, i) => {
  const percentage = `${(i + 1) * (1 / 30) * 100}%`;
  const top = Math.floor(Math.random() * 100);
  const bottom = Math.floor(Math.random() * (101 - top));
  return `
      ${percentage} {
        clip-path: inset(${top}px 0 ${bottom}px 0);
      }
    `;
}).join('')}
`;

export const noise2 = keyframes`
${Array.from({ length: 31 }, (_, i) => {
  const percentage = `${i * (1 / 30) * 100}%`;
  const top = Math.floor(Math.random() * 100);
  const bottom = Math.floor(Math.random() * (101 - top));
  return `
      ${percentage} {
        clip-path: inset(${top}px 0 ${bottom}px 0);
      }
    `;
}).join('')}
`;

export const GlitchWrapper = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 40%;
  left: 50%;
  z-index: 10;
`;

export const Glitch = styled.div`
  color: rgb(223, 191, 191);
  position: relative;
  font-size: 9vw;
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
    text-shadow: -5px 0 lightgreen;
    background: black;
    overflow: hidden;
    top: 0;
    animation: ${noise2} 3s linear infinite alternate-reverse,
      ${glitch} 5s 5s infinite;
  }
`;

export const GlowText = styled(Glitch)`
  text-shadow: 0 0 1000px rgb(223, 191, 191);
  color: transparent;
  position: absolute;
  top: 0;
`;

export const Subtitle = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 100;
  font-size: 0.8vw;
  color: rgba(165, 141, 141, 0.4);
  text-transform: uppercase;
  letter-spacing: 1em;
  text-align: center;
  //position: absolute;
  //left: 17%;
  animation: ${glitch2} 5s 5.02s infinite;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;
