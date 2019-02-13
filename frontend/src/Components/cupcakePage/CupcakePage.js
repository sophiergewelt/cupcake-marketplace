import React, { Component } from "react";
import styled from "styled-components";
import BuyCupcake from "../../Components/buy-cupcake/BuyCupcake.js";

const StyledContainer = styled.div`
  display: flex;
  border-style: dotted;
  border-radius: 5%;
  padding: 5px;
`;

const StyledImageContainer = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 5%;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const StyledName = styled.div`
  font-size: 20px;
`;

const StyledDescription = styled.div`
  font-size: 20px;
`;

const StyledPrice = styled.div`
  font-size: 20px;
`;

const StyledStock = styled.div`
  font-size: 20px;
`;

class CupcakePage extends Component {
  constructor() {
    super();
    this.state = {
      cupcake: undefined
    };
  }

  componentDidMount = () => {
    console.log("before fetch ID", this.props.itemid);

    let query = JSON.stringify({ query: this.props.itemid });
    fetch("http://localhost:4000/getcupcake", {
      method: "POST",
      body: query
    })
      .then(res => {
        return res.text();
      })
      .then(data => {
        let body = JSON.parse(data);
        this.setState({ cupcake: body.cupcake });
        console.log(body);
      })
      .catch(err => console.log(err));
  };

  displayCupcake = () => {
    return (
      <div>
        <StyledContainer>
          <StyledImageContainer
            class="img-file"
            src={`http://localhost:4000/${this.state.cupcake.picture}`}
          />
          <StyledInfoContainer>
            <StyledName class="">{this.state.cupcake.name}</StyledName>
            <StyledDescription>
              {this.state.cupcake.description}
            </StyledDescription>
            <StyledPrice>{this.state.cupcake.price}</StyledPrice>
            <StyledStock>{this.state.cupcake.stock}</StyledStock>
          </StyledInfoContainer>
        </StyledContainer>
        <BuyCupcake class="buy-btn" sentPrice={this.state.cupcake.price} />
      </div>
    );
  };
  render() {
    console.log("Cupstate", this.state);
    return (
      <div>
        {this.state.cupcake === undefined
          ? "This cupcakeis a lie"
          : this.displayCupcake()}{" "}
      </div>
    );
  }
}

export default CupcakePage;
