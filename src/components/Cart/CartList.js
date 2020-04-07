import React from "react";
import CartItem from "./CartItem";

export default function CartList({ props }) {
  const { cart } = props;
  const filteredCart = cart.filter((item, index) => {
    return cart.indexOf(item) === index;
  });
  return (
    <div className="container-fluid">
      {filteredCart.map((item) => {
        return <CartItem key={item.id} item={item} props={props} />;
      })}
    </div>
  );
}
