import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import { reducer as cupcakeReducer } from "./store/cupcakes/reducer";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import firebase from "../../frontend/src/Components/login/loginGoogle.js";

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("firebase autentification sucessfull");
    console.log("fuser:", user);
    let requestBody = JSON.stringify({
      username: user.displayName,
      password: "",
      location: "MONTREAL"
    });

    fetch("http://localhost:4000/login", {
      method: "POST",
      body: requestBody
    })
      .then(function(x) {
        return x.text();
      })
      .then(responseBody => {
        // when we receive the body, run this function
        console.log("responseBody from login", responseBody);
        let body = JSON.parse(responseBody);
        console.log("parsed responseBody from login", body);
      });
    store.dispatch({ type: "login-success", status: true });
  } else {
    store.dispatch({ type: "login-failed", status: false });
  }
});

const store = createStore(
  cupcakeReducer,
  { cupcakes: [], searchResult: [] }, // initial state
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
