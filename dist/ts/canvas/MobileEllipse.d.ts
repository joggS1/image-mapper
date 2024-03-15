import { MobileFactory } from './MobileFactory';
import { FigureOptions } from '../types';
export declare class MobileEllipse extends MobileFactory<FigureOptions> {
    constructor(data: FigureOptions, id: string);
    click(x: number, y: number): boolean;
}
