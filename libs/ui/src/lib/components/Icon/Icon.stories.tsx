import { Story, Meta } from '@storybook/react';
import { IconProps, Icon, IconsContent, IconName } from './Icon';
import { colors } from '../../theme/colors';
import styled, { css } from 'styled-components';
import { StoryCenteredContainer } from '../../storybookUtils/StoryCenteredContainer';

export default {
  component: Icon,
  title: 'Components/Icon',
  argTypes: {
    color: {
      control: 'select',
      options: Object.keys(colors),
    },
    name: {
      control: 'select',
      options: Object.keys(IconsContent),
    },
    size: {
      control: 'select',
      options: [16, 24, 32, 48, 64],
    },
  },
} as Meta<IconProps>;

const Template: Story<IconProps> = ({ ref, ...rest }) => {
  return (
    <StoryCenteredContainer>
      <Icon {...rest} />
    </StoryCenteredContainer>
  );
};

export const Single = Template.bind({});

Single.args = {
  name: 'puzzle',
  color: 'white3',
};

const iconList = Object.keys(IconsContent) as IconName[];

const Grid = styled.div`
  display: grid;
  grid-gap: 64px;
  grid-template-columns: repeat(6, 1fr);
`;

const Flex = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    > * {
      flex: 0 0 auto;
      min-width: 0;
      width: auto;
      max-width: 100%;
      align-self: center;
    }

    > span {
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      margin-top: 16px;
      color: ${colors.sand7};
    }
  `}
`;

const BlackColorText = styled.div`
  ${({ theme: { colors } }) => css`
    color: ${colors.balck5};
  `}
`;

export const All = () => {
  const renderAll = () =>
    iconList.map((icon, index) => (
      <div key={index}>
        <Flex>
          <BlackColorText>
            <Icon name={icon} size={24} color={'white3'} />
          </BlackColorText>
          <span>{icon}</span>
        </Flex>
      </div>
    ));

  return <Grid>{renderAll()}</Grid>;
};
