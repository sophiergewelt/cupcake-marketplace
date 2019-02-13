import React, { Component } from "react";
import "../../App.js";
import StripeCheckout from "react-stripe-checkout";

class BuyCupcake extends Component {
  onToken = token => {
    fetch("http://178.128.230.45:4000/save-stripe-token", {
      method: "POST",
      body: JSON.stringify({ token: token, price: this.props.sentPrice * 100 })
    }).then(response => {
      response.json().then(data => {
        alert(`Payment successful. Your cupcake is on the way!`);
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
