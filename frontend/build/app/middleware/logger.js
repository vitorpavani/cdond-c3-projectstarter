export var logger = function (store) { return function (next) { return function (action) {
    if (process.env.NODE_ENV !== 'production') {
        console.info(action);
    }
    return next(action);
}; }; };
//# sourceMappingURL=logger.js.map