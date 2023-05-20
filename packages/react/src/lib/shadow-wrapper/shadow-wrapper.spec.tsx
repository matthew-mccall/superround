import { render } from '@testing-library/react';

import ShadowWrapper from './shadow-wrapper';

describe('ShadowWrapper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShadowWrapper />);
    expect(baseElement).toBeTruthy();
  });
});
