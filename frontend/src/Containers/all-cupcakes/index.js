import React, { Component } from "react";
import "./all-cupcakes.css";
import DisplayAllCupcakes from "../../Components/display-all-cupcakes/";
import Search from "../../search/search";

class AllCupcakes extends Component {
  render() {
    return (
      <div>
        <input
          // placeholder for SellCupcakes class
          type="button"
          value="Sell cupcakes"
          onClick={this.sellCupcakes}
        />
        {/* placeholder for Cart */}
        <input type="button" value="Cart" onClick={this.shoppingCart} />
        <div className="App">
          <Search />
          <h3>Browse the cupcakes</h3>
          <DisplayAllCupcakes />
        </div>
      </div>
    );
  }
}

export default AllCupcakes;
