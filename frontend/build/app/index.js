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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import App from './containers/App';
import { hot } from 'react-hot-loader';
import './style.local.css';
var Root = (function (_super) {
    __extends(Root, _super);
    function Root() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            showLoader: true,
        };
        return _this;
    }
    Root.prototype.componentDidMount = function () {
        var _this = this;
        setTimeout(function () { return _this.setState({ showLoader: false }); }, 1000);
    };
    Root.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Switch, null,
                React.createElement(Route, { exact: true, path: "/", render: function () { return React.createElement(Redirect, { to: "/employees" }); } }),
                React.createElement(Route, { render: function (props) {
                        return React.createElement(App, __assign({}, props));
                    } }))));
    };
    return Root;
}(React.Component));
export { Root };
export default hot(module)(Root);
//# sourceMappingURL=index.js.map