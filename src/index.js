import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import store from 'store';
import App from 'components/App';

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
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);