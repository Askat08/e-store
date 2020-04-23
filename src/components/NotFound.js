import React from "react";
import NotFoundPic from "../404.png";

export default function NotFound() {
  return (
    <div className="container-fluid p-0">
      <img
        className="img-fluid not-found"
        src={NotFoundPic}
        alt="ERROR 404: NOT FOUND"
      />
    </div>
  );
}
