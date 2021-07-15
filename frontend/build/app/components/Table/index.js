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
import * as React from 'react';
import { Component } from 'react';
import classNames from 'classnames';
import ReactTable from 'react-table';
import appstyle from '../../style.local.css';
import style from './react-table.css';
import '../../style.local.css';
import './react-table.css';
var Table = (function (_super) {
    __extends(Table, _super);
    function Table(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.getHeadersStyle = function () { return ({ style: __assign({}, (_this.props.headerStyle || {})) }); };
        _this.textStyle = {
            fontFamily: 'Mukta, Helvetica, Roboto, Arial, sans-serif',
            color: '#4f4f4f',
        };
        _this.toggleTab = function (e) {
            e.preventDefault();
            if (_this.state.showActiveEmployees)
                return;
            _this.setState({
                showActiveEmployees: true,
            });
            _this.props.onToggleArchive(_this.state.showActiveEmployees);
        };
        _this.toggleArchiveTab = function (e) {
            e.preventDefault();
            if (!_this.state.showActiveEmployees)
                return;
            _this.setState({
                showActiveEmployees: false,
            });
            _this.props.onToggleArchive(_this.state.showActiveEmployees);
        };
        _this.handleInputChange = _this.handleInputChange.bind(_this);
        _this.state = {
            typingTimeout: 0,
            searchText: '',
            showActiveEmployees: true,
        };
        return _this;
    }
    Table.prototype.tableClasses = function () {
        var _a;
        return classNames((_a = {},
            _a[style.ReactTable] = true,
            _a['table-large'] = true,
            _a['-highlight'] = true,
            _a['-striped'] = true,
            _a));
    };
    Table.prototype.handleInputChange = function (event) {
        var _this = this;
        event.preventDefault();
        if (this.state.typingTimeout) {
            clearTimeout(this.state.typingTimeout);
        }
        this.setState({
            searchText: event.target.value,
            typingTimeout: setTimeout(function () {
                var searchText = _this.state.searchText;
                var shouldResetSearch = searchText.length === 0;
                if (searchText.length >= 2 || shouldResetSearch) {
                    _this.props.onFilter(_this.state.searchText);
                }
            }, 500),
        });
    };
    Table.prototype.render = function () {
        var _this = this;
        var _a = this.props, data = _a.data, columns = _a.columns, loading = _a.loading, defaultSorted = _a.defaultSorted;
        return (React.createElement("div", { className: "\n        " + appstyle['g-content-fluid'] + " " + appstyle['table-container'] + " " + appstyle['grid-container'] + " " + appstyle.fluid + " " + appstyle['grid-padding-x'] + " " + appstyle.full + "\n        ", style: this.textStyle },
            React.createElement("form", null,
                React.createElement("div", { className: "\n            " + appstyle['grid-x'] + "\n            " + appstyle['grid-padding-x'] + "\n            " + appstyle['table-controls'] },
                    React.createElement("div", { className: appstyle.cell + " " + appstyle['medium-12'] + " " + appstyle['small-12'] + " " + appstyle['large-8'] },
                        React.createElement("ul", { className: "" + appstyle.tabs, "data-tabs": 'emp-list-control' },
                            React.createElement("li", { className: appstyle['tabs-title'] + " " + appstyle[this.state.showActiveEmployees ? 'is-active' : ''] },
                                React.createElement("a", { href: '#', onClick: this.toggleTab }, "Active")),
                            React.createElement("li", { className: appstyle['tabs-title'] + " " + appstyle[this.state.showActiveEmployees ? '' : 'is-active'] },
                                React.createElement("a", { href: '#', onClick: this.toggleArchiveTab }, "Archived"))),
                        React.createElement("div", { className: "" + appstyle['cont-table-filters'] },
                            React.createElement("div", { className: "" + appstyle['input-group'], style: { marginBottom: 0 } },
                                React.createElement("input", { type: 'text', placeholder: 'Type to filter...', value: this.state.searchText, onChange: this.handleInputChange }),
                                React.createElement("div", { className: "" + appstyle['input-group-button'] },
                                    React.createElement("button", { className: "" + appstyle.hollow },
                                        React.createElement("i", { className: appstyle.icon + " " + appstyle['i-search'] })))))),
                    React.createElement("div", { className: appstyle.cell + " " + appstyle['medium-12'] + " " + appstyle['small-12'] + " " + appstyle['large-4'] + " " + appstyle['text-right'] })),
                React.createElement("div", { className: "" + appstyle['g-main'] },
                    React.createElement(ReactTable, { data: data, pageSize: data.length, className: this.tableClasses() + " " + appstyle.hover + " " + appstyle['table-large'], getTheadThProps: function () { return (__assign({}, _this.getHeadersStyle())); }, columns: columns, noDataText: '', showPagination: false, loading: loading, defaultSorted: defaultSorted, multiSort: true })))));
    };
    return Table;
}(Component));
export { Table };
//# sourceMappingURL=index.js.map