import type { Meta } from '@storybook/react';
import { UseQuadraticBezierCurve } from './use-quadratic-bezier-curve';

const Story: Meta<typeof UseQuadraticBezierCurve> = {
  component: UseQuadraticBezierCurve,
  title: 'UseQuadraticBezierCurve',
  argTypes: {
    distanceFromCorner: { control: {
      type: 'range',
      min: 0,
      max: 0.5,
      step: 0.01,
    } },
    controlPointRadians: { control: {
      type: 'range',
      min: 0,
      max: (Math.PI / 2).toFixed(2),
      step: 0.01,
    } },
    controlPointRadius: { control: {
      type: 'range',
      min: -(Math.SQRT2).toFixed(2),
      max: (Math.SQRT2).toFixed(2),
      step: 0.01,
    } }
  },
};
export default Story;

export const Squircle = {
  args: {
    distanceFromCorner: 0.5,
    controlPointRadians: Math.PI / 4,
    controlPointRadius: Math.SQRT2,
    style: {width: '200px', height: '200px', backgroundColor: 'tomato', margin: 'auto'},
    shadow: '-1px 6px 3px rgba(50, 50, 0, 0.5)'
  },
};

export const Stamp = {
  args: {
    distanceFromCorner: 0.1,
    controlPointRadians: Math.PI / 4,
    controlPointRadius: 0,
    style: {width: '200px', height: '200px', backgroundColor: 'cornflowerblue', margin: 'auto'},
  },
};