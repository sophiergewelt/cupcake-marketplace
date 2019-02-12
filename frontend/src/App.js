import "./App.css";
import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import AllCupcakes from "./Containers/all-cupcakes/";
import Homepage from "./Containers/homepage/";
import Signup from "./Components/signup/";
import AddCupcake from "./Components/add-cupcake/";

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

  renderAddCupcake = () => {
    return <AddCupcake />;
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
            <Route exact={true} path="/" render={this.renderHomePage} />
            <Route exact={true} path="/signup" render={this.renderSignupPage} />
            <Route exact={true} path="/sell" render={this.renderAddCupcake} />
            {/* <Route exact={true} path="/cart" render={this.renderCart} /> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
