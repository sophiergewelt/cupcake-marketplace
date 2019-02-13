import React, { Component } from "react";
import { connect } from "react-redux";
import "../../App.js";
import "./single-cupcake.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
`;

const StyledContainer = styled.div`
  display: flex;
  border-style: dotted;
  border-radius: 5%;
  padding: 5px;
  width: 400;
  margin-bottom: 2%;
`;

const StyledImageContainer = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 5%;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 325px;
  font-size: 20px;
  text-align: left;
`;

const StyledName = styled.div`
  font-size: 35px;
  text-decoration: none;
`;

const StyledCategory = styled.div`
  text-decoration: none;
  font-size: 20px;
`;

const StyledPrice = styled.div`
  font-size: 20px;
`;

const StyledStock = styled.div`
  font-size: 20px;
`;

class SingleCupcake extends Component {
  render() {
    return (
      <MainContainer>
        <StyledContainer>
          <StyledImageContainer
            src={`http://178.128.230.45:4000/${this.props.cupcake.picture}`}
            alt="one-cupcake"
          />
          <StyledInfoContainer>
            <StyledName className="name">
              <Link to={"/getcupcake/" + this.props.cupcake._id}>
                {this.props.cupcake.name}
              </Link>
            </StyledName>
            <StyledCategory>
              {"Category: "}
              {this.props.cupcake.category}
            </StyledCategory>
            <StyledPrice>
              {"Price: "}
              {this.props.cupcake.price}$/each
            </StyledPrice>
          </StyledInfoContainer>
        </StyledContainer>
      </MainContainer>
    );
  }
}

export default connect()(SingleCupcake);
