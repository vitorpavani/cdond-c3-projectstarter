import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { employeeReducer } from '../containers/Employee/reducer/employees';
export var rootReducer = combineReducers({
    router: routerReducer,
    employees: employeeReducer,
});
//# sourceMappingURL=index.js.map