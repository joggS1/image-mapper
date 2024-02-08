type MoveHandler = (deltaX: number, deltaY: number) => void;
export declare class Handle {
    x: number;
    y: number;
    moveHandler: MoveHandler;
    isFrozen: boolean;
    element: SVGCircleElement;
    constructor(x: number, y: number, moveHandler: MoveHandler, frozen: boolean);
    freeze(freeze: boolean): this;
    setAttrX(value: number): this;
    delete(): void;
    setAttrY(value: number): this;
    move(deltaX: number, deltaY: number): this;
    setVisible(visible: boolean): this;
    setStyle(style: any, hoverStyle: any): this;
}
export {};
