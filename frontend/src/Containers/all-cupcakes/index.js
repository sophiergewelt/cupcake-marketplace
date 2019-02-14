import React, { Component } from "react";
import "./all-cupcakes.css";
import DisplayAllCupcakes from "../../Components/display-all-cupcakes/";
import styled from "styled-components";
import Logout from "../../Components/login/logout";
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
          <h3>Browse the cupcakes</h3>
          <DisplayAllCupcakes />
          <Logout />
        </div>
      </MainContainer>
    );
  }
}

export default AllCupcakes;
