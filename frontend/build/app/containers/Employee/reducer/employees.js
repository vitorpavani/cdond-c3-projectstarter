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
var _a;
import { handleActions } from 'redux-actions';
import { EmployeeActions } from '../actions';
export var employeesInitialState = {
    errorMessage: '',
    isFetching: false,
    employees: [],
};
export var employeeReducer = handleActions((_a = {},
    _a[EmployeeActions.Type.FETCH_EMPLOYEES_REQUEST] = function (state) {
        return __assign(__assign({}, state), { isFetching: true });
    },
    _a[EmployeeActions.Type.FETCH_EMPLOYEES_FAILURE] = function (state, action) {
        return __assign(__assign({}, state), { isFetching: false, errorMessage: action.payload.message || '' });
    },
    _a[EmployeeActions.Type.FETCH_EMPLOYEES_SUCCESS] = function (state, action) {
        var payload = action.payload;
        if (!payload) {
            return __assign(__assign({}, state), { isFetching: false });
        }
        return __assign(__assign({}, state), { isFetching: false, employees: payload.employees });
    },
    _a[EmployeeActions.Type.ADD_EMPLOYEE_REQUEST] = function (state) {
        return __assign(__assign({}, state), { isFetching: true });
    },
    _a[EmployeeActions.Type.ADD_EMPLOYEE_FAILURE] = function (state, action) {
        return __assign(__assign({}, state), { isFetching: false, errorMessage: action.payload.message || '' });
    },
    _a[EmployeeActions.Type.ADD_EMPLOYEE_SUCCESS] = function (state) {
        return __assign(__assign({}, state), { isFetching: false });
    },
    _a[EmployeeActions.Type.UPDATE_EMPLOYEE_DISPLAY_NAME_FAILURE] = function (state, action) {
        return __assign(__assign({}, state), { isFetching: false, errorMessage: action.payload.message });
    },
    _a), employeesInitialState);
//# sourceMappingURL=employees.js.map