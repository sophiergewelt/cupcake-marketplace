import React, { Component } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  border-radius: 2%;
  margin-top: 100px;
  margin-bottom: 50px;
  border-style: solid;
  border-color: #df3b57;
  border-width: 1px;
  background: #fcedef;
  padding: 30px;
`;

const StyledH1 = styled.h1`
  font-size: 25px;
  color: #df3b57;
`;

const StyledInput = styled.input`
  border-radius: 5%;
  border-style: none;
  padding: 5px;
  font-size: 15px;
`;

const StyledButton = styled.input`
  margin-top: 15px;
  width: 150px;
  height: 51px !important;
  font-size: 15px;
  background-color: #ffcacb;
  border-radius: 5px;
  border: 1px solid #000000;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 3%;
`;

const StyledLabel = styled.label`
  font-size: 15px;
`;

const StyledFormItem = styled.div`
  margin-bottom: 3%;
  display: flex;
  flex-direction: column;
  width: 400px;
  label {
    margin-bottom: 2%;
  }
  .submit-button {
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
  border-radius: 2%;
  border-style: none;
  height: 90px;
  width: 400px;
  font-size: 15px;
`;

class AddCupcake extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      category: "",
      picture: "",
      pictureType: "",
      price: "",
      stock: "",
      userId: "5c6212743387a254e11b0d81"
    };
    //Bind func here if not arrow
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value }); // "[event.target.name]" refers to this name's place from the input name to the state's mentionned key.
  };

  handlePriceChange = event => {
    let firstPrice = parseFloat(event.target.value).toFixed(2);
    // let fixedPrice = firstPrice.parseFloat().toFixed(2);
    this.setState({ price: firstPrice });
  };

  handleFileInputChange = event => {
    const file = event.target.files[0];
    console.log(file);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      this.setState({
        picture: fileReader.result,
        pictureType: file.type
      });
    };
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    /********************************************************************************
    //fetch the backend!
    ********************************************************************************/
    fetch("http://178.128.230.45:4000/addcupcake", {
      method: "POST",
      body: JSON.stringify(this.state)
    })
      .then(function(res) {
        return res.text();
      })
      .then(function(body) {
        let badBod = JSON.parse(body);
        if (badBod.success === true) {
          alert("Item successfully added");
        } else {
          alert("Something went wrong");
          return;
        }
      });
  };

  render() {
    console.log(this.state);
    return (
<<<<<<< Updated upstream
      <div>
        <div id="addacupcake_form_div">
          <StyledForm>
            <StyledFormItem>
              <StyledLabel for="name">
                Cupcake's wonderful name (max 100 KB):
              </StyledLabel>
              <input
                type="text"
                name="name"
                placeholder="product's name"
                value={this.state.name}
                onChange={event => this.handleChange(event)}
              />
            </StyledFormItem>
            <StyledFormItem>
              <StyledLabel for="picture">
                Select a file that best represent your magnificient cupcake:
              </StyledLabel>
              <input
                type="file"
                name="picture"
                onChange={this.handleFileInputChange}
              />
            </StyledFormItem>
            <StyledFormItem>
              <StyledLabel for="price">
                Cupcake's special friend's price:
              </StyledLabel>
              <input
                type="number"
                name="price"
                min="0"
                max="999"
                placeholder="0"
                onChange={event => this.handlePriceChange(event)}
              />
            </StyledFormItem>
            <StyledFormItem>
              <StyledLabel for="category">
                Cupcake's unique category:
              </StyledLabel>
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
              <StyledLabel for="price">
                Cupcake's intimate description:
              </StyledLabel>
              <StyledTextarea
                name="description"
                placeholder="Fantastic description"
                onChange={event => this.handleChange(event)}
              />
            </StyledFormItem>
            <StyledFormItem>
              <StyledLabel for="price">
                Number of fabulous cupackes you are ready to part with:
              </StyledLabel>
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
=======
      <StyledContainer>
        <StyledH1>Sell your special cupcake. Fill this form!</StyledH1>
        <StyledForm>
          <StyledFormItem>
            <StyledLabel for="name">
              Wonderful name <span style={{ fontSize: 10 }}>(max 100 KB)</span>:
            </StyledLabel>
            <StyledInput
              type="text"
              name="name"
              placeholder="Product's name"
              value={this.state.name}
              onChange={event => this.handleChange(event)}
              style={{ width: 284 }}
            />
          </StyledFormItem>
          <StyledFormItem>
            <StyledLabel for="picture">
              Picture of your magnificient cupcake:
            </StyledLabel>
            <input
              type="file"
              name="picture"
              onChange={this.handleFileInputChange}
            />
          </StyledFormItem>
          <StyledFormItem>
            <StyledLabel for="price">Price:</StyledLabel>
            <StyledInput
              type="number"
              name="price"
              min="0"
              max="999"
              placeholder="0"
              onChange={event => this.handlePriceChange(event)}
              style={{ width: 50 }}
            />
          </StyledFormItem>
          <StyledFormItem>
            <StyledLabel for="category">Your creation's category:</StyledLabel>
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
            <StyledLabel for="price">
              A description of your delicious treat:
            </StyledLabel>
            <StyledTextarea
              name="description"
              placeholder="Fantastic description"
              onChange={event => this.handleChange(event)}
            />
          </StyledFormItem>
          <StyledFormItem>
            <StyledLabel for="price">
              Number of fabulous cupackes available:
            </StyledLabel>
            <StyledInput
              class="number_input"
              type="number"
              name="stock"
              min="0"
              max="999"
              placeholder="0"
              onChange={event => this.handleChange(event)}
              style={{ width: 50 }}
            />
          </StyledFormItem>
          <StyledFormItem>
            <StyledButton
              class="submit-button"
              type="submit"
              value="Add your cupcake"
              onClick={this.handleSubmit}
            />
          </StyledFormItem>
        </StyledForm>
      </StyledContainer>
>>>>>>> Stashed changes
    );
  }
}

// let Addcupcake = connect()(UnconnectedAddcupcake);

export default AddCupcake;
