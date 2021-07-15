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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React, { Component } from 'react';
import Gravatar from 'react-gravatar';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { SalaryType, Gender } from '../../models/EmployeeModel';
import { EmployeeActions } from '../../actions';
import { bindActionCreators } from 'redux';
import { omit } from 'app/utils';
import { connect } from 'react-redux';
import '../../../../style.local.css';
import style from '../../../../style.local.css';
import { EmployeesService } from '../../services';
import { SearchInput, Breadcrumb, SearchBar, Button } from 'app/components';
var ViewEmployee = (function (_super) {
    __extends(ViewEmployee, _super);
    function ViewEmployee(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.handleSearch = function (searchText) { };
        _this.containerStyle = {
            textAlign: 'center',
        };
        _this.textStyle = {
            fontFamily: 'Mukta, Helvetica, Roboto, Arial, sans-serif',
        };
        _this.goBackToEmployees = function () {
            _this.props.history.push('/employees');
        };
        _this.goToEditEmployee = function () {
            _this.props.history.push("/employees/" + _this.state.employeeId + "/edit");
        };
        _this.thirdLevelBreadcrumb = {
            cursor: 'default',
            textDecoration: 'none',
        };
        var employeeId = _this.props.match.params.employeeId;
        _this.employeeService = new EmployeesService();
        _this.state = {
            employeeId: employeeId,
            firstName: '',
            lastName: '',
            middleName: '',
            secondLastName: '',
            displayName: '',
            companyEmail: '',
            personalEmail: '',
            phoneNumber: '',
            address: '',
            birthdate: new Date(),
            tags: [],
            country: '',
            region: '',
            city: '',
            salary: 0,
            salaryType: SalaryType.YEARLY,
            effectiveDate: new Date(),
            isActive: true,
            gender: Gender.MALE,
            startDate: new Date(),
            bankName: '',
            accountNumber: '',
        };
        return _this;
    }
    ViewEmployee.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var employee, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.employeeService.getEmployeeById(this.state.employeeId)];
                    case 1:
                        employee = _a.sent();
                        this.setState({
                            firstName: employee.firstName,
                            lastName: employee.lastName,
                            middleName: employee.middleName,
                            secondLastName: employee.secondLastName,
                            displayName: employee.displayName,
                            companyEmail: employee.companyEmail,
                            personalEmail: employee.personalEmail,
                            phoneNumber: employee.phoneNumber,
                            address: employee.address,
                            birthdate: new Date(employee.birthdate),
                            tags: JSON.parse(employee.tags),
                            country: employee.country,
                            region: employee.region,
                            city: employee.city,
                            salary: employee.salary,
                            salaryType: employee.salaryType,
                            effectiveDate: employee.effectiveDate,
                            isActive: employee.isActive,
                            gender: employee.gender,
                            startDate: employee.startDate,
                            bankName: employee.bankName,
                            accountNumber: employee.accountNumber,
                        });
                        return [3, 3];
                    case 2:
                        err_1 = _a.sent();
                        this.props.history.push('/employees');
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    ViewEmployee.prototype.render = function () {
        var _a = this.props, isFetching = _a.isFetching, searchText = _a.searchText;
        var generalSearch = (React.createElement(SearchInput, { isFetching: isFetching, searchText: searchText, onSearchChange: this.handleSearch, placeholder: 'Search in the app', title: 'General Search' }));
        return (React.createElement("div", { className: style['g-container'] + " " + style.fluid },
            React.createElement(SearchBar, { searchInput: generalSearch }),
            React.createElement("div", { className: style['g-sectionbar'] + " " + style['grid-x'] },
                React.createElement(Breadcrumb, { rootPathName: this.state.displayName, isSecondaryPage: true },
                    React.createElement("li", { onClick: this.goBackToEmployees },
                        React.createElement("a", null, "Employees")),
                    React.createElement("li", { onClick: this.goBackToEmployees },
                        React.createElement("a", null, "View & Manage")),
                    React.createElement("li", null,
                        React.createElement("a", { style: this.thirdLevelBreadcrumb }, "View"))),
                React.createElement("div", { className: style.cell + " " + style['medium-6'] + " " + style['small-12'] + " " + style['text-right'] },
                    React.createElement("div", { className: style['button-group'] },
                        React.createElement(Button, { className: style.button + " " + style.primary + " " + style.shaddy, title: 'Edit', onClick: this.goToEditEmployee },
                            React.createElement("i", { className: style.icon + " " + style['i-edit'] + " " + style['margin-right'], "aria-hidden": 'true' }),
                            "Edit Info")))),
            React.createElement("div", { className: style['g-content'] + " " + style['grid-container'] + " " + style.fluid, style: this.textStyle },
                React.createElement("form", null,
                    React.createElement("div", { className: style['g-main'] + " " + style['grid-x'] + " " + style['grid-margin-x'] },
                        React.createElement("div", { className: style.cell + " " + style['medium-4'] + " " + style['large-3'] },
                            React.createElement("div", { className: style['cont-gravatar'] },
                                React.createElement(Gravatar, { email: this.state.companyEmail, size: 150, className: style['e-avatar-empty'] })),
                            React.createElement("h5", { style: this.textStyle }, "tags"),
                            React.createElement("div", { className: style['cont-tags'] },
                                React.createElement("ul", { className: style['e-tags-list'] }, this.state.tags.map(function (name, index) {
                                    return (React.createElement("li", { key: index },
                                        React.createElement("span", { className: style['e-tag'] }, name)));
                                })))),
                        React.createElement("div", { className: style.cell + " " + style['medium-6'] + " " + style['large-6'] },
                            React.createElement("div", { className: style['input-cell'] },
                                React.createElement("label", { htmlFor: 'displayname' }, "Display Name"),
                                React.createElement("div", { className: style['read-input'] + " " + style.big }, this.state.displayName)),
                            React.createElement("div", { className: style['grid-x'] + " " + style['grid-margin-x'] },
                                React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                    React.createElement("div", { className: style['input-cell'] },
                                        React.createElement("label", { htmlFor: 'firstname' }, "First Name"),
                                        React.createElement("div", { className: "" + style['read-input'] }, this.state.firstName))),
                                React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                    React.createElement("div", { className: style['input-cell'] },
                                        React.createElement("label", { htmlFor: 'middlename' }, "Middle name"),
                                        React.createElement("div", { className: "" + style['read-input'] }, this.state.middleName)))),
                            React.createElement("div", { className: style['grid-x'] + " " + style['grid-margin-x'] },
                                React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                    React.createElement("div", { className: style['input-cell'] },
                                        React.createElement("label", { htmlFor: 'lastname' }, "Last Name"),
                                        React.createElement("div", { className: "" + style['read-input'] }, this.state.lastName))),
                                React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                    React.createElement("div", { className: style['input-cell'] },
                                        React.createElement("label", { htmlFor: 'secondlastname' }, "Second Last Name"),
                                        React.createElement("div", { className: "" + style['read-input'] }, this.state.secondLastName)))),
                            React.createElement("div", { className: style['grid-x'] + " " + style['grid-margin-x'] },
                                React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                    React.createElement("div", { className: style['input-cell'] },
                                        React.createElement("label", { htmlFor: 'lastname' }, "Gender"),
                                        React.createElement("div", { className: "" + style['read-input'] }, this.state.gender === Gender.MALE ? 'Male' : 'Female'))),
                                React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                    React.createElement("div", { className: style['input-cell'] },
                                        React.createElement("label", { htmlFor: 'secondlastname' }, "Start Date"),
                                        React.createElement("div", { className: "" + style['read-input'] }, moment(this.state.startDate).format('MM-DD-YYYY'))))),
                            React.createElement("h5", { style: this.textStyle }, "Salary"),
                            React.createElement("div", { className: style['input-cell'] },
                                React.createElement("div", { className: "" + style['read-input'] }, this.state.salaryType === SalaryType.YEARLY
                                    ? 'Yearly'
                                    : 'Hourly')),
                            React.createElement("div", { className: style['grid-x'] + " " + style['grid-margin-x'] },
                                React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                    React.createElement("div", { className: style['input-cell'] },
                                        React.createElement("label", { htmlFor: 'salary' }, "Amount"),
                                        React.createElement("div", { className: style['input-group'] },
                                            React.createElement("span", null, "$"),
                                            React.createElement("div", { className: "" + style['read-input'] },
                                                ' ',
                                                this.state.salary),
                                            React.createElement("label", { className: style['medium-gray'] }, this.state.salaryType === SalaryType.HOURLY
                                                ? ' / hour'
                                                : ' / year')))),
                                React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                    React.createElement("label", { htmlFor: 'effectiveDate' }, "Effective Date"),
                                    React.createElement("div", { className: "" + style['read-input'] }, moment(this.state.effectiveDate).format('MM-DD-YYYY')))),
                            React.createElement("h5", { style: this.textStyle }, "Contact info"),
                            React.createElement("div", { className: style['grid-x'] + " " + style['grid-margin-x'] },
                                React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                    React.createElement("div", { className: style['input-cell'] },
                                        React.createElement("label", { htmlFor: 'companyEmail' }, "Company Email Address"),
                                        React.createElement("div", { className: "" + style['read-input'] }, this.state.companyEmail))),
                                React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                    React.createElement("div", { className: style['input-cell'] },
                                        React.createElement("label", { htmlFor: 'personalEmail' }, "Personal Email Address"),
                                        React.createElement("div", { className: "" + style['read-input'] }, this.state.personalEmail)))),
                            React.createElement("div", { className: style['grid-x'] + " " + style['grid-margin-x'] },
                                React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                    React.createElement("div", { className: style['input-cell'] },
                                        React.createElement("label", { htmlFor: 'phoneNumber' }, "Phone Number"),
                                        React.createElement("div", { className: "" + style['read-input'] }, this.state.phoneNumber))),
                                React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                    React.createElement("div", { className: style['input-cell'] },
                                        React.createElement("label", { htmlFor: 'birthdate' }, "Birthday"),
                                        React.createElement("div", { className: "" + style['read-input'] }, moment(this.state.birthdate).format('MM-DD-YYYY'))))),
                            React.createElement("h5", { style: this.textStyle }, "Bank Information"),
                            React.createElement("div", { className: style['grid-x'] + " " + style['grid-margin-x'] },
                                React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                    React.createElement("div", { className: style['input-cell'] },
                                        React.createElement("label", { htmlFor: 'bankName' }, "Bank Name"),
                                        React.createElement("div", { className: "" + style['read-input'] }, this.state.bankName))),
                                React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                    React.createElement("div", { className: style['input-cell'] },
                                        React.createElement("label", { htmlFor: 'accountNumber' }, "Account Number"),
                                        React.createElement("div", { className: "" + style['read-input'] }, this.state.accountNumber)))),
                            React.createElement("h5", { style: this.textStyle }, "Address"),
                            React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-8'] + " " + style['large-9'] },
                                React.createElement("div", { className: style['input-cell'] },
                                    React.createElement("label", { htmlFor: 'addressLine' }, "Address line"),
                                    React.createElement("div", { className: "" + style['read-input'] }, this.state.address)),
                                React.createElement("div", { className: style['grid-x'] + " " + style['grid-margin-x'] },
                                    React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                        React.createElement("div", { className: style['input-cell'] },
                                            React.createElement("label", { htmlFor: 'country' }, "Country"),
                                            React.createElement("div", { className: "" + style['read-input'] }, this.state.country))),
                                    React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                        React.createElement("div", { className: style['input-cell'] },
                                            React.createElement("label", { htmlFor: 'region' }, "State/Province"),
                                            React.createElement("div", { className: "" + style['read-input'] }, this.state.region)))),
                                React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                    React.createElement("div", { className: style['input-cell'] },
                                        React.createElement("label", { htmlFor: 'city' }, "City"),
                                        React.createElement("div", { className: "" + style['read-input'] }, this.state.city))))),
                        React.createElement("div", { className: style.cell + " " + style['medium-2'] + " " + style['large-3'] },
                            React.createElement("div", { className: style['e-emp-status'] },
                                React.createElement("label", { htmlFor: 'displayname' }, "Employee Status"),
                                React.createElement("div", { className: style['e-status-mark'] + " " + (!this.state.isActive ? style.disabled : style.active) }),
                                React.createElement("div", { className: "" + style['read-input'] },
                                    React.createElement("div", { className: "" + style['read-input'] }, !this.state.isActive ? 'Disabled' : 'Active')))))))));
    };
    return ViewEmployee;
}(Component));
export { ViewEmployee };
function mapStateToProps(state) {
    return {
        employees: state.employees,
        isFetching: state.isFetching,
        errorMessage: state.errorMessage,
    };
}
function mapActionsToProps(dispatch) {
    return {
        actions: bindActionCreators(omit(EmployeeActions, 'Type'), dispatch),
    };
}
export default connect(mapStateToProps, mapActionsToProps)(ViewEmployee);
//# sourceMappingURL=index.js.map