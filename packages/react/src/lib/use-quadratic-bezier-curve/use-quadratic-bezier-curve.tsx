import React, { useEffect, useRef } from "react";
import * as vanilla from "@superround/vanilla";
import ShadowWrapper from "../shadow-wrapper/shadow-wrapper";

/* eslint-disable-next-line */
export interface UseQuadraticBezierCurveProps {
  distanceFromCorner: string|number;
  controlPointRadians?: number;
  controlPointRadius?: string|number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
  shadow?: string; // CSS filter drop-shadow
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
  }, [props.distanceFromCorner, props.controlPointRadians, props.controlPointRadius]);

  const element = (
    <div ref={ref} style={{...props.style}} className={props.className}>
      {props.children}
    </div>
  );

  if (props.shadow) {
    return (
      <ShadowWrapper>
        {element}
      </ShadowWrapper>
    )
  }

  return element;
}

export default UseQuadraticBezierCurve;
