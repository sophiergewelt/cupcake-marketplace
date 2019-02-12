import React, { Component } from "react";
import "./homepage.css";
import Login from "../../Components/login";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Login />
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
