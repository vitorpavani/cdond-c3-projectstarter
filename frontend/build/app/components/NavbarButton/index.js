import * as React from 'react';
import { Button } from '../Button';
import style from './style.local.css';
export var NavbarButton = function (props) {
    return (React.createElement(Button, { onClick: props.onClick, title: props.title, className: style['navbar-button'] + " " + style[props.className || ''], style: props.style }, props.children));
};
//# sourceMappingURL=index.js.map