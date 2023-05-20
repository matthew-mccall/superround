import { render } from '@testing-library/react';

import UseCubicBezierCurve from './use-cubic-bezier-curve';

describe('UseCubicBezierCurve', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseCubicBezierCurve distanceFromCorner={0.5} />);
    expect(baseElement).toBeTruthy();
  });
});
