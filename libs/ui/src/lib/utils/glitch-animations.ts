import { keyframes } from 'styled-components';

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
