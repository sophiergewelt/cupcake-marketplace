import React, { Component } from "react";
import styled from "styled-components";
import SingleCupcake from "../../Components/single-cupcake/";
import { connect } from "react-redux";

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  margin: 3%;
  margin-top: -1.5%;
  text-align: center;
  justify-content: center;
`;

class SearchResult extends Component {
  render() {
    let newCupcakesArray = this.props.searchResult.map((cupcake, index) => {
      return <SingleCupcake key={index} cupcake={cupcake} />;
    });

    return (
      <div>
        <MainContainer>{newCupcakesArray}</MainContainer>
      </div>
    );
  }
}

let ConnectedSearchResults = connect(state => {
  return { searchResult: state.searchResult };
})(SearchResult);

export default ConnectedSearchResults;
