import React from 'react';
import { Container, Flex, FlexItem } from '@glitchify/ui';
import { ThemeScreen } from '../../index';

export const StoryCenteredContainer: React.FC<{
  wrapped?: boolean;
  maxWidth?: ThemeScreen;
  children: React.ReactNode;
}> = ({ children, maxWidth }) => {
  return (
    <Container maxWidth={maxWidth} fullHeight>
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        fullHeight
        fullWidth
      >
        <FlexItem filled>{children}</FlexItem>
      </Flex>
    </Container>
  );
};
