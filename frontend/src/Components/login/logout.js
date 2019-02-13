import { connect } from "react-redux";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./login.css";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.handlelogout = this.handlelogout.bind(this);
  }
  //   handlelogout(event) {

  //   }

  render() {
    // {
    //   success = false;
    // }
    return (
      <div>
        <Link className="loginOnSignupPage" to={"/"}>
          LOG OUT
        </Link>
      </div>
    );
  }
}

export default connect(function(state) {
  return { loginStatus: state.loggedout };
})(Logout);
