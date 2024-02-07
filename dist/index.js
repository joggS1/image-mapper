import editorFactory from './editor';
export var editor = editorFactory(false);
export var view = editorFactory(true);
export default {
    editor: editor,
    view: view
};
