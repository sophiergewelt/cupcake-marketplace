// Initialize Firebase
import firebase from "firebase";
var config = {
  apiKey: "AIzaSyBiNwFvfXZeu2gBDofkJ8ug7ui_lyMA7yk",
  authDomain: "cupcake-market.firebaseapp.com",
  databaseURL: "https://cupcake-market.firebaseio.com",
  projectId: "cupcake-market",
  storageBucket: "cupcake-market.appspot.com",
  messagingSenderId: "1059704804755"
};
firebase.initializeApp(config);

export default firebase;
