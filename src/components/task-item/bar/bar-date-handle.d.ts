import React from "react";
import '../../../style.css';
declare type BarDateHandleProps = {
    x: number;
    y: number;
    width: number;
    height: number;
    barCornerRadius: number;
    onMouseDown: (event: React.MouseEvent<SVGRectElement, MouseEvent>) => void;
};
export declare const BarDateHandle: React.FC<BarDateHandleProps>;
export {};
