import styled, { css } from 'styled-components';
import { Container, ContainerProps } from './Container';
import { ComponentMeta, Story } from '@storybook/react';
import { screens } from '../../theme/screens';

const StyledContainer = styled(Container)`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.sand3};
  `};
`;

const ContainerContent = styled.div`
  ${({ theme: { colors } }) => css`
    padding: 20px;
    height: 100%;
    background-color: ${colors.magenta5};
    outline: 1px dashed ${colors.magenta5};
    text-align: center;
    color: ${colors.green4};
  `};
`;

export default {
  title: 'Layout/Container',
  component: Container,
  argTypes: {
    maxWidth: {
      control: {
        type: 'select',
      },
      options: [...Object.keys(screens)], // undefined makes the Container size fluid
    },
    fullHeight: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof Container>;

const Template: Story<ContainerProps> = (args) => (
  <StyledContainer {...args}>
    <ContainerContent>You find the container content here.</ContainerContent>
  </StyledContainer>
);

export const Default = Template.bind({});
Default.parameters = {
  controls: { include: ['maxWidth', 'fullHeight'] },
};
