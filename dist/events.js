var addEventListeners = function (targets, eventTypes, handler) {
    [targets].flat().forEach(function (target) {
        eventTypes.split(' ').forEach(function (eventType) {
            target.addEventListener(eventType, handler, {
                passive: false,
            });
        });
    });
};
var removeEventListeners = function (targets, eventTypes, handler) {
    [targets].flat().forEach(function (target) {
        eventTypes.split(' ').forEach(function (eventType) {
            target.removeEventListener(eventType, handler);
        });
    });
};
export { addEventListeners, removeEventListeners };
