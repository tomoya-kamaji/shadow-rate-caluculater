import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from './App';
import store from "./store";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const rootEl = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);

serviceWorker.unregister();
