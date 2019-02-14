import React, { Component } from "react";
import SearchBox from "../search-box";
import SearchResult from "../search-result";
import { connect } from "react-redux";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCupcakesArray: []
    };
  }

  handleResultChange = searchCupcakesArray => {
    this.setState({
      searchCupcakesArray
    });
    console.log("searchCupcakesArray", searchCupcakesArray);
  };

  render() {
    return (
      <div>
        <SearchBox searchCupcakes={this.handleResultChange} />
        <SearchResult searchCupcakesArray={this.state.searchCupcakesArray} />
      </div>
    );
  }
}

export default SearchContainer;
