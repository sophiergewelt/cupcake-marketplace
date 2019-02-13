import React, { Component } from "react";
import { connect } from "react-redux";
import "../../App.js";
import "./single-cupcake.css";
import { Link } from "react-router-dom";

class SingleCupcake extends Component {
  render() {
    return (
      <div className="cupcake">
        <img
          src={`http://localhost:4000/${this.props.cupcake.picture}`}
          alt="one-cupcake"
        />
        <p className="name">
          <Link to={"/getcupcake/" + this.props.cupcake._id}>
            {this.props.cupcake.name}
          </Link>
        </p>
        <p className="category">{this.props.cupcake.category}</p>
        <p className="price">{this.props.cupcake.price}$/each</p>
        <p className="seller">{this.props.cupcake.userID}</p>
      </div>
    );
  }
}

export default connect()(SingleCupcake);
