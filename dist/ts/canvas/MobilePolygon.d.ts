import { MobileFactory } from './MobileFactory';
import { PolygonOptions } from '../types';
export declare class MobilePolygon extends MobileFactory<PolygonOptions> {
    constructor(data: PolygonOptions, id: string);
    click(clickX: number, clickY: number): boolean;
    private isLeft;
}
