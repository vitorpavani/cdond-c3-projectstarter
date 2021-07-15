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
import React, { Component } from 'react';
import Gravatar from 'react-gravatar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { SalaryType } from '../../models/EmployeeModel';
import { EmployeeActions } from '../../actions';
import { bindActionCreators } from 'redux';
import { omit, showErrorNotification } from 'app/utils';
import { connect } from 'react-redux';
import style from '../../../../style.local.css';
import { EmployeesService } from '../../services';
import TagsInput from 'react-tagsinput';
import { SearchInput, Breadcrumb, SearchBar } from 'app/components';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { withAutoSave } from './withAutoSave';
import { isInputEmpty, isInputGreaterThanOrEqualMinValue, doesInputMatchesEmailPattern } from './inputValidations';
var EditEmployee = (function (_super) {
    __extends(EditEmployee, _super);
    function EditEmployee(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.clearFields = function () {
            _this.setState({
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
            });
        };
        _this.processInputChange = function (statePayload, requestExecutionCallback, isInputValid, invalidInputMessage) {
            if (isInputValid === void 0) { isInputValid = true; }
            var debounceCallback = function () {
                if (isInputValid) {
                    requestExecutionCallback();
                }
                else {
                    invalidInputMessage && showErrorNotification(invalidInputMessage);
                }
            };
            _this.props.debounce(Object.keys(statePayload)[0], debounceCallback);
            _this.setState(__assign(__assign({}, _this.state), statePayload));
        };
        _this.handleDisplayNameChange = function (event) {
            var _a = event.target, value = _a.value, name = _a.name;
            var requestExecutionCallback = function () { return _this.props.actions.updateStringField(_this.state.employeeId, { value: value }, name); };
            _this.processInputChange({ displayName: value }, requestExecutionCallback, !isInputEmpty(value), "Display Name field is required");
        };
        _this.handleFirstNameChange = function (_a) {
            var target = _a.target;
            var _b = _this.state, middleName = _b.middleName, lastName = _b.lastName, secondLastName = _b.secondLastName;
            var requestExecutionCallback = function () { return _this.props.actions.updateNames(_this.state.employeeId, { firstName: target.value, lastName: lastName, middleName: middleName, secondLastName: secondLastName }); };
            _this.processInputChange({ firstName: target.value }, requestExecutionCallback, !isInputEmpty(target.value), "First name field is required");
        };
        _this.handleMiddleNameChange = function (_a) {
            var target = _a.target;
            var _b = _this.state, firstName = _b.firstName, lastName = _b.lastName, secondLastName = _b.secondLastName;
            var requestExecutionCallback = function () { return _this.props.actions.updateNames(_this.state.employeeId, { firstName: firstName, lastName: lastName, middleName: target.value, secondLastName: secondLastName }); };
            _this.processInputChange({ middleName: target.value }, requestExecutionCallback);
        };
        _this.handleLastNameChange = function (_a) {
            var target = _a.target;
            var _b = _this.state, firstName = _b.firstName, middleName = _b.middleName, secondLastName = _b.secondLastName;
            var value = target.value;
            var requestExecutionCallback = function () { return _this.props.actions.updateNames(_this.state.employeeId, { firstName: firstName, middleName: middleName, lastName: value, secondLastName: secondLastName }); };
            _this.processInputChange({ lastName: value }, requestExecutionCallback, !isInputEmpty(value), "Last name field is required");
        };
        _this.handleSecondLastNameChange = function (_a) {
            var target = _a.target;
            var _b = _this.state, firstName = _b.firstName, middleName = _b.middleName, lastName = _b.lastName;
            var value = target.value;
            var requestExecutionCallback = function () { return _this.props.actions.updateNames(_this.state.employeeId, { firstName: firstName, middleName: middleName, lastName: lastName, secondLastName: value }); };
            _this.processInputChange({ secondLastName: target.value }, requestExecutionCallback);
        };
        _this.handleSalaryChange = function (event) {
            var _a = event.target, name = _a.name, value = _a.value;
            var salaryMinValue = 0.01;
            var salaryValue = Number(value);
            var requestExecutionCallback = function () { return _this.props.actions.updateNumberField(_this.state.employeeId, { value: salaryValue }, name); };
            _this.processInputChange({ salary: salaryValue }, requestExecutionCallback, isInputGreaterThanOrEqualMinValue(salaryValue, salaryMinValue), "Salary must be greater than or equal to " + salaryMinValue);
        };
        _this.handleCompanyEmailChange = function (event) {
            var _a = event.target, value = _a.value, name = _a.name;
            var requestExecutionCallback = function () { return _this.props.actions.updateStringField(_this.state.employeeId, { value: value }, name); };
            _this.processInputChange({ companyEmail: value }, requestExecutionCallback, !isInputEmpty(value) && doesInputMatchesEmailPattern(value), "Company email is invalid");
        };
        _this.handlePersonalEmailChange = function (event) {
            var _a = event.target, value = _a.value, name = _a.name;
            var requestExecutionCallback = function () { return _this.props.actions.updateStringField(_this.state.employeeId, { value: value }, name); };
            _this.processInputChange({ personalEmail: value }, requestExecutionCallback, isInputEmpty(value) || doesInputMatchesEmailPattern(value), "Personal email is invalid");
        };
        _this.handlePhoneNumberChange = function (event) {
            var _a = event.target, value = _a.value, name = _a.name;
            var requestExecutionCallback = function () { return _this.props.actions.updateStringField(_this.state.employeeId, { value: value }, name); };
            _this.processInputChange({ phoneNumber: value }, requestExecutionCallback);
        };
        _this.handleCityChange = function (event) {
            var value = event.target.value;
            var _a = _this.state, address = _a.address, country = _a.country, region = _a.region, employeeId = _a.employeeId;
            var requestExecutionCallback = function () { return _this.props.actions.updateAddress(employeeId, { address: address, country: country, region: region, city: value }); };
            _this.processInputChange({ city: value }, requestExecutionCallback, !isInputEmpty(value), "City is invalid");
        };
        _this.selectCountry = function (val) {
            var country = val;
            var _a = _this.state, address = _a.address, city = _a.city, region = _a.region, employeeId = _a.employeeId;
            var requestExecutionCallback = function () { return _this.props.actions.updateAddress(employeeId, { address: address, country: country, region: region, city: city }); };
            _this.processInputChange({ country: country }, requestExecutionCallback, !isInputEmpty(country), "Country is invalid");
        };
        _this.selectRegion = function (val) {
            var region = val;
            var _a = _this.state, address = _a.address, city = _a.city, country = _a.country, employeeId = _a.employeeId;
            var requestExecutionCallback = function () { return _this.props.actions.updateAddress(employeeId, { address: address, country: country, region: region, city: city }); };
            _this.processInputChange({ region: region }, requestExecutionCallback, !isInputEmpty(region), "Region is invalid");
        };
        _this.handleAddressLineChange = function (event) {
            var value = event.target.value;
            var _a = _this.state, country = _a.country, region = _a.region, city = _a.city, employeeId = _a.employeeId;
            var requestExecutionCallback = function () { return _this.props.actions.updateAddress(employeeId, { address: value, country: country, region: region, city: city }); };
            _this.processInputChange({ address: value }, requestExecutionCallback);
        };
        _this.handleBirthdateChanged = function (date) {
            var birthdate = date || new Date();
            _this.processInputChange({ birthdate: birthdate }, function () { return _this.props.actions.updateDateField(_this.state.employeeId, { value: birthdate }, 'birthdate'); });
        };
        _this.handleEffectiveDateChanged = function (date) {
            var effectiveDate = date || new Date();
            _this.processInputChange({ effectiveDate: effectiveDate }, function () { return _this.props.actions.updateDateField(_this.state.employeeId, { value: effectiveDate }, 'effectiveDate'); }, !isInputEmpty(effectiveDate.toString()), "Effective Date is invalid");
        };
        _this.handleTagsChange = function (newTags) {
            _this.processInputChange({ tags: newTags }, function () { return _this.props.actions.updateStringField(_this.state.employeeId, { value: JSON.stringify(newTags) }, 'tags'); });
        };
        _this.handleSearch = function (searchText) { };
        _this.handleSalaryTypeChange = function (event) {
            var value = event.target.value;
            _this.processInputChange({ salaryType: value }, function () { return _this.props.actions.updateStringField(_this.state.employeeId, { value: value }, 'salaryType'); });
        };
        _this.statusOnChange = function () {
            var _a = _this.state, employeeId = _a.employeeId, isActive = _a.isActive;
            _this.processInputChange({ isActive: !isActive }, function () { return isActive ? _this.props.actions.deactivateEmployee(employeeId) : _this.props.actions.activateEmployee(employeeId); });
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
        _this.employeeService = new EmployeesService();
        var employeeId = _this.props.match.params.employeeId;
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
        };
        return _this;
    }
    EditEmployee.prototype.componentDidMount = function () {
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
                            effectiveDate: new Date(employee.effectiveDate),
                            isActive: employee.isActive,
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
    EditEmployee.prototype.render = function () {
        var _a = this.props, isFetching = _a.isFetching, searchText = _a.searchText;
        var generalSearch = (React.createElement(SearchInput, { isFetching: isFetching, searchText: searchText, onSearchChange: this.handleSearch, placeholder: 'Search in the app', title: 'General Search' }));
        return (React.createElement("div", { className: style['g-container'] + " " + style.fluid },
            React.createElement(SearchBar, { searchInput: generalSearch }),
            React.createElement("div", { className: style['g-sectionbar'] + " " + style['grid-x'] },
                React.createElement(Breadcrumb, { rootPathName: this.state.displayName, isSecondaryPage: true },
                    React.createElement("li", null,
                        React.createElement("a", { onClick: this.goBackToEmployees }, "Employees")),
                    React.createElement("li", null,
                        React.createElement("a", { onClick: this.goBackToEmployees }, "View & Manage")),
                    React.createElement("li", null,
                        React.createElement("a", { style: this.thirdLevelBreadcrumb }, "Modify")))),
            React.createElement("div", { className: style['g-content'] + " " + style['grid-container'] + " " + style.fluid, style: this.textStyle },
                React.createElement("form", { autoComplete: 'off' },
                    React.createElement("div", { className: style['g-main'] + " " + style['grid-x'] + " " + style['grid-margin-x'] },
                        React.createElement("div", { className: style.cell + " " + style['medium-4'] + " " + style['large-3'] },
                            React.createElement("div", { className: style['cont-gravatar'] },
                                React.createElement(Gravatar, { email: this.state.companyEmail, size: 150, className: style['e-avatar-empty'] })),
                            React.createElement("h5", { style: this.textStyle }, "tags"),
                            React.createElement(TagsInput, { value: this.state.tags, onChange: this.handleTagsChange }),
                            React.createElement("small", { className: 'medium-gray' }, "Press tab to create tags.")),
                        React.createElement("div", { className: style.cell + " " + style['medium-6'] + " " + style['large-6'] },
                            React.createElement("div", { className: style['input-cell'] },
                                React.createElement("label", { htmlFor: 'displayname', className: style.required }, "Display Name"),
                                React.createElement("input", { type: 'text', name: 'displayName', id: 'displayname', value: this.state.displayName, onChange: this.handleDisplayNameChange, maxLength: 50, className: 'largeinput', placeholder: 'Display Name', required: true })),
                            React.createElement("div", { className: style['grid-x'] + " " + style['grid-margin-x'] },
                                React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                    React.createElement("div", { className: style['input-cell'] },
                                        React.createElement("label", { htmlFor: 'firstname', className: style.required }, "First Name"),
                                        React.createElement("input", { type: 'text', name: 'firstName', id: 'firstname', value: this.state.firstName, onChange: this.handleFirstNameChange, required: true, maxLength: 50 }))),
                                React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                    React.createElement("div", { className: style['input-cell'] },
                                        React.createElement("label", { htmlFor: 'middlename' }, "Middle name"),
                                        React.createElement("input", { type: 'text', name: 'middleName', id: 'middlename', value: this.state.middleName, onChange: this.handleMiddleNameChange, maxLength: 50 })))),
                            React.createElement("div", { className: style['grid-x'] + " " + style['grid-margin-x'] },
                                React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                    React.createElement("div", { className: style['input-cell'] },
                                        React.createElement("label", { htmlFor: 'lastname', className: style.required }, "Last Name"),
                                        React.createElement("input", { type: 'text', name: 'lastName', id: 'lastname', value: this.state.lastName, onChange: this.handleLastNameChange, required: true, maxLength: 50 }))),
                                React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                    React.createElement("div", { className: style['input-cell'] },
                                        React.createElement("label", { htmlFor: 'secondlastname' }, "Second Last Name"),
                                        React.createElement("input", { type: 'text', name: 'secondLastName', id: 'secondlastname', value: this.state.secondLastName, onChange: this.handleSecondLastNameChange, maxLength: 50 })))),
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
                                            React.createElement("input", { type: 'number', name: 'salary', id: 'salary', value: this.state.salary, onChange: this.handleSalaryChange, min: '0.01', step: '0.01' }),
                                            React.createElement("label", { className: style['medium-gray'] }, this.state.salaryType === SalaryType.HOURLY
                                                ? '/hour'
                                                : '/year')))),
                                React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                    React.createElement("label", { htmlFor: 'effectiveDate', className: style.required }, "Effective Date"),
                                    React.createElement(DatePicker, { name: 'effectiveDate', id: 'effectiveDate', selected: this.state.effectiveDate, onChange: this.handleEffectiveDateChanged, required: true }))),
                            React.createElement("h5", { style: this.textStyle }, "Contact info"),
                            React.createElement("div", { className: style.cell + " " + style['medium-8'] + " " + style['large-6'] },
                                React.createElement("div", { className: style['input-cell'] },
                                    React.createElement("label", { htmlFor: 'email', className: style.required }, "Email"),
                                    React.createElement("input", { type: 'email', name: 'companyEmail', id: 'email', value: this.state.companyEmail, onChange: this.handleCompanyEmailChange, required: true, maxLength: 50, placeholder: 'Organization email address', pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$' }))),
                            React.createElement("div", { className: style.cell + " " + style['medium-8'] + " " + style['large-6'] },
                                React.createElement("div", { className: style['input-cell'] },
                                    React.createElement("label", { htmlFor: 'personalEmail' }, "Personal email"),
                                    React.createElement("input", { type: 'email', name: 'personalEmail', id: 'personalemail', value: this.state.personalEmail, onChange: this.handlePersonalEmailChange, maxLength: 50, placeholder: 'Personal/Alternative email address', pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$' }))),
                            React.createElement("div", { className: style.cell + " " + style['medium-8'] + " " + style['large-6'] },
                                React.createElement("div", { className: style['input-cell'] },
                                    React.createElement("label", { htmlFor: 'phoneNumber' }, "Phone number"),
                                    React.createElement("input", { type: 'tel', name: 'phoneNumber', id: 'phonenumber', value: this.state.phoneNumber, onChange: this.handlePhoneNumberChange, maxLength: 50, placeholder: 'Enter a valid phone number' }))),
                            React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-8'] + " " + style['large-4'] },
                                React.createElement("div", { className: style['input-cell'] },
                                    React.createElement("label", { htmlFor: 'birthdate' }, "Birthday"),
                                    React.createElement(DatePicker, { name: 'birthdate', id: 'birthdate', selected: this.state.birthdate, onChange: this.handleBirthdateChanged }))),
                            React.createElement("h5", { style: this.textStyle }, "Address"),
                            React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-8'] + " " + style['large-9'] },
                                React.createElement("label", { htmlFor: 'addressLine' }, "Address line"),
                                React.createElement("textarea", { name: 'addressLine', id: 'addressline', value: this.state.address, onChange: this.handleAddressLineChange, maxLength: 200 }),
                                React.createElement("div", { className: style['grid-x'] + " " + style['grid-margin-x'] },
                                    React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                        React.createElement("div", { className: style['input-cell'] },
                                            React.createElement("label", { className: style.required, htmlFor: 'country' }, "Country"),
                                            React.createElement(CountryDropdown, { value: this.state.country, onChange: this.selectCountry, required: true }))),
                                    React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                        React.createElement("div", { className: style['input-cell'] },
                                            React.createElement("label", { className: style.required, htmlFor: 'region' }, "State/Province"),
                                            React.createElement(RegionDropdown, { country: this.state.country, value: this.state.region, onChange: this.selectRegion, required: true })))),
                                React.createElement("div", { className: style.cell + " " + style['small-12'] + " " + style['medium-6'] },
                                    React.createElement("div", { className: style['input-cell'] },
                                        React.createElement("label", { className: style.required, htmlFor: 'city' }, "City"),
                                        React.createElement("input", { type: 'text', name: 'city', id: 'city', value: this.state.city, onChange: this.handleCityChange, maxLength: 50, required: true }))))),
                        React.createElement("div", { className: style.cell + " " + style['medium-2'] + " " + style['large-3'] },
                            React.createElement("div", { className: style['e-emp-status'] },
                                React.createElement("label", { htmlFor: 'displayname' }, "Employee Status"),
                                React.createElement("div", { className: style['e-status-mark'] + " " + (!this.state.isActive ? style.disabled : style.active) }),
                                React.createElement("select", { onChange: this.statusOnChange, value: !this.state.isActive ? 'Disabled' : 'Active' },
                                    React.createElement("option", null, "Active"),
                                    React.createElement("option", null, "Disabled")))))))));
    };
    return EditEmployee;
}(Component));
export { EditEmployee };
function mapStateToProps(state) {
    return {
        isFetching: state.isFetching,
        errorMessage: state.errorMessage,
    };
}
function mapActionsToProps(dispatch) {
    return {
        actions: bindActionCreators(omit(EmployeeActions, 'Type'), dispatch),
    };
}
var autoSaveComponent = withAutoSave(EditEmployee);
export default connect(mapStateToProps, mapActionsToProps)(autoSaveComponent);
//# sourceMappingURL=index.js.map