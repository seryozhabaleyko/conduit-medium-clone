import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import store from 'store';
import App from 'components/App';
import ErrorBoundary from 'components/ErrorBoundary';

/* import Routes from "routes";
import TopBar from "components/topBar";
import { CurrentUserProvider } from "contexts/currentUser";
import CurrentUserChecker from 'components/currentUserChecker';

const App = () => (
    <CurrentUserProvider>
        <CurrentUserChecker>

            <TopBar />
            <Routes />
        </CurrentUserChecker>
    </CurrentUserProvider>
); */

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