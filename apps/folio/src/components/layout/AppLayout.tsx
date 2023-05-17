import styled, { css } from 'styled-components';
import React, { ReactElement } from 'react';
import { Container, ThemeScreen } from '@glitchify/ui';

const StyledAppLayout = styled.div`
  ${({ theme: { spacings } }) => css`
    display: flex;
    height: 100vh;
    flex-direction: column;
    padding: ${spacings.spacing10} 0;
    gap: ${spacings.spacing10};

    > main {
      flex: 1;
      padding-bottom: ${spacings.spacing10};
    }
  `}
`;

export class AppLayout extends React.Component<{
  children: React.ReactNode;
  maxWidth?: ThemeScreen;
}> {
  static defaultProps = { maxWidth: 'xxl' };

  render() {
    let { children, maxWidth } = this.props;
    return (
      <StyledAppLayout>
        <Container maxWidth={maxWidth} as={'header'}>
          NavBar
        </Container>

        <Container maxWidth={maxWidth} as={'main'}>
          {children}
        </Container>

        <Container maxWidth={maxWidth} as={'footer'}>
          Footer
        </Container>
      </StyledAppLayout>
    );
  }
}

export function getMainPageLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
}
