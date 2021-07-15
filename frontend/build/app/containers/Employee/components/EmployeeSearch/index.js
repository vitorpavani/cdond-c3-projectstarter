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
import { omit } from 'app/utils';
import { connect } from 'react-redux';
import { EmployeeActions } from '../../actions';
import { EmployeeModel } from '../../models/EmployeeModel';
import { bindActionCreators } from 'redux';
import { Table } from 'app/components/Table';
import moment from 'moment';
import Gravatar from 'react-gravatar';
import '../../../../style.local.css';
import style from '../../../../style.local.css';
import { SearchInput, SearchBar, Breadcrumb, Button, ActionsMenu, } from 'app/components';
var Employees = (function (_super) {
    __extends(Employees, _super);
    function Employees(props) {
        var _this = _super.call(this, props) || this;
        _this.handleSearch = function (searchText) { };
        _this.handleTableFilter = function (filterText) {
            _this.props.actions.fetchEmployees(filterText);
        };
        _this.handleToggleArchive = function (showActive) {
            _this.setState({
                showActiveEmployees: !showActive,
            });
        };
        _this.goBackToEmployees = function () {
            _this.props.history.push('/employees');
        };
        _this.goToCreateEmployee = function () {
            _this.props.history.push('/employees/new');
        };
        _this.componentDidMount = function () {
            _this.props.actions.fetchEmployees();
        };
        _this.thirdLevelBreadcrumb = {
            cursor: 'default',
            textDecoration: 'none',
        };
        _this.render = function () {
            var _a = _this.props, isFetching = _a.isFetching, employees = _a.employees, searchText = _a.searchText;
            var tableProps = {
                data: _this.state.showActiveEmployees
                    ? employees.filter(function (e) { return e.isActive; })
                    : employees.filter(function (e) { return !e.isActive; }),
                loading: isFetching,
                columns: _this.getTableColumns(),
                style: { marginTop: '0px', paddingLeft: '15px', verticalAlign: 'middle' },
                defaultSorted: _this.getDefaultSorted(),
                headerStyle: { fontWeight: 'bold', backgroundColor: 'white' },
                onFilter: _this.handleTableFilter,
                onToggleArchive: _this.handleToggleArchive,
            };
            var generalSearch = (React.createElement(SearchInput, { isFetching: isFetching, searchText: searchText, onSearchChange: _this.handleSearch, placeholder: 'Search in the app', title: 'General Search' }));
            return (React.createElement("div", { className: style['g-container'] + " " + style.fluid },
                React.createElement(SearchBar, { searchInput: generalSearch }),
                React.createElement("div", { className: style['g-sectionbar'] + " " + style['grid-x'] },
                    React.createElement(Breadcrumb, { rootPathName: 'View & Manage Employees', isSecondaryPage: false },
                        React.createElement("li", null,
                            React.createElement("a", { style: _this.thirdLevelBreadcrumb }, "Employees")),
                        React.createElement("li", null,
                            React.createElement("a", { style: _this.thirdLevelBreadcrumb }, "View & Manage"))),
                    React.createElement("div", { className: style.cell + " " + style['medium-6'] + " " + style['small-12'] + " " + style['text-right'] },
                        React.createElement("div", { className: style['button-group'] },
                            React.createElement(Button, { className: style.button + " " + style.primary + " " + style.shaddy, title: 'Add Employee', onClick: _this.goToCreateEmployee },
                                React.createElement("i", { className: style.icon + " " + style['i-plus'] + " " + style['margin-right'], "aria-hidden": 'true' }),
                                "Add New Employee")))),
                React.createElement("div", null,
                    React.createElement(Table, __assign({}, tableProps)))));
        };
        _this.state = {
            showActiveEmployees: true,
        };
        return _this;
    }
    Employees.prototype.getTableColumns = function () {
        var _this = this;
        return [
            {
                Header: '',
                id: 'gravatar',
                accessor: function (d) { return d.email; },
                width: 50,
                resizable: false,
                sortable: false,
                Cell: function (row) {
                    var email = row.value;
                    return (React.createElement("div", { className: style['e-gravatar-list'] },
                        React.createElement(Gravatar, { email: email })));
                },
            },
            {
                Header: 'Display Name',
                accessor: 'displayName',
                id: 'displayName',
            },
            {
                Header: 'Last Name',
                accessor: 'lastName',
                id: 'lastName',
            },
            {
                Header: 'Email',
                accessor: 'email',
                id: 'email',
            },
            {
                Header: 'Tags',
                id: 'tags',
                accessor: function (_a) {
                    var tags = _a.tags;
                    if (!tags) {
                        return '';
                    }
                    var obj = JSON.parse(tags);
                    return obj.join(', ');
                },
            },
            {
                Header: 'Birthdate',
                id: 'birthdate',
                accessor: function (_a) {
                    var birthdate = _a.birthdate;
                    if (!birthdate) {
                        return '';
                    }
                    return moment(birthdate).format(EmployeeModel.dateFormat);
                },
            },
            {
                Header: 'Start Date',
                id: 'startDate',
                accessor: function (_a) {
                    var startDate = _a.startDate;
                    if (!startDate) {
                        return '';
                    }
                    return moment(startDate).format(EmployeeModel.dateFormat);
                },
            },
            {
                Header: 'Action',
                id: 'action',
                width: 70,
                accessor: function (e) { return e; },
                sortable: false,
                Cell: function (row) {
                    var employeeId = row.value.id;
                    var employeeStatus = row.value.isActive;
                    if (!employeeId) {
                        return '';
                    }
                    return (React.createElement(ActionsMenu, { history: _this.props.history, location: _this.props.location, match: _this.props.match, employeeId: employeeId, isActive: employeeStatus, actions: _this.props.actions }));
                },
            },
        ];
    };
    Employees.prototype.getDefaultSorted = function () {
        return [
            {
                id: 'lastName',
                desc: false,
            },
        ];
    };
    return Employees;
}(React.Component));
export { Employees };
function mapStateToProps(state) {
    return {
        employees: state.employees.employees,
        isFetching: state.employees.isFetching,
        errorMessage: state.employees.errorMessage,
    };
}
function mapActionsToProps(dispatch) {
    return {
        actions: bindActionCreators(omit(EmployeeActions, 'Type'), dispatch),
    };
}
export default connect(mapStateToProps, mapActionsToProps)(Employees);
//# sourceMappingURL=index.js.map