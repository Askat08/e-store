import React from "react";

const style = {
  msg: {
    position: "fixed",
    top: "10px",
    right: "",
    fontSize: "2rem",
    background: "lightgreen",
    width: "100%",
    zIndex: "100",
    textAlign: "center",
    opacity: "0.9",
    transition: "opacity 0.1s ease-out",
  },
};

export default function Alert() {
  return (
    <div style={style.msg}>
      <h3 className="lead">Hooray! Comic book in your cart.</h3>
    </div>
  );
}
