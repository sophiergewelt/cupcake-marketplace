import React, { Component } from "react";
import { connect } from "react-redux";
import "../../App.js";
import SingleCupcake from "../single-cupcake";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  margin: 3%;
  text-align: center;
  justify-content: center;
`;

class DisplayAllCupcakes extends Component {
  componentDidMount() {
    fetch("http://178.128.230.45:4000/allcupcakes", {
      method: "GET"
    })
      .then(x => {
        return x.json();
      })
      .then(x => {
        this.props.dispatch({
          type: "setCupcakes",
          cupcakes: x.cupcakes
        });
      });
  }

  renderAllCupcakes = () => {
    let newCupcakesArray = this.props.cupcakes.map((cupcake, index) => {
      return <SingleCupcake key={index} cupcake={cupcake} />;
    });
    return newCupcakesArray;
  };

  render() {
    let cupcakes = this.renderAllCupcakes();
    return (
      <div>
        <MainContainer>{cupcakes}</MainContainer>
      </div>
    );
  }
}

export default connect(function(state) {
  return { cupcakes: state.cupcakes };
})(DisplayAllCupcakes);
