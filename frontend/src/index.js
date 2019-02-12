import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import { reducer as cupcakeReducer } from "./store/cupcakes/reducer";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";

const store = createStore(
  cupcakeReducer,
  { cupcakes: [] }, // initial state
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
    <div />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
