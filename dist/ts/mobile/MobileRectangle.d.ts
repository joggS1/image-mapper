import { MobileFactory } from './MobileFactory';
import { FigureOptions } from '../types';
export declare class MobileRectangle extends MobileFactory<FigureOptions> {
    constructor(data: FigureOptions, id: string);
    click(clickX: number, clickY: number): boolean;
}
