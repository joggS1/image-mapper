import { MobileCircle } from './MobileCircle';
import { MobileEllipse } from './MobileEllipse';
import { MobilePolygon } from './MobilePolygon';
import { MobileRectangle } from './MobileRectangle';

export type MobileComponent = MobileCircle | MobileRectangle | MobileEllipse | MobilePolygon;

export type MobileViewerOptions = Partial<{
  width: number;
  height: number;
  scale: number;
  wrapperComponent?: HTMLElement;
  clickHandler: (e: TouchEvent, c: MobileComponent) => void;
}>;
