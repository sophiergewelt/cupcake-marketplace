import React, { Component } from "react";
import styled from "styled-components";
import "./cupcakePage.css";
import BuyCupcake from "../../Components/buy-cupcake/BuyCupcake.js";

const StyledContainer = styled.div`
  display: flex;
  border-style: solid;
  border-width: 1px;
  background: white;
  border-radius: 2%;
  padding: 5px;
  width: 1000px;
`;

const StyledImageContainer = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 2%;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
`;

const StyledName = styled.div`
  font-size: 20px;
`;

const StyledButton = styled.div`
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
    let query = JSON.stringify({ query: this.props.itemid });
    fetch("http://178.128.230.45:4000/getcupcake", {
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
            src={`http://178.128.230.45:4000//${this.state.cupcake.picture}`}
          />
          <StyledInfoContainer>
            <StyledName>{this.state.cupcake.name}</StyledName>
            <StyledDescription>
              {this.state.cupcake.description}
            </StyledDescription>
            <StyledPrice>{this.state.cupcake.price}</StyledPrice>
            <StyledStock>{this.state.cupcake.stock}</StyledStock>
            <StyledButton>
              <BuyCupcake sentPrice={this.state.cupcake.price} />
            </StyledButton>
          </StyledInfoContainer>
        </StyledContainer>
      </div>
    );
  };
  render() {
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
