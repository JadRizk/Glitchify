import { TypeH1 } from './Typography';
import { render } from '../../../test-utils';

describe('Typography', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TypeH1 />);
    expect(baseElement).toBeTruthy();
  });
});
