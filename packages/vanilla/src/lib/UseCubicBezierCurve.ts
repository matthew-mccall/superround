import {getDistanceFromCorner} from "./Util";
import toPx from "to-px";

export function UseCubicBezierCurve(
    element: HTMLElement,
    distanceFromCorner: string | number,
    controlPointDistance: string | number,
) : string | null {
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