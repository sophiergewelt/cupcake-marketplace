// import React, { Component } from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// const StyledForm = styled.form`
//   margin-top: 4%;
//   #searchbox {
//     background-color: #eaf8fc;
//     background-image: linear-gradient(#fff, #d4e8ec);
//     border-radius: 35px;
//     border-width: 1px;
//     border-style: solid;
//     border-color: #c4d9df #a4c3ca #83afb7;
//     width: 500px;
//     height: 35px;
//     padding: 10px;
//     margin: 100px auto 50px;
//     overflow: hidden; /* Clear floats */
//   }

//   #search,
//   #submit {
//     float: left;
//   }

//   #search {
//     padding: 5px 9px;
//     height: 23px;
//     width: 380px;
//     border: 1px solid #a4c3ca;
//     font: normal 13px "trebuchet MS", arial, helvetica;
//     background: #f1f1f1;
//     border-radius: 50px 3px 3px 50px;
//     box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25) inset,
//       0 1px 0 rgba(255, 255, 255, 1);
//   }

//   #submit {
//     background-color: #fcbcb7;
//     background-image: linear-gradient(#fa8f86, #fcbcb7);
//     border-radius: 3px 50px 50px 3px;
//     border-width: 1px;
//     border-style: solid;
//     border-color: #7eba7c #578e57 #447d43;
//     box-shadow: 0 0 1px rgba(0, 0, 0, 0.3),
//       0 1px 0 rgba(255, 255, 255, 0.3) inset;
//     height: 35px;
//     padding: 0;
//     width: 90px;
//     cursor: pointer;
//     font: bold 14px Arial, Helvetica;
//     color: #23441e;
//     text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
//   }

//   #submit:hover {
//     background-color: #f86255;
//     background-image: linear-gradient(#fcbcb7, #f86255);
//   }

//   #submit:active {
//     background: #f86255;
//     outline: none;
//     box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5) inset;
//   }

//   #search::-webkit-input-placeholder {
//     color: #9c9c9c;
//     font-style: italic;
//   }

//   #search:-moz-placeholder {
//     color: #9c9c9c;
//     font-style: italic;
//   }

//   #search:-ms-placeholder {
//     color: #9c9c9c;
//     font-style: italic;
//   }
// `;

// class Search extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       query: "",
//       receivedSearch: []
//     };
//     this.handleSearch = this.handleSearch.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSearch(event) {
//     console.log("handleSearch", event.target.value);
//     this.setState({ query: event.target.value });
//   }

//   handleSubmit(e) {
//     e.preventDefault();

//     console.log("we are at handle submit SEARCH");

//     let body = JSON.stringify({ query: this.state.query });
//     console.log("search body", body);
//     console.log("this.state.query", this.state.query);

//     fetch("http://178.128.230.45:4000/searchcupcakes", {
//       method: "POST",
//       body: body
//     })
//       .then(function(res) {
//         return res.text();
//       })
//       .then(body => {
//         let resBody = JSON.parse(body);
//         // debugger;
//         this.setState({ receivedSearch: resBody.cupcakes });
//         console.log("resBody", resBody);
//       });

//     console.log("I'm sending to the server for search: ", body);
//   }

//   render() {
//     let searchResult = this.state.receivedSearch.map(cupcake => {
//       return (
//         <div className="cupcake">
//           This was returned from your search:
//           <img
//             src={`http://178.128.230.45:4000/${cupcake.picture}`}
//             alt="one-cupcake"
//           />
//           <p className="name">
//             {cupcake.name}
//             <Link to={"/getcupcake/" + cupcake._id}>{cupcake.name}</Link>
//           </p>
//           <p className="category">{cupcake.category}</p>
//           <p className="price">{cupcake.price}$/each</p>
//           <p className="seller">{cupcake.userID}</p>
//         </div>
//       );
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

// export default Search;
