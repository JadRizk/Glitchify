import { Input } from './Input';
import { Meta, Story } from '@storybook/react';
import { StoryCenteredContainer } from '../../storybookUtils/StoryCenteredContainer';

export default {
  title: 'Inputs/Input',
  component: Input,
} as Meta;

const Template: Story = (args) => (
  <StoryCenteredContainer>
    <Input {...args} />
  </StoryCenteredContainer>
);

export const Default = Template.bind({});
Default.args = {
  name: 'default-input',
  placeholder: 'This is an Input',
  disabled: false,
  readOnly: false,
};
