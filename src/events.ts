const addEventListeners = function <T extends keyof DocumentEventMap>(
  targets: any,
  eventTypes: T | string,
  handler: (e: DocumentEventMap[T]) => void
) {
  [targets].flat().forEach((target) => {
    eventTypes.split(' ').forEach((eventType: string) => {
      target.addEventListener(eventType, handler, {
        passive: false
      });
    });
  });
};

const removeEventListeners = function (targets: any, eventTypes: any, handler: any) {
  [targets].flat().forEach((target) => {
    eventTypes.split(' ').forEach((eventType: string) => {
      target.removeEventListener(eventType, handler);
    });
  });
};

export { addEventListeners, removeEventListeners };
