import styled, { css } from 'styled-components';
import { ThemeColor } from '../../theme';
import { Flex, FlexItem } from './Flex';
import { StoryCenteredContainer } from '../../storybookUtils/StoryCenteredContainer';
import { TypeH4 } from '../Typography/Typography';
import { ComponentMeta } from '@storybook/react';

const Item = styled(FlexItem)<{
  color?: ThemeColor;
  width?: number;
  height?: number;
}>`
  ${({ theme: { colors, spacings }, color, width, height }) => css`
    background: ${color ? colors[color] : colors.green4};
    padding: ${spacings.spacing09};
    text-align: center;
    border: 1px solid ${colors.white3};
    width: ${width ? `${width}px` : 'auto'};
    height: ${height ? `${height}px` : 'auto'};
  `};
`;

export const FlexRowLayout = () => (
  <Flex alignItems={'center'}>
    <Item />
    <Item />
    <Item filled />
    <Item />
    <Item />
  </Flex>
);

export const FlexColumnLayout = () => (
  <Flex column alignItems={'center'}>
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
  </Flex>
);

export const FlexWithFilledItem = () => (
  <Flex alignItems={'center'}>
    <Item />
    <Item filled />
  </Flex>
);

export const FlexNestedLayout = () => (
  <Flex alignItems={'center'}>
    <Item />
    <Item filled>
      <Flex alignItems={'center'}>
        <Item color={'green1'} />
        <Item filled color={'green1'} />
      </Flex>
    </Item>
  </Flex>
);

export const FlexSpacings = () => (
  <Flex alignItems={'center'} gap={{ default: 'spacing10' }} column>
    <Item width={400}>
      <TypeH4 color={'black5'}>Responsive</TypeH4>
      <Flex
        alignItems={'center'}
        gap={{
          default: 'spacing05',
          md: 'spacing03 spacing00',
          lg: 'spacing05 spacing08',
        }}
      >
        <Item filled color={'green1'} />
        <Item filled color={'green1'} />
        <Item filled color={'green1'} />
        <Item filled color={'green1'} />
        <Item filled color={'green1'} />
      </Flex>
    </Item>
    <Item width={400}>
      <TypeH4 color={'black5'}>
        Same spacings for X & Y + same on all Screens
      </TypeH4>
      <Flex alignItems={'center'} gap={{ default: 'spacing04' }}>
        <Item filled color={'green1'} />
        <Item filled color={'green1'} />
        <Item filled color={'green1'} />
        <Item filled color={'green1'} />
      </Flex>
    </Item>
    <Item width={400}>
      <TypeH4 color={'black5'}>
        Different spacings for X and Y but same on all screens
      </TypeH4>
      <Flex alignItems={'center'} gap={{ default: 'spacing10 spacing04' }}>
        <Item filled color={'green1'} />
        <Item filled color={'green1'} />
        <Item filled color={'green1'} />
        <Item filled color={'green1'} />
        <Item filled color={'green1'} />
      </Flex>
    </Item>
  </Flex>
);

FlexRowLayout.story = {
  name: 'Row layout',
};

FlexColumnLayout.story = {
  name: 'Column layout',
};

FlexWithFilledItem.story = {
  name: 'With filled item',
};

FlexNestedLayout.story = {
  name: 'With nested item',
};
FlexSpacings.story = {
  name: 'Spacings',
};
FlexSpacings.parameters = {
  controls: { hideNoControlsWarning: true },
};

export default {
  title: 'Layout/Flex',
  component: Flex,
  decorators: [
    (Story) => (
      <StoryCenteredContainer>
        <Story />
      </StoryCenteredContainer>
    ),
  ],
} as ComponentMeta<typeof Flex>;
