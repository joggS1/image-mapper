import editorFactory from './editor';

import { PolygonOptions, FigureOptions } from './types';

export const editor = editorFactory(false);

export const view = editorFactory(true);

export default {
  editor,
  view,
};
export type {
  PolygonOptions,
  FigureOptions,
}
