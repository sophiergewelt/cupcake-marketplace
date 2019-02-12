import React, { Component } from "react";
import "./homepage.css";

class Homepage extends Component {
  render() {
    let welcomeText =
      "Place holder text - Welcome text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

    return (
      <div>
        <p>{welcomeText}</p>
        {/*placeholder for Login class (Yann) */}
        Login
        <input type="text" />
        Password
        <input type="text" />
        <div>Don't have an account yet? Sign up!</div>
        {/*placeholder for Signup class (Yann) */}
        <input type="text" />
        <div>
          <img src="" alt="big-cupcake" />
        </div>
        {/*placeholder for search field (Yann) */}
        Search
        <input type="text" />
        {/*placeholder for random cupcake display (Sophie) */}
      </div>
    );
  }
}

export default Homepage;
