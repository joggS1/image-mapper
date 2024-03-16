export declare class TouchHandler {
    touchStartPoint?: {
        x: number;
        y: number;
    };
    touchEndPoint?: {
        x: number;
        y: number;
    };
    lastClickTime: number;
    lastClickPoint?: {
        x: number;
        y: number;
    };
    DC_trashHold: number;
    constructor();
    onTouchStart(x: number, y: number): void;
    onTouchEnd(x: number, y: number): void;
    isClicked(trashHold?: number): boolean;
    isDoubleClicked(): boolean;
}
