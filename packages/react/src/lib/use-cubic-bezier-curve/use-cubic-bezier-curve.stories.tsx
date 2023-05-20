import type { Meta } from '@storybook/react';
import { UseCubicBezierCurve } from './use-cubic-bezier-curve';

const Story: Meta<typeof UseCubicBezierCurve> = {
  component: UseCubicBezierCurve,
  title: 'UseCubicBezierCurve',
  tags: ['autodocs'],
  argTypes: {
    distanceFromCorner: { control: {
      type: 'range',
      min: 0,
      max: 0.5,
      step: 0.01,
    } },
    controlPointDistance: { control: {
      type: 'range',
      min: 0,
      max: 1,
      step: 0.01,
    } },
  },
};
export default Story;

export const Squircle = {
  args: {
    distanceFromCorner: 0.5,
    controlPointDistance: 1,
    children: (
    <div style={{
      width: '200px',
      height: '200px',
      backgroundColor: 'tomato',}} />),
    shadow: '0 0 3em rgba(0, 0, 0, 0.5)',
  },
};
