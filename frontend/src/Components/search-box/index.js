import React, { Component } from "react";
import { StyledForm } from "./index-styled-component.js";
import { Link } from "react-router-dom";
import SingleCupcake from "../../Components/single-cupcake/";
import { connect } from "react-redux";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
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

    fetch("http://68.183.197.80:4000/searchcupcakes", {
      method: "POST",
      body: body
    })
      .then(function(res) {
        return res.json();
      })
      .then(body => {
        this.props.dispatch({
          type: "setSearchResult",
          cupcakes: body.cupcakes
        });
        console.log("body", body);
      });
  }

  render() {
    return (
      <div>
        <div>
          <StyledForm onSubmit={this.handleSubmit} id="searchbox">
            <input
              id="search"
              type="text"
              onChange={this.handleSearch}
              placeholder="Search our cupcakes by user, cupcake description or category!"
            />
            <input id="submit" type="submit" value="Search" />
          </StyledForm>
        </div>
      </div>
    );
  }
}

export default connect(function(state) {
  return { searchCupcakes: state.searchResult };
})(SearchBox);

// render() {
//   let searchResult = this.state.receivedSearch.map(cupcake => {
//     return (
//       <div className="cupcake">
//         This was returned from your search:
//         <img
//           src={`http://68.183.197.80:4000/${cupcake.picture}`}
//           alt="one-cupcake"
//         />
//         <p className="name">
//           {cupcake.name}
//           <Link to={"/getcupcake/" + cupcake._id}>{cupcake.name}</Link>
//         </p>
//         <p className="category">{cupcake.category}</p>
//         <p className="price">{cupcake.price}$/each</p>
//         <p className="seller">{cupcake.userID}</p>
//       </div>
//     );
//     });

//     return (
//       <div>
//         <StyledForm onSubmit={this.handleSubmit} id="searchbox">
//           <input
//             id="search"
//             type="text"
//             onChange={this.handleSearch}
//             placeholder="Search our cupcakes by user, cupcake description or category!"
//           />
//           <input id="submit" type="submit" value="Search" />
//         </StyledForm>

//         <div>{searchResult}</div>
//       </div>
//     );
//   }
// }
