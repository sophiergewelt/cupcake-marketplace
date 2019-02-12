import React, { Component } from "react";
import "./homepage.css";
import Login from "../../Components/login";
<<<<<<< Updated upstream
import { Link } from "react-router-dom";
import firebase from "../../loginGoogle.js";
=======
// import firebase from "firebase";
// var provider = new firebase.auth.GoogleAuthProvider();
// firebase.auth().signInWithPopup(provider);
>>>>>>> Stashed changes

class Homepage extends Component {
  googleSignIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }
  render() {
    return (
      <div>
        <Login />
        <div>
<<<<<<< Updated upstream
          <Link to={"/signup/"}>Don't have an account yet? Sign up!</Link>
        </div>
        Sign in with Google:
        <button onClick={this.googleSignIn}>Google!</button>
        <div>
=======
>>>>>>> Stashed changes
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
