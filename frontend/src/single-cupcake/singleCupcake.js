import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.js";
// import "./main.css";

class SingleCupcake extends Component {
  render() {
    return (
      <div className="cupcake">
        <img src={this.props.cupcake.picture} alt="one-cupcake-image" />
        <p className="name">{this.props.cupcake.name}</p>
        <p className="category">{this.props.cupcake.categorie}</p>
        <p className="price">{this.props.cupcake.price}</p>
        <p className="seller">{this.props.cupcake.username}</p>
      </div>
    );
  }
}

export default connect()(SingleCupcake);
