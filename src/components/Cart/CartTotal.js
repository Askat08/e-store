import React from "react";
import { Link } from "react-router-dom";

export default function CartTotal({ props }) {
  const { cartTax, cartTotal, cartSubTotal, handleClearCart } = props;

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right text-capitilize">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => handleClearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-info">subtotal : </span>
              <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-info">tax* : </span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-info">total : </span>
              <strong>$ {cartTotal}</strong>
            </h5>
            <br />
            <br />
            <br />
            <br />
            <p>*New York State Sales Tax 8.875%</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
