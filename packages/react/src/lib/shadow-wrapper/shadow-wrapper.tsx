/* eslint-disable-next-line */
export interface ShadowWrapperProps {
  children?: React.ReactNode;
  shadow?: string; // CSS filter drop-shadow
}

export function ShadowWrapper(props: ShadowWrapperProps) {
  return (
    <div style={{filter: `drop-shadow(${props.shadow})`}}>
      {props.children}
    </div>
  );
}

export default ShadowWrapper;
