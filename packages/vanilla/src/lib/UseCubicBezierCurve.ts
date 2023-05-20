import {getDistanceFromCorner} from "./Util";
import toPx from "to-px";

/**
 * UseCubicBezierCurve applies rounded corners to a DOM element using a cubic bezier curve.
 *
 * @param element The DOM element to apply the rounded corners to.
 * @param distanceFromCorner The distance from the corner to apply the rounded corner to. This can be a number (a percentage) between 0 and 1, or a string representing a CSS length.
 * @param controlPointDistance The distance of the control point from the curve ends to the corner. This can be a number (a percentage) between 0 and 1, or a string representing a CSS length.
 * @returns The path to applied to the element's `clip-path` property.
 */
export function UseCubicBezierCurve(
  element: HTMLElement,
  distanceFromCorner: string | number,
  controlPointDistance: string | number,
): string | null {
  const distance = getDistanceFromCorner(distanceFromCorner, element);
  if (distance === null) {
    return null;
  }

  if (typeof controlPointDistance === 'string') {
    const controlPointDistancePx = toPx(controlPointDistance, element);
    if (controlPointDistancePx === null) {
      return null;
    }

    controlPointDistance = controlPointDistancePx;
  } else {
    controlPointDistance *= distance;
  }

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
    C ${width} ${hLesser - controlPointDistance} ${wGreater + controlPointDistance} 0 ${wGreater} 0 \\
    H ${wLesser} \\
    C ${wLesser - controlPointDistance} 0 0 ${hLesser - controlPointDistance} 0 ${hLesser} \\
    V ${hGreater} \\
    C 0 ${hGreater + controlPointDistance} ${wLesser - controlPointDistance} ${height} ${wLesser} ${height} \\
    H ${wGreater} \\
    C ${wGreater + controlPointDistance} ${height} ${width} ${hGreater + controlPointDistance} ${width} ${hGreater} \\
    Z")`

  element.style.clipPath = path;

  return path;
}