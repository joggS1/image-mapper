import editorFactory, { Editor } from './editor';

import { PolygonOptions, FigureOptions, Style } from './types';

export const editor = editorFactory(false);

export const view = editorFactory(true);

export default {
  editor,
  view
};

export type { PolygonOptions, FigureOptions, Editor, Style };
