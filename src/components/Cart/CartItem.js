import React from "react";

export default function CartItem({ props, item }) {
  const { id, title } = item;
  const { path, extension } = item.thumbnail;
  const price = item.prices[0].price;
  const quantity = item.count;
  const https = Array.from(path);
  https.splice(4, 0, "s");
  return (
    <div className="row my-2 text-capitilize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={https.join("") + "." + extension}
          alt={title}
          className="img-fluid"
          style={{ width: "5rem", height: "5rem" }}
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Comic : </span> {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Price : </span>
        <strong>{`$${price.toFixed(2)}`}</strong>
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div className="">
            <span
              className="btn btn-cart mx-1"
              onClick={() => props.decrementCount(id)}
            >
              -
            </span>
            <span className="btn btn-cart mx-1">{quantity}</span>
            <span
              className="btn btn-cart mx-1"
              onClick={() => props.incrementCount(id)}
            >
              +
            </span>
          </div>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            props.removeItemFromCart(id, props.cart);
          }}
        >
          <i className="fas fa-trash text-danger" />
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <strong>Item total : $ {(price * quantity).toFixed(2)}</strong>
      </div>
    </div>
  );
}
