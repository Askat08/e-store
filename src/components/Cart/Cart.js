import React, { Component } from "react";
import CartData from "./CartData";
import CartEmpty from "./CartEmpty";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

export default class Cart extends Component {
  render() {
    console.log(this.props);
    if (this.props.cart.length > 0) {
      const cart = this.props.cart.filter((v, i, a) => a.indexOf(v) === i);
      return (
        <div>
          <h3 className="m-5 text-center">Comics in cart</h3>
          <CartData />
          <CartList cart={cart} props={this.props} />
          <CartTotal props={this.props} />
        </div>
      );
    } else {
      return <CartEmpty />;
    }
  }
}
