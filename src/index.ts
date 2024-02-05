import editorFactory from './editor';

export const editor = editorFactory(false);

export const view = editorFactory(true);

export default {
  editor,
  view,
};
