import styled from "styled-components";

const StyledForm = styled.form`
  margin-top: 1.5%;
  #searchbox {
    background-color: #eaf8fc;
    background-image: linear-gradient(#fff, #d4e8ec);
    border-radius: 35px;
    border-width: 1px;
    border-style: solid;
    border-color: #c4d9df #a4c3ca #83afb7;
    width: 500px;
    height: 35px;
    padding: 10px;
    overflow: hidden; /* Clear floats */
    float: right;
    z-index: 2;
  }
  #search,
  #submit {
    float: left;
  }
  #search {
    padding: 5px 9px;
    height: 23px;
    width: 380px;
    border: 1px solid #a4c3ca;
    font: normal 13px "trebuchet MS", arial, helvetica;
    background: #f1f1f1;
    border-radius: 50px 3px 3px 50px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25) inset,
      0 1px 0 rgba(255, 255, 255, 1);
  }
  #submit {
    background-color: #fcbcb7;
    background-image: linear-gradient(#fa8f86, #fcbcb7);
    border-radius: 3px 50px 50px 3px;
    border-width: 1px;
    border-style: solid;
    border-color: #7eba7c #578e57 #447d43;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3),
      0 1px 0 rgba(255, 255, 255, 0.3) inset;
    height: 35px;
    padding: 0;
    width: 90px;
    cursor: pointer;
    font: bold 14px Arial, Helvetica;
    color: #23441e;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  }
  #submit:hover {
    background-color: #f86255;
    background-image: linear-gradient(#fcbcb7, #f86255);
  }
  #submit:active {
    background: #f86255;
    outline: none;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5) inset;
  }
  #search::-webkit-input-placeholder {
    color: #9c9c9c;
    font-style: italic;
  }
  #search:-moz-placeholder {
    color: #9c9c9c;
    font-style: italic;
  }
  #search:-ms-placeholder {
    color: #9c9c9c;
    font-style: italic;
  }
`;

export { StyledForm };
