import { render } from '@testing-library/react';

import UseQuadraticBezierCurve from './use-quadratic-bezier-curve';

describe('UseQuadraticBezierCurve', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseQuadraticBezierCurve />);
    expect(baseElement).toBeTruthy();
  });
});
