import type { Meta } from '@storybook/react';
import { UseQuadraticBezierCurve } from './use-quadratic-bezier-curve';

const Story: Meta<typeof UseQuadraticBezierCurve> = {
  component: UseQuadraticBezierCurve,
  title: 'UseQuadraticBezierCurve',
  tags: ['autodocs'],
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
    } },
    children: {
      options: ['div', 'img'],
      mapping: {
        div: <div style={{
          width: '200px',
          height: '200px',
          backgroundColor: 'tomato',}} />,
        img: <img src="https://placehold.co/200" alt="placeholder" />,
      },
      control: {
        type: 'select',
      } },
  },
};
export default Story;

export const Squircle = {
  args: {
    distanceFromCorner: 0.5,
    controlPointRadians: Math.PI / 4,
    controlPointRadius: Math.SQRT2,
    children: 'div',
    shadow: '0 0 3em rgba(0, 0, 0, 0.5)',
  },
};

export const Stamp = {
  args: {
    distanceFromCorner: 0.1,
    controlPointRadians: Math.PI / 4,
    controlPointRadius: 0,
    children: 'div',
    shadow: '0 0 3em rgba(0, 0, 0, 0.5)',
  },
};