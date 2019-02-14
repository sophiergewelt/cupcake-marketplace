import { connect } from "react-redux";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import Login from "./index";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Link to={"/"} onClick={Login}>
          LOG OUT
        </Link>
      </div>
    );
  }
}

export default connect(function(state) {
  return { loginStatus: state.loggedout };
})(Logout);
