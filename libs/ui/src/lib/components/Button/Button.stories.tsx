import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';
import { StoryCenteredContainer } from '../../storybookUtils/StoryCenteredContainer';

const Story: ComponentMeta<typeof Button> = {
  component: Button,
  title: 'Button',
};
export default Story;

const Template: ComponentStory<typeof Button> = (args) => (
  <StoryCenteredContainer>
    <Button {...args} />
  </StoryCenteredContainer>
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};
