import React, { Component } from "react";
import styled from "styled-components";
import BuyCupcake from "../../Components/buy-cupcake/BuyCupcake.js";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5px;
  height: 350px;
  width: 1000px;
  color: #2e2e2e;
`;

const StyledImageContainer = styled.img`
  width: 350px;
  background: #fff;
  border-radius: 2% 0% 0% 2%;
  border-style: solid;
  border-color: #fcedef;
  border-width: 1px;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
  background: #fcedef;
  border-radius: 0% 2% 2% 0%;
  width: 700px;
`;

const StyledH1 = styled.h1`
  font-size: 25px;
  color: #df3b57;
`;

const StyledH2 = styled.h2`
  font-size: 20px;
  border-style: none none solid none;
  border-width: 0.5px;
  border-color: #df3b57;
  width: 100%;
`;

const StyledDescription = styled.div`
  font-size: 20px;
  margin-bottom: 25px;
`;

const StyledPriceAndStock = styled.div`
  font-size: 20px;
  margin-bottom: 15px;
`;

class CupcakePage extends Component {
  constructor() {
    super();
    this.state = {
      cupcake: undefined
    };
  }

  componentDidMount = () => {
    let query = JSON.stringify({ query: this.props.itemid });
    fetch("http://68.183.197.80:4000/getcupcake", {
      method: "POST",
      body: query
    })
      .then(res => {
        return res.text();
      })
      .then(data => {
        let body = JSON.parse(data);
        this.setState({ cupcake: body.cupcake });
      })
      .catch(err => console.log(err));
  };

  displayCupcake = () => {
    return (
      <div>
        <StyledContainer>
          <StyledImageContainer
            src={`http://68.183.197.80:4000//${this.state.cupcake.picture}`}
          />
          <StyledInfoContainer>
            <StyledH1>{this.state.cupcake.name}</StyledH1>
            <StyledH2>Description</StyledH2>
            <StyledDescription>
              {this.state.cupcake.description}
            </StyledDescription>
            <StyledPriceAndStock>
              <div>Price: {this.state.cupcake.price} $</div>
              <div>Quantity: {this.state.cupcake.stock}</div>
            </StyledPriceAndStock>
            <div>
              <BuyCupcake sentPrice={this.state.cupcake.price} />
            </div>
          </StyledInfoContainer>
        </StyledContainer>
      </div>
    );
  };
  render() {
    return (
      <div>
        {this.state.cupcake === undefined
          ? "The cupcake is a lie"
          : this.displayCupcake()}{" "}
      </div>
    );
  }
}

export default CupcakePage;
