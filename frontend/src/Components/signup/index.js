import React, { Component } from "react";
import Login from "../../Components/login";

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
    this.loginfunc = this.loginfunc.bind(this);
  }

  // the event is what you get when a key is entered in the field in the form
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

  //   handlePasswordChange(event) {
  // does not work: cant use getElementById in redux
  //     if (
  //       document.getElementById("password").value ==
  //       document.getElementById("confirm_password").value
  //     ) {
  //       document.getElementById("message").style.color = "green";
  //       document.getElementById("message").innerHTML = "matching";
  //       this.setState({ password: event.target.value });
  //     } else {
  //       document.getElementById("message").style.color = "red";
  //       document.getElementById("message").innerHTML = "not matching";
  //     }
  //   }

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

      this.setState({ username: "", password: "" });
      console.log("I'm sending to the server: ", body);
    } else {
      console.log("wrong password gunzo!!!");
      alert("Passwords do not match");
    }
  }

  loginfunc() {
    return Login;
  }

  render() {
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
          {/* <div>
            <label>
              password :
              <input
                name="password"
                id="password"
                type="password"
                onkeyup="handlePasswordChange();"
              />
            </label>
            <br />
            <label>
              confirm password:
              <input
                type="password"
                name="confirm_password"
                id="confirm_password"
                onkeyup="handlePasswordChange();"
              />
              <span id="message" />
            </label>
          </div> */}

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
        <button onClick={this.loginfunc()}>Take me back to login</button>
      </div>
    );
  }
}

export default Signup;
