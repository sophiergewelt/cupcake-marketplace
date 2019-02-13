import React, { Component } from "react";
import "./all-cupcakes.css";
import DisplayAllCupcakes from "../../Components/display-all-cupcakes/";
import Search from "../../search/search";
import styled from "styled-components";

const MainContainer = styled.div`
  text-align: -webkit-center;
`;

class AllCupcakes extends Component {
  render() {
    return (
      <MainContainer>
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
          <h3>Browse our cupcakes</h3>
          <DisplayAllCupcakes />
        </div>
      </MainContainer>
    );
  }
}

export default AllCupcakes;
