export function Handle(x: any, y: any, moveHandler: any, frozen: any): void;
export class Handle {
    constructor(x: any, y: any, moveHandler: any, frozen: any);
    moveHandler: any;
    element: SVGCircleElement;
    isFrozen: boolean;
    freeze(freeze: any): this;
    setAttrX(value: any): this;
    setAttrY(value: any): this;
    move(deltaX: any, deltaY: any): this;
    setVisible(visible: any): this;
    setStyle(style: any, hoverStyle: any): this;
}
