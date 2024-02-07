import editorFactory from './editor';

import { PolygonOptions, FigureOptions } from './types';

const editor = editorFactory(false);

const view = editorFactory(true);

export default {
  editor,
  view,
};
export type {
  PolygonOptions,
  FigureOptions,
}
