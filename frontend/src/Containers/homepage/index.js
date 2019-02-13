import React, { Component } from "react";
import "./homepage.css";
import Login from "../../Components/login";

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
      </div>
    );
  }
}

export default Homepage;
