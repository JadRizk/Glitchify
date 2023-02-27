import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoryCenteredContainer } from '../../storybookUtils/StoryCenteredContainer';
import { HeroText } from './HeroText';

const Story: ComponentMeta<typeof HeroText> = {
  component: HeroText,
  title: 'Components/HeroText',
};
export default Story;

const Template: ComponentStory<typeof HeroText> = (args) => (
  <StoryCenteredContainer>
    <HeroText {...args} />
  </StoryCenteredContainer>
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Gl!tch#f%',
  subTitle: 'Subtitle...',
};
