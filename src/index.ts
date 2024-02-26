import editorFactory, { Editor } from './editor';

import { FigureOptions, MouseButtons, PolygonOptions, Style, SVGTagNames } from './types';

const editor = editorFactory(false);

const view = editorFactory(true);

export default {
  editor,
  view,
  MouseButtons
};

export { editor, view, MouseButtons };

export type { PolygonOptions, FigureOptions, Editor, Style, SVGTagNames as EditorMode };
