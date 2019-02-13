import React, { Component } from "react";
import { connect } from "react-redux";

class CupcakePage extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  componentDidMount() {
    let query = JSON.stringify({ query: this.props.itemid });
    fetch("http://localhost:4000/getcupcake", {
      method: "POST",
      body: query
    })
      .then(res => {
        return res.text();
      })
      .then(data => {
        return JSON.parse(data);
      })
      .then(parsed => {
        this.setState({ name: parsed.cupcake[0].name });
      })
      .catch(err => console.log(err));
  }
  render() {
    console.log(this.state);
    return <div>hello</div>;
  }
}

export default CupcakePage;
