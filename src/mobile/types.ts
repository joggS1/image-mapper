import { MobileCircle } from './MobileCircle';
import { MobileEllipse } from './MobileEllipse';
import { MobilePolygon } from './MobilePolygon';
import { MobileRectangle } from './MobileRectangle';
import { PolygonPoint } from 'src/types';

export type MobileComponent = MobileCircle | MobileRectangle | MobileEllipse | MobilePolygon;

export type MobileViewerOptions = Partial<{
  width: number;
  height: number;
  scale: number;
  clickHandler: (e: TouchEvent, componentId: String, center: PolygonPoint) => void;
}>;
