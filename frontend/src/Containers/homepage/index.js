import React, { Component } from "react";
import "./homepage.css";
import Login from "../../Components/login";
import { Link } from "react-router-dom";

import firebase from "../../loginGoogle.js";
// import firebase from "firebase";
// var provider = new firebase.auth.GoogleAuthProvider();
// firebase.auth().signInWithPopup(provider);

// import firebase from "firebase";
// var provider = new firebase.auth.GoogleAuthProvider();
// firebase.auth().signInWithPopup(provider);

class Homepage extends Component {
  render() {
    return (
      <div>
        <Login />
        <div>
          <img src="" alt="big-cupcake" />
        </div>
        {/* placeholder for search field (Yann)
        Search
        <form>
          <input type="text" />
        </form> */}
      </div>
    );
  }
}

export default Homepage;
