import "./App.css";
import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import AllCupcakes from "./Containers/all-cupcakes/";
import Homepage from "./Containers/homepage/";
import Signup from "./Components/signup/";
<<<<<<< Updated upstream
import AddCupcake from "./Components/add-cupcake/";
=======
import CupcakePage from "./Components/cupcakePage/CupcakePage.js";
// import AddCupcake from "./Components/addcupcake/AddCupcake";
// import AddCupcake from "./Components/add-cupcake/";
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
  renderAddCupcake = () => {
    return <AddCupcake />;
=======
  // renderAddCupcake = () => {
  //   return <AddCupcake />;
  // };

  // renderAddCupcake = () => {
  //   return <AddCupcake />;
  // };

  renderGetCupcake = routerData => {
    return <CupcakePage itemid={routerData.match.params.id} />;
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
            <Route
              exact={true}
              path="/getcupcake/:id"
              render={this.renderGetCupcake}
            />
>>>>>>> Stashed changes
            {/* <Route exact={true} path="/cart" render={this.renderCart} /> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
