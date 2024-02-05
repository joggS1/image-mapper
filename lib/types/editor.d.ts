export interface EditorOptions {
    width?: number;
    height?: number;
    /** applies to Editor only */
    componentDrawnHandler?: (component: SVGElement, componentId: string) => void;
    /** applies to Editor only  */
    selectModeHandler?: () => void;
    viewClickHandler?: (component: SVGElement, componentId: string) => void;
}
export type FigureOptions = {
    x: number;
    y: number;
    width: number;
    height: number;
} & Record<string, string | number>;
export type PolygonOptions = {
    points: number[];
} & Record<string, string | number>;
