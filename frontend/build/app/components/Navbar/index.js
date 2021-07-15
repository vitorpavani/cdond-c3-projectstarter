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
import '../../style.local.css';
import style from '../../style.local.css';
var Navbar = (function (_super) {
    __extends(Navbar, _super);
    function Navbar(props) {
        var _this = _super.call(this, props) || this;
        _this.goToEmployees = function (e) {
            e.preventDefault();
            var destination = '/employees';
            if (_this.shouldViewChange(destination))
                _this.props.history.push(destination);
        };
        _this.goToAddEmployee = function (e) {
            e.preventDefault();
            var destination = '/employees/new';
            if (_this.shouldViewChange(destination))
                _this.props.history.push(destination);
        };
        _this.state = {
            isEmployeesActive: true,
            currentPath: props.history.location.pathname,
        };
        return _this;
    }
    Navbar.prototype.componentDidMount = function () {
        this.updateCurrentMenu();
    };
    Navbar.prototype.componentDidUpdate = function () {
        var prevPath = this.state.currentPath;
        var currPath = this.props.history.location.pathname;
        if (prevPath !== currPath)
            this.updateCurrentMenu();
    };
    Navbar.prototype.updateCurrentMenu = function () {
        var path = this.props.history.location.pathname;
        this.setState({
            isEmployeesActive: /employees/.test(path),
            currentPath: path,
        });
    };
    Navbar.prototype.shouldViewChange = function (destination) {
        return destination !== this.state.currentPath;
    };
    Navbar.prototype.render = function () {
        return (React.createElement("div", { className: style['g-wrapper'] + " " + style['page-edit'] + " " + style['grid-container'] },
            React.createElement("div", { className: style['g-sidebar'] },
                React.createElement("button", { className: style['mob-closenav'] + " " + style['close-button'] + " ", "aria-label": "Close Navigation Bar", type: "button" },
                    React.createElement("span", { "aria-hidden": "true" }, "\u00D7")),
                React.createElement("div", { className: style['g-applogo'] },
                    React.createElement("h1", { className: style.logoimage },
                        React.createElement("a", { href: "#", "aria-label": "Home page" },
                            React.createElement("span", null, "Glee")))),
                React.createElement("ul", { className: style.vertical + " " + style.menu + " " + style['accordion-menu'], "data-accordion": "" },
                    React.createElement("li", { className: style['accordion-item'] + " " + style['is-active'], "data-accordion-item": "" },
                        React.createElement("a", { className: style['accordion-title'], href: "#" },
                            React.createElement("i", { className: style.icon + " " + style['i-user'] + " " + style['margin-right'] }),
                            React.createElement("span", null, "Employees")),
                        React.createElement("ul", { className: style.menu + " " + style.vertical + " " + style.nested },
                            React.createElement("li", { className: "active" },
                                React.createElement("a", { href: "#", onClick: this.goToEmployees },
                                    React.createElement("i", { className: style.icon + " " + style['i-list'] + " " + style['margin-right'] }),
                                    React.createElement("span", null, "View & Manage"))),
                            React.createElement("li", null,
                                React.createElement("a", { href: "#", onClick: this.goToAddEmployee },
                                    React.createElement("i", { className: style.icon + " " + style['i-plus'] + " " + style['margin-right'] }),
                                    React.createElement("span", null, "Add New")))))))));
    };
    return Navbar;
}(React.Component));
export { Navbar };
//# sourceMappingURL=index.js.map