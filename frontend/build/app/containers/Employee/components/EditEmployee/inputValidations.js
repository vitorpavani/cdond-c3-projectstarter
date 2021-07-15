export var isInputEmpty = function (content) { return content.length === 0; };
export var doesInputMatchesEmailPattern = function (content) { return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(content); };
export var isInputGreaterThanOrEqualMinValue = function (value, minValue) { return value >= minValue; };
//# sourceMappingURL=inputValidations.js.map