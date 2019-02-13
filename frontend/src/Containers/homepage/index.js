import React, { Component } from "react";
import "./homepage.css";
import Login from "../../Components/login";
<<<<<<< HEAD
import { Link } from "react-router-dom";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import firebase from "../../loginGoogle.js";
=======
// import firebase from "firebase";
// var provider = new firebase.auth.GoogleAuthProvider();
// firebase.auth().signInWithPopup(provider);
>>>>>>> Stashed changes
=======
// import firebase from "firebase";
// var provider = new firebase.auth.GoogleAuthProvider();
// firebase.auth().signInWithPopup(provider);
>>>>>>> Stashed changes
=======
>>>>>>> efbca67bd7e292191d7063da6911ddc776df7c89

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
