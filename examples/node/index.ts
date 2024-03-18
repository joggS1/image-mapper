import { MobileViewer } from '../../src/mobile/MobileViewer';
// $ npm run demo

import { editor, view, MouseButtons } from '../../src';

// Editor
const myEditor = editor('editor', {
  width: 800,
  height: 400,
  selectModeHandler: () => console.log('Editor is now in select mode'),
  mouseButtons: [MouseButtons.LMB]
});

// View
// const myView = view('view', {
//   width: 800,
//   height: 400,
//   clickHandler: (e, id, centerCoords) => {
//     console.log('User clicked on', id);
//   }
// });
// myView.loadImage('image.png', 700, 350);
// myEditor.setScale(1.2);
// myView.import(
//   '{"idCounter":4,"components":[{"id":"rect_1","type":"rect","data":{"x":66,"y":36,"width": 253,"height":148,"dataParent":"ididididididi"}},{"id":"polygon_2","type":"polygon","data":{ "fill": "red", "points":[{"x":376,"y":172},{"x":498,"y":291},{"x":625,"y":174},{"x":500,"y":57}]}},{"id":"polygon_3","type":"polygon","data":{"points":[{"x":54,"y":249},{"x":234,"y":246},{"x":236,"y":225},{"x":415,"y":270},{"x":237,"y":313},{"x":235,"y":294},{"x":54,"y":292}]}}]}',
//   () => ''
// );
console.log('123123123');

const myView = new MobileViewer(
  'Mobile_viewer',
  {
    width: 700,
    height: 350
  },
  4
);
// myView.loadImage('image.png', 700, 350);
let scale = 1;

myView.import(
  {
    idCounter: 4,
    components: [
      {
        id: 'rect_1',
        type: 'rect',
        data: { x: 66, y: 36, width: 253, height: 148, dataParent: 'ididididididi' }
      },
      {
        id: 'polygon_2',
        type: 'polygon',
        data: {
          fill: 'red',
          points: [
            { x: 376, y: 172 },
            { x: 498, y: 291 },
            { x: 625, y: 174 },
            { x: 500, y: 57 }
          ]
        }
      },
      {
        id: 'polygon_3',
        type: 'polygon',
        data: {
          points: [
            { x: 54, y: 249 },
            { x: 234, y: 246 },
            { x: 236, y: 225 },
            { x: 415, y: 270 },
            { x: 237, y: 313 },
            { x: 235, y: 294 },
            { x: 54, y: 292 }
          ]
        }
      }
    ]
  },
  'image.png'
);
const touch = myView.TouchHandler;
myView.on('pointerdown', (e) => {
  touch.onTouchStart(e.clientX, e.clientY);
});
myView.on('pointerup', (e) => {
  touch.onTouchEnd(e.clientX, e.clientY);
  if (touch.isClicked()) {
    console.log(myView.getClickedComponent(e.clientX, e.clientY), '123');
  }
});

myView.setScale(1.2);

export function onSelect(mode: string) {
  myEditor.setEditorMode(mode as any);
}
onSelect('polygon');
