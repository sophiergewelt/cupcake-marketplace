import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./Containers/homepage/";
import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import SingleCupcake from "../single-cupcake";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      receivedSearch: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSearch(event) {
    console.log("handleSearch", event.target.value);
    this.setState({ query: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("we are at handle submit SEARCH");

    let body = JSON.stringify({query = this.state.query});
    console.log("search body", body);

    fetch("http://localhost:4000/searchcupcakes", {
      method: "POST",
      body: body
    })
      .then(function(res) {
        return res.text();
      })
      .then(function(body) {
        let resBody = JSON.parse(body);
        this.setState({ receivedSearch: resBody });
      });

    console.log("I'm sending to the server for search: ", body);
  }

  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
            Search our database by user, cupcake description or category!
            <input
                type="text"
                onChange={this.handleSearch}
                value={this.state.username}
                placeholder="search our cupcakes!!"
            />
            <input type="submit" value="search for cupcakes!" />
            </form>
            <div>
                This was returned from your search:
                {this.state.receivedSearch}
            </div>    

        </div>
    );
  }
}

export default search;
