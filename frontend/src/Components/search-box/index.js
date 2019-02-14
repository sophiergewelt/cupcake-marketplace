// import { StyledForm } from "./search-styled-component.js";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";

// class Search extends Component {
//   render() {
//     let searchResult = this.state.receivedSearch.map(cupcake => {
//       return (
//         <div className="cupcake">
//           <img
//             src={`http://localhost:4000/${cupcake.picture}`}
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
//         <div>
//           <StyledForm onSubmit={this.handleSubmit} action="">
//             <input
//               id="search"
//               type="text"
//               placeholder="Search our cupcakes by user, cupcake description or category!"
//             />
//             <input id="submit" type="submit" value="Search" />
//           </StyledForm>
//         </div>
//         <div>
//           This was returned from your search:
//           {searchResult}
//         </div>
//       </div>
//     );
//   }
// }

// export default Search;
