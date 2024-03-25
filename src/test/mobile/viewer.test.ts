/**
 * @jest-environment jsdom
 */

import { doc } from '../../globals';
import { Schema } from '../../types';
import { MobileViewer } from './../../mobile/MobileViewer';

const testId = 'test';

const imageSource = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

const events = [
  {
    type: 'pointerdown',
    clientX: 99,
    clientY: 99
  },
  {
    type: 'pointerup',
    clientX: 99,
    clientY: 99
  },
  {
    type: 'pointerdown',
    clientX: 100,
    clientY: 100
  },
  {
    type: 'pointerup',
    clientX: 100,
    clientY: 100
  },
  {
    type: 'pointerdown',
    clientX: 1000,
    clientY: 1000
  },
  {
    type: 'pointerup',
    clientX: 1000,
    clientY: 1000
  }
];
const clickHandlerCalledTimes = 2;

const data: Schema = {
  id: 'test',
  components: [
    {
      type: 'rect',
      id: 'rect_1',
      data: {
        x: 0,
        y: 0,
        width: 100,
        height: 100
      }
    },
    {
      type: 'circle',
      id: 'circle_1',
      data: {
        x: 100,
        y: 100,
        width: 100,
        height: 100
      }
    },
    {
      type: 'ellipse',
      id: 'ellipse_1',
      data: {
        x: 100,
        y: 200,
        width: 100,
        height: 100
      }
    },
    {
      type: 'polygon',
      id: 'polygon_1',
      data: {
        points: [
          { x: 300, y: 300 },
          { x: 400, y: 300 },
          { x: 400, y: 400 },
          { x: 300, y: 400 }
        ]
      }
    }
  ]
};

const touchCallback = jest.fn();
const img_height = 600;
const img_width = 1200;

describe('Mobile viewer', () => {
  const img = doc.createElement('img');
  img.id = testId;
  const MobileViewerInstance = new MobileViewer(img, {
    width: img_width,
    height: img_height,
    clickHandler: touchCallback
  });
  it('init', () => {
    expect(MobileViewerInstance.img).toBe(img);
    expect(MobileViewerInstance.img.id).toBe(testId);
  });
  it('init with string id', () => {
    const instance = new MobileViewer(testId);
    expect(instance.img.id).toBe(testId);
    expect(instance.img).toBeInstanceOf(HTMLImageElement);
  });
  it('import', async () => {
    await MobileViewerInstance.import(data, imageSource);
    expect(MobileViewerInstance.componentsMap.size).toBe(4);
    expect(MobileViewerInstance.componentsMap.get('rect_1')?.data.width).toBe(100);
    expect(MobileViewerInstance.componentsMap.get('rect_1')?.data.height).toBe(100);
    expect(MobileViewerInstance.componentsMap.get('circle_1')?.data.width).toBe(100);
    expect(MobileViewerInstance.componentsMap.get('circle_1')?.data.height).toBe(100);
    expect(MobileViewerInstance.componentsMap.get('ellipse_1')?.data.width).toBe(100);
    expect(MobileViewerInstance.componentsMap.get('ellipse_1')?.data.height).toBe(100);
    expect(MobileViewerInstance.componentsMap.get('polygon_1')?.data.points).toEqual([
      { x: 300, y: 300 },
      { x: 400, y: 300 },
      { x: 400, y: 400 },
      { x: 300, y: 400 }
    ]);
  });
  it('touch on component', () => {
    events.forEach((event) => {
      MobileViewerInstance.img?.dispatchEvent(new MouseEvent(event.type, event));
    });
    expect(touchCallback).toHaveBeenCalledTimes(clickHandlerCalledTimes);
  });
  it('is data from click callback valid', () => {
    const componentInstance = MobileViewerInstance.componentsMap.get('rect_1')!;
    expect(componentInstance?.data).toBeDefined();

    MobileViewerInstance.img?.dispatchEvent(
      new MouseEvent('pointerdown', {
        clientX: componentInstance.data.x + componentInstance.data.width / 2,
        clientY: componentInstance.data.y + componentInstance.data.height / 2
      })
    );
    MobileViewerInstance.img?.dispatchEvent(
      new MouseEvent('pointerup', {
        clientX: componentInstance.data.x + componentInstance.data.width / 2,
        clientY: componentInstance.data.y + componentInstance.data.height / 2
      })
    );
    expect(touchCallback).toHaveBeenCalledWith(
      new MouseEvent('pointerdown', {
        clientX: componentInstance.data.x + componentInstance.data.width / 2,
        clientY: componentInstance.data.y + componentInstance.data.height / 2
      }),
      componentInstance
    );
  });
  it('is valid image', () => {
    expect(MobileViewerInstance.img).toBeInstanceOf(HTMLImageElement);
    expect(MobileViewerInstance.img.width).toBe(img_width);
    expect(MobileViewerInstance.img.height).toBe(img_height);
    expect(MobileViewerInstance.img.id).toBe(testId);
  });
  it('scale', () => {
    const scale = 2;
    MobileViewerInstance.setScale(scale);
    expect(MobileViewerInstance.scale).toBe(scale);
  });
});
