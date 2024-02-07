import editorFactory from './editor';

import { PolygonOptions, FigureOptions } from './types';

const editor = editorFactory(false);

const view = editorFactory(true);

export {
  editor,
  view,
  PolygonOptions,
  FigureOptions,
}

