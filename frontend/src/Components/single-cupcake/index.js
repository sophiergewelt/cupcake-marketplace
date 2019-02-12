import React, { Component } from "react";
import { connect } from "react-redux";
import "../../App.js";
import "./single-cupcake.css";

class SingleCupcake extends Component {
  render() {
    return (
      <div className="cupcake">
        <img src={this.props.cupcake.picture} alt="one-cupcake" />
        <p className="name">{this.props.cupcake.name}</p>
        <p className="category">{this.props.cupcake.category}</p>
        <p className="price">{this.props.cupcake.price}$/each</p>
        <p className="seller">{this.props.cupcake.userID}</p>
      </div>
    );
  }
}

export default connect()(SingleCupcake);