import toPx from 'to-px';
import {getDistanceFromCorner, polarToCartesian} from "./Util";

/**
 * UseQuadraticBezierCurve applies rounded corners to a DOM element using a quadratic bezier curve.
 * 
 * The control point of the corner is given in polar coordinates, with the angle in radians and the radius as a percentage of the distance from the corner for that angle.
 * This means that the same control point radius will result in different control point distances for different angles. The angle is measured relative to the x-axis at distanceFromCorner from the corner.
 * 
 * @param element The DOM element to apply the rounded corners to.
 * @param distanceFromCorner The distance from the corner to apply the rounded corner to. This can be a number (a percentage) between 0 and 1, or a string representing a CSS length.
 * @param controlPointRadians The angle of the control point in radians.
 * @param controlPointRadius The radius of the control point.
 * @returns The path to applied to the element's `clip-path` property.
 */
export function UseQuadraticBezierCurve(
  element: HTMLElement, 
  distanceFromCorner: string|number, 
  controlPointRadians = (Math.PI / 4), 
  controlPointRadius: string|number = Math.SQRT2): string | null {
  const distance = getDistanceFromCorner(distanceFromCorner, element);
  if (distance === null) {
    return null;
  }

  if (typeof controlPointRadius === 'string') {
    const controlPointRadiusPx = toPx(controlPointRadius, element);
    if (controlPointRadiusPx === null) {
      return null;
    }

    controlPointRadius = controlPointRadiusPx;
  } else {
    controlPointRadius *= distance;
  }

  const [xOffset, yOffset] = polarToCartesian(controlPointRadians, controlPointRadius);

  const width = element.offsetWidth;
  const height = element.offsetHeight;

  /**
   * The following diagram shows the axes used to create the path.
   * 
   *  wLesser
   *     |________|
   * ___/|________|\___ hLesser
   *   [ |        | ]
   *   [ |        | ]
   * __[_|________|_]__ hGreater
   *    \|________|/
   *     |        |
   *           wGreater
   */

  const wLesser = distance;
  const wGreater = width - distance;
  const hLesser = distance;
  const hGreater = height - distance;

  const path = `path("\\
  M ${width} ${distance} \\
  Q ${wGreater + xOffset} ${hLesser - yOffset} ${wGreater} 0 \\
  H ${wLesser} \\
  Q ${wLesser - xOffset} ${hLesser - yOffset} 0 ${hLesser} \\
  V ${hGreater} \\
  Q ${wLesser - xOffset} ${hGreater + yOffset} ${wLesser} ${height} \\
  H ${wGreater} \\
  Q ${wGreater + xOffset} ${hGreater + yOffset} ${width} ${hGreater} \\
  Z")`

  element.style.clipPath = path;

  return path;
}