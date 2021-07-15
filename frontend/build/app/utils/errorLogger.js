export function logError(error, info) {
    try {
        _LTracker.push({ error: error, info: info });
    }
    catch (_err) {
        return;
    }
}
//# sourceMappingURL=errorLogger.js.map