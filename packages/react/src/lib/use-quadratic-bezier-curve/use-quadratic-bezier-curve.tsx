import React, { useEffect, useRef } from "react";
import * as vanilla from "@superround/vanilla";

/* eslint-disable-next-line */
export interface UseQuadraticBezierCurveProps {
  children?: React.ReactNode;
  distanceFromCorner: string|number;
  controlPointRadians: number;
  controlPointRadius: string|number;
  style?: React.CSSProperties;
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
}

/**
 * The `UseQuadraticBezierCurve` component is a React wrapper of the `UseQuadraticBezierCurve` function.
 * 
 * @param props
 * @returns 
 */
export function UseQuadraticBezierCurve(props: UseQuadraticBezierCurveProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !ref.current) return; // SSR

    vanilla.UseQuadraticBezierCurve(ref.current, props.distanceFromCorner, props.controlPointRadians, props.controlPointRadius);
  }, [ref, props.distanceFromCorner, props.controlPointRadians, props.controlPointRadius]);

  return (
    <div ref={ref} style={props.style} className={props.className}>
      {props.children}
    </div>
  );
}

export default UseQuadraticBezierCurve;
