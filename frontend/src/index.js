import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import { reducer as cupcakeReducer } from "./store/cupcakes/reducer";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import firebase from "./loginGoogle.js";

<<<<<<< Updated upstream
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    store.dispatch({ type: "logginStatus", status: true });
  } else {
    store.dispatch({ type: "logginStatus", status: false });
  }
  // console.log(status);
});
=======
// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     store.dispatch({ type: "logginStatus", status: true });
//   } else {
//     store.dispatch({ type: "logginStatus", status: false });
//   }
// });
>>>>>>> Stashed changes

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

serviceWorker.unregister();
