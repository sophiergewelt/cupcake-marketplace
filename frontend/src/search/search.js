import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      receivedSearch: []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearch(event) {
    console.log("handleSearch", event.target.value);
    this.setState({ query: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("we are at handle submit SEARCH");

    let body = JSON.stringify({ query: this.state.query });
    console.log("search body", body);

    fetch("http://localhost:4000/searchcupcakes", {
      method: "POST",
      body: body
    })
      .then(function(res) {
        return res.text();
      })
      .then(body => {
        let resBody = JSON.parse(body);
        // debugger;
        this.setState({ receivedSearch: resBody.cupcakes });
        console.log("resBody", resBody);
      });

    console.log("I'm sending to the server for search: ", body);
  }

  render() {
    let searchResult = this.state.receivedSearch.map(cupcake => {
      return (
        <div className="cupcake">
          <img
            src={`http://localhost:4000/${cupcake.picture}`}
            alt="one-cupcake"
          />
          <p className="name">{cupcake.name}</p>
          <p className="category">{cupcake.category}</p>
          <p className="price">{cupcake.price}$/each</p>
          <p className="seller">{cupcake.userID}</p>
        </div>
      );
    });

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            Search our database by user, cupcake description or category!
          </div>
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
          {searchResult}
        </div>
      </div>
    );
  }
}

export default Search;
