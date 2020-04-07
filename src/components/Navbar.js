import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark   navbar-dark">
      <Link to="/">
        <img src={logo} alt="store-bag-logo" className="navbar-brand" />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link text-info">
            <h4>comics</h4>
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-auto">
        <button className="btn btn-info">
          <i className="fas fa-cart-arrow-down" />
          {"             "}My Cart
        </button>
      </Link>
    </nav>
  );
}
