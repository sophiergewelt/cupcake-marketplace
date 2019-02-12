import { connect } from "react-redux";
import React, { Component } from "react";
import AllCupcakes from "../../Containers/all-cupcakes";
import { Link } from "react-router-dom";
import firebase from "../../loginGoogle.js";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  googleSignIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  handleNameChange(event) {
    this.setState({ username: event.target.value });
    //console.log("username", username);
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
    //console.log("password", password);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("we reached handleSubmit");
    let requestBody = JSON.stringify({
      //notice the difference: this is REQUESTbody, not RESPONSEbody
      username: this.state.username,
      password: this.state.password
    });
    fetch("http://localhost:4000/login", {
      method: "POST",
      body: requestBody
    })
      .then(function(x) {
        return x.text(); // should be called x.getResponseBody()
      })
      .then(responseBody => {
        // when we receive the body, run this function
        console.log("responseBody from login", responseBody);
        let body = JSON.parse(responseBody);
        console.log("parsed responseBody from login", body);
        if (!body.success) {
          alert("login failed");
          return;
        }
        this.props.dispatch({
          // dispatch sends the info to the reducer (witch will return an object)
          type: "login-success" // this identify the type of object so the reducer can examin it and use it. a TYPE is just a string we attach to an object to help define it.
          // sessionId: body.sid //NOT NEEDED WITH THE COOKIES. we refer to it as sid in the back end so it needs to be sid here when we receive it
        });
      });
  }

  render() {
    if (this.props.loginStatus) {
      return <AllCupcakes />;
    }
    return (
      <div>
        <p>Login</p>
        <form onSubmit={this.handleSubmit}>
          <h3>Enter user name</h3>
          <input
            type="text"
            onChange={this.handleNameChange}
            value={this.state.username}
            placeholder="username"
          />
          <h3>Enter password</h3>
          <input
            type="password"
            onChange={this.handlePasswordChange}
            value={this.state.password}
            placeholder="********"
          />
          <input type="submit" />
        </form>
        Sign in with Google:
        <button onClick={this.googleSignIn}>Google!</button>
        <div>
          <Link to={"/signup/"}>Don't have an account yet? Sign up!</Link>
        </div>
      </div>
    );
  }
}

export default connect(function(state) {
  return { loginStatus: state.loggedIn };
})(Login);
