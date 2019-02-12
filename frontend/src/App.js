import "./App.css";
import React, { Component } from "react";
import DisplayAllCupcakes from "./display-all-cupcakes/displayAllCupcakes";

class App extends Component {
  render() {
    let welcomeText = "Welcome *user*";

    return (
      <div>
        <h2>{welcomeText}</h2>
        <p />
        <input
          type="button"
          value="Sell cupcakes"
          onClick={this.sellCupcakes}
        />
        <input type="button" value="Cart" onClick={this.shoppingCart} />
        <div className="App">
          <h1>Browse the cupcakes</h1>
          <DisplayAllCupcakes />
        </div>
      </div>
    );
  }
}

export default App;
