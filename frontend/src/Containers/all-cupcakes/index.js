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
        <div className="App">
          <div class="top-of-cupcake">
            <h3 className="title">Browse the cupcakes</h3>

            <a href="http://localhost:3000/sell" class="sell-btn">
              <input
                // placeholder for SellCupcakes class
                type="button"
                className="button"
                value="Sell cupcakes"
              />
            </a>
          </div>
          <DisplayAllCupcakes />
          <Logout />
        </div>
      </MainContainer>
    );
  }
}

export default AllCupcakes;
