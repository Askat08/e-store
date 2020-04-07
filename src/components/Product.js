import React from "react";

const style = {
  img: {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    cursor: "pointer",
  },
  "img:hover": {
    border: "4px red solid",
    background: "#efefef",
  },
};

export default function Product(props) {
  const { title, path, ext, handleAddtoCart, id, price } = props;

  return (
    <div className="figure col-sm-4 col-md-3 p-0 my-3 mx-3">
      <img
        src={path + "." + ext}
        className="figure-img img-fluid rounded"
        alt={title}
        style={style.img}
      />

      <button
        className="cart-btn text-info shadow-none"
        onClick={() => handleAddtoCart(id)}
      >
        <i className="fas fa-cart-plus" />
      </button>
      <p className="figure-caption text-info d-inline ml-5 ">{`$${price}`}</p>
      <p className="figure-footer text-dark">{title}</p>
    </div>
  );
}
