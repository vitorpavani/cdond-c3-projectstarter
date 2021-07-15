import * as React from 'react';
import '../../style.local.css';
import style from '../../style.local.css';
export var Breadcrumb = function (props) {
    return (React.createElement("div", { className: style.cell + " " + style['medium-6'] + " " + style['small-12'] },
        React.createElement("nav", { "aria-label": 'You are here:', role: 'navigation' },
            React.createElement("ul", { className: style.breadcrumbs }, props.children ? props.children : '')),
        React.createElement("h3", { className: style['s-title'] },
            props.isSecondaryPage ? (React.createElement("a", { className: style['e-button-back'], href: '#' },
                React.createElement("i", { className: style.icon + " " + style['i-chevron-left'] }))) : (''),
            React.createElement("span", null, props.rootPathName ? props.rootPathName : ''))));
};
//# sourceMappingURL=index.js.map