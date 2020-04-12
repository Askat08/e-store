import React from "react";
import CartItem from "./CartItem";

export default function CartList({ cart, props }) {
  const filteredCart = cart.filter((v, i, a) => a.indexOf(v) === i);
  return (
    <div className="container-fluid">
      {filteredCart.map((item) => {
        return <CartItem key={item.id} item={item} props={props} />;
      })}
    </div>
  );
}
