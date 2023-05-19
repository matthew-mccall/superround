import type { Meta } from '@storybook/react';
import { UseQuadraticBezierCurve } from './use-quadratic-bezier-curve';

const Story: Meta<typeof UseQuadraticBezierCurve> = {
  component: UseQuadraticBezierCurve,
  title: 'UseQuadraticBezierCurve',
};
export default Story;

export const Primary = {
  args: {
    controlPointRadians: 0,
  },
};
