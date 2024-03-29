import styled, { keyframes } from 'styled-components';

const fudge = keyframes`
  from {
    transform: translate(0px, 0px);
  }
  to {
    transform: translate(0px, 2%);
  }
`;

export const ScanLines = styled.div`
  overflow: hidden;
  mix-blend-mode: difference;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 98%;
    top: 0;
    left: 0;
    z-index: 0;

    background: repeating-linear-gradient(
      to bottom,
      transparent 0%,
      rgba(255, 255, 255, 0.05) 0.5%,
      transparent 1%
    );

    animation: ${fudge} 7s ease-in-out alternate infinite;
  }
`;
