import React, { Component } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 3%;
  margin-top: 100px;
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

  // handleBlur(e) {
  //   var num = parseFloat(this.state.price);
  //   var cleanNum = num.toFixed(2);
  //   this.setState({ value: cleanNum });
  // }

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
    return (
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
                onChange={event => this.handleChange(event)}
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
    );
  }
}

// let Addcupcake = connect()(UnconnectedAddcupcake);

export default AddCupcake;
