import * as React from 'react';
import style from './style.local.css';
export var Empty = function (_a) {
    var title = _a.title;
    return (React.createElement("div", { className: style['no-orders'] },
        React.createElement("span", { className: style.icon }),
        React.createElement("h3", { className: style.title }, title)));
};
//# sourceMappingURL=index.js.map