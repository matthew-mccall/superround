import { render } from '@testing-library/react';

import UseQuadraticBezierCurve from './use-quadratic-bezier-curve';

describe('UseQuadraticBezierCurve', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseQuadraticBezierCurve distanceFromCorner={0.5} />);
    expect(baseElement).toBeTruthy();
  });
});
