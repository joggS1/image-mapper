export class TouchHandler {
  touchStartPoint?: { x: number; y: number };
  touchEndPoint?: { x: number; y: number };
  lastClickTime = 0;
  lastClickPoint?: { x: number; y: number };
  DC_trashHold = 10;

  constructor() {}

  public onTouchStart(x: number, y: number) {
    this.touchStartPoint = { x, y };
  }

  public onTouchEnd(x: number, y: number) {
    this.lastClickTime = Date.now();
    this.touchEndPoint = { x, y };
  }
  public isClicked(trashHold: number = 0) {
    if (trashHold && this.touchStartPoint && this.touchEndPoint) {
      return (
        Math.abs(this.touchStartPoint?.x - this.touchEndPoint?.x) <= trashHold &&
        Math.abs(this.touchStartPoint?.y - this.touchEndPoint?.y) <= trashHold
      );
    }
    return (
      this.touchStartPoint?.x === this.touchEndPoint?.x &&
      this.touchStartPoint?.y === this.touchEndPoint?.y
    );
  }
  public isDoubleClicked() {
    return this.isClicked(this.DC_trashHold) && Date.now() - this.lastClickTime < 300;
  }
}
