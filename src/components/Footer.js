import React from "react";
import "./Footer.css";

export default function Footer({ props, scrollToTop }) {
  return (
    <div className="sticky-bottom">
      <div className="card-footer bg-dark text-light">
        <div className="row">
          <h3 className="col-6 my-3">Marvel Comic Books</h3>
          <h4 className="card-text my-3 col-6 text-right">
            Get your superhero today.
          </h4>
        </div>
        <div className="row">
          <h5
            className="col-6 my-3 "
            dangerouslySetInnerHTML={{ __html: props }}
          ></h5>
          <h5 className="col-6 my-3 text-right">
            Coded with <i className="fas fa-laptop-code text-info"></i> by{" "}
            <a href="https://askatb.com" className="text-danger">
              me
            </a>
            .
          </h5>
        </div>
        <button
          className="btn btn-outline-info shadow-none"
          onClick={() => scrollToTop()}
        >
          top
        </button>
      </div>
    </div>
  );
}
