import React from "react";
import '../../../style.css';
declare type BarProgressHandleProps = {
    progressPoint: string;
    onMouseDown: (event: React.MouseEvent<SVGPolygonElement, MouseEvent>) => void;
};
export declare const BarProgressHandle: React.FC<BarProgressHandleProps>;
export {};
