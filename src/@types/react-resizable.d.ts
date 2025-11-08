declare module "react-resizable" {
  import * as React from "react";

  export interface ResizableBoxProps {
    width: number;
    height: number;
    minConstraints?: [number, number];
    maxConstraints?: [number, number];
    onResizeStop?: (
      e: React.SyntheticEvent,
      data: { size: { width: number; height: number } }
    ) => void;
    handle?: React.ReactNode;
    children?: React.ReactNode;
  }

  export class ResizableBox extends React.Component<ResizableBoxProps> {}
}
