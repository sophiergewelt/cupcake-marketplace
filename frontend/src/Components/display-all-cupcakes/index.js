import React, { Component } from "react";
import { connect } from "react-redux";
import "../../App.js";
import "./display-all-cupcakes.css";
import SingleCupcake from "../single-cupcake";

class DisplayAllCupcakes extends Component {
  componentDidMount() {
    fetch("http://localhost:4000/allcupcakes", {
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
    return <div>{cupcakes}</div>;
  }
}

export default connect(function(state) {
  return { cupcakes: state.cupcakes };
})(DisplayAllCupcakes);
