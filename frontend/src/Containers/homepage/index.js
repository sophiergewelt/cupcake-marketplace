import React, { Component } from "react";
import "./homepage.css";
import Login from "../../Components/login";
import { Link } from "react-router-dom";
import firebase from "../../loginGoogle.js";

class Homepage extends Component {
  googleSignIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }
  render() {
    let welcomeText =
      "Place holder text - Welcome text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

    return (
      <div>
        <p>{welcomeText}</p>
        {/*placeholder for Login class (Yann) */}
        <p>Login</p>
        <Login />
        <div>
          <Link to={"/signup/"}>Don't have an account yet? Sign up!</Link>
        </div>
        Sign in with Google:
        <button onClick={this.googleSignIn}>Google!</button>
        <div>
          <img src="" alt="big-cupcake" />
        </div>
        {/*placeholder for search field (Yann) */}
        Search
        <form>
          <input type="text" />
        </form>
      </div>
    );
  }
}

export default Homepage;
