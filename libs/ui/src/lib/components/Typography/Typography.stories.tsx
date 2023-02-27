import {
  BodyText,
  ExtraSmallBodyText,
  SmallBodyText,
  TypeH1,
  TypeH2,
  TypeH3,
  TypeH4,
  TypeH5,
  TypeH6,
  TypeProps,
} from './Typography';
import { Story } from '@storybook/react';
import { StoryCenteredContainer } from '../../storybookUtils/StoryCenteredContainer';

export default {
  title: 'Components/Typography',
};

export const Headings: Story<TypeProps & { label: string }> = ({
  label,
  ...rest
}) => (
  <StoryCenteredContainer>
    <TypeH1 {...rest} data-label={label}>
      {label}
    </TypeH1>
    <TypeH2 {...rest} data-label={label}>
      {label}
    </TypeH2>
    <TypeH3 {...rest} data-label={label}>
      {label}
    </TypeH3>
    <TypeH4 {...rest} data-label={label}>
      {label}
    </TypeH4>
    <TypeH5 {...rest} data-label={label}>
      {label}
    </TypeH5>
    <TypeH6 {...rest} data-label={label}>
      {label}
    </TypeH6>

    <BodyText {...rest} data-label={label}>
      {label}
    </BodyText>
    <SmallBodyText {...rest} data-label={label}>
      {label}
    </SmallBodyText>
    <ExtraSmallBodyText {...rest} data-label={label}>
      {label}
    </ExtraSmallBodyText>
  </StoryCenteredContainer>
);

Headings.args = {
  label: 'This is not a heading.',
};
