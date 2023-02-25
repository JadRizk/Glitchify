import { Container } from './Container';
import { render } from '../../../test-utils';

describe('Container', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Container />);

    expect(baseElement).toBeTruthy();
  });
});
