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
import React, { Component, createRef } from 'react';
import Gravatar from 'react-gravatar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Gender, SalaryType } from '../../models/EmployeeModel';
import { EmployeeActions } from '../../actions';
import { bindActionCreators } from 'redux';
import { omit, confirmDialog } from 'app/utils';
import { connect } from 'react-redux';
import '../../../../style.local.css';
import style from '../../../../style.local.css';
import TagsInput from 'react-tagsinput';
import './react-tagsinput.css';
import { SearchInput, SearchBar, Breadcrumb, Button } from 'app/components';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import text from 'assets/translations';
var AddEmployee = (function (_super) {
    __extends(AddEmployee, _super);
    function AddEmployee(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.myRef = createRef();
        _this.clearFields = function () {
            _this.setState({
                firstName: '',
                lastName: '',
                middleName: '',
                secondLastName: '',
                displayName: '',
                email: '',
                personalEmail: '',
                gender: Gender.MALE,
                phoneNumber: '',
                address: '',
                bankName: '',
                accountNumber: '',
                birthdate: new Date(),
                startDate: new Date(),
                tags: [],
                country: '',
                region: '',
                city: '',
                salary: 0,
                salaryType: SalaryType.YEARLY,
                effectiveDate: new Date(),
            });
        };
        _this.handleFormReset = function () { return __awaiter(_this, void 0, void 0, function () {
            var answer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, confirmDialog.fire({
                            title: text.DISCARD_CHANGES,
                            text: text.CANCEL_CHANGES_QUESTION,
                            type: 'warning',
                            showCancelButton: true,
                            cancelButtonText: text.NO,
                            confirmButtonText: text.YES,
                        })];
                    case 1:
                        answer = _a.sent();
                        if (answer.value) {
                            this.clearFields();
                            this.goBackToEmployees();
                        }
                        return [2];
                }
            });
        }); };
        _this.handleFormSubmit = function (event) { return __awaiter(_this, void 0, void 0, function () {
            var node, payload;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        node = this.myRef.current;
                        if (node) {
                            node.reportValidity();
                        }
                        if (node && !node.checkValidity())
                            return [2];
                        event.preventDefault();
                        event.stopPropagation();
                        payload = {
                            firstName: this.state.firstName,
                            lastName: this.state.lastName,
                            middleName: this.state.middleName,
                            secondLastName: this.state.secondLastName,
                            displayName: this.state.displayName,
                            companyEmail: this.state.companyEmail,
                            personalEmail: this.state.personalEmail,
                            gender: this.state.gender,
                            phoneNumber: this.state.phoneNumber,
                            address: this.state.address,
                            bankName: this.state.bankName,
                            accountNumber: this.state.accountNumber,
                            birthdate: this.state.birthdate,
                            startDate: this.state.startDate,
                            tags: JSON.stringify(this.state.tags),
                            country: this.state.country,
                            region: this.state.region,
                            city: this.state.city,
                            salary: this.state.salary,
                            salaryType: this.state.salaryType,
                            effectiveDate: this.state.effectiveDate,
                            isActive: true,
                        };
                        return [4, this.props.actions.addEmployee(payload)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        }); };
        _this.handleTextChange = function (event) {
            var _a;
            _this.setState(__assign(__assign({}, _this.state), (_a = {}, _a[event.target.name] = event.target.value, _a)));
        };
        _this.handleSelectChange = function (event) {
            var _a;
            _this.setState(__assign(__assign({}, _this.state), (_a = {}, _a[event.target.name] = event.target.value, _a)));
        };
        _this.handleTextAreaChange = function (event) {
            _this.setState({
                address: event.target.value,
            });
        };
        _this.handleSearch = function (searchText) { };
        _this.handleSalaryTypeChange = function (event) {
            _this.setState({
                salaryType: event.target.value,
            });
        };
        _this.containerStyle = {
            textAlign: 'center',
        };
        _this.textStyle = {
            fontFamily: 'Mukta, Helvetica, Roboto, Arial, sans-serif',
        };
        _this.goBackToEmployees = function () {
            _this.props.history.push('/employees');
        };
        _this.thirdLevelBreadcrumb = {
            cursor: 'default',
            textDecoration: 'none',
        };
        _this.state = {
            firstName: '',
            lastName: '',
            middleName: '',
            secondLastName: '',
            displayName: '',
            companyEmail: '',
            personalEmail: '',
            gender: Gender.MALE,
            phoneNumber: '',
            address: '',
            bankName: '',
            accountNumber: '',
            birthdate: new Date(),
            startDate: new Date(),
            tags: [],
            country: '',
            region: '',
            city: '',
            salary: 0,
            salaryType: SalaryType.YEARLY,
            effectiveDate: new Date(),
        };
        return _this;
    }
    AddEmployee.prototype.handleBirthdateChanged = function (date) {
        this.setState({
            birthdate: date,
        });
    };
    AddEmployee.prototype.handleStartDateChanged = function (date) {
        this.setState({
            startDate: date,
        });
    };
    AddEmployee.prototype.handleEffectiveDateChanged = function (date) {
        this.setState({
            effectiveDate: date,
        });
    };
    AddEmployee.prototype.handleTagsChange = function (newTags) {
        this.setState({ tags: newTags });
    };
    AddEmployee.prototype.selectCountry = function (val) {
        this.setState({ country: val });
    };
    AddEmployee.prototype.selectRegion = function (val) {
        this.setState({ region: val });
    };
    AddEmployee.prototype.render = function () {
        var _this = this;
        var _a = this.props, isFetching = _a.isFetching, searchText = _a.searchText;
        var generalSearch = (React.createElement(SearchInput, { isFetching: isFetching, searchText: searchText, onSearchChange: this.handleSearch, placeholder: 'Search in the app', title: 'General Search' }));
        return (React.createElement("div", { className: style['g-container'] + " " + style.fluid },
            React.createElement(SearchBar, { searchInput: generalSearch }),
            React.createElement("div", { className: style['g-sectionbar'] + " " + style['grid-x'] },
                React.createElement(Breadcrumb, { rootPathName: 'Add a New Employee', isSecondaryPage: true },
                    React.createElement("li", null,
                        React.createElement("a", { onClick: this.handleFormReset }, "Employees")),
                    React.createElement("li", null,
                        React.createElement("a", { onClick: this.handleFormReset }, "View & Manage")),
                    React.createElement("li", null,
                        React.createElement("a", { style: this.thirdLevelBreadcrumb }, "Add New"))),
                React.createElement("div", { className: style.cell + " " + style['medium-6'] + " " + style['small-12'] + " " + style['text-right'] },
                    React.createElement("div", { className: style['button-group'] },
                        React.createElement(Button, { className: style.button + " " + style.secondary + " " + style.clear, title: 'Cancel', onClick: this.handleFormReset },
                            React.createElement("i", { className: style.icon + " " + style['i-cancel'] + " " + style['margin-right'], "aria-hidden": 'true' }),
                            "Cancel"),
                        React.createElement(Button, { className: style.button + " " + style.secondary + " " + style.shaddy, title: 'Add Employee', onClick: this.handleFormSubmit },
                            React.createElement("i", { className: style.icon + " " + style['i-check'] + " " + style['margin-right'], "aria-hidden": 'true' }),
                            "Add Employee")))),
            React.createElement("div", { className: style['g-content'] + " " + style['grid-container'] + " " + style.fluid, style: this.textStyle },
                React.createElement("form", { ref: this.myRef, onSubmit: this.handleFormSubmit, autoComplete: 'off' },
                    React.createElement("div", { className: style['g-main'] + " " + style['grid-x'] + " " + style['grid-margin-x'] },
                        React.createElement("div", { className: style.cell + " " + style['medium-4'] + " " + style['large-3'] },
                            React.createElement("div", { className: style['cont-gravatar'] },
                                React.createElement(Gravatar, { email: this.state.companyEmail, size: 150, className: style['e-avatar-empty'] })),
                            React.createElement("h5", { style: this.textStyle }, "tags"),
                            React.createElement(TagsInput, { value: this.state.tags, onChange: this.handleTagsChange.bind(this) }),
                            React.createElement("small", { className: 'medium-gray' }, "Press tab to create tags.")),
                        React.createElement("div", { className: style.cell + " " + style['medium-6'] + " " + style['large-6'] },
                            React.createElement("div", { className: style['input-cell'] },
                                React.createElement("label", { htmlFor: 'displayname', className: style.required }, "Display Name"),
                                React.createElement("input", { type: 'text', name: 'displayName', id: 'displayname', value: this.state.displayName, onChange: this.handleTextChange, onBlur: this.handleTextChange, maxLength: 50, className: 'largeinput', placeholder: 'Display Name', required: true })),
                            React.createElement("div", { className: style['grid-x'] + " " + style['grid-margin-x'] },
                                React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                    React.createElement("div", { className: style['input-cell'] },
                                        React.createElement("label", { htmlFor: 'firstname', className: style.required }, "First Name"),
                                        React.createElement("input", { type: 'text', name: 'firstName', id: 'firstname', value: this.state.firstName, onChange: this.handleTextChange, onBlur: this.handleTextChange, required: true, maxLength: 50 }))),
                                React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                    React.createElement("div", { className: style['input-cell'] },
                                        React.createElement("label", { htmlFor: 'middlename' }, "Middle name"),
                                        React.createElement("input", { type: 'text', name: 'middleName', id: 'middlename', value: this.state.middleName, onChange: this.handleTextChange, onBlur: this.handleTextChange, maxLength: 50 })))),
                            React.createElement("div", { className: style['grid-x'] + " " + style['grid-margin-x'] },
                                React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                    React.createElement("div", { className: style['input-cell'] },
                                        React.createElement("label", { htmlFor: 'lastname', className: style.required }, "Last Name"),
                                        React.createElement("input", { type: 'text', name: 'lastName', id: 'lastname', value: this.state.lastName, onChange: this.handleTextChange, onBlur: this.handleTextChange, required: true, maxLength: 50 }))),
                                React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                    React.createElement("div", { className: style['input-cell'] },
                                        React.createElement("label", { htmlFor: 'secondlastname' }, "Second Last Name"),
                                        React.createElement("input", { type: 'text', name: 'secondLastName', id: 'secondlastname', value: this.state.secondLastName, onChange: this.handleTextChange, onBlur: this.handleTextChange, maxLength: 50 })))),
                            React.createElement("div", { className: style.cell + " " + style['medium-6'] + " " + style['large-6'] },
                                React.createElement("div", { className: style['input-cell'] },
                                    React.createElement("label", { htmlFor: 'gender', className: style.required }, "Gender"),
                                    React.createElement("select", { name: 'gender', id: 'gender', onChange: this.handleSelectChange, onBlur: this.handleSelectChange, value: this.state.gender },
                                        React.createElement("option", { value: Gender.MALE, style: this.textStyle }, "Male"),
                                        React.createElement("option", { value: Gender.FEMALE, style: this.textStyle }, "Female")))),
                            React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-8'] + " " + style['large-4'] },
                                React.createElement("div", { className: style['input-cell'] },
                                    React.createElement("label", { htmlFor: 'startDate', className: style.required }, "Start Date"),
                                    React.createElement(DatePicker, { name: 'startDate', id: 'startdate', selected: this.state.startDate, onChange: this.handleStartDateChanged.bind(this) }))),
                            React.createElement("h5", { style: this.textStyle }, "Salary"),
                            React.createElement("div", { className: style['input-cell'] },
                                React.createElement("input", { type: 'radio', value: SalaryType.YEARLY, name: 'yearlySalary', checked: this.state.salaryType === SalaryType.YEARLY, onChange: this.handleSalaryTypeChange }),
                                React.createElement("label", null, "Yearly"),
                                React.createElement("input", { type: 'radio', value: SalaryType.HOURLY, name: 'hourlySalary', checked: this.state.salaryType === SalaryType.HOURLY, onChange: this.handleSalaryTypeChange }),
                                React.createElement("label", null, "Hourly")),
                            React.createElement("div", { className: style['grid-x'] + " " + style['grid-margin-x'] },
                                React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                    React.createElement("div", { className: style['input-cell'] },
                                        React.createElement("label", { htmlFor: 'salary', className: style.required }, "Set amount"),
                                        React.createElement("div", { className: style['input-group'] },
                                            React.createElement("span", { className: style['input-group-label'] }, "$"),
                                            React.createElement("input", { type: 'number', name: 'salary', id: 'salary', value: this.state.salary, onChange: this.handleTextChange, min: '0.01', step: '0.01' }),
                                            React.createElement("label", { className: style['medium-gray'] }, this.state.salaryType === SalaryType.HOURLY
                                                ? '/hour'
                                                : '/year')))),
                                React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                    React.createElement("label", { htmlFor: 'effectiveDate', className: style.required }, "Effective Date"),
                                    React.createElement(DatePicker, { name: 'effectiveDate', id: 'effectiveDate', selected: this.state.effectiveDate, onChange: this.handleEffectiveDateChanged.bind(this), required: true }))),
                            React.createElement("h5", { style: this.textStyle }, "Contact info"),
                            React.createElement("div", { className: style.cell + " " + style['medium-8'] + " " + style['large-6'] },
                                React.createElement("div", { className: style['input-cell'] },
                                    React.createElement("label", { htmlFor: 'email', className: style.required }, "Email"),
                                    React.createElement("input", { type: 'email', name: 'companyEmail', id: 'email', value: this.state.companyEmail, onChange: this.handleTextChange, onBlur: this.handleTextChange, required: true, maxLength: 50, placeholder: 'Organization email address', pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$' }))),
                            React.createElement("div", { className: style.cell + " " + style['medium-8'] + " " + style['large-6'] },
                                React.createElement("div", { className: style['input-cell'] },
                                    React.createElement("label", { htmlFor: 'personalEmail' }, "Personal email"),
                                    React.createElement("input", { type: 'email', name: 'personalEmail', id: 'personalemail', value: this.state.personalEmail, onChange: this.handleTextChange, onBlur: this.handleTextChange, maxLength: 50, placeholder: 'Personal/Alternative email address', pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$' }))),
                            React.createElement("div", { className: style.cell + " " + style['medium-8'] + " " + style['large-6'] },
                                React.createElement("div", { className: style['input-cell'] },
                                    React.createElement("label", { htmlFor: 'phoneNumber' }, "Phone number"),
                                    React.createElement("input", { type: 'tel', name: 'phoneNumber', id: 'phonenumber', value: this.state.phoneNumber, onChange: this.handleTextChange, onBlur: this.handleTextChange, maxLength: 50, placeholder: 'Enter a valid phone number' }))),
                            React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-8'] + " " + style['large-4'] },
                                React.createElement("div", { className: style['input-cell'] },
                                    React.createElement("label", { htmlFor: 'birthdate' }, "Birthday"),
                                    React.createElement(DatePicker, { name: 'birthdate', id: 'birthdate', selected: this.state.birthdate, onChange: this.handleBirthdateChanged.bind(this) }))),
                            React.createElement("h5", { style: this.textStyle }, "Bank Information"),
                            React.createElement("div", null,
                                React.createElement("label", { htmlFor: 'bankName' }, "Bank name"),
                                React.createElement("input", { type: 'text', name: 'bankName', id: 'bankname', value: this.state.bankName, onChange: this.handleTextChange, onBlur: this.handleTextChange, maxLength: 50 })),
                            React.createElement("div", null,
                                React.createElement("label", { htmlFor: 'accountNumber' }, "Account number"),
                                React.createElement("input", { type: 'text', name: 'accountNumber', id: 'accountnumber', value: this.state.accountNumber, onChange: this.handleTextChange, onBlur: this.handleTextChange, maxLength: 50 })),
                            React.createElement("h5", { style: this.textStyle }, "Address"),
                            React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-8'] + " " + style['large-9'] },
                                React.createElement("label", { htmlFor: 'addressLine' }, "Address line"),
                                React.createElement("textarea", { name: 'addressLine', id: 'addressline', value: this.state.address, onChange: this.handleTextAreaChange, onBlur: this.handleTextAreaChange, maxLength: 200 }),
                                React.createElement("div", { className: style['grid-x'] + " " + style['grid-margin-x'] },
                                    React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                        React.createElement("div", { className: style['input-cell'] },
                                            React.createElement("label", { className: style.required, htmlFor: 'country' }, "Country"),
                                            React.createElement(CountryDropdown, { value: this.state.country, onChange: function (val) { return _this.selectCountry(val); }, required: true }))),
                                    React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                        React.createElement("div", { className: style['input-cell'] },
                                            React.createElement("label", { className: style.required, htmlFor: 'region' }, "State/Province"),
                                            React.createElement(RegionDropdown, { country: this.state.country, value: this.state.region, onChange: function (val) { return _this.selectRegion(val); }, required: true })))),
                                React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                    React.createElement("div", { className: style['input-cell'] },
                                        React.createElement("label", { className: style.required, htmlFor: 'city' }, "City"),
                                        React.createElement("input", { type: 'text', name: 'city', id: 'city', value: this.state.city, onChange: this.handleTextChange, onBlur: this.handleTextChange, maxLength: 50, required: true }))))))))));
    };
    return AddEmployee;
}(Component));
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
export default connect(mapStateToProps, mapActionsToProps)(AddEmployee);
//# sourceMappingURL=index.js.map