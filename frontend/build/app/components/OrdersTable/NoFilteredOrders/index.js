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
import { Button } from '../../Button';
var NoFilteredOrders = (function (_super) {
    __extends(NoFilteredOrders, _super);
    function NoFilteredOrders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoFilteredOrders.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: style['no-orders'] },
            React.createElement("span", { className: style.icon }),
            React.createElement("h3", { className: style.title }, "We couldn't find any orders related to \"" + this.props.searchText + "\""),
            React.createElement("span", null,
                "Please try with a different order number,",
                React.createElement("br", null),
                "recipient name or company."),
            React.createElement(Button, { onClick: function () { return _this.props.handleResetOrders(''); }, className: style.Rectangle }, "Back to all orders")));
    };
    return NoFilteredOrders;
}(Component));
export { NoFilteredOrders };
//# sourceMappingURL=index.js.map