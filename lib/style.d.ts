export function getDefaultStyle(): {
    component: {
        fill: string;
        stroke: string;
        cursor: string;
    };
    componentHover: {
        off: {
            'stroke-width': number;
            opacity: number;
        };
        on: {
            'stroke-width': number;
            opacity: number;
        };
    };
    componentSelect: {
        off: {
            'stroke-dasharray': string;
            'stroke-linejoin': string;
        };
        on: {
            'stroke-dasharray': string;
            'stroke-linejoin': string;
        };
    };
    handle: {
        fill: string;
        stroke: string;
        'stroke-width': number;
        opacity: number;
        cursor: string;
    };
    handleHover: {
        opacity: number;
    };
};
export function setStyle(element: any, style: any): void;
export function addHover(element: any, defaultStyle: any, hoverStyle: any): void;
