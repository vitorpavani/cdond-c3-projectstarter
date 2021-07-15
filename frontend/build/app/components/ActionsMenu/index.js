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
import React from 'react';
import '../../style.local.css';
import style from '../../style.local.css';
import { Button } from '../Button';
import ContextMenu from 'axui-contextmenu';
import './style.css';
var ActionsMenu = (function (_super) {
    __extends(ActionsMenu, _super);
    function ActionsMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.goToEditEmployee = function () {
            _this.props.history.push("/employees/" + _this.props.employeeId + "/edit");
        };
        _this.goToViewEmployee = function () { };
        _this.goToArchiveEmployee = function () { };
        _this.handleContextMenu = function (e) {
            e.preventDefault();
            _this.menu.setMenu([
                {
                    label: 'View',
                    click: function () {
                        _this.props.history.push("/employees/" + _this.props.employeeId + "/view");
                    },
                },
                {
                    label: 'Edit',
                    click: function () {
                        _this.props.history.push("/employees/" + _this.props.employeeId + "/edit");
                    },
                },
                {
                    label: !_this.props.isActive ? 'Activate' : 'Deactivate',
                    click: function () {
                        _this.props.isActive ? _this.props.actions.deactivateEmployee(_this.props.employeeId) : _this.props.actions.activateEmployee(_this.props.employeeId);
                        _this.props.actions.fetchEmployees();
                    },
                },
            ]);
            _this.menu.popup({ x: e.pageX, y: e.pageY });
        };
        _this.state = {
            showMenu: false,
        };
        _this.menu = new ContextMenu({
            id: 'basic',
        });
        return _this;
    }
    ActionsMenu.prototype.toggleShowMenu = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({
            showMenu: !this.state.showMenu,
        });
    };
    ActionsMenu.prototype.onMouseLeave = function () {
        this.setState({
            showMenu: false,
        });
    };
    ActionsMenu.prototype.render = function () {
        return (React.createElement("div", { onClick: this.handleContextMenu },
            React.createElement(Button, null,
                React.createElement("a", { className: style['btn-icon'] },
                    React.createElement("i", { className: style.icon + " " + style['i-more-1'] })))));
    };
    return ActionsMenu;
}(React.Component));
export { ActionsMenu };
//# sourceMappingURL=index.js.map