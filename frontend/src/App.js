import "./App.css";
import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import AllCupcakes from "./Containers/all-cupcakes/";
import Homepage from "./Containers/homepage/";
import Signup from "./Components/signup/";
import CupcakePage from "./Components/cupcakePage/CupcakePage.js";
// import AddCupcake from "./Components/addcupcake/AddCupcake";
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

  // renderAddCupcake = () => {
  //   return <AddCupcake />;
  // };

  renderGetCupcake = routerData => {
    return <CupcakePage itemid={routerData.match.params.id} />;
  };

  // renderCart = () => {
  //   return <Cart />;
  // };

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <header className="banner">
              <img className="banner-logo" src="/banner.png" alt="banner" />
            </header>
            <Route
              exact={true}
              path="/all-cupcakes"
              render={this.renderAllCupcakes}
            />
            <Route exact={true} path="/" render={this.renderHomePage} />
            <Route exact={true} path="/signup" render={this.renderSignupPage} />
            <Route exact={true} path="/sell" render={this.renderAddCupcake} />
            <Route
              exact={true}
              path="/getcupcake/:id"
              render={this.renderGetCupcake}
            />
            {/* <Route exact={true} path="/cart" render={this.renderCart} /> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
