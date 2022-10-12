export function Gantt({ tasks, headerHeight: _headerHeight, columnWidth: _columnWidth, listCellWidth: _listCellWidth, rowHeight: _rowHeight, ganttHeight: _ganttHeight, viewMode: _viewMode, preStepsCount: _preStepsCount, locale: _locale, barFill: _barFill, barCornerRadius: _barCornerRadius, barProgressColor: _barProgressColor, barProgressSelectedColor: _barProgressSelectedColor, barBackgroundColor: _barBackgroundColor, barBackgroundSelectedColor: _barBackgroundSelectedColor, projectProgressColor: _projectProgressColor, projectProgressSelectedColor: _projectProgressSelectedColor, projectBackgroundColor: _projectBackgroundColor, projectBackgroundSelectedColor: _projectBackgroundSelectedColor, milestoneBackgroundColor: _milestoneBackgroundColor, milestoneBackgroundSelectedColor: _milestoneBackgroundSelectedColor, rtl: _rtl, handleWidth: _handleWidth, timeStep: _timeStep, arrowColor: _arrowColor, fontFamily: _fontFamily, fontSize: _fontSize, arrowIndent: _arrowIndent, todayColor: _todayColor, viewDate, TooltipContent: _TooltipContent, TaskListHeader: _TaskListHeader, TaskListTable: _TaskListTable, onDateChange, onProgressChange, onDoubleClick, onClick, onDelete, onSelect, onExpanderClick }: {
    tasks: any;
    headerHeight?: number | undefined;
    columnWidth?: number | undefined;
    listCellWidth?: string | undefined;
    rowHeight?: number | undefined;
    ganttHeight?: number | undefined;
    viewMode?: any;
    preStepsCount?: number | undefined;
    locale?: string | undefined;
    barFill?: number | undefined;
    barCornerRadius?: number | undefined;
    barProgressColor?: string | undefined;
    barProgressSelectedColor?: string | undefined;
    barBackgroundColor?: string | undefined;
    barBackgroundSelectedColor?: string | undefined;
    projectProgressColor?: string | undefined;
    projectProgressSelectedColor?: string | undefined;
    projectBackgroundColor?: string | undefined;
    projectBackgroundSelectedColor?: string | undefined;
    milestoneBackgroundColor?: string | undefined;
    milestoneBackgroundSelectedColor?: string | undefined;
    rtl?: boolean | undefined;
    handleWidth?: number | undefined;
    timeStep?: number | undefined;
    arrowColor?: string | undefined;
    fontFamily?: string | undefined;
    fontSize?: string | undefined;
    arrowIndent?: number | undefined;
    todayColor?: string | undefined;
    viewDate: any;
    TooltipContent?: (({ task, fontSize, fontFamily }: {
        task: any;
        fontSize: any;
        fontFamily: any;
    }) => React.DetailedReactHTMLElement<{
        className: string;
        style: {
            fontSize: any;
            fontFamily: any;
        };
    }, HTMLElement>) | undefined;
    TaskListHeader?: (({ headerHeight, fontFamily, fontSize, rowWidth }: {
        headerHeight: any;
        fontFamily: any;
        fontSize: any;
        rowWidth: any;
    }) => React.DetailedReactHTMLElement<{
        className: string;
        style: {
            fontFamily: any;
            fontSize: any;
        };
    }, HTMLElement>) | undefined;
    TaskListTable?: (({ rowHeight, rowWidth, tasks, fontFamily, fontSize, locale, onExpanderClick }: {
        rowHeight: any;
        rowWidth: any;
        tasks: any;
        fontFamily: any;
        fontSize: any;
        locale: any;
        onExpanderClick: any;
    }) => React.DetailedReactHTMLElement<{
        className: string;
        style: {
            fontFamily: any;
            fontSize: any;
        };
    }, HTMLElement>) | undefined;
    onDateChange: any;
    onProgressChange: any;
    onDoubleClick: any;
    onClick: any;
    onDelete: any;
    onSelect: any;
    onExpanderClick: any;
}): React.DetailedReactHTMLElement<React.HTMLAttributes<HTMLElement>, HTMLElement>;
export var ViewMode: any;
import React from "react";
