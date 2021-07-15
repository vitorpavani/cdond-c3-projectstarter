import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { configureStore } from 'app/store';
import Root from './app';
import history from './browserHistory';
var store = configureStore(history);
ReactDOM.render(React.createElement(Provider, { store: store },
    React.createElement(ConnectedRouter, { history: history },
        React.createElement(Root, null))), document.getElementById('root'));
//# sourceMappingURL=main.js.map