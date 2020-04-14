import React from "react";

const style = {
  img: {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    cursor: "pointer",
  },
};

export default function Product(props) {
  const { title, path, ext, handleAddtoCart, id, price } = props;

  return (
    <div className="figure col-sm-4 col-md-2 p-0 my-3 mx-3">
      <img
        src={path + "." + ext}
        className="figure-img img-fluid rounded"
        alt={title}
        style={style.img}
      />

      <button
        className="btn-cart text-info shadow-none w-100"
        onClick={() => handleAddtoCart(id)}
      >
        <span className="mr-3">add to </span>
        <i className="fas fa-cart-plus" />
      </button>
      <p className="figure-caption mt-2 text-dark">
        <strong>{`${price}` <= 0 ? "free" : `$ ${price}`}</strong>
      </p>
      <p className="figure-footer text-dark">{title}</p>
    </div>
  );
}
