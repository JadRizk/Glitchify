import {
  BodyText,
  SmallBodyText,
  TypeH1,
  TypeH2,
  TypeH3,
  TypeH4,
  TypeProps,
} from './Typography';
import { Story } from '@storybook/react';
import { StoryCenteredContainer } from '../../storybookUtils/StoryCenteredContainer';
import { colors } from '../../theme/colors';

export default {
  title: 'Typography',
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: Object.keys(colors),
    },
  },
};

export const Headings: Story<TypeProps> = (props) => (
  <StoryCenteredContainer>
    <TypeH1 {...props}>This is not an H1</TypeH1>
    <TypeH2 {...props}>This is not an H2</TypeH2>
    <TypeH3 {...props}>This is not an H3</TypeH3>
    <TypeH4 {...props}>This is not an H4</TypeH4>
    <BodyText {...props}>This is not a body text</BodyText>
    <SmallBodyText {...props}>This is not a small body text</SmallBodyText>
  </StoryCenteredContainer>
);

Headings.args = {
  color: 'magenta5',
};
