import React, { Component } from "react";
import "./all-cupcakes.css";
import DisplayAllCupcakes from "../../Components/display-all-cupcakes/";

class AllCupcakes extends Component {
  render() {
    let welcomeText = "Welcome *user*";
    return (
      <div>
        <p>{welcomeText}</p>
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

export default AllCupcakes;
