import React, { Component } from "react";
import { connect } from "react-redux";
import "../../App.js";
import StripeCheckout from "react-stripe-checkout";

class BuyCupcake extends Component {
  onToken = token => {
    fetch("/save-stripe-token", {
      method: "POST",
      body: JSON.stringify({ token: token, price: this.props.sentPrice })
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  };

  // ...

  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_GfHQE4nTTSnNs1cct2CvRMgi"
      />
    );
  }
}

export default BuyCupcake;
