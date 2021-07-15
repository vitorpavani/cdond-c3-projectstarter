var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { Component } from 'react';
import style from './style.local.css';
import classNames from 'classnames';
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.getClassNames = function () {
        var _a;
        var propClassName = this.props.className || '';
        return classNames((_a = {},
            _a[style.button] = true,
            _a[propClassName] = propClassName,
            _a));
    };
    Button.prototype.render = function () {
        return (React.createElement("button", { type: this.props.type || 'button', style: this.props.style, className: this.getClassNames(), onClick: this.props.onClick, title: this.props.title, disabled: this.props.disabled, onMouseLeave: this.props.onMouseLeave }, this.props.children));
    };
    return Button;
}(Component));
export { Button };
//# sourceMappingURL=index.js.map