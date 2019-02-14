import React, { Component } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  margin: 3%;
  text-align: center;
  justify-content: center;
`;

export default class SearchResult extends Component {
  render() {
    let searchedCupcakes = this.props.searchCupcakesArray;
    console.log("searchedCupcakes", searchedCupcakes);
    return (
      <div>
        <div>
          <MainContainer>{searchedCupcakes}</MainContainer>
        </div>
      </div>
    );
  }
}
