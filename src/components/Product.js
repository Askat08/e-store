import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Product(props) {
  const { title, path, ext, handleAddtoCart, id, price, description } = props;
  // Converting image path string to array
  const https = Array.from(path);
  // adding 's' to http on image url
  https.splice(4, 0, "s");

  // State for modal
  const [show, setShow] = useState(false);

  // Hide and show modal methods
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="figure col-sm-4 col-md-3 col-lg-2 p-0 my-3 mx-3">
      {" "}
      <img
        onClick={handleShow}
        src={https.join("") + "." + ext}
        className="figure-img img-fluid rounded"
        alt={title}
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
      {/* Modal */}
      <Modal show={show} onHide={handleClose} className="text-dark">
        <div className="bg-info">
          {" "}
          <Row>
            <Col>
              <Modal.Body>
                <img
                  onClick={handleShow}
                  src={https.join("") + "." + ext}
                  className=""
                  alt={title}
                  style={{ width: "100%" }}
                />
              </Modal.Body>
            </Col>
          </Row>
          <Row>
            {" "}
            <Col>
              <Modal.Header className="bg-warning" closeButton>
                <Modal.Title>{title}</Modal.Title>
              </Modal.Header>
              <p className="lead m-5 px-3">
                <small className="bg-warning">{description}</small>
              </p>
            </Col>
          </Row>
        </div>
      </Modal>
    </div>
  );
}
