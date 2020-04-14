import React from "react";
import CartData from "./CartData";
import CartEmpty from "./CartEmpty";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

const Cart = (props) => {
  if (props.cart.length > 0) {
    const { cart } = props;
    return (
      <div>
        <h3 className="m-5 text-center">Comics in cart</h3>
        <CartData />
        <CartList cart={cart} props={props} />
        <CartTotal props={props} />
      </div>
    );
  } else {
    return <CartEmpty />;
  }
};

export default Cart;
