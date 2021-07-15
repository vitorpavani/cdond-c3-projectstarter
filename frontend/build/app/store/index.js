import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { logger } from 'app/middleware';
import { rootReducer } from 'app/reducers';
import thunk from 'redux-thunk';
export function configureStore(history, initialState) {
    var middleware = applyMiddleware(logger, thunk, routerMiddleware(history));
    if (process.env.NODE_ENV !== 'production') {
        middleware = composeWithDevTools(middleware);
    }
    var store = createStore(connectRouter(history)(rootReducer), initialState, middleware);
    if (module.hot) {
        module.hot.accept('app/reducers', function () {
            var nextReducer = require('app/reducers');
            store.replaceReducer(nextReducer);
        });
    }
    return store;
}
//# sourceMappingURL=index.js.map