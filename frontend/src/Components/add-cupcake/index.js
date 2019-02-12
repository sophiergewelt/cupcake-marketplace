import React, { Component } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 3%;
  margin-left: 25%;
`;
const StyledFormItem = styled.div`
  margin-bottom: 3%;
  display: flex;
  flex-direction: column;
  width: 400px;
  label {
    /* color: blue; */
    margin-bottom: 2%;
  }
  .submit-button {
    /* color: red; */
    width: 100px;
    margin-top: -8px;
  }
  .number_input {
    width: 50px;
  }
  .select_display {
    width: 50%;
  }
`;
const StyledTextarea = styled.textarea`
  height: 128px;
  width: 400px;
`;
const StyledItemUser = styled.div`
  margin-left: 25%;
`;

class AddCupcake extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      category: "",
      picture: "",
      price: "",
      stock: "",
      userId: "5c6212743387a254e11b0d81"
    };
    //Bind func here if not arrow
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value }); // "[event.target.name]" refers to this name's place from the input name to the state's mentionned key.
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    /********************************************************************************
    //fetch the backend!
    ********************************************************************************/
    fetch("http://localhost:4000/addcupcake", {
      method: "POST",
      body: JSON.stringify(this.state)
    })
      .then(function(res) {
        return res.text();
      })
      .then(function(body) {
        let badBod = JSON.stringify(body);
        if (badBod.success === true) {
          alert("Item successfully added");
        } else {
          alert("Something went wrong");
          return;
        }
      });
  };

  render() {
    return (
      <div>
        <StyledItemUser>Welcome /*User*</StyledItemUser>
        <div id="addacupcake_form_div">
          <StyledForm>
            <StyledFormItem>
              <label for="name">Cupcake's wonderful name:</label>
              <input
                type="text"
                name="name"
                placeholder="product's name"
                value={this.state.name}
                onChange={event => this.handleChange(event)}
              />
            </StyledFormItem>
            <StyledFormItem>
              <label for="picture">
                Select a file that best represent your magnificient cupcake:
              </label>
              <input
                type="file"
                name="picture"
                onChange={event => this.handleChange(event)}
              />
            </StyledFormItem>
            <StyledFormItem>
              <label for="price">Cupcake's special friend's price:</label>
              <input
                type="number"
                name="price"
                min="0"
                max="999"
                placeholder="0"
                class="number_input"
                onChange={event => this.handleChange(event)}
              />
            </StyledFormItem>
            <StyledFormItem>
              <label for="category">Cupcake's unique category:</label>
              <select
                class="select_display"
                name="category"
                onChange={event => this.handleChange(event)}
              >
                <option value="" disabled selected>
                  Please select a flavour!
                </option>
                <option value="Vanilla">Vanilla</option>
                <option value="Chocolate">Chocolate</option>
                <option value="Carrot">Carrot</option>
                <option value="Coconut">Coconut</option>
                <option value="Cookies and cream">Cookies and cream</option>
                <option value="Vegan">Vegan</option>
                <option value="Other frivolity">Other frivolity</option>
              </select>
            </StyledFormItem>
            <StyledFormItem>
              <label for="price">Cupcake's intimate description:</label>
              <StyledTextarea
                name="description"
                placeholder="Fantastic description"
                onChange={event => this.handleChange(event)}
              />
            </StyledFormItem>
            <StyledFormItem>
              <label for="price">
                Number of fabulous cupackes you are ready to part with:
              </label>
              <input
                class="number_input"
                type="number"
                name="stock"
                min="0"
                max="999"
                placeholder="0"
                onChange={event => this.handleChange(event)}
              />
            </StyledFormItem>
            <StyledFormItem>
              <input
                class="submit-button"
                type="submit"
                onClick={this.handleSubmit}
              />
            </StyledFormItem>
          </StyledForm>
        </div>
      </div>
    );
  }
}

// let Addcupcake = connect()(UnconnectedAddcupcake);

export default AddCupcake;
