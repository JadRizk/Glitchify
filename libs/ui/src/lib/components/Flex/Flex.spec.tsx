import { Flex, FlexItem } from './Flex';
import { render, screen } from '../../../test-utils';
import { theme } from '../../theme';

describe('Flex', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Flex />);
    expect(baseElement).toBeTruthy();
  });

  it('should render with proper paddings', () => {
    const componentTestId = 'test-flex-id';
    const spacing = 'spacing01';
    render(
      <Flex gap={{ default: spacing }} data-testid={componentTestId}>
        <FlexItem />
        <FlexItem />
      </Flex>
    );

    expect(getComputedStyle(screen.getByTestId(componentTestId)).gap).toBe(
      theme.spacings[spacing]
    );
  });
});
