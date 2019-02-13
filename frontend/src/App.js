import "./App.css";
import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import AllCupcakes from "./Containers/all-cupcakes/";
import Homepage from "./Containers/homepage/";
import Signup from "./Components/signup/";
<<<<<<< HEAD
// import AddCupcake from "./Components/addcupcake/AddCupcake";
=======
import AddCupcake from "./Components/add-cupcake/";
>>>>>>> efbca67bd7e292191d7063da6911ddc776df7c89

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

<<<<<<< HEAD
  // renderAddCupcake = () => {
  //   return <AddCupcake />;
  // };
=======
  renderAddCupcake = () => {
    return <AddCupcake />;
  };
>>>>>>> efbca67bd7e292191d7063da6911ddc776df7c89

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
<<<<<<< HEAD
            {/* <Route
              exact={true}
              path="/addcupcake"
              render={this.renderAddCupcake}
            /> */}
=======
            <Route exact={true} path="/sell" render={this.renderAddCupcake} />
>>>>>>> efbca67bd7e292191d7063da6911ddc776df7c89
            {/* <Route exact={true} path="/cart" render={this.renderCart} /> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
