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
import { EmployeeActions } from '../actions';
import { employeeReducer, employeesInitialState } from './employees';
describe('Employees Reducer', function () {
    var initialState = __assign({}, employeesInitialState);
    describe(EmployeeActions.Type.ADD_EMPLOYEE_REQUEST, function () {
        it('Should set the isFetching flag to true', function () {
            var state = __assign(__assign({}, initialState), { isFetching: false });
            var action = EmployeeActions.addEmployeeRequest();
            var mutatedState = employeeReducer(state, action);
            expect(mutatedState.isFetching).toBeTruthy();
        });
    });
    describe(EmployeeActions.Type.ADD_EMPLOYEE_FAILURE, function () {
        it('Should update the state error message', function () {
            var state = __assign(__assign({}, initialState), { isFetching: true });
            var error = 'Ups! Something went wrong :)';
            var action = EmployeeActions.addEmployeeFailure(error);
            var mutatedState = employeeReducer(state, action);
            expect(mutatedState.isFetching).toBeFalsy();
        });
    });
    describe(EmployeeActions.Type.ADD_EMPLOYEE_SUCCESS, function () {
        it('Should set the isFetching flag to false', function () {
            var state = __assign(__assign({}, initialState), { isFetching: true });
            var action = EmployeeActions.addEmployeeSuccess(true);
            var mutatedState = employeeReducer(state, action);
            expect(mutatedState.isFetching).toBeFalsy();
        });
    });
});
//# sourceMappingURL=employees.spec.js.map