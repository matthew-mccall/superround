/* eslint-disable-next-line */
import React, { useEffect, useRef } from "react";
import * as vanilla from "@superround/vanilla";
import ShadowWrapper from "../shadow-wrapper/shadow-wrapper";

export interface UseCubicBezierCurveProps {
  distanceFromCorner: string|number;
  controlPointDistance?: string|number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
  shadow?: string; // CSS filter drop-shadow
}

/**
 * The `UseCubicBezierCurve` component is a React wrapper of the `UseCubicBezierCurve` function.
 * 
 * @param props
 * @returns 
 */
export function UseCubicBezierCurve(props: UseCubicBezierCurveProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !ref.current) return; // SSR

    vanilla.UseCubicBezierCurve(ref.current, props.distanceFromCorner, props.controlPointDistance);
  }, [props.distanceFromCorner, props.controlPointDistance]);

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

export default UseCubicBezierCurve;
