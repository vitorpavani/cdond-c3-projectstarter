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
import { Switch, Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { Navbar } from 'app/components/Navbar';
import AddEmployee from 'app/containers/Employee/components/AddEmployee';
import EditEmployee from 'app/containers/Employee/components/EditEmployee';
import Employees from 'app/containers/Employee/components/Employees';
import 'react-toastify/dist/ReactToastify.css';
import '../../style.local.css';
import style from '../../style.local.css';
import { ToastContainer } from 'react-toastify';
import ViewEmployee from 'app/containers/Employee/components/ViewEmployee';
var App = (function (_super) {
    __extends(App, _super);
    function App(props) {
        return _super.call(this, props) || this;
    }
    App.prototype.render = function () {
        var autoCloseTime = process.env.TOASTER_AUTO_CLOSE_TIME_IN_MILLISECONDS
            ? parseInt(process.env.TOASTER_AUTO_CLOSE_TIME_IN_MILLISECONDS, 10)
            : 3000;
        var CloseButton = function (_a) {
            var closeToast = _a.closeToast;
            return (React.createElement("a", { href: "javascript:void(0)", className: style['e-toaster-close'] },
                React.createElement("i", { className: style.icon + " " + style['i-cancel'] + " " + style['margin-left'], "aria-hidden": "true", onClick: closeToast })));
        };
        return (React.createElement("div", null,
            React.createElement(Navbar, { history: this.props.history }),
            React.createElement(Switch, null,
                React.createElement(Route, { exact: true, path: "/employees", component: Employees }),
                React.createElement(Route, { exact: true, path: "/employees/new", component: AddEmployee }),
                React.createElement(Route, { path: "/employees/:employeeId/edit", component: EditEmployee }),
                React.createElement(Route, { path: "/employees/:employeeId/view", component: ViewEmployee }),
                React.createElement(Route, { render: function () { return React.createElement(Redirect, { to: "/error" }); } })),
            React.createElement(ToastContainer, { closeButton: React.createElement(CloseButton, null), autoClose: autoCloseTime, hideProgressBar: true })));
    };
    return App;
}(Component));
export default connect()(App);
//# sourceMappingURL=index.js.map