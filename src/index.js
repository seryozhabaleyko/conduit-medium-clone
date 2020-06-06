import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import store from 'store';
import App from 'components/App';
import ErrorBoundary from 'components/ErrorBoundary';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);