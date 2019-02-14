import "./App.css";
import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import AllCupcakes from "./Containers/all-cupcakes/";
import Homepage from "./Containers/homepage/";
import Signup from "./Components/signup/";
import CupcakePage from "./Components/cupcakePage/CupcakePage.js";
// import AddCupcake from "./Components/addcupcake/AddCupcake";
import AddCupcake from "./Components/add-cupcake/";
import SearchBox from "./Components/search-box";
import SearchContainer from "./Components/search-container";
import SearchResult from "./Components/search-result";
// import Cart from "./Components/buy-cupcake"

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

  renderGetCupcake = routerData => {
    return <CupcakePage itemid={routerData.match.params.id} />;
  };

  renderSearchedCupcakes = () => {
    return <SearchResult />;
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <header className="banner">
              <a href="http://localhost:3000/all-cupcakes">
                <img className="banner-logo" src="/banner.png" alt="banner" />
              </a>
              <SearchContainer />
            </header>
            <SearchResult />
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
            <Route
              exact={true}
              path="/search-result"
              render={this.renderSearchedCupcakes}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
