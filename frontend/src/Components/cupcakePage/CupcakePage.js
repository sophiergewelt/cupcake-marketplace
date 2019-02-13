import React, { Component } from "react";
import { connect } from "react-redux";

class CupcakePage extends Component {
  constructor() {
    super();
    this.state = {
      cupcake: undefined
    };
  }

  componentDidMount = () => {
    console.log("before fetch ID", this.props.itemid);

    let query = JSON.stringify({ query: this.props.itemid });
    fetch("http://localhost:4000/getcupcake", {
      method: "POST",
      body: query
    })
      .then(res => {
        return res.text();
      })
      .then(data => {
        let body = JSON.parse(data);
        this.setState({ cupcake: body.cupcake });
        console.log(body);
      })
      .catch(err => console.log(err));
  };

  displayCupcake = () => {
    return (
      <div>
        <div>{this.state.cupcake.name}</div>
        <div>{this.state.cupcake.price}</div>
        <div>{this.state.cupcake.category}</div>
        <div>{this.state.cupcake.stock}</div>
        <div>{this.state.cupcake.description}</div>
        <img src={`http://localhost:4000/${this.state.cupcake.picture}`} />
      </div>
    );
  };
  render() {
    console.log("Cupstate", this.state);
    return (
      <div>
        {this.state.cupcake === undefined
          ? "This cupcakeis a lie"
          : this.displayCupcake()}{" "}
      </div>
    );
  }
}

export default CupcakePage;
