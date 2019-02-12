import React, { Component } from "react";
import { connect } from "react-redux";
import "../../App.js";
import "./display-all-cupcakes.css";
import SingleCupcake from "../single-cupcake";

class CupcakeInfo extends Component {
  componentDidMount() {
    fetch("http://localhost:4000/cupcakeinfo", {
      //renvoie en response les info du cupcake selected
      method: "GET"
    })
      .then(x => {
        return x.json();
      })
      .then();
  }

  //logique pour pogner le cupcake cliquer(.find avec le this.props.cupcake)

  render() {
    return (
      <div>
        <div>
          <div>{/* img */}</div>
          <div>{/*video description */}</div>
        </div>
        <div>
          <button />
          <button />
        </div>
      </div>
    );
  }
}

export default connect(function(state) {
  return { cupcakes: state.cupcakes };
})(DisplayAllCupcakes);
