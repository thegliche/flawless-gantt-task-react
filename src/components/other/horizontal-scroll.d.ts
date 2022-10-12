import React, { SyntheticEvent } from "react";
import '../../style.css';
export declare const HorizontalScroll: React.FC<{
    scroll: number;
    svgWidth: number;
    taskListWidth: number;
    rtl: boolean;
    onScroll: (event: SyntheticEvent<HTMLDivElement>) => void;
}>;
