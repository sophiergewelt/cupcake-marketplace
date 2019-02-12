import "./App.css";
import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import AllCupcakes from "./Containers/all-cupcakes/";
import Homepage from "./Containers/homepage/";
import Signup from "./Components/signup/";

class App extends Component {
  renderAllCupcakes = () => {
    return <AllCupcakes />;
  };

  renderHomePage = () => {
    return <Homepage />;
  };

  renderSignupPage = () => {
    return <Signup />;
  };

  // renderCart = () => {
  //   return <Cart />;
  // };

  render() {
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
            <Route exact={true} path="/signup" render={this.renderSignupPage} />
            {/* <Route exact={true} path="/cart" render={this.renderCart} /> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
