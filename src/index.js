import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "routes";
import TopBar from "components/topBar";
import { CurrentUserProvider } from "contexts/currentUser";
import CurrentUserChecker from 'components/currentUserChecker';

const App = () => (
  <CurrentUserProvider>
    <CurrentUserChecker>
      <Router>
        <TopBar />
        <Routes />
      </Router>
    </CurrentUserChecker>
  </CurrentUserProvider>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
