declare const addEventListeners: <T extends keyof DocumentEventMap>(targets: any, eventTypes: string | T, handler: (e: DocumentEventMap[T]) => void) => void;
declare const removeEventListeners: (targets: any, eventTypes: any, handler: any) => void;
export { addEventListeners, removeEventListeners };
