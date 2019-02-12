import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AllCupcakes from "../../Containers/all-cupcakes";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      location: "MONTREAL"
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordChangeConfirm = this.handlePasswordChangeConfirm.bind(
      this
    );
    this.handleCityChange = this.handleCityChange.bind(this);
  }

  handleNameChange(event) {
    console.log("new username", event.target.value);
    this.setState({ username: event.target.value });
  }
  handlePasswordChange(event) {
    console.log("new password", event.target.value);
    this.setState({ password: event.target.value });
  }
  handlePasswordChangeConfirm(event) {
    console.log("new Confirm password", event.target.value);
    this.setState({ confirmPassword: event.target.value });
  }

  handleCityChange(event) {
    console.log("new city", event.target.value);
    this.setState({ city: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("we reached handleSubmit");
    this.handleCityChange(e);
    console.log("we passed city change");

    if (this.state.password === this.state.confirmPassword) {
      let body = JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        location: this.state.location
      });
      console.log("body", body);

      fetch("http://localhost:4000/signup", {
        method: "POST",
        body: body
      })
        .then(function(res) {
          return res.text();
        })
        .then(function(body) {
          let badBod = JSON.parse(body);
          // console.log("body", body);
          if (badBod.success === true) {
          } else {
            alert("User already exists");
            return;
          }
        });

      this.setState({ username: "", password: "", confirmPassword: "" });
      console.log("I'm sending to the server: ", body);
      this.props.dispatch({ type: "login-success" });
    } else {
      console.log("wrong password gunzo!!!");
      alert("Passwords do not match");
    }
  }

  render() {
    if (this.props.loginStatus) {
      return <AllCupcakes />;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Sign up!</h2>
          <div>
            Welcome to The Cupcake Market! Please fill in your information and
            you will soon be on your way to browse our fantastic collection of
            cupcakes!
          </div>
          <h3>Enter user name</h3>
          <input
            type="text"
            onChange={this.handleNameChange}
            value={this.state.username}
          />
          <h3>Enter password</h3>
          <input
            type="password"
            onChange={this.handlePasswordChange}
            value={this.state.password}
          />
          <h3>Confirm password</h3>
          <input
            type="password"
            onChange={this.handlePasswordChangeConfirm}
            value={this.state.confirmPassword}
          />

          <div>
            Please select city:
            <select name="categories">
              <option value="MONTREAL">MONTREAL</option>
              <option value="LAVAL">LAVAL</option>
              <option value="SOUTH SHORE">SOUTH SHORE</option>
              <option value="TIMBUKTU">TIMBUKTU</option>
            </select>
            <input type="submit" value="send" />
          </div>
        </form>
        <Link to={"/"}>Take me back to login</Link>
      </div>
    );
  }
}

export default connect(function(state) {
  return { loginStatus: state.loggedIn };
})(Signup);
