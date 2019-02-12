import "./App.css";
import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import AllCupcakes from "./Containers/all-cupcakes/";
import Homepage from "./Containers/homepage/";

class App extends Component {
  renderAllCupcakes = () => {
    return <AllCupcakes />;
  };

  renderHomePage = () => {
    return <Homepage />;
  };

import { connect, Provider } from "react-redux";
import React, { Component } from "react";
// import Login from "./logincomponents/login.js";
// import Signup from "./logincomponents/signup.js";
// import reducer from "./logincomponents/reducer.js";
// import logo from "./logo.svg";
import "./App.css";



class UnconnectedApp extends Component {
  render() {
    // console.log("sid!!!", this.props.sid);
    if (this.props.lgin) {
      console.log("made it trough the IF UnconnectedApp ");
      alert("Connection to chat room successful");
      return (
        <div>
          {/* this is my session id : {this.props.sid} */}
          TESTING TESTING TESTING
          {/* <Chat /> */}
        </div>
      );
    }

    return (
      <div>
        <BrowserRouter>
          <div>
            <Route
              exact={true}
              path="/all-cupcakes"
              render={this.renderAllCupcakes}
            />
            <Route exact={true} path="/homepage" render={this.renderHomePage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
let App = connect(function(state) {
  console.log("redux! ", state);

})(UnconnectedApp);


export default App;
