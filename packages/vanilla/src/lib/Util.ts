import toPx from "to-px";

export function polarToCartesian(angleInRadians: number, radius: number): [number, number] {
    const x = radius * Math.cos(angleInRadians);
    const y = radius * Math.sin(angleInRadians);
    return [x, y];
}

export function getDistanceFromCorner(distanceFromCorner: string|number, element: HTMLElement): number | null {
    if (typeof distanceFromCorner === 'string') {
        return toPx(distanceFromCorner, element);
    }

    if (!(distanceFromCorner >= 0 && distanceFromCorner <= 1)) {
        return null;
    }

    const width = element.offsetWidth;
    const height = element.offsetHeight;
    const min = Math.min(width, height);
    return min * distanceFromCorner;
}
