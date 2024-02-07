"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFSMService = void 0;
var handle_1 = require("./handle");
var xstate_1 = require("xstate");
var choose = xstate_1.actions.choose;
/*
  Machine
  -------
  States:
    idle          (no shapes being drawn)
      selectMode  (shapes could be selected)
        mouseIsDown
        mouseIsUp
      drawMode    (a shape type is chosen, but not started drawing)
        rect
        circle
        ellipse
        polygon
    drawing       (shape started, but not finished)
      rect
        mouseIsDown
      circle
        mouseIsDown
      ellipse
        mouseIsDown
      polygon
        mouseIsDown
        mouseIsUp

  Events:
    Mouse and keyboard:
      MT_DOWN
      MT_UP
      MT_MOVE
      KEYDOWN_ESC
      KEYDOWN_DEL
      KEYDOWN_ARRAY
    API:
      MODE_SELECT
      MODE_DRAW_RECT
      MODE_DRAW_CIRCLE
      MODE_DRAW_ELLIPSE
      MODE_DRAW_POLYGON

*/
var idleDrawModeStates = {
    rect: {
        on: {
            MT_DOWN: {
                actions: ['createRectangle', 'selectUnfinished'],
                target: '#drawing.rect.mouseIsDown',
            },
        },
    },
    circle: {
        on: {
            MT_DOWN: {
                actions: ['createCircle', 'selectUnfinished'],
                target: '#drawing.circle.mouseIsDown',
            },
        },
    },
    ellipse: {
        on: {
            MT_DOWN: {
                actions: ['createEllipse', 'selectUnfinished'],
                target: '#drawing.ellipse.mouseIsDown',
            },
        },
    },
    polygon: {
        on: {
            MT_DOWN: {
                actions: ['createPolygon', 'selectUnfinished'],
                target: '#drawing.polygon.mouseIsDown',
            },
        },
    },
};
var drawingSpecificComponentStates = {
    rect: {
        states: {
            mouseIsDown: {
                on: {
                    MT_UP: '#idle.drawMode.rect', // consider selection if mouse has not moved
                    KEYDOWN_ESC: '#idle.drawMode.rect',
                    MT_MOVE: {
                        actions: 'resizeUnfinished',
                    },
                },
            },
        },
    },
    circle: {
        states: {
            mouseIsDown: {
                on: {
                    MT_UP: '#idle.drawMode.circle', // consider selection if mouse has not moved
                    KEYDOWN_ESC: '#idle.drawMode.circle',
                    MT_MOVE: {
                        actions: 'resizeUnfinished',
                    },
                },
            },
        },
    },
    ellipse: {
        states: {
            mouseIsDown: {
                on: {
                    MT_UP: '#idle.drawMode.ellipse', // consider selection if mouse has not moved
                    KEYDOWN_ESC: '#idle.drawMode.ellipse',
                    MT_MOVE: {
                        actions: 'resizeUnfinished',
                    },
                },
            },
        },
    },
    polygon: {
        on: {
            KEYDOWN_ESC: '#idle.drawMode.polygon',
        },
        states: {
            mouseIsDown: {
                on: {
                    MT_UP: 'mouseIsUp',
                    MT_MOVE: {
                        actions: 'moveLastPoint',
                    },
                },
            },
            mouseIsUp: {
                on: {
                    MT_DOWN: [
                        {
                            cond: 'isHandle',
                            target: '#idle.drawMode.polygon',
                        },
                        {
                            // else
                            actions: 'addPoint',
                            target: 'mouseIsDown',
                        },
                    ],
                },
            },
        },
    },
};
var createFSM = function (editor) {
    return (0, xstate_1.createMachine)({
        context: {
            unfinishedComponent: undefined,
            mouseDownInSelectModeObject: undefined,
            _editor: editor,
        },
        predictableActionArguments: true,
        on: {
            MODE_SELECT: 'idle.selectMode',
            MODE_DRAW_RECT: 'idle.drawMode.rect',
            MODE_DRAW_CIRCLE: 'idle.drawMode.circle',
            MODE_DRAW_ELLIPSE: 'idle.drawMode.ellipse',
            MODE_DRAW_POLYGON: 'idle.drawMode.polygon',
        },
        initial: 'idle',
        states: {
            idle: {
                id: 'idle',
                initial: 'selectMode',
                states: {
                    selectMode: {
                        initial: 'mouseIsUp',
                        states: {
                            mouseIsUp: {
                                on: {
                                    MT_DOWN: {
                                        actions: ['selectComponent', 'mouseDownInSelectModeAssign'],
                                        target: 'mouseIsDown',
                                    },
                                    KEYDOWN_ARRAY: {
                                        actions: 'mouseDownInSelectModeObjectMove',
                                    },
                                },
                            },
                            mouseIsDown: {
                                on: {
                                    MT_UP: 'mouseIsUp',
                                    MT_MOVE: {
                                        actions: 'mouseDownInSelectModeObjectMove',
                                    },
                                },
                            },
                        },
                        // https://xstate.js.org/docs/guides/actions.html#action-order:
                        // In XState version 4.x, assign actions have priority and are executed before any other actions.
                        // We use send on the 'mouseDownInSelectModeUnassign' action to overcome this limitation.
                        on: {
                            KEYDOWN_ESC: {
                                actions: ['unselectAll', (0, xstate_1.send)('mouseDownInSelectModeUnassign')],
                            },
                            KEYDOWN_DEL: {
                                actions: ['deleteComponent', (0, xstate_1.send)('mouseDownInSelectModeUnassign')],
                            },
                            mouseDownInSelectModeUnassign: {
                                actions: 'mouseDownInSelectModeUnassign',
                            },
                        },
                        entry: 'selectModeEntry',
                        exit: ['unselectAll', (0, xstate_1.send)('mouseDownInSelectModeUnassign')],
                    },
                    drawMode: {
                        initial: undefined,
                        states: idleDrawModeStates,
                        on: {
                            KEYDOWN_ESC: '#idle.selectMode',
                        },
                    },
                },
            },
            drawing: {
                id: 'drawing',
                initial: undefined,
                states: drawingSpecificComponentStates,
                exit: choose([
                    {
                        cond: 'unfinishedIsValid',
                        actions: ['unselectAll', 'validComponentFinished'],
                    },
                    {
                        // else
                        actions: 'discardUnfinished',
                    },
                ]),
            },
        },
    }, {
        actions: {
            createRectangle: (0, xstate_1.assign)({
                unfinishedComponent: function (context, e) {
                    return context._editor.createRectangle({ x: e.offsetX, y: e.offsetY });
                },
            }),
            createCircle: (0, xstate_1.assign)({
                unfinishedComponent: function (context, e) {
                    return context._editor.createCircle({ x: e.offsetX, y: e.offsetY });
                },
            }),
            createEllipse: (0, xstate_1.assign)({
                unfinishedComponent: function (context, e) {
                    return context._editor.createEllipse({ x: e.offsetX, y: e.offsetY });
                },
            }),
            createPolygon: (0, xstate_1.assign)({
                unfinishedComponent: function (context, e) {
                    return context._editor.createPolygon({ points: { x: e.offsetX, y: e.offsetY } });
                },
            }),
            discardUnfinished: function (context, e) {
                context._editor.unregisterComponent(context.unfinishedComponent);
            },
            resizeUnfinished: function (context, e) {
                context.unfinishedComponent.resize(e.offsetX, e.offsetY);
            },
            selectUnfinished: function (context, e) {
                context._editor.selectComponent(context.unfinishedComponent);
            },
            validComponentFinished: function (context, e) {
                var c = context.unfinishedComponent;
                context._editor.componentDrawnHandler &&
                    context._editor.componentDrawnHandler(c, c.element.id);
            },
            // polygons only
            addPoint: function (context, e) {
                context.unfinishedComponent.addPoint(e.offsetX, e.offsetY);
                context._editor.selectComponent(context.unfinishedComponent); // send('selectUnfinished'); ?
            },
            // polygons only
            moveLastPoint: function (context, e) {
                context.unfinishedComponent.moveLastPoint(e.offsetX, e.offsetY);
            },
            mouseDownInSelectModeAssign: (0, xstate_1.assign)({
                mouseDownInSelectModeObject: function (context, e) { return e.component; },
            }),
            mouseDownInSelectModeUnassign: (0, xstate_1.assign)({
                //@ts-ignore
                mouseDownInSelectModeObject: null,
            }),
            mouseDownInSelectModeObjectMove: function (context, e) {
                var mouseDownObj = context.mouseDownInSelectModeObject;
                mouseDownObj && mouseDownObj.move && mouseDownObj.move(e.movementX, e.movementY);
            },
            selectComponent: function (context, e) {
                // When e.component is falsy, this operation works as unselectAll.
                context._editor.selectComponent(e.component);
            },
            deleteComponent: function (context, e) {
                var mouseDownObj = context.mouseDownInSelectModeObject;
                mouseDownObj && context._editor.unregisterComponent(mouseDownObj);
            },
            unselectAll: function (context, e) {
                context._editor.selectComponent(null);
            },
            selectModeEntry: function (context, e) {
                context._editor.selectModeHandler && context._editor.selectModeHandler();
            },
        },
        guards: {
            isHandle: function (context, e) { return e.component instanceof handle_1.Handle; },
            unfinishedIsValid: function (context, e) { return context.unfinishedComponent.isValid(); },
        },
    });
};
var createFSMService = function (editor) { return (0, xstate_1.interpret)(createFSM(editor)); };
exports.createFSMService = createFSMService;
