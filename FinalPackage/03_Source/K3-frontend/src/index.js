import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { Globalstyled } from "./app/globalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Globalstyled />
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
